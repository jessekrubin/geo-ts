import { type ZoomInt } from "./types.js";

export function isZoom(z: unknown): z is ZoomInt {
  return typeof z === "number" && Number.isInteger(z) && z >= 0 && z <= 30;
}

/**
 * Convert zooms array to zset (u32) number where each bit represents a zoom level
 *
 * 0b11110000_00000000_00000000_00000000 = 3_758_096_384 -> [0, 1, 2]
 * @param zooms C
 * @param options Options object
 * @param options.err Throw an error if an invalid zoom is found
 * @returns zset integer number (u32)
 */
export function zvec2zset(
  zooms: ZoomInt[],
  options?: {
    err?: boolean;
  },
) {
  if (zooms.length === 0) {
    return 0;
  }
  if (options?.err !== false) {
    let zset = 0;
    for (const z of zooms) {
      if (!isZoom(z)) {
        throw new Error(`Invalid zoom: ${z}`);
      }

      zset |= 1 << z;
    }
    return zset;
  }
  let zset = 0;
  for (const z of zooms) {
    if (isZoom(z)) {
      zset |= 1 << z;
    }
  }
  return zset;
}

/**
 * Convert zset (u32) number to zooms array where each bit represents a zoom level
 *
 * 0b00000000_00000000_00000000_00000111 = 7 -> [0, 1, 2]
 * @param zset
 * @returns zooms array
 */
export function zset2zvec(zset: number): number[] {
  if (zset === 0) {
    return [];
  }
  if (
    zset > 0b1111_1111_1111_1111_1111_1111_1111_1111 ||
    zset < 0 ||
    !Number.isInteger(zset)
  ) {
    throw new Error(`Invalid zset: ${zset}`);
  }
  // If the most significant bit is 1, then the order is reversed

  if (zset & (1 << 31)) {
    const zoomLevels: number[] = [];
    for (let i = 0; i < 31; i++) {
      if (zset & (1 << (30 - i))) {
        zoomLevels.push(i);
      }
    }
    return zoomLevels;
  } else {
    const zoomLevels: number[] = [];
    for (let i = 0; i < 31; i++) {
      if (zset & (1 << i)) {
        zoomLevels.push(i);
      }
    }
    return zoomLevels;
  }
}
