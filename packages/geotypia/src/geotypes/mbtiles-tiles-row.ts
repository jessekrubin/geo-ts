import typia from "typia";
import type { MbtilesTilesRow } from "@jsse/geotypes";

// MbtilesTilesRow
export const assertMbtilesTilesRow = typia.createAssert<MbtilesTilesRow>();
export const equalsMbtilesTilesRow = typia.createEquals<MbtilesTilesRow>();
export const isMbtilesTilesRow = typia.createIs<MbtilesTilesRow>();
export const randomMbtilesTilesRow = typia.createRandom<MbtilesTilesRow>();
export const stringifyMbtilesTilesRow =
  typia.json.createStringify<MbtilesTilesRow>();
export const validateMbtilesTilesRow = typia.createValidate<MbtilesTilesRow>();
