import type { BBox2d } from "@jsse/geotypes";

export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;
export const BBOX_EARTH: BBox2d = [-180, -90, 180, 90];
export const BBOX_EARTH_WEB: BBox2d = [
  -180, -85.051_128_779_806_59, 180, 85.051_128_779_806_6,
];
