import typia from "typia";
import type { GeostatsLayer } from "@jsse/geotypes";

// GeostatsLayer
export const assertGeostatsLayer = typia.createAssert<GeostatsLayer>();
export const equalsGeostatsLayer = typia.createEquals<GeostatsLayer>();
export const isGeostatsLayer = typia.createIs<GeostatsLayer>();
export const randomGeostatsLayer = typia.createRandom<GeostatsLayer>();
export const stringifyGeostatsLayer =
  typia.json.createStringify<GeostatsLayer>();
export const validateGeostatsLayer = typia.createValidate<GeostatsLayer>();
