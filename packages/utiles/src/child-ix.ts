import type { TileArr } from "./types.js";

/**
 * Return the index of the child tile.
 *
 * 0 - oldest child (favorite) (upper left) - who is the most loved
 * 1 - second child (upper right) - who is a rebel but still loved
 * 2 - third child (lower left) - who was an accident and begrudgingly accepted
 * 3 - fourth child (lower right) - who is the baby of the family and is spoiled
 *
 * @param xyz
 */
export function childIx(xyz: TileArr): 0 | 1 | 2 | 3 | undefined {
  if (xyz[2] === 0) return undefined;
  return (((xyz[0] & 1) << 1) | (xyz[1] & 1)) as 0 | 1 | 2 | 3;
}
