/**
 * Map-tiles zbox - defines min-x, min-y, max-x, max-y tile bounds for a given zoom level.
 */
export type ZBox = {
  z: number;
  min: {
    x: number;
    y: number;
  };
  max: {
    x: number;
    y: number;
  };
};
