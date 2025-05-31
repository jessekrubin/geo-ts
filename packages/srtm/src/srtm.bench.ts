import { bench } from "vitest";
import { isSrtmString, isSrtmString_v1 } from "./srtm.js";

const TEST_DATA_UPPER = [
  // valid
  { str: "N00E000", ok: true },
  { str: "S90W179", ok: true },
  // invalid - N90, E180, W000, S00
  { str: "N90E000", ok: false },
  { str: "N00E180", ok: false },
  { str: "N00W000", ok: false },
  { str: "S00E000", ok: false },

  // invalid - lat, lng
  { str: "N00E181", ok: false },
  { str: "N00W181", ok: false },
  { str: "N91E000", ok: false },
  { str: "S91E000", ok: false },
  { str: "S00E181", ok: false },
  { str: "S00W181", ok: false },
  { str: "S91W000", ok: false },
];

const TEST_DATA = [
  ...TEST_DATA_UPPER,
  ...TEST_DATA_UPPER.map((d) => ({
    str: d.str.toLowerCase(),
    ok: d.ok,
  })),
];

bench(
  "is-srtm-string",
  () => {
    for (const { str, ok } of TEST_DATA) {
      isSrtmString(str);
    }
  },
  {
    iterations: 10_000,
  },
);

bench(
  "is-srtm-string-v1",
  () => {
    for (const { str, ok } of TEST_DATA) {
      isSrtmString_v1(str);
    }
  },
  {
    iterations: 10_000,
  },
);
