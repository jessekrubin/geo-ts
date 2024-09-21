import type { Coord2d } from "@jsse/geotypes";
import {
  DEG2RAD,
  MAX_LNG_WEB_MERCATOR,
  RAD2DEG,
  WGS84_EQUATORIAL_RADIUS,
} from "./const.js";

/**
 * Convert WGS84 coordinates to Web Mercator coordinates.
 * @param ll - WGS84 coordinates.
 * @returns Web Mercator coordinates.
 */
export function ll2xy(ll: Coord2d): Coord2d {
  return [
    Math.min(
      Math.max(
        WGS84_EQUATORIAL_RADIUS * ll[0] * DEG2RAD,
        -MAX_LNG_WEB_MERCATOR,
      ),
      MAX_LNG_WEB_MERCATOR,
    ),
    Math.min(
      Math.max(
        WGS84_EQUATORIAL_RADIUS *
          Math.log(Math.tan(Math.PI * 0.25 + 0.5 * ll[1] * DEG2RAD)),
        -MAX_LNG_WEB_MERCATOR,
      ),
      MAX_LNG_WEB_MERCATOR,
    ),
  ];
}

/**
 * Convert Web Mercator coordinates to WGS84 coordinates.
 * @param xy - Web Mercator coordinates.
 * @returns WGS84 coordinates.
 */
export function xy2ll(xy: Coord2d): Coord2d {
  return [
    (xy[0] * RAD2DEG) / WGS84_EQUATORIAL_RADIUS,
    (Math.PI * 0.5 -
      2 * Math.atan(Math.exp(-xy[1] / WGS84_EQUATORIAL_RADIUS))) *
      RAD2DEG,
  ];
}
