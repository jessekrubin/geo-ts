import { readFile } from "node:fs/promises";
import process from "node:process";
import { glob, Glob, globStream, globStreamSync, globSync } from "glob";
import { describe, expect, test } from "vitest";
import { isGeoJSON } from "../index.js";


const _fileRepoRoot = () => {
  // find dir parent that ends in `geo-ts`
  const path = process.cwd();
  const parts = path.replaceAll(
    /[/\\]+/g,
    "/"
  ).split("/");
  const index = parts.findIndex((part) => part.endsWith("geo-ts"));
  const root = parts.slice(0, index + 1).join("/");
  return root;
};

const REPO_ROOT = _fileRepoRoot();

const GEOJSON_TEST_DATA_ROOT = `${REPO_ROOT}/geo-test-data/geojson`;
const GEOJSON_TEST_DATA_OK = `${GEOJSON_TEST_DATA_ROOT}/ok/**/*.geojson`;
const GEOJSON_TEST_DATA_ERR = `${GEOJSON_TEST_DATA_ROOT}/err/err-structure/**/*.geojson`;
const GEOJSON_FILES_OK = globSync(GEOJSON_TEST_DATA_OK, {
  absolute: true,
});
const GEOJSON_FILES_ERR = globSync(GEOJSON_TEST_DATA_ERR, {
  absolute: true,
});

describe("validate-geojson", () => {

  const GEOJSON_FILES_OK_FILTERED = GEOJSON_FILES_OK.filter((file) => !file.includes("null-geometry"));
  const GEOJSON_FILES_ERR_FILTERED = GEOJSON_FILES_ERR.filter((file) => {
    const badPatterns = [
      "changed-semantics",
      "err-short-linearring.geojson",
      "err-short-multilinestring.geojson",
      "err-less-three-unique-nodes.geojson"
    ]
    return !badPatterns.some((pattern) => file.includes(pattern));
  });

  test.each(GEOJSON_FILES_OK_FILTERED)("is-geojson %s", async (file) => {
    if (file.includes("null-geometry")) {
      return;
    }
    const fileContent = await readFile(file, {
      encoding: "utf8",
    });
    const data = JSON.parse(fileContent);
    const checkResult = isGeoJSON(data);
    // console.log(checkResult, file)
    expect(checkResult).toEqual(true);
  });

  test.each(GEOJSON_FILES_ERR_FILTERED)("is-not-geojson %s", async (file) => {
    const fileContent = await readFile(file, {
      encoding: "utf8",
    });
    const data = JSON.parse(fileContent);
    const checkResult = isGeoJSON(data);
    expect(checkResult).toEqual(false);
  });
});
