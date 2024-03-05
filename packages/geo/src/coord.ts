import type { Coord2d, Coord3d } from "@jsse/geotypes";

/**
 * Return coordinate array
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
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 * @param z {number} z coordinate
 * @returns {Coord3d} 3d coordinate array [x, y, z]
 */
export function coord3d(x: number, y: number, z: number): Coord3d {
  return [x, y, z];
}
