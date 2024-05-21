import typia from "typia";
import type { GeostatsAttribute } from "@jsse/geotypes";

// GeostatsAttribute
export const assertGeostatsAttribute = typia.createAssert<GeostatsAttribute>();
export const equalsGeostatsAttribute = typia.createEquals<GeostatsAttribute>();
export const isGeostatsAttribute = typia.createIs<GeostatsAttribute>();
export const randomGeostatsAttribute = typia.createRandom<GeostatsAttribute>();
export const stringifyGeostatsAttribute =
  typia.json.createStringify<GeostatsAttribute>();
export const validateGeostatsAttribute =
  typia.createValidate<GeostatsAttribute>();
