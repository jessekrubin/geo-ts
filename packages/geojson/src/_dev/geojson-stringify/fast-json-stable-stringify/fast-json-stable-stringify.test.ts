import { describe, expect, test } from "vitest";
import type { CmpFunction } from "./fast-json-stable-stringify.js";
import { fastJsonStableStringify } from "./fast-json-stable-stringify.js";
import {
  randomJsonArray,
  randomJsonObj,
} from "./fast-json-stable-stringify.test-data.js";

const cmpFunction: CmpFunction = (a, b) => {
  return a.key < b.key ? 1 : -1;
};
describe("fast-json-stable-stringify-unit", () => {
  describe.each([
    { stringify: fastJsonStableStringify, fnid: "fast-json-stable-stringify" },
  ])("$fnid", ({ stringify }) => {
    describe("cmp.js", () => {
      test("custom comparison function", () => {
        expect.assertions(1);
        const obj = { c: 8, b: [{ z: 6, y: 5, x: 4 }, 7], a: 3 };

        const s = stringify(obj, { cmp: cmpFunction });
        expect(s).toBe('{"c":8,"b":[{"z":6,"y":5,"x":4},7],"a":3}');
      });
    });

    describe("nested.js", () => {
      test("nested", () => {
        expect.assertions(1);
        const obj = { c: 8, b: [{ z: 6, y: 5, x: 4 }, 7], a: 3 };
        expect(stringify(obj)).toBe(
          '{"a":3,"b":[{"x":4,"y":5,"z":6},7],"c":8}',
        );
      });

      test("cyclic (default)", () => {
        expect.assertions(1);
        const one: {
          a: number;
          two?: unknown;
        } = { a: 1 };
        const two: {
          a: number;
          one: typeof one;
        } = { a: 2, one };
        one.two = two;
        try {
          stringify(one);
        } catch (error: unknown) {
          const err = error as Error;
          expect(err.toString()).toBe(
            "TypeError: Converting circular structure to JSON",
          );
        }
      });

      test("cyclic (specifically allowed)", () => {
        expect.assertions(1);
        const one: {
          a: number;
          two?: unknown;
        } = { a: 1 };
        const two = { a: 2, one };
        one.two = two;
        expect(stringify(one, { cycles: true })).toBe(
          '{"a":1,"two":{"a":2,"one":"__cycle__"}}',
        );
      });

      test("repeated non-cyclic value", () => {
        expect.assertions(1);
        const one = { x: 1 };
        const two = { a: one, b: one };
        expect(stringify(two)).toBe('{"a":{"x":1},"b":{"x":1}}');
      });

      test("acyclic but with reused obj-property pointers", () => {
        expect.assertions(1);
        const x = { a: 1 };
        const y = { b: x, c: x };
        expect(stringify(y)).toBe('{"b":{"a":1},"c":{"a":1}}');
      });
    });

    describe("stringify.js", () => {
      test("simple object", () => {
        expect.assertions(1);
        const obj = { c: 6, b: [4, 5], a: 3, z: null };
        expect(stringify(obj)).toBe('{"a":3,"b":[4,5],"c":6,"z":null}');
      });

      test("object with undefined", () => {
        expect.assertions(1);
        const obj = { a: 3, z: undefined };
        expect(stringify(obj)).toBe('{"a":3}');
      });

      test("object with null", () => {
        expect.assertions(1);
        const obj = { a: 3, z: null };
        expect(stringify(obj)).toBe('{"a":3,"z":null}');
      });

      test("object with NaN and Infinity", () => {
        expect.assertions(1);
        const obj = { a: 3, b: Number.NaN, c: Number.POSITIVE_INFINITY };
        expect(stringify(obj)).toBe('{"a":3,"b":null,"c":null}');
      });

      test("array with undefined", () => {
        expect.assertions(1);
        const obj = [4, undefined, 6];
        expect(stringify(obj)).toBe("[4,null,6]");
      });

      test("object with empty string", () => {
        expect.assertions(1);
        const obj = { a: 3, z: "" };
        expect(stringify(obj)).toBe('{"a":3,"z":""}');
      });

      test("array with empty string", () => {
        expect.assertions(1);
        const obj = [4, "", 6];
        expect(stringify(obj)).toBe('[4,"",6]');
      });
    });

    describe("to-json.js", () => {
      test("toJSON function", () => {
        expect.assertions(1);
        const obj = {
          one: 1,
          two: 2,
          toJSON() {
            return { one: 1 };
          },
        };
        expect(stringify(obj)).toBe('{"one":1}');
      });

      test("toJSON returns string", () => {
        expect.assertions(1);
        const obj = {
          one: 1,
          two: 2,
          toJSON() {
            return "one";
          },
        };
        expect(stringify(obj)).toBe('"one"');
      });

      test("toJSON returns array", () => {
        expect.assertions(1);
        const obj = {
          one: 1,
          two: 2,
          toJSON() {
            return ["one"];
          },
        };
        expect(stringify(obj)).toBe('["one"]');
      });
    });
  });
});

test.each(
  [
    { obj: { a: 3, b: 4 }, name: "simple object" },
    { obj: randomJsonObj, name: "big object" },
    { obj: randomJsonArray, name: "big array" },
  ].map((o) => [o, JSON.stringify(o)]),
)("fast-json-stable-stringify-fmt: $name", ({ obj }) => {
  const stableStr = fastJsonStableStringify(obj);
  if (stableStr) {
    const indentedStr = fastJsonStableStringify(obj, {
      fmt: true,
    });
    const jsonStringifiedIndent2 = JSON.stringify(
      JSON.parse(stableStr),
      undefined,
      2,
    );
    expect(indentedStr).toBe(jsonStringifiedIndent2);
  }
});
