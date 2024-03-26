import typia from "typia";
import type { TilejsonVectorFormat } from "@jsse/geotypes";

// TilejsonVectorFormat
export const assertTilejsonVectorFormat =
  typia.createAssert<TilejsonVectorFormat>();
export const equalsTilejsonVectorFormat =
  typia.createEquals<TilejsonVectorFormat>();
export const isTilejsonVectorFormat = typia.createIs<TilejsonVectorFormat>();
export const randomTilejsonVectorFormat =
  typia.createRandom<TilejsonVectorFormat>();
export const stringifyTilejsonVectorFormat =
  typia.json.createStringify<TilejsonVectorFormat>();
export const validateTilejsonVectorFormat =
  typia.createValidate<TilejsonVectorFormat>();
