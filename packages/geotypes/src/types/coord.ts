export type LngLat = {
  lng: number;
  lat: number;
};
export type LonLat = {
  lon: number;
  lat: number;
};
export type Z = {
  z: number;
};
export type LngLatZ = LngLat & Z;
export type LonLatZ = LonLat & Z;
export type Coord2d = [x: number, y: number];
export type Coord3d = [x: number, y: number, z: number];
export type Coord = Coord2d | Coord3d;
export type Coord2dLike = Coord2d | LngLat | LonLat;
export type Coord3dLike = Coord3d | LngLatZ | LonLatZ;
export type CoordLike = Coord | LngLat | LonLat | LngLatZ | LonLatZ;
/**
 * The Official `@types/geojson` package has a `Position` that is an array of numbers...
 */
export type Position = number[];
