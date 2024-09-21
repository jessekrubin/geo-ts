/**
 * ============================================================================
 * GEOJSON Coordinate Reference System Objects
 * NOTE: The `crs` member has been removed/deprecated
 *       [RFC7946](https://datatracker.ietf.org/doc/html/rfc7946#appendix-B.1)
 * ============================================================================
 */
export type GeojsonNamedCoordinateReferenceSystem = {
  type: "name";
  properties: {
    name: string;
  };
};
export type GeojsonLinkedCoordinateReferenceSystem = {
  type: "link";
  properties: {
    href: string;
    type: string;
  };
};

export type GeojsonCoordinateReferenceSystem =
  | GeojsonNamedCoordinateReferenceSystem
  | GeojsonLinkedCoordinateReferenceSystem;
