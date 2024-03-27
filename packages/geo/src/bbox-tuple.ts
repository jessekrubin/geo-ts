import type { BBox2d, BBox3d } from "@jsse/geotypes";

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
