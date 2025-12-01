import type {
  Coord2d,
  Coord3d,
  Feature,
  FeatureCollection,
  Geometry,
  PolygonGeometry,
} from "@jsse/geotypes";
import type { TileArr } from "./types.js";
import { xyz2quadkey } from "./quadkey.js";
import {
  parent,
  lnglat2xyz as pointToTile,
  lnglatz2xyzf as pointToTileFraction,
  xyz2geojson,
} from "./utiles.js";

type TileHash = Set<number>;

type LimitsSnake = {
  min_zoom: number;
  max_zoom: number;
};

type Limits = {
  minzoom: number;
  maxzoom: number;
};

function _limits(limits: LimitsSnake | Limits): Limits {
  return {
    minzoom: "min_zoom" in limits ? limits.min_zoom : limits.minzoom,
    maxzoom: "max_zoom" in limits ? limits.max_zoom : limits.maxzoom,
  };
}

function toID(x: number, y: number, z: number): number {
  const dim = 2 * (1 << z);
  return (dim * y + x) * 32 + z;
}

function tileToFeature(t: [number, number, number]) {
  return {
    type: "Feature",
    geometry: xyz2geojson(t),
    properties: {},
  };
}

function fromID(id: number): [number, number, number] {
  const z = id % 32;
  const dim = 2 * (1 << z);
  const xy = (id - z) / 32;
  const x = xy % dim;
  const y = ((xy - x) / dim) % dim;
  return [x, y, z];
}

function appendHashTiles(hash: TileHash, tiles: TileArr[]) {
  for (const id of hash) {
    tiles.push(fromID(id));
  }
}

function mergeTiles(
  tileHash: TileHash,
  tiles: TileArr[],
  limits: Limits,
): TileArr[] {
  const mergedTiles: TileArr[] = [];

  for (let z = limits.maxzoom; z > limits.minzoom; z--) {
    const parentTileHash: TileHash = new Set();
    const parentTiles: TileArr[] = [];

    for (const t of tiles) {
      // if xy even it is the up
      if (t[0] % 2 === 0 && t[1] % 2 === 0) {
        const id2 = toID(t[0] + 1, t[1], z);
        const id3 = toID(t[0], t[1] + 1, z);
        const id4 = toID(t[0] + 1, t[1] + 1, z);

        if (tileHash.has(id2) && tileHash.has(id3) && tileHash.has(id4)) {
          tileHash.delete(toID(...t));
          tileHash.delete(id2);
          tileHash.delete(id3);
          tileHash.delete(id4);
          const parentTile = parent(t);
          if (parentTile) {
            if (z - 1 === limits.minzoom) {
              mergedTiles.push(parentTile);
            } else {
              parentTileHash.add(toID(...parentTile));
              parentTiles.push(parentTile);
            }
          }
        }
      }
    }
    // Add remaining non-merged tiles
    for (const t of tiles) {
      if (tileHash.has(toID(...t))) {
        mergedTiles.push(t);
      }
    }
    tileHash = parentTileHash;
    tiles = parentTiles;
  }

  return mergedTiles;
}

