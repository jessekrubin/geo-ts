import type { Nullable } from "../utypes.js";

export type TilejsonScheme = "xyz" | "tms";
export type TilejsonVersion = "2.0.0" | "2.1.0" | "2.2.0" | "3.0.0";
export type TilejsonRasterFormat = "png" | "jpg" | "webp";
export type TilejsonVectorFormat = "pbf";
export type TilejsonFormatExtra = "pbfgz" | "json" | "geojson" | "unknown";
export type TilejsonFormat = TilejsonRasterFormat | TilejsonVectorFormat;

export type TilejsonTerrain =
  | "mapbox"
  | "terrarium"
  | {
      /**
       * Red channel scalar
       */
      r: number;
      /**
       * Green channel scalar
       */
      g: number;
      /**
       * Blue channel scalar
       */
      b: number;
      /**
       * Offset (probably in meters)
       */
      o: number;
    };

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

  // jsse-recommended
  /**
   * Some unique identifier for the tileset (ideally lowercase and url-friendly)
   *
   * `name` is can be used in place of `id` often but not always
   */
  id?: string;

  /**
   * Tilesize in pixels (generally default is 256 or 512)
   */
  tilesize?: number;

  /**
   * Terrain type/info for the tileset
   */
  terrain?: TilejsonTerrain;

  // optional
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
} & TilejsonVectorLayersGeneric<TFormat>;

export type TilejsonVector = TilejsonCommon<TilejsonVectorFormat>;
export type TilejsonRaster = TilejsonCommon<TilejsonRasterFormat> & {
  tilesize?: number;
};
export type Tilejson = TilejsonVector | TilejsonRaster;

/**
 * UTilejson is a more strict version that requires several fields to be present that
 * are not required in the Tilejson type.
 */

export type UTilejson = Tilejson & {
  minzoom: number;
  maxzoom: number;
  bounds: [west: number, south: number, east: number, north: number];
};
