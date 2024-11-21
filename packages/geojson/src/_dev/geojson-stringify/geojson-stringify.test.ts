import type { Feature, FeatureCollection } from "@jsse/geotypes";
import { expect, test } from "vitest";

import { geojsonStringify } from "./geojson-stringify.js";

const aGeojsonFeature: Feature = {
  type: "Feature",
  geometry: {
    type: "MultiPoint",
    coordinates: [
      [-123, 39],
      [-122, 38],
    ],
  },
  properties: {},
};

const aGeojsonFeatureCollection: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-123, 39],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122, 38],
      },
      properties: {},
    },
  ],
};

const fixtures = [
  {
    name: "Feature",
    input: aGeojsonFeature,
    expected:
      '{"type":"Feature","geometry":{"type":"MultiPoint","coordinates":[[-123,39],[-122,38]]},"properties":{}}',
  },
  {
    name: "FeatureCollection",
    input: aGeojsonFeatureCollection,
    expected:
      '{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-123,39]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-122,38]},"properties":{}}]}',
  },
];

test.each(fixtures)("geojsonStringify: $name", ({ input, expected }) => {
  const actual = geojsonStringify(input);
  expect(actual).toEqual(expected);
});
