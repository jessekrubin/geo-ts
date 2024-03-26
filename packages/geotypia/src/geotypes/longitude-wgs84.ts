import typia from "typia";
import type { LongitudeWgs84 } from "@jsse/geotypes";

// LongitudeWgs84
export const assertLongitudeWgs84 = typia.createAssert<LongitudeWgs84>();
export const equalsLongitudeWgs84 = typia.createEquals<LongitudeWgs84>();
export const isLongitudeWgs84 = typia.createIs<LongitudeWgs84>();
export const randomLongitudeWgs84 = typia.createRandom<LongitudeWgs84>();
export const stringifyLongitudeWgs84 =
  typia.json.createStringify<LongitudeWgs84>();
export const validateLongitudeWgs84 = typia.createValidate<LongitudeWgs84>();
