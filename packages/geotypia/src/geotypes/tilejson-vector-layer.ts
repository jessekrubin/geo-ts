import typia from "typia";
import type { TilejsonVectorLayer } from "@jsse/geotypes";

// TilejsonVectorLayer
export const assertTilejsonVectorLayer =
  typia.createAssert<TilejsonVectorLayer>();
export const equalsTilejsonVectorLayer =
  typia.createEquals<TilejsonVectorLayer>();
export const isTilejsonVectorLayer = typia.createIs<TilejsonVectorLayer>();
export const randomTilejsonVectorLayer =
  typia.createRandom<TilejsonVectorLayer>();
export const stringifyTilejsonVectorLayer =
  typia.json.createStringify<TilejsonVectorLayer>();
export const validateTilejsonVectorLayer =
  typia.createValidate<TilejsonVectorLayer>();
