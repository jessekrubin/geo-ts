/* eslint-disable unicorn/no-zero-fractions */
import type { Tilejson } from "../geotypes.js";

{
  const _validVectorTilejson: Tilejson & {
    [key: string]: unknown;
  } = {
    tilejson: "3.0.0",
    tiles: [],
    vector_layers: [
      {
        id: "aeroway",
        fields: { class: "String", ref: "String" },
        maxzoom: 14,
        minzoom: 10,
      },
      {
        id: "boundary",
        fields: {
          adm0_l: "String",
          adm0_r: "String",
          admin_level: "Number",
          claimed_by: "String",
          disputed: "Number",
          disputed_name: "String",
          maritime: "Number",
        },
        maxzoom: 14,
        minzoom: 0,
      },
      {
        id: "building",
        fields: {
          colour: "String",
          hide_3d: "Boolean",
          render_height: "Number",
          render_min_height: "Number",
        },
        maxzoom: 14,
        minzoom: 13,
      },
      {
        id: "housenumber",
        fields: { housenumber: "String" },
        maxzoom: 14,
        minzoom: 14,
      },
      {
        id: "landcover",
        fields: { _numpoints: "Number", class: "String", subclass: "String" },
        maxzoom: 14,
        minzoom: 0,
      },
      { id: "landuse", fields: { class: "String" }, maxzoom: 14, minzoom: 4 },
    ],
    attribution:
      '<a href="https://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    bounds: [-180.0, -85.051_13, 180.0, 85.051_13],
    center: [0.0, 0.0, 0],
    description:
      "A tileset showcasing all layers in OpenMapTiles. https://openmaptiles.org",
    maxzoom: 14,
    minzoom: 0,
    name: "OpenMapTiles",
    version: "3.13.1",
    format: "pbf",
    type: "baselayer",
  };
}

{
  // @ts-expect-error missing vector_layers
  const _invalidVectorTilejson: Tilejson300 & {
    [key: string]: unknown;
  } = {
    tilejson: "3.0.0",
    tiles: [],
    attribution:
      '<a href="https://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    bounds: [-180.0, -85.051_13, 180.0, 85.051_13],
    center: [0.0, 0.0, 0],
    description:
      "A tileset showcasing all layers in OpenMapTiles. https://openmaptiles.org",
    maxzoom: 14,
    minzoom: 0,
    name: "OpenMapTiles",
    version: "3.13.1",
    format: "pbf",
    type: "baselayer",
  };
}

{
  /**
   * Same as above invalidVectorTilejson, but with a different `format`
   */
  const _validRasterTilejson: Tilejson & {
    [key: string]: unknown;
  } = {
    tilejson: "3.0.0",
    tiles: [],
    attribution:
      '<a href="https://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    bounds: [-180.0, -85.051_13, 180.0, 85.051_13],
    center: [0.0, 0.0, 0],
    description:
      "A tileset showcasing all layers in OpenMapTiles. https://openmaptiles.org",
    maxzoom: 14,
    minzoom: 0,
    name: "OpenMapTiles",
    version: "3.13.1",
    format: "png",
    type: "baselayer",
  };
}
