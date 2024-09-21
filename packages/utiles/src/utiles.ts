import type { BBox2d, BBox3d, Feature, Polygon } from "@jsse/geotypes";
import type { TileArr, TileLike, TileObj } from "./types.js";
import { bbox2dify, bbox2zoom } from "./bbox.js";
import { DEG2RAD, MAX_ZOOM, RAD2DEG } from "./const.js";
import { isTileArr, isTileObj } from "./guard.js";

export { bbox2dify, bbox2zoom } from "./bbox.js";

export function xyz(x: number, y: number, z: number): TileArr {
  if (z < 0 || z > MAX_ZOOM) {
    throw new Error(`Invalid zoom: ${z}`);
  }
  if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(z)) {
    throw new TypeError(`Invalid tile: ${x}, ${y}, ${z}`);
  }
  const xyMax = 2 ** z;
  if (x < 0 || x >= xyMax || y < 0 || y >= xyMax) {
    throw new Error(`Invalid tile: ${x}, ${y}, ${z}`);
  }
  return [x, y, z];
}

export function asTileArr(val: TileLike): TileArr {
  if (isTileArr(val)) {
    return val;
  }
  if (isTileObj(val)) {
    return [val.x, val.y, val.z];
  }
  throw new Error(`Invalid tile: ${val}`);
}

export function xyzValid(xyz: TileArr): boolean {
  const xyMax = 2 ** xyz[2];
  return (
    isTileArr(xyz) &&
    xyz[0] >= 0 &&
    xyz[0] < xyMax &&
    xyz[1] >= 0 &&
    xyz[1] < xyMax
  );
}

export function tilearr2tileobj(xyz: TileArr): TileObj {
  return { x: xyz[0], y: xyz[1], z: xyz[2] };
}

export function tileobj2tilearr(xyz: TileObj): TileArr {
  return [xyz.x, xyz.y, xyz.z];
}

export function xz2lon(x: number, z: number): number {
  return (x / 2 ** z) * 360 - 180;
}

/**
 * Return xy web mercator coordinates for lon, lat
 * @param lon
 * @param lat
 */
export function xy(lon: number, lat: number): [number, number] {
  const sinlat = Math.sin(lat * DEG2RAD);
  return [
    lon / 360 + 0.5,
    0.5 - Math.log((1 + sinlat) / (1 - sinlat)) / (4 * Math.PI),
  ];
}

export function parent(xyz: TileArr): TileArr | undefined {
  if (xyz[2] === 0) {
    return;
  }
  return [xyz[0] >> 1, xyz[1] >> 1, xyz[2] - 1];
}

/**
 * Return grandparent tile (the parent of the parent) for tile x, y, z
 *
 * Returns undefined if not possible (z = 0)
 * @param xyz
 */
export function grandparent(xyz: TileArr): TileArr | undefined {
  const p = parent(xyz);
  if (!p) {
    return;
  }
  return parent(p);
}

export function children(xyz: TileArr): [TileArr, TileArr, TileArr, TileArr] {
  const [x, y, z] = xyz;
  const cx = x * 2;
  const cy = y * 2;
  const cz = z + 1;
  return [
    // upper-left
    [cx, cy, cz],
    // upper-right
    [cx + 1, cy, cz],
    // lower-left
    [cx, cy + 1, cz],
    // lower-right
    [cx + 1, cy + 1, cz],
  ];
}

export function grandchildren(xyz: TileArr): TileArr[] | undefined {
  const c = children(xyz);
  return [
    ...children(c[0]),
    ...children(c[1]),
    ...children(c[2]),
    ...children(c[3]),
  ];
}

export function siblings(
  xyz: TileArr,
): [TileArr, TileArr, TileArr, TileArr] | undefined {
  const p = parent(xyz);
  if (!p) {
    return;
  }
  return children(p);
}

