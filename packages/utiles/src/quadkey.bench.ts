import { test } from "vitest";
import { quadkey2xyz } from "./quadkey.js";

const _quadkey2xyz = quadkey2xyz;

const _QUADKEYS = [
  "0",
  "1203",
  "03123012",
  "120301230123",
  "0312301230123012",
  "12030123012301230123",
  "031230123012301230123012",
];

test("quadkey2xyz", async ({ bench }) => {
  await bench("quadkey2xyz", () => {
    for (const quadkey of _QUADKEYS) _quadkey2xyz(quadkey);
  }).run();
});
