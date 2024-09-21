import type { BBox, BBox2d, BBox3d } from "@jsse/geotypes";

export function bbox2d(bbox: BBox2d): BBox2d;
export function bbox2d(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
): BBox2d;
/**
 * Returns a 2d bounding box array.
 * @param bboxOrXmin - 2d bounding box tuple ([xmin, ymin, xmax, ymax]) or xmin coordinate.
 * @param ymin - ymin coordinate (optional).
 * @param xmax - xmax coordinate (optional).
 * @param ymax - ymax coordinate (optional).
 * @returns {BBox2d} - 2d bounding box array.
 */
export function bbox2d(
  bboxOrXmin: BBox2d | number,
  ymin?: number,
  xmax?: number,
  ymax?: number,
): BBox2d {
  if (Array.isArray(bboxOrXmin)) {
    return bboxOrXmin as BBox2d;
  }
  return [bboxOrXmin, ymin as number, xmax as number, ymax as number];
}

export function bbox3d(bbox: BBox3d): BBox3d;
export function bbox3d(
  xmin: number,
  ymin: number,
  zmin: number,
  xmax: number,
  ymax: number,
  zmax: number,
): BBox3d;
/**
 * Returns a 3d bounding box array.
 * @param bboxOrXmin - 3d bounding box tuple ([xmin, ymin, zmin, xmax, ymax, zmax]) or xmin coordinate.
 * @param ymin - ymin coordinate (optional).
 * @param zmin - zmin coordinate (optional).
 * @param xmax - xmax coordinate (optional).
 * @param ymax - ymax coordinate (optional).
 * @param zmax - zmax coordinate (optional).
 * @returns {BBox3d} - 3d bounding box array.
 */
export function bbox3d(
  bboxOrXmin: BBox3d | number,
  ymin?: number,
  zmin?: number,
  xmax?: number,
  ymax?: number,
  zmax?: number,
): BBox3d {
  if (Array.isArray(bboxOrXmin)) {
    return bboxOrXmin as BBox3d;
  }
  return [
    bboxOrXmin,
    ymin as number,
    zmin as number,
    xmax as number,
    ymax as number,
    zmax as number,
  ];
}

export function bbox(bbox: BBox2d): BBox2d;
export function bbox(bbox: BBox3d): BBox3d;
export function bbox(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
): BBox2d;
export function bbox(
  xmin: number,
  ymin: number,
  zmin: number,
  xmax: number,
  ymax: number,
  zmax: number,
): BBox3d;
/**
 * Returns a bounding box array.
 * @param bboxOrA - 2d or 3d bounding box tuple or xmin coordinate.
 * @param b - ymin coordinate (optional).
 * @param c - zmin coordinate (optional).
 * @param d - xmax coordinate (optional).
 * @param e - ymax coordinate (optional).
 * @param f - zmax coordinate (optional).
 * @returns {BBox2d | BBox3d} - 2d or 3d bounding box array.
 */
export function bbox(
  bboxOrA: BBox2d | BBox3d | number,
  b?: number,
  c?: number,
  d?: number,
  e?: number,
  f?: number,
): BBox2d | BBox3d {
  if (Array.isArray(bboxOrA)) {
    return bboxOrA.length === 4
      ? bbox2d(bboxOrA as BBox2d)
      : bbox3d(bboxOrA as BBox3d);
  }
  return e === undefined || f === undefined
    ? bbox2d(bboxOrA, b as number, c as number, d as number)
    : bbox3d(bboxOrA, b as number, c as number, d as number, e as number, f);
}

export function isBBox2d(bbox: BBox2d | BBox3d | number[]): bbox is BBox2d {
  return bbox.length === 4 && bbox.every((n) => typeof n === "number");
}

export function isBBox3d(bbox: BBox2d | BBox3d | number[]): bbox is BBox3d {
  return (
    bbox.length === 6 &&
    bbox.every((n) => typeof n === "number") &&
    bbox[3] < bbox[5]
  );
}

export function isBBox(
  bbox: BBox2d | BBox3d | number[],
): bbox is BBox2d | BBox3d {
  return (
    (bbox.length === 4 || bbox.length === 6) &&
    bbox.every((n) => typeof n === "number")
  );
}

export function bbox3d2bbox2d(bbox: BBox3d): BBox2d {
  return bbox.slice(0, 4) as BBox2d;
}

export function bboxIsAntimeridian(bbox: BBox2d | BBox3d): boolean {
  return bbox.length === 4 ? bbox[0] > bbox[2] : bbox[0] > bbox[3];
}

export function bboxesAntimeridian<T extends BBox>(bbox: T): [T] | [T, T] {
  if (!bboxIsAntimeridian(bbox)) {
    return [bbox];
  }
  const [xmin, ymin, xmax, ymax, ...rest] = bbox;
  const bboxLeft = [xmin, ymin, 180, ymax, ...rest] as T;
  const bboxRight = [-180, ymin, xmax, ymax, ...rest] as T;
  return [bboxLeft, bboxRight];
}

/**
 * Convert array to bbox (stupid util)
 *
 * @param arr {number[]} array of numbers
 * @returns {BBox2d | BBox3d} bbox
 * @throws {Error} Invalid array length
 * @example
 * arr2bbox([0, 0, 1, 1]) // [0, 0, 1, 1]
 * arr2bbox([0, 0, 0, 1, 1, 1]) // [0, 0, 0, 1, 1, 1]
 * arr2bbox([0, 0, 0, 1, 1]) // Error: Invalid array length
 * arr2bbox([0, 0, 0, 1, 1, 1, 1]) // Error: Invalid array length
 * arr2bbox([0, 0, 0, 1, 1, 1, 1, 1]) // Error: Invalid array length
 */
export function arr2bbox(arr: number[]): BBox2d | BBox3d {
  if (arr.length < 4 || arr.length > 6) throw new Error("Invalid array length");
  if (!arr.every((n) => typeof n === "number")) {
    throw new Error("Invalid array type");
  }
  return arr.length === 6
    ? (arr as BBox3d)
    : arr.length === 4
      ? (arr as BBox2d)
      : (arr.slice(0, 4) as BBox2d);
}

export function bboxIsWgs84(bbox: BBox2d | BBox3d): boolean {
  return bbox[0] >= -180 && bbox[2] <= 180 && bbox[1] >= -90 && bbox[3] <= 90;
}

export function bboxIsWebMercator(bbox: BBox2d | BBox3d): boolean {
  return bbox.length === 4
    ? bbox[0] >= -180 &&
        bbox[2] <= 180 &&
        bbox[1] >= -85.051_128_779_806_59 &&
        bbox[3] <= 85.051_128_779_806_6
    : bbox[0] >= -180 &&
        bbox[3] <= 180 &&
        bbox[1] >= -85.051_128_779_806_59 &&
        bbox[4] <= 85.051_128_779_806_6;
}
