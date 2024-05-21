import typia from "typia";
import type { GeojsonBBox } from "@jsse/geotypes";

// GeojsonBBox
export const assertGeojsonBBox = typia.createAssert<GeojsonBBox>();
export const equalsGeojsonBBox = typia.createEquals<GeojsonBBox>();
export const isGeojsonBBox = typia.createIs<GeojsonBBox>();
export const randomGeojsonBBox = typia.createRandom<GeojsonBBox>();
export const stringifyGeojsonBBox = typia.json.createStringify<GeojsonBBox>();
export const validateGeojsonBBox = typia.createValidate<GeojsonBBox>();
