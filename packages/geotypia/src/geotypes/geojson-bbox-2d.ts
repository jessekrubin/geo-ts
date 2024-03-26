import typia from "typia";
import type { GeojsonBBox2d } from "@jsse/geotypes";

// GeojsonBBox2d
export const assertGeojsonBBox2d = typia.createAssert<GeojsonBBox2d>();
export const equalsGeojsonBBox2d = typia.createEquals<GeojsonBBox2d>();
export const isGeojsonBBox2d = typia.createIs<GeojsonBBox2d>();
export const randomGeojsonBBox2d = typia.createRandom<GeojsonBBox2d>();
export const stringifyGeojsonBBox2d =
  typia.json.createStringify<GeojsonBBox2d>();
export const validateGeojsonBBox2d = typia.createValidate<GeojsonBBox2d>();
