/**
 * Convert degrees to radians
 * @param deg - Degrees
 * @returns Radians
 * @example
 * deg2rad(180) // 3.141592653589793
 */
export function deg2rad(deg: number): number {
  return ((deg % 360) * Math.PI) / 180;
}

/**
 * Convert radians to degrees
 */
export function rad2deg(rad: number): number {
  return ((rad % (2 * Math.PI)) * 180) / Math.PI;
}

export function rad2meters(rad: number): number {
  return rad * 6_378_137;
}

/**
 * Round float to fixed number of decimals
 * @param num
 * @param precision
 * @param base
 */
export function roundf(
  num: number,
  precision: number = 0,
  base: number = 10,
): number {
  if (precision < 0) {
    throw new Error("decimals must be >= 0");
  } else if (precision === 0) {
    return Math.round(num);
  }
  const exp = base ** precision;
  return Math.round((num + Number.EPSILON) * exp) / exp;
}
