/* eslint-disable no-bitwise */
import type { BBox2d, BBox3d } from "@jsse/geotypes";

export const RAD2DEG = 180 / Math.PI;
export const DEG2RAD = Math.PI / 180;

export type TileArr = [x: number, y: number, z: number];
export type TileObj = { x: number; y: number; z: number };
export type TileLike = TileArr | TileObj;

export function isTileArr(val: unknown): val is TileArr {
  return (
    Array.isArray(val) &&
    val.length === 3 &&
    val.every((v) => typeof v === "number" && Number.isInteger(v)) &&
    val[2] >= 0 &&
    val[2] <= 30
  );
}

/**
 * Return quadkey for tile x, y, z
 *
 * @name xyz2quadkey
 * @param {[number, number, number]} xyz tuple/array [x, y, z]
 * @returns {string} quadkey
 */
export function xyz2quadkey(xyz: TileArr): string {
  const [x, y, z] = xyz;
  let qk = "";
  for (let ixz = z; ixz > 0; ixz--) {
    let b = 0;
    const mask = 1 << (ixz - 1);
    if ((x & mask) !== 0) b++;
    if ((y & mask) !== 0) b += 2;
    qk += b.toString();
  }
  return qk;
}

/**
 * Return tile x, y, z for quadkey
 *
 * @name quadkey2xyz
 * @param {string} quadkey - quadkey
 * @returns {TileArr} x, y, z
 */
export function quadkey2xyz(quadkey: string | number): TileArr {
  if (typeof quadkey === "number") {
    if (!Number.isInteger(quadkey) || quadkey < 0) {
      throw new Error(`Invalid quadkey: ${quadkey}`);
    }
    quadkey = quadkey.toString();
  }
  let x = 0;
  let y = 0;
  const z = quadkey.length;
  for (let i = z; i > 0; i--) {
    const mask = 1 << (i - 1);
    const char = quadkey[z - i];
    if (char !== "0" && char !== "1" && char !== "2" && char !== "3") {
      throw new Error(`Invalid quadkey: ${quadkey}`);
    }
    const q = +char;
    if (q === 1) x |= mask;
    if (q === 2) y |= mask;
    if (q === 3) {
      x |= mask;
      y |= mask;
    }
  }
  return [x, y, z];
}

export function xz2lon(x: number, z: number): number {
  return (x / 2 ** z) * 360 - 180;
}

export function parent(xyz: TileArr): TileArr {
  return [xyz[0] >> 1, xyz[1] >> 1, xyz[2] - 1];
}

export function children(xyz: TileArr): [TileArr, TileArr, TileArr, TileArr] {
  const [x, y, z] = xyz;
  return [
    [x * 2, y * 2, z + 1],
    [x * 2 + 1, y * 2, z + 1],
    [x * 2 + 1, y * 2 + 1, z + 1],
    [x * 2, y * 2 + 1, z + 1],
  ];
}

export function siblings(xyz: TileArr): [TileArr, TileArr, TileArr, TileArr] {
  return children(parent(xyz));
}

export function xy2lat(y: number, z: number): number {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** z;
  return RAD2DEG * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

export function xyz2bbox(xyz: TileArr): BBox2d {
  const [x, y, z] = xyz;
  const n = 2 ** z;
  const lon1 = (x / n) * 360 - 180;
  const lat1 = xy2lat(y, z);
  const lon2 = ((x + 1) / n) * 360 - 180;
  const lat2 = xy2lat(y + 1, z);
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
  const xyz = lnglatz2xyzf(lng, lat, z);
  return [Math.floor(xyz[0]), Math.floor(xyz[1]), z];
}

export function xyz2geojson(tile: TileArr): {
  type: "Polygon";
  coordinates: [
    [
      [number, number],
      [number, number],
      [number, number],
      [number, number],
      [number, number],
    ],
  ];
} {
  const bbox = xyz2bbox(tile);
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

export function bbox2dify(bbox: BBox2d | BBox3d): BBox2d {
  if (bbox.length === 6) {
    return [bbox[0], bbox[1], bbox[3], bbox[4]];
  }
  return bbox;
}

export function bbox2zoom(
  bbox:
    | [number, number, number, number]
    | [number, number, number, number, number, number],
) {
  const bbox2d = bbox2dify(bbox);
  const MAX_ZOOM = 28;

  for (let z = 0; z < MAX_ZOOM; z++) {
    const mask = 1 << (32 - (z + 1));
    if (
      (bbox2d[0] & mask) !== (bbox2d[2] & mask) ||
      (bbox2d[1] & mask) !== (bbox2d[3] & mask)
    ) {
      return z;
    }
  }
  return MAX_ZOOM;
}

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

export { xyz2quadkey as xyz2qk, quadkey2xyz as qk2xyz };