export function yz2lat(y: number, z: number): number {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** z;
  return RAD2DEG * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

export function xyz2bbox(xyz: TileArr): BBox2d {
  const [x, y, z] = xyz;
  const n = 2 ** z;
  const lon1 = (x / n) * 360 - 180;
  const lat1 = yz2lat(y, z);
  const lon2 = ((x + 1) / n) * 360 - 180;
  const lat2 = yz2lat(y + 1, z);
  return [lon1, lat2, lon2, lat1];
}

export function lnglatz2xyzf(lng: number, lat: number, z: number): TileArr {
  const sin = Math.sin(lat * DEG2RAD);
  const z2 = 2 ** z;
  let x = z2 * (lng / 360 + 0.5);
  const y = z2 * (0.5 - (0.25 * Math.log((1 + sin) / (1 - sin))) / Math.PI);

  // Wrap Tile X
  x = x % z2;
  if (x < 0) x = x + z2;
  return [x, y, z];
}

export function lnglat2xyz(lng: number, lat: number, z: number): TileArr {
  const [_xf, _yf] = lnglatz2xyzf(lng, lat, z);
  const tilex = Math.max(0, Math.min(2 ** z - 1, Math.floor(_xf)));
  const tiley = Math.max(0, Math.min(2 ** z - 1, Math.floor(_yf)));
  return [tilex, tiley, z];
}

export function tile(lng: number, lat: number, z: number): TileArr {
  const sinlat = Math.sin(lat * DEG2RAD);
  const x = lng / 360 + 0.5;
  const y = 0.5 - Math.log((1 + sinlat) / (1 - sinlat)) / (4 * Math.PI);
  const z2 = 2 ** z;
  return [
    x < 0 ? 0 : x >= 1 ? z2 - 1 : Math.floor(x * z2),
    y < 0 ? 0 : y >= 1 ? z2 - 1 : Math.floor(y * z2),
    z,
  ];
}

export function xyz2geojson(xyz: TileArr): Polygon<[number, number]> {
  const bbox = xyz2bbox(xyz);
  return {
    type: "Polygon",
    coordinates: [
      [
        [bbox[0], bbox[3]],
        [bbox[0], bbox[1]],
        [bbox[2], bbox[1]],
        [bbox[2], bbox[3]],
        [bbox[0], bbox[3]],
      ],
    ],
  };
}

export type TilePolygonFeature = Feature<
  Polygon<[number, number]>,
  {
    xyz: TileArr;
  },
  { bbox: BBox2d; id: string }
>;

export function xyz2feature(xyz: TileArr): TilePolygonFeature {
  const bbox = xyz2bbox(xyz);
  return {
    type: "Feature",
    id: `x${xyz[0]}y${xyz[1]}z${xyz[2]}`,
    bbox,
    properties: {
      xyz,
    },
    geometry: xyz2geojson(xyz),
  };
}

/**
 * Return bbox for tile x, y, z
 * @param bboxCoords
 */
export function bbox2xyz(bboxCoords: BBox2d | BBox3d): TileArr {
  const bbox2d = bbox2dify(bboxCoords);
  const min = lnglat2xyz(bbox2d[0], bbox2d[1], 32);
  const max = lnglat2xyz(bbox2d[2], bbox2d[3], 32);
  const bbox = [min[0], min[1], max[0], max[1]] as [
    number,
    number,
    number,
    number,
  ];
  const z = bbox2zoom(bbox);
  if (z === 0) return [0, 0, 0];
  const x = bbox[0] >>> (32 - z);
  const y = bbox[1] >>> (32 - z);
  return [x, y, z];
}

export function hasTile(tile: TileArr, tiles: TileArr[]): boolean {
  return tiles.some((xyz) =>
    xyz.every((val: number, i: number) => val === tile[i]),
  );
}

export function hasSiblings(tile: TileArr, tiles: TileArr[]): boolean {
  const sibs = siblings(tile);
  if (sibs === undefined) {
    return false;
  }
  return sibs.every((sib) =>
    tiles.some((tile_) => tile_.every((val, i) => val === sib[i])),
  );
}

export { xyz2bbox as tile2bbox };
