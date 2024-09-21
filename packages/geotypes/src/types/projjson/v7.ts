/**
 * Initial version created by `json-schema-to-typescript`
 *
 * Schema: https://raw.githubusercontent.com/OSGeo/PROJ/refs/heads/master/schemas/v0.7/projjson.schema.json
 */
export type ProjjsonV7 =
  | Crs
  | Datum
  | DatumEnsemble
  | Ellipsoid
  | PrimeMeridian
  | SingleOperation
  | ConcatenatedOperation
  | CoordinateMetadata;
export type Crs =
  | BoundCrs
  | CompoundCrs
  | DerivedEngineeringCrs
  | DerivedGeodeticCrs
  | DerivedParametricCrs
  | DerivedProjectedCrs
  | DerivedTemporalCrs
  | DerivedVerticalCrs
  | EngineeringCrs
  | GeodeticCrs
  | ParametricCrs
  | ProjectedCrs
  | TemporalCrs
  | VerticalCrs;
export type BoundCrs = ObjectUsage & {
  $schema?: string;
  type?: "BoundCRS";
  name?: string;
  source_crs: Crs;
  target_crs: Crs;
  transformation: AbridgedTransformation;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type ObjectUsage = IdIdsMutuallyExclusive;
export type AbridgedTransformation = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "AbridgedTransformation";
  name: string;
  source_crs?:
    | BoundCrs
    | CompoundCrs
    | DerivedEngineeringCrs
    | DerivedGeodeticCrs
    | DerivedParametricCrs
    | DerivedProjectedCrs
    | DerivedTemporalCrs
    | DerivedVerticalCrs
    | EngineeringCrs
    | GeodeticCrs
    | ParametricCrs
    | ProjectedCrs
    | TemporalCrs
    | VerticalCrs;
  method: Method;
  parameters: ParameterValue[];
  id?: Id;
  ids?: Ids;
};
export type CompoundCrs = ObjectUsage & {
  type?: "CompoundCRS";
  name: string;
  components: Crs[];
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type DerivedEngineeringCrs = ObjectUsage & {
  type?: "DerivedEngineeringCRS";
  name: string;
  base_crs: EngineeringCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type EngineeringCrs = ObjectUsage & {
  type?: "EngineeringCRS";
  name: string;
  datum: EngineeringDatum;
  coordinate_system?: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type EngineeringDatum = ObjectUsage & {
  type?: "EngineeringDatum";
  name: string;
  anchor?: string;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type CoordinateSystem = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "CoordinateSystem";
  name?: string;
  subtype:
    | "Cartesian"
    | "spherical"
    | "ellipsoidal"
    | "vertical"
    | "ordinal"
    | "parametric"
    | "affine"
    | "TemporalDateTime"
    | "TemporalCount"
    | "TemporalMeasure";
  axis: Axis[];
  id?: Id;
  ids?: Ids;
};
export type Axis = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "Axis";
  name: string;
  abbreviation: string;
  direction:
    | "north"
    | "northNorthEast"
    | "northEast"
    | "eastNorthEast"
    | "east"
    | "eastSouthEast"
    | "southEast"
    | "southSouthEast"
    | "south"
    | "southSouthWest"
    | "southWest"
    | "westSouthWest"
    | "west"
    | "westNorthWest"
    | "northWest"
    | "northNorthWest"
    | "up"
    | "down"
    | "geocentricX"
    | "geocentricY"
    | "geocentricZ"
    | "columnPositive"
    | "columnNegative"
    | "rowPositive"
    | "rowNegative"
    | "displayRight"
    | "displayLeft"
    | "displayUp"
    | "displayDown"
    | "forward"
    | "aft"
    | "port"
    | "starboard"
    | "clockwise"
    | "counterClockwise"
    | "towards"
    | "awayFrom"
    | "future"
    | "past"
    | "unspecified";
  meridian?: Meridian;
  unit?: Unit;
  minimum_value?: number;
  maximum_value?: number;
  range_meaning?: "exact" | "wraparound";
  id?: Id;
  ids?: Ids;
};
export type Meridian = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "Meridian";
  longitude: ValueInDegreeOrValueAndUnit;
  id?: Id;
  ids?: Ids;
};
export type ValueInDegreeOrValueAndUnit = number | ValueAndUnit;
export type Unit = ("metre" | "degree" | "unity") | IdIdsMutuallyExclusive;
export type Ids = Id[];
export type Conversion = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "Conversion";
  name: string;
  method: Method;
  parameters?: ParameterValue[];
  id?: Id;
  ids?: Ids;
};
export type Method = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "OperationMethod";
  name: string;
  id?: Id;
  ids?: Ids;
};
export type ParameterValue = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "ParameterValue";
  name: string;
  value: string | number;
  unit?: Unit;
  id?: Id;
  ids?: Ids;
};
export type DerivedGeodeticCrs = ObjectUsage & {
  type?: "DerivedGeodeticCRS" | "DerivedGeographicCRS";
  name: string;
  base_crs: GeodeticCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
/**
 * One and only one of datum and datum_ensemble must be provided
 */
export type GeodeticCrs = ObjectUsage &
  OneAndOnlyOneOfDatumOrDatumEnsemble & {
    type?: "GeodeticCRS" | "GeographicCRS";
    name: string;
    datum?: GeodeticReferenceFrame | DynamicGeodeticReferenceFrame;
    datum_ensemble?: DatumEnsemble;
    coordinate_system?: CoordinateSystem;
    deformation_models?: DeformationModel[];
    $schema?: unknown;
    scope?: unknown;
    area?: unknown;
    bbox?: unknown;
    vertical_extent?: unknown;
    temporal_extent?: unknown;
    usages?: unknown;
    remarks?: unknown;
    id?: unknown;
    ids?: unknown;
  };
export type OneAndOnlyOneOfDatumOrDatumEnsemble = {
  [k: string]: unknown;
};
export type GeodeticReferenceFrame = ObjectUsage & {
  type?: "GeodeticReferenceFrame";
  name: string;
  anchor?: string;
  anchor_epoch?: number;
  ellipsoid: Ellipsoid;
  prime_meridian?: PrimeMeridian;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type Ellipsoid = IdIdsMutuallyExclusive & Ellipsoid1;
export type Ellipsoid1 =
  | {
      $schema?: string;
      type?: "Ellipsoid";
      name: string;
      semi_major_axis: ValueInMetreOrValueAndUnit;
      semi_minor_axis: ValueInMetreOrValueAndUnit;
      id?: Id;
      ids?: Ids;
    }
  | {
      $schema?: string;
      type?: "Ellipsoid";
      name: string;
      semi_major_axis: ValueInMetreOrValueAndUnit;
      inverse_flattening: number;
      id?: Id;
      ids?: Ids;
    }
  | {
      $schema?: string;
      type?: "Ellipsoid";
      name: string;
      radius: ValueInMetreOrValueAndUnit;
      id?: Id;
      ids?: Ids;
    };
export type ValueInMetreOrValueAndUnit = number | ValueAndUnit;
export type PrimeMeridian = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "PrimeMeridian";
  name: string;
  longitude?: ValueInDegreeOrValueAndUnit;
  id?: Id;
  ids?: Ids;
};
export type DynamicGeodeticReferenceFrame = ObjectUsage & {
  type?: "DynamicGeodeticReferenceFrame";
  name: unknown;
  anchor?: unknown;
  anchor_epoch?: unknown;
  ellipsoid: unknown;
  prime_meridian?: unknown;
  frame_reference_epoch: number;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type DatumEnsemble = IdIdsMutuallyExclusive & {
  $schema?: string;
  type?: "DatumEnsemble";
  name: string;
  members: IdIdsMutuallyExclusive[];
  ellipsoid?: Ellipsoid;
  accuracy: string;
  id?: Id;
  ids?: Ids;
};
export type DerivedParametricCrs = ObjectUsage & {
  type?: "DerivedParametricCRS";
  name: string;
  base_crs: ParametricCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type ParametricCrs = ObjectUsage & {
  type?: "ParametricCRS";
  name: string;
  datum: ParametricDatum;
  coordinate_system?: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type ParametricDatum = ObjectUsage & {
  type?: "ParametricDatum";
  name: string;
  anchor?: string;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type DerivedProjectedCrs = ObjectUsage & {
  type?: "DerivedProjectedCRS";
  name: string;
  base_crs: ProjectedCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type ProjectedCrs = ObjectUsage & {
  type?: "ProjectedCRS";
  name: string;
  base_crs: GeodeticCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type DerivedTemporalCrs = ObjectUsage & {
  type?: "DerivedTemporalCRS";
  name: string;
  base_crs: TemporalCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type TemporalCrs = ObjectUsage & {
  type?: "TemporalCRS";
  name: string;
  datum: TemporalDatum;
  coordinate_system?: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type TemporalDatum = ObjectUsage & {
  type?: "TemporalDatum";
  name: string;
  calendar: string;
  time_origin?: string;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type DerivedVerticalCrs = ObjectUsage & {
  type?: "DerivedVerticalCRS";
  name: string;
  base_crs: VerticalCrs;
  conversion: Conversion;
  coordinate_system: CoordinateSystem;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
/**
 * One and only one of datum and datum_ensemble must be provided
 */
export type VerticalCrs = ObjectUsage &
  OneAndOnlyOneOfDatumOrDatumEnsemble & {
    [k: string]: unknown;
  } & {
    type?: "VerticalCRS";
    name: string;
    datum?: VerticalReferenceFrame | DynamicVerticalReferenceFrame;
    datum_ensemble?: DatumEnsemble;
    coordinate_system?: CoordinateSystem;
    geoid_model?: GeoidModel;
    geoid_models?: GeoidModel[];
    deformation_models?: DeformationModel[];
    $schema?: unknown;
    scope?: unknown;
    area?: unknown;
    bbox?: unknown;
    vertical_extent?: unknown;
    temporal_extent?: unknown;
    usages?: unknown;
    remarks?: unknown;
    id?: unknown;
    ids?: unknown;
  };
export type VerticalReferenceFrame = ObjectUsage & {
  type?: "VerticalReferenceFrame";
  name: string;
  anchor?: string;
  anchor_epoch?: number;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type DynamicVerticalReferenceFrame = ObjectUsage & {
  type?: "DynamicVerticalReferenceFrame";
  name: unknown;
  anchor?: unknown;
  anchor_epoch?: unknown;
  frame_reference_epoch: number;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type Datum =
  | GeodeticReferenceFrame
  | VerticalReferenceFrame
  | DynamicGeodeticReferenceFrame
  | DynamicVerticalReferenceFrame
  | TemporalDatum
  | ParametricDatum
  | EngineeringDatum;
export type SingleOperation =
  | Conversion
  | Transformation
  | PointMotionOperation;
export type Transformation = ObjectUsage & {
  type?: "Transformation";
  name: string;
  source_crs: Crs;
  target_crs: Crs;
  interpolation_crs?: Crs;
  method: Method;
  parameters: ParameterValue[];
  accuracy?: string;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type PointMotionOperation = ObjectUsage & {
  type?: "PointMotionOperation";
  name: string;
  source_crs: Crs;
  method: Method;
  parameters: ParameterValue[];
  accuracy?: string;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};
export type ConcatenatedOperation = ObjectUsage & {
  type?: "ConcatenatedOperation";
  name: string;
  source_crs: Crs;
  target_crs: Crs;
  steps: SingleOperation[];
  accuracy?: string;
  $schema?: unknown;
  scope?: unknown;
  area?: unknown;
  bbox?: unknown;
  vertical_extent?: unknown;
  temporal_extent?: unknown;
  usages?: unknown;
  remarks?: unknown;
  id?: unknown;
  ids?: unknown;
};

export type IdIdsMutuallyExclusive = {
  [k: string]: unknown;
};
export type ValueAndUnit = {
  value: number;
  unit: Unit;
};
export type Id = {
  authority: string;
  code: string | number;
  version?: string | number;
  authority_citation?: string;
  uri?: string;
};
/**
 * Association to a PointMotionOperation
 */
export type DeformationModel = {
  name: string;
  id?: Id;
};
export type GeoidModel = {
  name: string;
  interpolation_crs?: Crs;
  id?: Id;
};
export type CoordinateMetadata = {
  $schema?: string;
  type?: "CoordinateMetadata";
  crs: Crs;
  coordinateEpoch?: number;
};
