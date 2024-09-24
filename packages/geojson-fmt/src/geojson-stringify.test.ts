import { test, expect } from "vitest";
import { geojsonStringify } from "./index.js";
import type { GeoJson } from "@jsse/geotypes";

const someGeojsondata: GeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Some name",
      },
      geometry: {
        type: "Point",
        coordinates: [125.6, 10.1],
      },
    },
  ],
};

test("geojsonStringify", () => {
  const geojson = someGeojsondata;
  const result = geojsonStringify(geojson);
  const expectedObj = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [125.6, 10.1] },
        properties: { name: "Some name" },
      },
    ],
  };

  const expected = JSON.stringify(expectedObj);
  expect(result).toBe(expected);
  const expectedFormatted = JSON.stringify(expectedObj, null, 2);
  const resultFormatted = geojsonStringify(geojson, { fmt: true });
  expect(resultFormatted).toBe(expectedFormatted);
});
