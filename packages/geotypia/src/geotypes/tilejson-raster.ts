import typia from "typia";
import type { TilejsonRaster } from "@jsse/geotypes";

// TilejsonRaster
export const assertTilejsonRaster = typia.createAssert<TilejsonRaster>();
export const equalsTilejsonRaster = typia.createEquals<TilejsonRaster>();
export const isTilejsonRaster = typia.createIs<TilejsonRaster>();
export const randomTilejsonRaster = typia.createRandom<TilejsonRaster>();
export const stringifyTilejsonRaster =
  typia.json.createStringify<TilejsonRaster>();
export const validateTilejsonRaster = typia.createValidate<TilejsonRaster>();
