import typia from "typia";
import type { LinearRing } from "@jsse/geotypes";

// LinearRing
export const assertLinearRing = typia.createAssert<LinearRing>();
export const equalsLinearRing = typia.createEquals<LinearRing>();
export const isLinearRing = typia.createIs<LinearRing>();
export const randomLinearRing = typia.createRandom<LinearRing>();
export const stringifyLinearRing = typia.json.createStringify<LinearRing>();
export const validateLinearRing = typia.createValidate<LinearRing>();
