import type { TileArr } from "./types.js";

/**
 * Return quadkey for tile x, y, z
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

export { quadkey2xyz as qk2xyz, xyz2quadkey as xyz2qk };
