import type { GeoJSON } from "@jsse/geotypes";
import typia from "typia";

export const isGeoJSON = typia.createIs<GeoJSON>();
