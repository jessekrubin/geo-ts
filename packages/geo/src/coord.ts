import type { Coord2d, Coord3d } from "@jsse/geotypes";

/**
 * Return coordinate array
 *
 * WHY? so you don't have to explicitly type `[x, y]/[x, y, z] as const`
 *
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 *
 * @returns {Coord2d} 2d coordinate array [x, y]
 */
export function coord(x: number, y: number): Coord2d;
/**
 * Return coordinate array
 *
 * WHY? so you don't have to explicitly type `[x, y]/[x, y, z] as const`
 *
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 * @param z {number} z coordinate
 *
 * @returns {Coord3d} 3d coordinate array [x, y, z]
 */
export function coord(x: number, y: number, z: number): Coord3d;
/**
 * Return coordinate array
 *
 * WHY? so you don't have to explicitly type `[x, y]/[x, y, z] as const`
 *
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 * @param z {number} z coordinate
 *
 * @returns {Coord2d | Coord3d} 2d or 3d coordinate array [x, y] or [x, y, z]
 */
export function coord(x: number, y: number, z?: number): Coord2d | Coord3d {
  return z === undefined ? [x, y] : [x, y, z];
}

/**
 * Return 2d coordinate array
 *
 * WHY? so you don't have to explicitly type `[x, y] as const`
 *
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 * @returns {Coord2d} 2d coordinate array [x, y]
 */
export function coord2d(x: number, y: number): Coord2d {
  return [x, y];
}

/**
 * Return 3d coordinate array
 *
 * WHY? so you don't have to explicitly type `[x, y, z] as const`
 *
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 * @param z {number} z coordinate
 * @returns {Coord3d} 3d coordinate array [x, y, z]
 */
export function coord3d(x: number, y: number, z: number): Coord3d {
  return [x, y, z];
}

/**
 * Convert array to coord (stupid util)
 *
 * @param arr {number[]} array of numbers with length 2 or 3
 * @returns {Coord2d | Coord3d} coord
 * @throws {Error} Invalid array length
 */
export function arr2coord(arr: number[]): Coord2d | Coord3d {
  if (arr.length === 2) {
    return [arr[0], arr[1]];
  }
  if (arr.length === 3) {
    return [arr[0], arr[1], arr[2]];
  }
  throw new Error(`Invalid array length ${arr.length} for coord`);
}

export function coordIsWgs84(coord: Coord2d | Coord3d): boolean {
  return (
    coord[0] >= -180 && coord[0] <= 180 && coord[1] >= -90 && coord[1] <= 90
  );
}

export function coordIsWebMercator(coord: Coord2d | Coord3d): boolean {
  return (
    coord[0] >= -20026376.39 &&
    coord[0] <= 20026376.39 &&
    coord[1] >= -20048966.1 &&
    coord[1] <= 20048966.1
  );
}
