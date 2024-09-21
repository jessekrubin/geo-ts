import type { Coord2d, CoordLike } from "./coord.js";

export type CornerCoordinates<TCoord extends CoordLike = Coord2d> = {
  upperLeft: TCoord;
  lowerLeft: TCoord;
  lowerRight: TCoord;
  upperRight: TCoord;
  center: TCoord;
};

export type Wgs84Extent = {
  type: "Polygon";
  coordinates: [
    [
      Coord2d, // upperLeft
      Coord2d, // lowerLeft
      Coord2d, // lowerRight
      Coord2d, // upperRight
      Coord2d, // upperLeft
    ],
  ];
};

/**
 * REF: https://gdal.org/tutorials/geotransforms_tut.html#geotransform-tutorial
 *
 * A geotransform is an affine transformation from the image coordinate space (row, column), also known as (pixel, line) to the georeferenced coordinate space (projected or geographic coordinates).
 *
 * A geotransform consists in a set of 6 coefficients:
 *
 * GT(0) x-coordinate of the upper-left corner of the upper-left pixel.
 * GT(1) w-e pixel resolution / pixel width.
 * GT(2) row rotation (typically zero).
 * GT(3) y-coordinate of the upper-left corner of the upper-left pixel.
 * GT(4) column rotation (typically zero).
 * GT(5) n-s pixel resolution / pixel height (negative value for a north-up image).
 */
export type GeoTransform = [
  xorigin: number, // x-origin
  xres: number, // x-resolution
  xrot: number, // x-rotation
  yorigin: number, // y-origin
  yrot: number, // y-rotation
  yres: number, // y-resolution
];
