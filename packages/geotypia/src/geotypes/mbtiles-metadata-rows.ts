import typia from "typia";
import type { MbtilesMetadataRows } from "@jsse/geotypes";

// MbtilesMetadataRows
export const assertMbtilesMetadataRows =
  typia.createAssert<MbtilesMetadataRows>();
export const equalsMbtilesMetadataRows =
  typia.createEquals<MbtilesMetadataRows>();
export const isMbtilesMetadataRows = typia.createIs<MbtilesMetadataRows>();
export const randomMbtilesMetadataRows =
  typia.createRandom<MbtilesMetadataRows>();
export const stringifyMbtilesMetadataRows =
  typia.json.createStringify<MbtilesMetadataRows>();
export const validateMbtilesMetadataRows =
  typia.createValidate<MbtilesMetadataRows>();
