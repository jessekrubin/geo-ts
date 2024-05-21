import typia from "typia";
import type { TilejsonVectorLayers } from "@jsse/geotypes";

// TilejsonVectorLayers
export const assertTilejsonVectorLayers =
  typia.createAssert<TilejsonVectorLayers>();
export const equalsTilejsonVectorLayers =
  typia.createEquals<TilejsonVectorLayers>();
export const isTilejsonVectorLayers = typia.createIs<TilejsonVectorLayers>();
export const randomTilejsonVectorLayers =
  typia.createRandom<TilejsonVectorLayers>();
export const stringifyTilejsonVectorLayers =
  typia.json.createStringify<TilejsonVectorLayers>();
export const validateTilejsonVectorLayers =
  typia.createValidate<TilejsonVectorLayers>();
