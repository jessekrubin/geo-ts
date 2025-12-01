import type { Coord, Coord2d, Coord3d } from "@jsse/geotypes";

export function coord(c2d: Coord2d): Coord2d;
export function coord(c3d: Coord3d): Coord3d;
export function coord(x: number, y: number): Coord2d;
export function coord(x: number, y: number, z: number): Coord3d;
/**
 * Returns a 2d or 3d coordinate tuple and infers the type.
 * @param x - Coordinate tuple ([x, y] or [x, y, z]) or x coordinate.
 * @param y - y coordinate (optional).
 * @param z - z coordinate (optional).
 * @returns {Coord2d | Coord3d} - 2d or 3d coordinate array.
 */
export function coord(
  x: Coord2d | Coord3d | number,
  y?: number,
  z?: number,
): Coord2d | Coord3d {
  if (Array.isArray(x)) {
    return x.length === 2 ? (x as Coord2d) : (x as Coord3d);
  }
  return z === undefined ? [x, y as number] : [x, y as number, z];
}

export function coord2d(c2d: Coord2d): Coord2d;
export function coord2d(x: number, y: number): Coord2d;
/**
 * Returns a 2d coordinate tuple.
 * @param x - 2d coordinate tuple ([x, y]) or x coordinate.
 * @param y - y coordinate (optional).
 * @returns {Coord2d} - 2d coordinate array.
 */
export function coord2d(x: Coord2d | number, y?: number): Coord2d {
  if (Array.isArray(x)) {
    return x as Coord2d;
  }
  return [x, y as number];
}

export function coord3d(c3d: Coord3d): Coord3d;
export function coord3d(x: number, y: number, z: number): Coord3d;
/**
 * Returns a 3d coordinate tuple.
 * @param x - 3d coordinate tuple ([x, y, z]) or x coordinate.
 * @param y - y coordinate (optional).
 * @param z - z coordinate (optional).
 * @returns {Coord3d} - 3d coordinate array.
 */
export function coord3d(x: Coord3d | number, y?: number, z?: number): Coord3d {
  if (Array.isArray(x)) {
    return x as Coord3d;
  }
  return [x, y as number, z as number];
}

/**
 * Returns an array of coordinates.
 * @param coords - Coordinates as separate arguments or as an array.
 * @returns {Coord2d[] | Coord3d[]} - Array of 2d or 3d coordinates.
 */
export function coords(...coords: Coord2d[]): Coord2d[];
export function coords(...coords: Coord3d[]): Coord3d[];
export function coords(...coords: (Coord2d | Coord3d)[]): (Coord2d | Coord3d)[];
export function coords(coords: Coord2d[]): Coord2d[];
export function coords(coords: Coord3d[]): Coord3d[];
export function coords(coords: (Coord2d | Coord3d)[]): (Coord2d | Coord3d)[];
export function coords(...args: Coord[] | Coord[][]): Coord[] {
  if (Array.isArray(args[0]) && Array.isArray((args[0] as Coord[])[0])) {
    // Flatten the array if the first argument is an array of arrays
    return (args as Coord[][])[0] || [];
  }
  return args as Coord[];
}

export function isCoord2d(
  coord: Coord2d | Coord3d | number[],
): coord is Coord2d {
  return Array.isArray(coord) && coord.length === 2;
}

export function isCoord3d(
  coord: Coord2d | Coord3d | number[],
): coord is Coord3d {
  return Array.isArray(coord) && coord.length === 3;
}

export function isCoord(
  coord: Coord2d | Coord3d | number[],
): coord is Coord2d | Coord3d {
  return (
    Array.isArray(coord) &&
    (coord.length === 2 || coord.length === 3) &&
    coord.every((el) => typeof el === "number")
  );
}

export function assertsCoord2d(
  coord: Coord2d | Coord3d | number[],
): asserts coord is Coord2d {
  if (!isCoord2d(coord)) throw new Error(`Invalid coord2d: ${coord}`);
}

/**
 * Convert array to coord (stupid util)
 * @param arr {number[]} array of numbers with length 2 or 3
 * @returns {Coord2d | Coord3d} coord
 * @throws {Error} Invalid array length
 */
export function arr2coord(arr: number[]): Coord2d | Coord3d {
  if (!isCoord(arr)) {
    throw new Error(`Invalid array length ${arr.length} for coord`);
  }
  return arr;
}

export function coordIsWgs84(coord: Coord2d | Coord3d): boolean {
  return (
    coord[0] >= -180 && coord[0] <= 180 && coord[1] >= -90 && coord[1] <= 90
  );
}

export function coordIsWebMercator(coord: Coord2d | Coord3d): boolean {
  return (
    coord[0] >= -20_026_376.39 &&
    coord[0] <= 20_026_376.39 &&
    coord[1] >= -20_048_966.1 &&
    coord[1] <= 20_048_966.1
  );
}
