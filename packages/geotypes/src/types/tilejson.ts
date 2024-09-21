export type TilejsonScheme = "xyz" | "tms";
export type TilejsonVersion = "2.0.0" | "2.1.0" | "2.2.0" | "3.0.0";
export type TilejsonRasterFormat = "png" | "jpg" | "webp";
export type TilejsonVectorFormat = "pbf";
export type TilejsonFormatExtra = "pbf.gz" | "json" | "geojson" | "unknown";
export type TilejsonFormat = TilejsonRasterFormat | TilejsonVectorFormat;
export type TileKind = "unknown" | "raster" | "vector";

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
    ? { vector_layers: TilejsonVectorLayer[] }
    : {
        vector_layers?: TilejsonVectorLayer[];
      };

export type TilejsonCommon<TFormat extends TilejsonFormat = TilejsonFormat> = {
  // required
  name: string;
  format: TFormat;
  tilejson: TilejsonVersion;
  tiles: string[];

  // jsse-recommended
  /**
   * Some unique identifier for the tileset (ideally lowercase and url-friendly)
   *
   * `name` is can be used in place of `id` often but not always
   */
  id?: string;

  /**
   * tile-kind (`raster`, `vector`, or `unknown`)
   *
   * `kind` is not part of the tilejson spec, but is useful for j(e)sse (aka me)
   */
  kind?: TileKind;

  /**
   * Tilesize in pixels (generally default is 256 or 512)
   */
  tilesize?: number;

  /**
   * Terrain type/info for the tileset
   */
  terrain?: TilejsonTerrain;

  // optional
  version?: string | null;
  description?: string | null;
  minzoom?: number | null;
  maxzoom?: number | null;
  bounds?: [west: number, south: number, east: number, north: number] | null;
  center?: [lon: number, lat: number, zoom: number] | null;
  attribution?: string | null;
  template?: string | null;
  scheme?: TilejsonScheme | null;
  legend?: string | null;
  grids?: string[] | null;
  data?: string[] | null;
  fillzoom?: number | null;
} & TilejsonVectorLayersGeneric<TFormat>;

export type TilejsonVector = TilejsonCommon<"pbf"> & { kind?: "vector" };
export type TilejsonRaster = TilejsonCommon<"png" | "jpg" | "webp"> & {
  kind?: "raster";
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
