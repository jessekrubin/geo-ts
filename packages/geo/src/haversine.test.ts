import { expect, test } from "vitest";
import { coord } from "./coord.js";
import { haversine } from "./haversine.js";
import { roundf } from "./maths.js";

test("haversine", () => {
  const a = coord([-75.343, 39.984]);
  const b = coord([-75.534, 39.123]);
  const distanceMeters = haversine(a, b);
  const expected = 97_237.894_170_083_63;
  const distanceRounded = roundf(distanceMeters, 3);
  const expectedRounded = roundf(expected, 3);
  expect(distanceRounded).toBe(expectedRounded);
});
