 
import * as fs from "node:fs";
import { promises as fsp } from "node:fs";
import { expect, test } from "vitest";
import type { TileArr } from "./types.js";
import * as cover from "./tile-cover.js";

type TestFileLimit = {
  file: string;
  limits: { minzoom: number; maxzoom: number };
};
const TEST_FILE_LIMITS: TestFileLimit[] = [
  {
    file: "road.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 12,
    },
  },
  {
    file: "world.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 6,
    },
  },
  // og
  {
    file: "point.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 15,
    },
  },
  {
    file: "line.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 12,
    },
  },
  {
    file: "edgeline.geojson",
    limits: {
      minzoom: 15,
      maxzoom: 15,
    },
  },
  {
    file: "polygon.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 15,
    },
  },
  {
    file: "multipoint.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 12,
    },
  },
  {
    file: "multiline.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 8,
    },
  },
  {
    file: "uk.geojson",
    limits: {
      minzoom: 7,
      maxzoom: 9,
    },
  },
  {
    file: "building.geojson",
    limits: {
      minzoom: 18,
      maxzoom: 18,
    },
  },
  {
    file: "donut.geojson",
    limits: {
      minzoom: 16,
      maxzoom: 16,
    },
  },
  {
    file: "russia.geojson",
    limits: {
      minzoom: 6,
      maxzoom: 6,
    },
  },
  {
    file: "degenring.geojson",
    limits: {
      minzoom: 11,
      maxzoom: 15,
    },
  },
  {
    file: "invalid_polygon.geojson",
    limits: {
      minzoom: 1,
      maxzoom: 12,
    },
  },
  {
    file: "highzoom.geojson",
    limits: {
      minzoom: 23,
      maxzoom: 23,
    },
  },
  {
    file: "small_poly.geojson",
    limits: {
      minzoom: 10,
      maxzoom: 10,
    },
  },
  {
    file: "spiked.geojson",
    limits: {
      minzoom: 10,
      maxzoom: 10,
    },
  },
  {
    file: "blocky.geojson",
    limits: {
      minzoom: 6,
      maxzoom: 6,
    },
  },
  {
    file: "pyramid.geojson",
    limits: {
      minzoom: 10,
      maxzoom: 10,
    },
  },
  {
    file: "tetris.geojson",
    limits: {
      minzoom: 10,
      maxzoom: 10,
    },
  },
  {
    file: "zero.geojson",
    limits: {
      minzoom: 10,
      maxzoom: 10,
    },
  },
];

async function loadTilesJsonl(
  filepath: string,
): Promise<[number, number, number][]> {
  const str = await fsp.readFile(filepath, "utf8");
  const lines = str.split("\n");
  const tiles = lines
    .filter((line) => line.length > 0)
    .map((line) => JSON.parse(line));
  return tiles as [number, number, number][];
}

function tileSetsDiff(
  a: [number, number, number][],
  b: [number, number, number][],
): {
  inA: [number, number, number][];
  inB: [number, number, number][];
} {
  const aSet = new Set(a.map((tile) => tile.join(",")));
  const bSet = new Set(b.map((tile) => tile.join(",")));
  const inA: TileArr[] = [];
  const inB: TileArr[] = [];
  for (const tile of aSet) {
    if (!bSet.has(tile)) {
      const tInA = tile.split(",").map(Number) as [number, number, number];
      inA.push(tInA);
    }
  }
  for (const tile of bSet) {
    if (!aSet.has(tile)) {
      const tInB = tile.split(",").map(Number) as [number, number, number];
      inB.push(tInB);
    }
  }
  return { inA, inB };
}

function tileSetsEqual(
  a: [number, number, number][],
  b: [number, number, number][],
) {
  const aSet = new Set(a.map((tile) => tile.join(",")));
  const bSet = new Set(b.map((tile) => tile.join(",")));
  for (const tile of aSet) {
    if (!bSet.has(tile)) {
      return false;
    }
  }
  for (const tile of bSet) {
    if (!aSet.has(tile)) {
      return false;
    }
  }
  return true;
}

function coverTestData(dirpath: string) {
  const files = fs.readdirSync(dirpath);
  const coverFiles = files.filter(
    (file) =>
      file.endsWith(".geojson") &&
      !file.includes("out.") &&
      !file.endsWith(".tiles.jsonl"),
  );
  return coverFiles
    .map((file) => {
      const limits = TEST_FILE_LIMITS.find(
        (file2limit) => file2limit.file === file,
      );
      if (!limits) {
        throw new Error(`No limits found for ${file}`);
      }
      return {
        file,
        limits: limits.limits,
      };
    })
    .filter((file2limit) => {
      return !file2limit.file.includes("world");
    });
}

