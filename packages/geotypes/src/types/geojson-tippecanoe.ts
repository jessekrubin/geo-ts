/**
 * Tippecanoe GeoJSON Extension(s)
 * @see https://github.com/felt/tippecanoe?tab=readme-ov-file#geojson-extension
 */

export type GeojsonFeatureTippecanoe = {
  /**
   * minimum zoom level at which to display the feature
   */
  minzoom?: number;
  /**
   * maximum zoom level at which to display the feature
   */
  maxzoom?: number;
  /**
   * layer to put the feature
   */
  layer?: string;
};