function lineStringCover(
  tileHash: TileHash,
  coords: (Coord2d | Coord3d)[],
  maxzoom: number,
  ring?: Coord2d[],
) {
  let prevX: number | undefined;
  let prevY: number | undefined;
  let y: number | undefined;

  for (let i = 0; i < coords.length - 1; i++) {
    const startCoord = coords[i];
    const stopCoord = coords[i + 1];
    if (startCoord === undefined || stopCoord === undefined) {
      continue;
    }
    const start = pointToTileFraction(startCoord[0], startCoord[1], maxzoom);

    const stop = pointToTileFraction(stopCoord[0], stopCoord[1], maxzoom);
    const x0 = start[0];
    const y0 = start[1];
    const x1 = stop[0];
    const y1 = stop[1];
    const dx = x1 - x0;
    const dy = y1 - y0;

    if (dy === 0 && dx === 0) continue;

    const sx = Math.sign(dx);
    const sy = Math.sign(dy);
    let x = Math.floor(x0);
    y = Math.floor(y0);

    let tMaxX =
      dx === 0 ? Infinity : Math.abs(((dx > 0 ? 1 : 0) + x - x0) / dx);
    let tMaxY =
      dy === 0 ? Infinity : Math.abs(((dy > 0 ? 1 : 0) + y - y0) / dy);

    const tdx = Math.abs(sx / dx);
    const tdy = Math.abs(sy / dy);

    if (
      prevX === undefined ||
      prevY === undefined ||
      x !== prevX ||
      y !== prevY
    ) {
      tileHash.add(toID(x, y, maxzoom));
      if (ring && y !== prevY) ring.push([x, y]);
      prevX = x;
      prevY = y;
    }
    // max xy for zoom
    const minxy = (1 << maxzoom) - 1;
    while (tMaxX < 1 || tMaxY < 1) {
      if (tMaxX < tMaxY) {
        tMaxX += tdx;
        x += sx;
      } else {
        tMaxY += tdy;
        y += sy;
      }
      // if invalid tile break
      if (x < 0 - 1 || y < 0 - 5 || x > minxy + 1 || y > minxy + 1) {
        break;
      }
      tileHash.add(toID(x, y, maxzoom));
      if (ring && y !== prevY) ring.push([x, y]);
      prevX = x;
      prevY = y;
    }
  }
  if (ring && ring[0] !== undefined && y !== undefined && y === ring[0][1]) {
    ring.pop();
  }
}

function polygonCover(
  tileHash: TileHash,
  tileArray: TileArr[],
  geom: PolygonGeometry["coordinates"],
  zoom: number,
) {
  const intersections = [];
  let y: number | undefined;
  for (const element of geom) {
    const ring: [number, number][] = [];
    lineStringCover(tileHash, element as (Coord2d | Coord3d)[], zoom, ring);
    for (let j = 0, len = ring.length, k = len - 1; j < len; k = j++) {
      const m = (j + 1) % len;
      const ringj = ring[j];
      const ringk = ring[k];
      if (ringj && ringk && ring[m]) {
        if (ringj.length > 0) {
          y = ringj[1];
        }
        if (
          y !== undefined &&
          (y > ringk[1] || y > ring[m][1]) && // not local minimum
          (y < ringk[1] || y < ring[m][1]) && // not local maximum
          y !== ring[m][1]
        ) {
          const newInterseciont = ring[j];
          if (newInterseciont) {
            intersections.push(newInterseciont);
          }
        }
      }
    }
  }

  intersections.sort(
    (a: [number, number], b: [number, number]) => a[1] - b[1] || a[0] - b[0],
  ); // sort by y, then x
  for (let i = 0; i < intersections.length; i += 2) {
    // fill tiles between pairs of intersections
    const intersectionsI = intersections[i];
    if (intersectionsI === undefined) {
      continue;
    }
    y = intersectionsI[1];
    const minX = intersectionsI[0] + 1;

    const intersectionsI1 = intersections[i + 1];
    if (intersectionsI1 === undefined) {
      continue;
    }
    const maxX = intersectionsI1[0];
    for (let x = minX; x < maxX; x++) {
      if (y !== undefined) {
        const id = toID(x, y, zoom);
        if (!tileHash.has(id)) {
          tileArray.push([x, y, zoom]);
        }
      }
    }
  }
}

/**
 * Given a geometry, create cells and return them in their raw form,
 * as an array of cell identifiers.
 * @alias geojson2tiles
 * @param {object} geom GeoJSON geometry
 * @param {object} limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {Array<Array<number>>} An array of tiles given as [x, y, z] arrays
 */
