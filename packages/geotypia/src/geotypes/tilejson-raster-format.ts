import typia from "typia";
import type { TilejsonRasterFormat } from "@jsse/geotypes";

// TilejsonRasterFormat
export const assertTilejsonRasterFormat =
  typia.createAssert<TilejsonRasterFormat>();
export const equalsTilejsonRasterFormat =
  typia.createEquals<TilejsonRasterFormat>();
export const isTilejsonRasterFormat = typia.createIs<TilejsonRasterFormat>();
export const randomTilejsonRasterFormat =
  typia.createRandom<TilejsonRasterFormat>();
export const stringifyTilejsonRasterFormat =
  typia.json.createStringify<TilejsonRasterFormat>();
export const validateTilejsonRasterFormat =
  typia.createValidate<TilejsonRasterFormat>();
