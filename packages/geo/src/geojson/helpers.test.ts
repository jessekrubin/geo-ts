import { expect, test } from "vitest";

import { lineStringFeature, pointFeature } from "./helpers.js";

test("point-feature", () => {
  const pf = pointFeature([0, 0], { howdy: "doody" });
  expect(pf).toEqual({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      howdy: "doody",
    },
  });

  const pfnullprops = pointFeature([0, 0], null);
  console.log(pfnullprops);
  expect(pfnullprops).toEqual({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: null,
  });
});

test("line-string-feature", () => {
  const ls = lineStringFeature(
    [
      [0, 0],
      [1, 1],
    ],
    { howdy: "doody" },
  );
  expect(ls).toEqual({
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [0, 0],
        [1, 1],
      ],
    },
    properties: {
      howdy: "doody",
    },
  });
});