export function geom2tiles(geom: Geometry, limits: Limits): TileArr[] {
  if (geom.type === "GeometryCollection") {
    const tiles = [];
    for (const geometry of geom.geometries) {
      tiles.push(...geom2tiles(geometry, limits));
    }
    return tiles;
  }
  const maxzoom = limits.maxzoom;
  const tileHash: TileHash = new Set();
  const tiles: TileArr[] = [];

  switch (geom.type) {
    case "Point": {
      const coords = geom.coordinates;
      return [pointToTile(coords[0], coords[1], maxzoom)];
    }
    case "MultiPoint": {
      const coords = geom.coordinates;
      for (const coord of coords) {
        const tile = pointToTile(coord[0], coord[1], maxzoom);
        tileHash.add(toID(...tile));
      }
      break;
    }
    case "LineString": {
      const coords = geom.coordinates as (Coord2d | Coord3d)[];
      lineStringCover(tileHash, coords, maxzoom);

      break;
    }
    case "MultiLineString": {
      const coords = geom.coordinates;
      for (const lineCoords of coords) {
        lineStringCover(tileHash, lineCoords as (Coord2d | Coord3d)[], maxzoom);
      }
      break;
    }
    case "Polygon": {
      const coords = geom.coordinates;
      polygonCover(tileHash, tiles, coords, maxzoom);
      break;
    }
    case "MultiPolygon": {
      const coords = geom.coordinates;
      for (const polyCoords of coords) {
        polygonCover(tileHash, tiles, polyCoords, maxzoom);
      }
      break;
    }
    default: {
      throw new Error("Geometry type not implemented");
    }
  }

  if (limits.minzoom !== maxzoom) {
    // sync tile hash and tile array so that both contain the same tiles
    appendHashTiles(tileHash, tiles);
    for (const t of tiles) {
      tileHash.add(toID(t[0], t[1], t[2]));
    }

    return mergeTiles(tileHash, tiles, limits);
  }
  appendHashTiles(tileHash, tiles);
  return tiles;
}

/**
 * Given a geometry, create cells and return them in their raw form,
 * as an array of cell identifiers.
 * @alias geojson2tiles
 * @param {object} geom GeoJSON geometry
 * @param {object} limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {Array<Array<number>>} An array of tiles given as [x, y, z] arrays
 */
export function geojson2tiles(
  geom: Geometry | Feature | FeatureCollection,
  limits: Limits,
): TileArr[] {
  if (geom.type === "FeatureCollection") {
    const tiles = [];
    for (const feature of geom.features) {
      if (feature.geometry) {
        tiles.push(...geom2tiles(feature.geometry, limits));
      }
    }
    return tiles;
  }
  if (geom.type === "Feature") {
    return geom.geometry ? geom2tiles(geom.geometry, limits) : [];
  }
  return geom2tiles(geom, limits);
}

export function tiles(geom: Geometry, limits: Limits | LimitsSnake): TileArr[] {
  return geojson2tiles(geom, _limits(limits));
}

/**
 * Given a geometry, create cells and return them as
 * [quadkey](http://msdn.microsoft.com/en-us/library/bb259689.aspx) indexes.
 * @alias indexes
 * @param {object} geom GeoJSON geometry
 * @param {object} limits an object with minzoom/min_zoom and maxzoom/max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {Array<string>} An array of tiles given as quadkeys.
 */
export function indexes(
  geom: Geometry,
  limits: Limits | LimitsSnake,
): string[] {
  return tiles(geom, limits).map((element) => xyz2quadkey(element));
}

/**
 * Given a geometry, create cells and return them in a format easily readable
 * by any software that reads GeoJSON.
 * @alias geojson
 * @param {object} geom GeoJSON geometry
 * @param {object} limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {object} FeatureCollection of cells formatted as GeoJSON Features
 */
export function geojson(geom: Geometry, limits: Limits | LimitsSnake) {
  return {
    type: "FeatureCollection",
    features: tiles(geom, limits).map((element) => tileToFeature(element)),
  };
}
