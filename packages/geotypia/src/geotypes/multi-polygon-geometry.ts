import typia from "typia";
import type { MultiPolygonGeometry } from "@jsse/geotypes";

// MultiPolygonGeometry
export const assertMultiPolygonGeometry =
  typia.createAssert<MultiPolygonGeometry>();
export const equalsMultiPolygonGeometry =
  typia.createEquals<MultiPolygonGeometry>();
export const isMultiPolygonGeometry = typia.createIs<MultiPolygonGeometry>();
export const randomMultiPolygonGeometry =
  typia.createRandom<MultiPolygonGeometry>();
export const stringifyMultiPolygonGeometry =
  typia.json.createStringify<MultiPolygonGeometry>();
export const validateMultiPolygonGeometry =
  typia.createValidate<MultiPolygonGeometry>();
