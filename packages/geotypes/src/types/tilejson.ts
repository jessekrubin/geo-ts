import type { Nullable } from "../utypes.js";

export type TilejsonScheme = "xyz" | "tms";
export type TilejsonVersion = "2.0.0" | "2.1.0" | "2.2.0" | "3.0.0";
export type TilejsonRasterFormat = "png" | "jpg" | "webp";
export type TilejsonVectorFormat = "pbf";
export type TilejsonFormatExtra = "pbfgz" | "json" | "geojson" | "unknown";
export type TilejsonFormat = TilejsonRasterFormat | TilejsonVectorFormat;

export type TilejsonVectorLayer = {
  id: string;
  fields: Record<string, string>;
  description?: string | null;
  maxzoom?: number | null;
  minzoom?: number | null;
};

export type TilejsonVectorLayers = TilejsonVectorLayer[];

type TilejsonVectorLayersGeneric<TFormat extends TilejsonFormat> =
  TFormat extends TilejsonVectorFormat
    ? { vector_layers: TilejsonVectorLayers }
    : {
        vector_layers?: TilejsonVectorLayers;
      };

export type TilejsonCommon<TFormat extends TilejsonFormat = TilejsonFormat> = {
  // required
  name: string;
  format: TFormat;
  tilejson: TilejsonVersion;
  tiles: string[];
  vector_layers?: TilejsonVectorLayers;

  // optional
  id?: string;
  version?: Nullable<string>;
  description?: Nullable<string>;
  minzoom?: Nullable<number>;
  maxzoom?: Nullable<number>;
  bounds?: Nullable<[west: number, south: number, east: number, north: number]>;
  center?: Nullable<[lon: number, lat: number, zoom: number]>;
  attribution?: Nullable<string>;
  template?: Nullable<string>;
  scheme?: Nullable<TilejsonScheme>;
  legend?: Nullable<string>;
  grids?: Nullable<string[]>;
  data?: Nullable<string[]>;
  fillzoom?: Nullable<number>;

  // extra
  tilesize?: Nullable<number>;
} & TilejsonVectorLayersGeneric<TFormat>;

export type TilejsonVector = TilejsonCommon<TilejsonVectorFormat>;
export type TilejsonRaster = TilejsonCommon<TilejsonRasterFormat>;
export type Tilejson = TilejsonVector | TilejsonRaster;
// TODO: remove
export type Tilejson300 = Tilejson;
