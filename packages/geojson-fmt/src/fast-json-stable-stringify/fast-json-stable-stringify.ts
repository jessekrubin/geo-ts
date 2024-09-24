/* eslint-disable prefer-template */
export type KeyValue<KeyType = string | number, ValueType = never> = {
  key: KeyType;
  value: ValueType;
};
// export type KeyValue = {
//   key: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   value: any;
// };
export type CmpFunction = (a: KeyValue, b: KeyValue) => number;
export type Options = {
  fmt?: boolean;
  cmp?: CmpFunction;
  cycles?: boolean;
  sort?: boolean;
};

const stringifyOptions = (opts?: Options | CmpFunction): Options => {
  if (opts === undefined) {
    return { cmp: undefined, cycles: false, sort: true };
  } else if (typeof opts === "function") {
    return { cmp: opts, cycles: false, sort: true };
  } else {
    return { sort: true, ...opts };
  }
};

export function fastJsonStableStringifyFmt(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  options?: Options | CmpFunction,
): string | undefined {
  const { cmp, cycles, sort } = stringifyOptions(options);
  const cmpFn =
    cmp &&
    (function (f: (a: KeyValue, b: KeyValue) => number) {
      return function (node: never) {
        return function (a: PropertyKey, b: PropertyKey) {
          const aobj = { key: a, value: node[a] } as KeyValue;
          const bobj = { key: b, value: node[b] } as KeyValue;
          return f(aobj, bobj);
        };
      };
    })(cmp);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const seen: any[] = [];
  const indent = "  ";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _stringify(node: any, depth: number = 0): string | undefined {
    if (node && node.toJSON && typeof node.toJSON === "function") {
      node = node.toJSON();
    }
    if (node === undefined) return;
    if (typeof node === "number")
      return Number.isFinite(node) ? "" + node : "null";
    if (typeof node !== "object") return JSON.stringify(node);

    const newLine = "\n" + indent.repeat(depth + 1);
    let i;
    let out = "\n" + indent.repeat(depth + 1);
    if (Array.isArray(node)) {
      if (node.length === 0) return "[]";
      out = "[" + newLine;
      for (i = 0; i < node.length; i++) {
        if (i) out += "," + newLine;
        out += _stringify(node[i], depth + 1) || "null";
      }
      return out + "\n" + indent.repeat(depth) + "]";
    }

    if (node === null) return "null";

    if (seen.includes(node)) {
      if (cycles) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }

    const seenIndex = seen.push(node) - 1;
    const keys = sort
      ? Object.keys(node).sort(cmpFn && cmpFn(node as never))
      : Object.keys(node);
    if (keys.length === 0) return "{}";
    out = "{" + newLine;
    for (i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = _stringify(node[key], depth + 1);
      if (!value) continue;
      if (i) out += "," + newLine;
      out += JSON.stringify(key) + ": " + value;
    }
    seen.splice(seenIndex, 1);
    return out + "\n" + indent.repeat(depth) + "}";
  }

  return _stringify(data);
}

export function fastJsonStableStringify(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  options?: Options | CmpFunction,
): string | undefined {
  const { cmp, cycles, sort, fmt } = stringifyOptions(options);
  if (fmt) {
    return fastJsonStableStringifyFmt(data, {
      cmp,
      cycles,
      sort,
    });
  }
  const cmpFn =
    cmp &&
    (function (f: (a: KeyValue, b: KeyValue) => number) {
      return function (node: never) {
        return function (a: PropertyKey, b: PropertyKey) {
          const aobj = { key: a, value: node[a] } as KeyValue;
          const bobj = { key: b, value: node[b] } as KeyValue;
          return f(aobj, bobj);
        };
      };
    })(cmp);
  // const cmpFn = opts.cmp && cmpFunction(opts.cmp);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const seen: any[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _stringify(node: any): string | undefined {
    if (node && node.toJSON && typeof node.toJSON === "function") {
      node = node.toJSON();
    }
    if (node === undefined) return;
    if (typeof node === "number")
      return Number.isFinite(node) ? "" + node : "null";
    if (typeof node !== "object") return JSON.stringify(node);

    let i, out;
    if (Array.isArray(node)) {
      out = "[";
      for (i = 0; i < node.length; i++) {
        if (i) out += ",";
        out += _stringify(node[i]) || "null";
      }
      return out + "]";
    }

    if (node === null) return "null";

    if (seen.includes(node)) {
      if (cycles) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }

    const seenIndex = seen.push(node) - 1;
    const keys = sort
      ? Object.keys(node).sort(cmpFn && cmpFn(node as never))
      : Object.keys(node);
    out = "";
    for (i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = _stringify(node[key]);

      if (!value) continue;
      if (out) out += ",";
      out += JSON.stringify(key) + ":" + value;
    }
    seen.splice(seenIndex, 1);
    return "{" + out + "}";
  }

  return _stringify(data);
}

