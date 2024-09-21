import type { TileArr, TileLike, TileObj } from "./types.js";
import { MAX_ZOOM } from "./const.js";

export function isTileArr(val: unknown): val is TileArr {
  return (
    Array.isArray(val) &&
    val.length === 3 &&
    val.every((v) => typeof v === "number" && Number.isInteger(v)) &&
    val[2] >= 0 &&
    val[2] <= MAX_ZOOM
  );
}

export function isTileObj(val: unknown): val is TileObj {
  return (
    val !== null &&
    typeof val === "object" &&
    "x" in val &&
    "y" in val &&
    "z" in val &&
    typeof val.x === "number" &&
    typeof val.y === "number" &&
    typeof val.z === "number" &&
    Number.isInteger(val.x) &&
    Number.isInteger(val.y) &&
    val.z >= 0 &&
    val.z <= MAX_ZOOM
  );
}

export function isTileLike(val: unknown): val is TileLike {
  return isTileArr(val) || isTileObj(val);
}
