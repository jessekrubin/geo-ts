import type {
  BBox,
  FeatureOptions,
  FeatureProperties,
  GeojsonCoord,
  GeojsonCoordinateReferenceSystem,
  GeoJsonProperties,
  Feature as TFeature,
  Geometry as TGeometry,
  GeometryCollection as TGeometryCollection,
  LineStringGeometry as TLineStringGeometry,
  MultiLineStringGeometry as TMultiLineStringGeometry,
  MultiPointGeometry as TMultiPointGeometry,
  MultiPolygonGeometry as TMultiPolygonGeometry,
  PointGeometry as TPointGeometry,
  PolygonGeometry as TPolygonGeometry,
} from "@jsse/geotypes";

export class PointGeometry<TCoord extends GeojsonCoord = GeojsonCoord>
  implements TPointGeometry<TCoord>
{
  type: "Point" = "Point" as const;
  coordinates: TCoord;

  constructor(coordinates: TCoord) {
    this.coordinates = coordinates;
  }
}

export class LineStringGeometry<TCoord extends GeojsonCoord = GeojsonCoord>
  implements TLineStringGeometry<TCoord>
{
  type: "LineString" = "LineString" as const;
  coordinates: TCoord[];

  constructor(coordinates: TCoord[]) {
    this.coordinates = coordinates;
  }
}

export class PolygonGeometry<TCoord extends GeojsonCoord = GeojsonCoord>
  implements TPolygonGeometry<TCoord>
{
  type: "Polygon" = "Polygon" as const;
  coordinates: TCoord[][];

  constructor(coordinates: TCoord[][]) {
    this.coordinates = coordinates;
  }
}

export class MultiPointGeometry<TCoord extends GeojsonCoord = GeojsonCoord>
  implements TMultiPointGeometry<TCoord>
{
  type: "MultiPoint" = "MultiPoint" as const;
  coordinates: TCoord[];

  constructor(coordinates: TCoord[]) {
    this.coordinates = coordinates;
  }
}

export class MultiLineStringGeometry<TCoord extends GeojsonCoord = GeojsonCoord>
  implements TMultiLineStringGeometry<TCoord>
{
  type: "MultiLineString" = "MultiLineString" as const;
  coordinates: TCoord[][];

  constructor(coordinates: TCoord[][]) {
    this.coordinates = coordinates;
  }
}

export class MultiPolygonGeometry<TCoord extends GeojsonCoord = GeojsonCoord>
  implements TMultiPolygonGeometry<TCoord>
{
  type: "MultiPolygon" = "MultiPolygon" as const;
  coordinates: TCoord[][][];

  constructor(coordinates: TCoord[][][]) {
    this.coordinates = coordinates;
  }
}

export class GeometryCollection<TGeom extends TGeometry = TGeometry>
  implements TGeometryCollection<TGeom>
{
  type: "GeometryCollection" = "GeometryCollection" as const;
  geometries: TGeom[];

  constructor(geometries: TGeom[]) {
    this.geometries = geometries;
  }
}

export class Feature<
  TGeom extends TGeometry = TGeometry,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
  TOptions extends FeatureOptions = FeatureOptions,
> implements TFeature<TGeom>
{
  type: "Feature" = "Feature" as const;
  id?: string | number;
  bbox?: BBox;
  crs?: GeojsonCoordinateReferenceSystem;
  geometry: TGeom;
  properties: FeatureProperties<TProperties>;

  constructor(geometry: TGeom, properties?: TProperties, options?: TOptions) {
    this.id = options ? options.id : undefined;
    this.bbox = options ? options.bbox : undefined;
    this.crs = options ? options.crs : undefined;
    this.geometry = geometry;
    this.properties = (properties || {}) as FeatureProperties<TProperties>;
  }
}

export class PointFeature<
  TCoord extends GeojsonCoord = GeojsonCoord,
  TProperties extends GeoJsonProperties = GeoJsonProperties,
  TOptions extends FeatureOptions = FeatureOptions,
> extends Feature<TPointGeometry<TCoord>, TProperties, TOptions> {
  constructor(
    coordinates: TCoord,
    properties?: TProperties,
    options?: TOptions,
  ) {
    super(new PointGeometry(coordinates), properties, options);
  }
}

// =============================================================================
