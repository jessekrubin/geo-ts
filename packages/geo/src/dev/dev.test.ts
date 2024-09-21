import { expect, test } from "vitest";
import * as dev from "./mod.js";

test("dev", () => {
  expect(dev).toBeDefined();
  expect(dev.DEV).toBe("DEV");
});
