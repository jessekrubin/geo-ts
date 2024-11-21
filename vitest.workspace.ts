import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/geo",
  "packages/geojson",
  "packages/geotypes",
  "packages/srtm",
  "packages/utiles",
]);
