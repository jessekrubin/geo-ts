import type { Coord } from "@jsse/geotypes";
import { deg2rad, rad2meters } from "./maths.js";

/**
 * Calculate `Haversion` distance between two coordinates in meters.
 */
export function haversine(src: Coord, dst: Coord) {
  const hav =
    Math.sin(deg2rad(dst[1] - src[1]) / 2) ** 2 +
    Math.sin(deg2rad(dst[0] - src[0]) / 2) ** 2 *
      Math.cos(deg2rad(src[1])) *
      Math.cos(deg2rad(dst[1]));
  return rad2meters(2 * Math.atan2(Math.sqrt(hav), Math.sqrt(1 - hav)));
}