function coverWorldTestData(dirpath: string) {
  const files = fs.readdirSync(dirpath);
  const coverFiles = files.filter(
    (file) =>
      (file.endsWith(".geojson") || file.endsWith(".geo.json")) &&
      !file.includes("out.") &&
      !file.endsWith(".tiles.jsonl"),
  );
  // limits are always 6 for world
  return coverFiles.map((file) => {
    return {
      file,
      limits: {
        min_zoom: 1,
        max_zoom: 6,
      },
    };
  });
}

const coverRootTestData = coverTestData(
  // eslint-disable-next-line n/no-path-concat
  `${__dirname}/../test-data/cover`,
);
const coverWorldTestDataArr = coverWorldTestData(
  // eslint-disable-next-line n/no-path-concat
  `${__dirname}/../test-data/cover/world`,
);

function resolveCoverTestFilepath(filename: string): string {
  // eslint-disable-next-line n/no-path-concat
  return `${__dirname}/../test-data/cover/${filename}`;
}

test.each(coverRootTestData)("%s", async (data) => {
  const filepath = resolveCoverTestFilepath(data.file);
  const expectedTilesFilepath = filepath.replace(/\.geojson$/, ".tiles.jsonl");
  const expectedTiles = await loadTilesJsonl(expectedTilesFilepath);
  const str = await fsp.readFile(filepath, "utf8");
  const geojsonData = JSON.parse(str);
  const calculatedTiles = cover.tiles(geojsonData, data.limits);

  calculatedTiles.sort((a, b) => {
    if (a[2] !== b[2]) {
      return a[2] - b[2];
    }
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  const diff = tileSetsDiff(calculatedTiles, expectedTiles);

  if (diff.inA.length > 0 || diff.inB.length > 0) {
    // sorted...
    console.log(
      calculatedTiles
        .map((tile) => {
          return JSON.stringify(tile);
        })
        .join("\n"),
    );
    console.log({
      limits: data.limits,
      expectedTiles,
      calculated: calculatedTiles,
    });
    console.log("inA - calculated", diff.inA);
    console.log("inB - expected", diff.inB);
    const gj = cover.geojson(geojsonData, {
      min_zoom: data.limits.minzoom,
      max_zoom: data.limits.maxzoom,
    });

    console.log(JSON.stringify(gj, null));
  }
  expect(tileSetsEqual(calculatedTiles, expectedTiles)).toBe(true);
});

test.each(coverWorldTestDataArr)("world %s", async (data) => {
  // eslint-disable-next-line n/no-path-concat
  const filepath = `${__dirname}/../test-data/cover/world/${data.file}`;
  const expectedTilesFilepath = filepath.replace(/\.geojson$/, ".tiles.jsonl");
  const expectedTiles = await loadTilesJsonl(expectedTilesFilepath);
  const str = await fsp.readFile(filepath, "utf8");
  const geojsonData = JSON.parse(str);
  const calculatedTiles = cover.tiles(geojsonData, {
    minzoom: 1,
    maxzoom: 6,
  });
  const diff = tileSetsDiff(calculatedTiles, expectedTiles);
  if (diff.inA.length > 0 || diff.inB.length > 0) {
    console.log({
      expectedTiles,
      calculated: calculatedTiles,
    });
    console.log("inA", diff.inA);
    console.log("inB", diff.inB);
  }
  expect(tileSetsEqual(calculatedTiles, expectedTiles)).toBe(true);
});

// test("dev", async () => {
//   const testfiels = await fsp.readdir(`${__dirname}/../test-data/cover`);
//   console.log(testfiels)
//   ////
//   const filepath = `${__dirname}/../test-data/cover/building.geojson`;
//   const expectedTilesFilepath = filepath.replace(/\.geojson$/, ".tiles.jsonl");
//   const expectedTiles = await loadTilesJsonl(expectedTilesFilepath);
//   const str = await fsp.readFile(filepath, "utf8");
//   const rawData = JSON.parse(str);
//   const data = rawData;
//   console.log(data)
//   const calculatedTiles = cover.tiles(
//     data, {
//       min_zoom: 18,
//       max_zoom: 18,
//     }
//   )
//   console.log(calculatedTiles)
//   const diff = tileSetsDiff(calculatedTiles, expectedTiles);
//   if (diff.inA.length > 0 || diff.inB.length > 0) {
//     console.log("inA", diff.inA);
//     console.log("inB", diff.inB);
//   }
//   expect(tileSetsEqual(calculatedTiles, expectedTiles)).toBe(true);
// })
