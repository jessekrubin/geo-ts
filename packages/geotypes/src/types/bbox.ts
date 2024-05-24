export type BBox2d<TX extends number = number, TY extends number = number> = [
  xmin: TX,
  ymin: TY,
  xmax: TX,
  ymax: TY,
];
export type BBox3d<
  TX extends number = number,
  TY extends number = number,
  TZ extends number = number,
> = [xmin: TX, ymin: TY, xmax: TX, ymax: TY, zmin: TZ, zmax: TZ];
export type BBox<
  TX extends number = number,
  TY extends number = number,
  TZ extends number = number,
> = BBox2d<TX, TY> | BBox3d<TX, TY, TZ>;
