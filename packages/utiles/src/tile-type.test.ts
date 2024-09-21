import fs from "node:fs";

import { expect, test } from "vitest";
import * as tiletype from "./tile-type.js";

// resolve filepath for test data
function filepathResolve(filename: string) {
  // eslint-disable-next-line n/no-path-concat
  return `${__dirname}/../test-data/tile-type/${filename}`;
}

function readTestFile(filename: string): Uint8Array {
  return new Uint8Array(fs.readFileSync(filepathResolve(filename)));
}
const files = {
  jpg: readTestFile("0.jpeg"),
  png: readTestFile("0.png"),
  gif: readTestFile("0.gif"),
  webp: readTestFile("0.webp"),
  pbf: readTestFile("0.vector.pbf"),
  pbfz: readTestFile("0.vector.pbfz"),
  unknown: readTestFile("unknown.txt"),
  webpLossless: readTestFile("tux.webp"),
  webpExtended: readTestFile("tux_alpha.webp"),
};

test("type", () => {
  expect("jpg").toBe(tiletype.type(files.jpg));
  expect("png").toBe(tiletype.type(files.png));
  expect("gif").toBe(tiletype.type(files.gif));
  expect("webp").toBe(tiletype.type(files.webp));
  expect("webp").toBe(tiletype.type(files.webpLossless));
  expect("webp").toBe(tiletype.type(files.webpExtended));
  expect("pbf").toBe(tiletype.type(files.pbf));
  expect("pbf").toBe(tiletype.type(files.pbfz));
  expect(false).toBe(tiletype.type(files.unknown));
});

test("headers", () => {
  expect({ "Content-Type": "image/jpeg" }).toEqual(tiletype.headers(files.jpg));
  expect({ "Content-Type": "image/png" }).toEqual(tiletype.headers(files.png));
  expect({ "Content-Type": "image/gif" }).toEqual(tiletype.headers(files.gif));
  expect({ "Content-Type": "image/webp" }).toEqual(
    tiletype.headers(files.webp),
  );
  expect({
    "Content-Type": "application/x-protobuf",
    "Content-Encoding": "deflate",
  }).toEqual(tiletype.headers(files.pbf));
  expect({
    "Content-Type": "application/x-protobuf",
    "Content-Encoding": "gzip",
  }).toEqual(tiletype.headers(files.pbfz));
  expect({}).toEqual(tiletype.headers(false));
});

test("dimensions", () => {
  expect([256, 256]).toEqual(tiletype.dimensions(files.png));
  expect([640, 400]).toEqual(
    tiletype.dimensions(readTestFile("png-640x400.png")),
  );
  expect([256, 256]).toEqual(tiletype.dimensions(files.jpg));
  expect([640, 400]).toEqual(
    tiletype.dimensions(readTestFile("jpg-640x400.jpg")),
  );
  expect([256, 256]).toEqual(tiletype.dimensions(files.gif));
  expect([990, 1050]).toEqual(
    tiletype.dimensions(readTestFile("gif-990x1050.gif")),
  );
  expect([256, 256]).toEqual(tiletype.dimensions(files.webp));
  expect([550, 368]).toEqual(
    tiletype.dimensions(readTestFile("webp-550x368.webp")),
  );

  expect([386, 395]).toEqual(tiletype.dimensions(files.webpLossless));
  expect([386, 395]).toEqual(tiletype.dimensions(files.webpExtended));
});

// test('executable: success', function(done) {
//     exec(cmd + ' ' + path.resolve(__dirname + '/fixtures/0.vector.pbf'), function(err, stdout, stderr) {
//         expect(err).toBeFalsy();
//         expect(stdout).toBe('pbf\n');
//         expect(stderr).toBeFalsy();
//         done();
//     });
// });
//
// test('executable: unknown', function(done) {
//     exec(cmd + ' ' + path.resolve(__dirname + '/fixtures/unknown.txt'), function(err, stdout, stderr) {
//         expect(err.code).toBe(3);
//         expect(stdout).toBeFalsy();
//         expect(stderr).toBe('Could not determine tile type\n');
//         done();
//     });
// });
//
// test('executable: no file', function(done) {
//     exec(cmd, function(err, stdout, stderr) {
//         expect(err.code).toBe(1);
//         expect(stdout).toBeFalsy();
//         expect(stderr === 'Error: ENOENT, open \'\'\n' ||
//              stderr === 'Error: ENOENT: no such file or directory, open \'\'\n').toBeTruthy();
//         done();
//     });
// });
