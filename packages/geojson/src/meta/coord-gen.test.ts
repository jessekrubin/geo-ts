import { expect, test } from "vitest";

import {
  featureCollection,
  lineStringFeature,
  multiPolygon,
  pointFeature,
  polygon,
} from "../builders.js";
import { coordAll } from "./coord-all.js";

import { coordGen } from "./coord-gen.js";

const featcollection = featureCollection([
  pointFeature([0, 0]),
  lineStringFeature([
    [0, 0],
    [1, 1],
    [12, 12],
  ]),
  polygon(
    [
      [
        [0, 0],
        [1, 1],
        [12, 12],
        [0, 0],
      ],
    ],
    { foo: "bar" },
  ),
  multiPolygon(
    [
      [
        [
          [0, 0],
          [1, 1],
          [12, 12],
          [0, 0],
        ],
      ],
      [
        [
          [0, 0],
          [1, 1],
          [12, 12],
          [0, 0],
        ],
      ],
    ],
    { foo: "bar" },
  ),
]);
test("coord-gen", () => {
  const coords = [...coordGen(featcollection)];
  const expected = coordAll(featcollection);
  expect(coords).toEqual(expected);
});
