import typia from "typia";
import type { MbtilesMetadataRow } from "@jsse/geotypes";

// MbtilesMetadataRow
export const assertMbtilesMetadataRow =
  typia.createAssert<MbtilesMetadataRow>();
export const equalsMbtilesMetadataRow =
  typia.createEquals<MbtilesMetadataRow>();
export const isMbtilesMetadataRow = typia.createIs<MbtilesMetadataRow>();
export const randomMbtilesMetadataRow =
  typia.createRandom<MbtilesMetadataRow>();
export const stringifyMbtilesMetadataRow =
  typia.json.createStringify<MbtilesMetadataRow>();
export const validateMbtilesMetadataRow =
  typia.createValidate<MbtilesMetadataRow>();
