import typia from "typia";
import type { LatitudeWgs84 } from "@jsse/geotypes";

// LatitudeWgs84
export const assertLatitudeWgs84 = typia.createAssert<LatitudeWgs84>();
export const equalsLatitudeWgs84 = typia.createEquals<LatitudeWgs84>();
export const isLatitudeWgs84 = typia.createIs<LatitudeWgs84>();
export const randomLatitudeWgs84 = typia.createRandom<LatitudeWgs84>();
export const stringifyLatitudeWgs84 =
  typia.json.createStringify<LatitudeWgs84>();
export const validateLatitudeWgs84 = typia.createValidate<LatitudeWgs84>();
