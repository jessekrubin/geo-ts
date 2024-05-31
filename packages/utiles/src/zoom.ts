import { type ZoomInt } from "./types.js";

export function isZoom(z: unknown): z is ZoomInt {
  return typeof z === "number" && Number.isInteger(z) && z >= 0 && z <= 30;
}

/**
 * Convert zooms array to zset (u32) number where each bit represents a zoom level
 *
 * 0b11100000_00000000_00000000_00000000 = 3_758_096_384 -> [0, 1, 2]
 *
 * @param zooms C
 * @returns zset integer number (u32) 0b11100000_00000000_00000000_00000000 = 3_758_096_384 -> [0, 1, 2]
 */
export function zvec2zset(zooms: ZoomInt[]) {
  let zset = 0;
  for (const z of zooms) {
    if (!isZoom(z)) {
      throw new Error(`Invalid zoom: ${z}`);
    }
    // eslint-disable-next-line no-bitwise
    zset |= 1 << (31 - z);
  }
  return zset >>> 0; // >>> 0 to convert to unsigned
}

/**
 * Convert zset (u32) number to zooms array where each bit represents a zoom level
 *
 * 0b11100000_00000000_00000000_00000000 = 3_758_096_384 -> [0, 1, 2]
 *
 * @param zset
 * @returns zooms array
 */
export function zset2zvec(zset: number) {
  if (zset < 0 || zset > 4_294_967_294) {
    throw new Error(`Invalid zset: ${zset}`);
  }
  const zvec: number[] = [];
  for (let i = 0; i < 32; i++) {
    // eslint-disable-next-line no-bitwise
    if ((zset & (1 << i)) !== 0) {
      zvec.push(31 - i);
    }
  }
  return zvec.reverse();
}
