import typia from "typia";
import type { DeckglMapViewstate } from "@jsse/geotypes";

// DeckglMapViewstate
export const assertDeckglMapViewstate =
  typia.createAssert<DeckglMapViewstate>();
export const equalsDeckglMapViewstate =
  typia.createEquals<DeckglMapViewstate>();
export const isDeckglMapViewstate = typia.createIs<DeckglMapViewstate>();
export const randomDeckglMapViewstate =
  typia.createRandom<DeckglMapViewstate>();
export const stringifyDeckglMapViewstate =
  typia.json.createStringify<DeckglMapViewstate>();
export const validateDeckglMapViewstate =
  typia.createValidate<DeckglMapViewstate>();
