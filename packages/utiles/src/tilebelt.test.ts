/**
 * TILE BELT TESTS CONVERTED BY CHADWICK GPT
 *
 * REF: https://github.com/mapbox/tilebelt/blob/master/test.js
 */
import { describe, expect, test } from "vitest";
import * as tilebelt from "./tilebelt.js";

const tile1: [number, number, number] = [5, 10, 10];
describe("tilebelt tests", () => {
  test("tile to geojson", () => {
    const geojson = tilebelt.tileToGeoJSON(tile1);
    expect(geojson).toBeTruthy();
    expect(geojson.type).toBe("Polygon");
    expect(geojson.coordinates).toEqual([
      [
        [-178.242_187_5, 84.738_387_120_953_39],
        [-178.242_187_5, 84.706_048_935_041_5],
        [-177.890_625, 84.706_048_935_041_5],
        [-177.890_625, 84.738_387_120_953_39],
        [-178.242_187_5, 84.738_387_120_953_39],
      ],
    ]);
  });

  test("tile to bbox", () => {
    const ext = tilebelt.tileToBBOX(tile1);
    expect(ext).toBeTruthy();
    expect(ext).toEqual([
      -178.242_187_5, 84.706_048_935_041_5, -177.890_625, 84.738_387_120_953_39,
    ]);
  });

  test("get parent", () => {
    const parent = tilebelt.getParent(tile1);
    expect(parent).toBeTruthy();
    // @ts-expect-error - will have parent
    expect(parent.length).toBe(3);
    expect(parent).toEqual([2, 5, 9]);
  });

  test("get siblings", () => {
    const siblings = tilebelt.getSiblings(tile1);
    expect(siblings).toBeTruthy();
    // @ts-expect-error - will have sibs
    expect(siblings.length).toBe(4);
    // @ts-expect-error - will have sibs
    expect(siblings[0].length).toBe(3);
  });

  test("has siblings", () => {
    const tiles1 = [
      [0, 0, 5],
      [0, 1, 5],
      [1, 1, 5],
      [1, 0, 5],
    ] as [number, number, number][];
    const tiles2 = [
      [0, 0, 5],
      [0, 1, 5],
      [1, 1, 5],
    ] as [number, number, number][];

    expect(tilebelt.hasSiblings([0, 0, 5], tiles1)).toBe(true);
    expect(tilebelt.hasSiblings([0, 1, 5], tiles1)).toBe(true);
    expect(tilebelt.hasSiblings([0, 0, 5], tiles2)).toBe(false);
    expect(tilebelt.hasSiblings([0, 0, 5], tiles2)).toBe(false);
  });

  test("has tile", () => {
    const tiles1 = [
      [0, 0, 5],
      [0, 1, 5],
      [1, 1, 5],
      [1, 0, 5],
    ] as [number, number, number][];

    expect(tilebelt.hasSiblings([2, 0, 5], tiles1)).toBe(false);
    expect(tilebelt.hasSiblings([0, 1, 5], tiles1)).toBe(true);
  });

  test("get quadkey", () => {
    const key = tilebelt.tileToQuadkey([11, 3, 8]);
    expect(key).toBe("00001033");
  });

  test("quadkey to tile", () => {
    const quadkey = "00001033";
    const tile = tilebelt.quadkeyToTile(quadkey);
    expect(tile.length).toBe(3);
  });

  test("point to tile", () => {
    const tile = tilebelt.pointToTile(0, 0, 10);
    expect(tile.length).toBe(3);
    expect(tile[2]).toBe(10);
  });

  test("point to tile verified", () => {
    const tile = tilebelt.pointToTile(
      -77.032_393_813_133_23,
      38.913_265_165_594_42,
      10,
    );
    expect(tile.length).toBe(3);
    expect(tile[0]).toBe(292);
    expect(tile[1]).toBe(391);
    expect(tile[2]).toBe(10);
    expect(tilebelt.tileToQuadkey(tile)).toBe("0320100322");
  });

  test("point and tile back and forth", () => {
    const tile = tilebelt.pointToTile(10, 10, 10);
    expect(tile.toString()).toBe(
      tilebelt.quadkeyToTile(tilebelt.tileToQuadkey(tile)).toString(),
    );
  });

  test("check key 03", () => {
    const quadkey = "03";
    expect(tilebelt.quadkeyToTile(quadkey).toString()).toBe(
      [1, 1, 2].toString(),
    );
  });

  test("bbox to tile -- big", () => {
    const bbox = [
      -84.726_562_499_999_99, 11.178_401_873_711_785, -5.625,
      61.606_396_371_386_28,
    ] as [number, number, number, number];
    const tile = tilebelt.bboxToTile(bbox);
    expect(tile).toBeTruthy();
    expect(tile[0]).toBe(1);
    expect(tile[1]).toBe(1);
    expect(tile[2]).toBe(2);
  });

  test("bbox to tile -- no area", () => {
    const bbox = [-84, 11, -84, 11] as [number, number, number, number];
    const tile = tilebelt.bboxToTile(bbox);
    expect(tile).toBeTruthy();
    // tilebelt returns the following bc their `MAX_ZOOM` is 28
    expect(tile).not.toEqual([71_582_788, 125_964_677, 28]);
    expect(tile).toEqual([286_331_153, 503_858_708, 30]);
  });

  test("bbox to tile -- dc", () => {
    const bbox = [
      -77.046_153_545_379_64, 38.899_967_510_782_346, -77.036_647_796_630_86,
      38.907_281_424_813_29,
    ] as [number, number, number, number];
    const tile = tilebelt.bboxToTile(bbox);
    expect(tile).toBeTruthy();
    expect(tile[0]).toBe(9371);
    expect(tile[1]).toBe(12_534);
    expect(tile[2]).toBe(15);
  });

  test("bbox to tile -- crossing 0 lat/lng", () => {
    const bbox = [-10, -10, 10, 10] as [number, number, number, number];
    const tile = tilebelt.bboxToTile(bbox);
    expect(tile).toBeTruthy();
    expect(tile[0]).toBe(0);
    expect(tile[1]).toBe(0);
    expect(tile[2]).toBe(0);
  });

  test("tile to bbox -- verify bbox order", () => {
    let tile = [13, 11, 5] as [number, number, number];
    let bbox = tilebelt.tileToBBOX(tile);
    expect(bbox[0] < bbox[2]).toBe(true);
    expect(bbox[1] < bbox[3]).toBe(true);

    tile = [20, 11, 5];
    bbox = tilebelt.tileToBBOX(tile);
    expect(bbox[0] < bbox[2]).toBe(true);
    expect(bbox[1] < bbox[3]).toBe(true);

    tile = [143, 121, 8];
    bbox = tilebelt.tileToBBOX(tile);
    expect(bbox[0] < bbox[2]).toBe(true);
    expect(bbox[1] < bbox[3]).toBe(true);

    tile = [999, 1000, 17];
    bbox = tilebelt.tileToBBOX(tile);
    expect(bbox[0] < bbox[2]).toBe(true);
    expect(bbox[1] < bbox[3]).toBe(true);
  });

  test("pointToTileFraction", () => {
    const tile = tilebelt.pointToTileFraction(
      -95.939_655_303_955_08,
      41.260_001_085_686_97,
      9,
    );
    expect(tile).toBeTruthy();
    expect(tile[0]).toBe(119.552_490_234_375);
    expect(tile[1]).toBe(191.471_191_406_25);
    expect(tile[2]).toBe(9);
  });

  test("pointToTile -- cross meridian", () => {
    // X axis
    // https://github.com/mapbox/tile-cover/issues/75
    // https://github.com/mapbox/tilebelt/pull/32
    expect(tilebelt.pointToTile(-180, 0, 0)).toEqual([0, 0, 0]);
    expect(tilebelt.pointToTile(-180, 85, 2)).toEqual([0, 0, 2]);
    expect(tilebelt.pointToTile(180, 85, 2)).toEqual([0, 0, 2]);
    expect(tilebelt.pointToTile(-185, 85, 2)).toEqual([3, 0, 2]);
    expect(tilebelt.pointToTile(185, 85, 2)).toEqual([0, 0, 2]);

    // Y axis
    // Does not wrap Tile Y
    expect(tilebelt.pointToTile(-175, -95, 2)).toEqual([0, 3, 2]);
    expect(tilebelt.pointToTile(-175, 95, 2)).toEqual([0, 0, 2]);
    expect(tilebelt.pointToTile(-175, 95, 2)).toEqual([0, 0, 2]);

    // BBox
    // https://github.com/mapbox/tilebelt/issues/12
    expect(tilebelt.bboxToTile([-0.000_001, -85, 1_000_000, 85])).toEqual([
      0, 0, 0,
    ]);
  });
});
