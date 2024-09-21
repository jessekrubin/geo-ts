import type { BBox2d } from "@jsse/geotypes";
import { describe, expect, test } from "vitest";
import { ntiles, tilesarr, xyz2bbox } from "./index.js";

/**
 * =======================================
 * TESTS TAKEN FROM UTILES RUST/PYTHON LIB
 * =======================================
 *
 * ```python
 * def test_tiles() -> None:
 *     bounds = (-105, 39.99, -104.99, 40)
 *     tiles = list(utiles.tiles(*bounds, zooms=[14]))
 *     expect = [
 *         utiles.Tile(x=3413, y=6202, z=14),
 *         utiles.Tile(x=3413, y=6203, z=14),
 *     ]
 *     assert sorted(tiles) == sorted(expect)
 *
 * def test_tiles_single_zoom() -> None:
 *     bounds = (-105, 39.99, -104.99, 40)
 *     tiles = list(utiles.tiles(*bounds, zooms=14))
 *     expect = [
 *         utiles.Tile(x=3413, y=6202, z=14),
 *         utiles.Tile(x=3413, y=6203, z=14),
 *     ]
 *     assert sorted(tiles) == sorted(expect)
 *
 * def test_tiles_truncate() -> None:
 *     """Input is truncated"""
 *     assert list(
 *         utiles.tiles(-181.0, 0.0, -170.0, 10.0, zooms=[2], truncate=True)
 *     ) == list(utiles.tiles(-180.0, 0.0, -170.0, 10.0, zooms=[2]))
 *
 * def test_tiles_antimerdian_crossing_bbox() -> None:
 *     """Antimeridian-crossing bounding boxes are handled"""
 *     bounds = (175.0, 5.0, -175.0, 10.0)
 *     assert len(list(utiles.tiles(*bounds, zooms=[2]))) == 2
 *
 * def test_global_tiles_clamped() -> None:
 *     """Y is clamped to (0, 2 ** zoom - 1)"""
 *     tiles = list(utiles.tiles(-180, -90, 180, 90, [1]))
 *     assert len(tiles) == 4
 *     assert min(t.y for t in tiles) == 0
 *     assert max(t.y for t in tiles) == 1
 * ```
 */

describe("tiles-gen", () => {
  test("tile2bbox", () => {
    const testTile = [486, 332, 10] as [number, number, number];
    const expected = [
      -9.140_625, 53.120_405_283_106_57, -8.789_062_5, 53.330_872_983_017_04,
    ] as const;
    const output = xyz2bbox(testTile);
    expect(output).toStrictEqual(expected);
    const bounds = xyz2bbox(testTile);
    expect(bounds).toStrictEqual(bounds);
  });

  test("tile2bbox 2", () => {
    const testTile = [750, 2550, 12] as [number, number, number];
    const expected = [
      -114.082_031_25, -40.380_028_402_511_82, -113.994_140_625,
      -40.313_043_208_880_906,
    ] as const;
    const output = xyz2bbox(testTile);
    expect(output).toStrictEqual(expected);
    const bounds = xyz2bbox(testTile);
    expect(bounds).toStrictEqual(bounds);
  });

  test("tiles", () => {
    const bounds = [-105, 39.99, -104.99, 40] as [
      number,
      number,
      number,
      number,
    ];
    const tilesArr = tilesarr({ bbox: bounds, zooms: [14] });
    expect(tilesArr).toBeTruthy();
    const expected = [
      [3413, 6202, 14],
      [3413, 6203, 14],
    ];
    expect(tilesArr).toStrictEqual(expected);
    expect(tilesArr.length).toBe(2);

    expect(ntiles({ bbox: bounds, zooms: [14] })).toBe(2);
  });

  test("tiles-antimeridian-crossing-bbox", () => {
    const bounds = [175, 5, -175, 10] as [number, number, number, number];
    const tilesArr = tilesarr({ bbox: bounds, zooms: [2] });
    expect(tilesArr).toBeTruthy();
    expect(tilesArr.length).toBe(2);
    const expected = [
      [0, 1, 2],
      [3, 1, 2],
    ];
    expect(tilesArr).toStrictEqual(expected);
    expect(ntiles({ bbox: bounds, zooms: [2] })).toBe(2);
  });

  test("tiles single zoom", () => {
    const bounds = [-105, 39.99, -104.99, 40] as [
      number,
      number,
      number,
      number,
    ];
    const tilesArr = tilesarr({ bbox: bounds, zooms: 14 });
    expect(tilesArr).toBeTruthy();
    expect(tilesArr.length).toBe(2);
    const expected = [
      [3413, 6202, 14],
      [3413, 6203, 14],
    ];
    expect(tilesArr).toStrictEqual(expected);
  });

  test("tiles truncate", () => {
    const bounds = [-181, 0, -170, 10] as [number, number, number, number];
    const boundsTruncated = [-180, 0, -170, 10] as [
      number,
      number,
      number,
      number,
    ];
    const tilesArr = tilesarr({ bbox: boundsTruncated, zooms: [2] });
    const tilesArrTruncated = tilesarr({
      bbox: bounds,
      zooms: [2],
      truncate: true,
    });
    expect(tilesArr).toStrictEqual(tilesArrTruncated);
  });

  test("tiles antimeridian crossing bbox", () => {
    const [a, b] = [
      [175, 5, 180, 10],
      [-180, 5, -175, 10],
    ] as [BBox2d, BBox2d];
    const tilesArr2 = tilesarr({ bbox: b, zooms: 2 });
    const expected2 = [[0, 1, 2]];
    expect(tilesArr2).toBeTruthy();
    expect(tilesArr2.length).toBe(1);
    expect(tilesArr2).toStrictEqual(expected2);

    const tilesArr1 = tilesarr({ bbox: a, zooms: 2 });
    const expected1 = [[3, 1, 2]];
    expect(tilesArr1).toBeTruthy();
    expect(tilesArr1).toStrictEqual(expected1);
    expect(tilesArr1.length).toBe(1);

    const bounds = [175, 5, -175, 10] as [number, number, number, number];
    const tilesArr = tilesarr({ bbox: bounds, zooms: 2 });
    expect(tilesArr).toBeTruthy();
    expect(tilesArr.length).toBe(2);
    const expected = [
      [0, 1, 2],
      [3, 1, 2],
    ];
    expect(tilesArr).toStrictEqual(expected);
  });

  test("global tiles clamped", () => {
    const bounds = [-180, -90, 180, 90] as [number, number, number, number];
    const tilesArr = tilesarr({ bbox: bounds, zooms: 1 });
    expect(tilesArr).toBeTruthy();
    expect(tilesArr.length).toBe(4);
    const expected = [
      [0, 0, 1],
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    expect(tilesArr).toStrictEqual(expected);
  });
});
