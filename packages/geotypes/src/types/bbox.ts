export type BBox2d = [xmin: number, ymin: number, xmax: number, ymax: number];
export type BBox3d = [
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
  zmin: number,
  zmax: number,
];
export type BBox = BBox2d | BBox3d;

export type BBox2dReadonly = readonly [
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
];
export type BBox3dReadonly = readonly [
  xmin: number,
  ymin: number,
  xmax: number,
  ymax: number,
  zmin: number,
  zmax: number,
];
export type BBoxReadonly = BBox2dReadonly | BBox3dReadonly;
