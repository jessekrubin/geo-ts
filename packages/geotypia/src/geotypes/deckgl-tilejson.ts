import typia from "typia";
import type { DeckglTilejson } from "@jsse/geotypes";

// DeckglTilejson
export const assertDeckglTilejson = typia.createAssert<DeckglTilejson>();
export const equalsDeckglTilejson = typia.createEquals<DeckglTilejson>();
export const isDeckglTilejson = typia.createIs<DeckglTilejson>();
export const randomDeckglTilejson = typia.createRandom<DeckglTilejson>();
export const stringifyDeckglTilejson =
  typia.json.createStringify<DeckglTilejson>();
export const validateDeckglTilejson = typia.createValidate<DeckglTilejson>();
