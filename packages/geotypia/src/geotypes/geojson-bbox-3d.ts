import typia from "typia";
import type { GeojsonBBox3d } from "@jsse/geotypes";

// GeojsonBBox3d
export const assertGeojsonBBox3d = typia.createAssert<GeojsonBBox3d>();
export const equalsGeojsonBBox3d = typia.createEquals<GeojsonBBox3d>();
export const isGeojsonBBox3d = typia.createIs<GeojsonBBox3d>();
export const randomGeojsonBBox3d = typia.createRandom<GeojsonBBox3d>();
export const stringifyGeojsonBBox3d =
  typia.json.createStringify<GeojsonBBox3d>();
export const validateGeojsonBBox3d = typia.createValidate<GeojsonBBox3d>();
