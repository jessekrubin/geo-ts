import type { Feature, FeatureCollection } from "@jsse/geotypes";
import { expect, test } from "vitest";

import { geojsonStringify } from "./geojson-stringify.js";

const aGeojsonFeature: Feature = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "MultiPoint",
    coordinates: [
      [-123, 39],
      [-122, 38],
    ],
  },
};

const aGeojsonFeatureCollection: FeatureCollection = {
  features: [
    {
      properties: {},
      geometry: {
        coordinates: [-123, 39],
        type: "Point",
      },
      type: "Feature",
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
  type: "FeatureCollection",
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
  const formattedMinified = geojsonStringify(input);
  expect(formattedMinified).toEqual(expected);

  const formattedPretty = geojsonStringify(input, { fmt: true });
  expect(formattedPretty).toEqual(
    JSON.stringify(JSON.parse(expected), undefined, 2),
  );
});
