import type { BBox2d } from "@jsse/geotypes";

export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;
export const BBOX_EARTH: BBox2d = [-180, -90, 180, 90];
export const BBOX_EARTH_TILES: BBox2d = [
  -180, -85.05112877980659, 180, 85.0511287798066,
];
