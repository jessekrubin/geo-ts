import type { BBox, BBox2d, BBox3d } from "@jsse/geotypes";

export function bbox2d(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
): BBox2d {
  return [xmin, ymin, xmax, ymax];
}

export function bbox3d(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
  zmin: number,
  zmax: number,
): BBox3d {
  return [xmin, ymin, xmax, ymax, zmin, zmax];
}

export function bbox(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
): BBox2d;
export function bbox(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
  zmin: number,
  zmax: number,
): BBox3d;
export function bbox(
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
  zmin?: number,
  zmax?: number,
): BBox2d | BBox3d {
  return zmin === undefined || zmax === undefined
    ? bbox2d(xmin, ymin, xmax, ymax)
    : bbox3d(xmin, ymin, xmax, ymax, zmin, zmax);
}

export function isBBox2d(bbox: BBox2d | BBox3d | number[]): bbox is BBox2d {
  return bbox.length === 4 && bbox.every((n) => typeof n === "number");
}

export function isBBox3d(bbox: BBox2d | BBox3d | number[]): bbox is BBox3d {
  return (
    bbox.length === 6 &&
    bbox.every((n) => typeof n === "number") &&
    bbox[4] < bbox[5]
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
  return bbox[0] > bbox[2];
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
  if (arr.length === 6)
    return bbox3d(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
  return bbox2d(arr[0], arr[1], arr[2], arr[3]);
}

export function bboxIsWgs84(bbox: BBox2d | BBox3d): boolean {
  return bbox[0] >= -180 && bbox[2] <= 180 && bbox[1] >= -90 && bbox[3] <= 90;
}

export function bboxIsWebMercator(bbox: BBox2d | BBox3d): boolean {
  return (
    bbox[0] >= -180 &&
    bbox[2] <= 180 &&
    bbox[1] >= -85.051_128_779_806_59 &&
    bbox[3] <= 85.051_128_779_806_6
  );
}