export function stringGenBuilderConcat(
  gen: Generator<string | undefined>,
): string {
  let result = "";
  for (const s of gen) {
    if (s) {
      result += s;
    }
  }
  return result;
}

export function stringGenBuilderPushJoin(
  gen: Generator<string | undefined>,
): string {
  const result: string[] = [];
  for (const s of gen) {
    if (s) {
      result.push(s);
    }
  }
  return result.join("");
}

export function stringGenBuilderArrayJoin(
  gen: Generator<string | undefined, void, unknown>,
): string {
  return [...gen].filter((s) => s !== undefined).join("");
}

export const stringGenBuilder = stringGenBuilderConcat;

export function fastishJsonStableStringify(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  options?: Options | CmpFunction,
): string | undefined {
  // if (!opts) opts = {};
  // if (typeof opts === 'function') opts = { cmp: opts };
  // const cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;
  const { cmp, cycles, sort } = stringifyOptions(options);
  const cmpFn =
    cmp &&
    (function (f: (a: KeyValue, b: KeyValue) => number) {
      return function (node: never) {
        return function (a: PropertyKey, b: PropertyKey) {
          const aobj = { key: a, value: node[a] } as KeyValue;
          const bobj = { key: b, value: node[b] } as KeyValue;
          return f(aobj, bobj);
        };
      };
    })(cmp);

  // const cmpFn = opts.cmp && cmpFunction(opts.cmp);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const seen: any[] = [];

  function* _stringify(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    node: any,
  ): Generator<string | undefined> {
    // string | undefined {
    if (node && node.toJSON && typeof node.toJSON === "function") {
      yield* _stringify(node.toJSON());
      return;
    }

    if (node === undefined) {
      yield;
      return;
    }
    if (typeof node === "number") {
      yield Number.isFinite(node) ? "" + node : "null";
      return;
    }
    if (typeof node !== "object") {
      yield JSON.stringify(node);
      return;
    }

    let out = "";
    if (Array.isArray(node)) {
      // eslint-disable-next-line unicorn/no-for-loop
      for (let i = 0; i < node.length; i++) {
        if (i) out += ",";
        const p = stringGenBuilder(_stringify(node[i]));
        out += p || "null";
      }
      yield "[" + out + "]";
      return;
    }

    if (node === null) {
      yield "null";
      return;
    }

    if (seen.includes(node)) {
      if (cycles) {
        yield JSON.stringify("__cycle__");
        return;
      }
      throw new TypeError("Converting circular structure to JSON");
    }

    const seenIndex = seen.push(node) - 1;
    const keys = sort
      ? Object.keys(node).sort(cmpFn && cmpFn(node as never))
      : Object.keys(node);

    // let out = '';
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = stringGenBuilder(_stringify(node[key]));
      if (!value) continue;
      if (out) out += ",";
      out += JSON.stringify(key) + ":" + value;
    }
    seen.splice(seenIndex, 1);
    yield "{" + out + "}";
  }

  return stringGenBuilder(_stringify(data));
}

export { fastJsonStableStringify as stringify };
