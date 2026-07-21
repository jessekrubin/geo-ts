/* eslint-disable unicorn/no-array-sort */
/* eslint-disable prefer-template */
export type KeyValue<KeyType = string | number, ValueType = never> = {
  key: KeyType;
  value: ValueType;
};

export type CmpFunction = (a: KeyValue, b: KeyValue) => number;
export type Options = {
  fmt?: boolean;
  cmp?: CmpFunction;
  cycles?: boolean;
  sort?: boolean;
};

function stringifyOptions(opts?: Options | CmpFunction): Options {
  if (opts === undefined) {
    return { cmp: undefined, cycles: false, sort: true };
  }
  return typeof opts === "function"
    ? { cmp: opts, cycles: false, sort: true }
    : { sort: true, ...opts };
}

export function fastJsonStableStringify(
  data: undefined,
  options?: Options | CmpFunction,
): undefined;
export function fastJsonStableStringify(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  options?: Options | CmpFunction,
): string;
export function fastJsonStableStringify(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  options?: Options | CmpFunction,
): string | undefined {
  const { cmp, cycles, sort, fmt } = stringifyOptions(options);

  const cmpFn =
    cmp &&
    (function (f: (a: KeyValue, b: KeyValue) => number) {
      return function (node: never) {
        return function (a: PropertyKey, b: PropertyKey) {
          const aKey = typeof a === "symbol" ? a.toString() : a;
          const bKey = typeof b === "symbol" ? b.toString() : b;
          const aobj = { key: aKey, value: node[a] } satisfies KeyValue;
          const bobj = { key: bKey, value: node[b] } satisfies KeyValue;
          return f(aobj, bobj);
        };
      };
    })(cmp);
  // const cmpFn = opts.cmp && cmpFunction(opts.cmp);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const seen: any[] = [];

  if (fmt) {
    const indent = "  ";

    const _stringifyFmt = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      node: any,
      depth: number = 0,
    ): string | undefined => {
      if (node && node.toJSON && typeof node.toJSON === "function") {
        node = node.toJSON();
      }
      if (node === undefined) return;
      if (typeof node === "number")
        return Number.isFinite(node) ? "" + node : "null";
      if (typeof node !== "object") return JSON.stringify(node);

      const newLine = "\n" + indent.repeat(depth + 1);
      let i;
      let out: string;
      if (Array.isArray(node)) {
        if (node.length === 0) return "[]";
        out = "[" + newLine;
        for (i = 0; i < node.length; i++) {
          if (i) out += "," + newLine;
          out += _stringifyFmt(node[i], depth + 1) || "null";
        }
        return out + "\n" + indent.repeat(depth) + "]";
      }

      if (node === null) return "null";

      if (seen.includes(node)) {
        if (cycles) return JSON.stringify("__cycle__");
        throw new TypeError("Converting circular structure to JSON");
      }

      seen.push(node);
      const seenIndex = seen.length - 1;
      const keys = sort
        ? Object.keys(node).sort(cmpFn && cmpFn(node as never))
        : Object.keys(node);
      if (keys.length === 0) return "{}";
      out = "{" + newLine;
      for (i = 0; i < keys.length; i++) {
        const key = keys[i];
        // @ts-expect-error index signature
        const nodeValue = node[key];
        const value = _stringifyFmt(nodeValue, depth + 1);
        if (!value) continue;
        if (i) out += "," + newLine;
        out += JSON.stringify(key) + ": " + value;
      }
      seen.splice(seenIndex, 1);
      return out + "\n" + indent.repeat(depth) + "}";
    };
    return _stringifyFmt(data);
  }

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

    seen.push(node);
    const seenIndex = seen.length - 1;
    const keys = sort
      ? Object.keys(node).sort(cmpFn && cmpFn(node as never))
      : Object.keys(node);
    out = "";
    for (i = 0; i < keys.length; i++) {
      const key = keys[i];
      // @ts-expect-error index signature
      const nodeValue = node[key];
      const value = _stringify(nodeValue);

      if (!value) continue;
      if (out) out += ",";
      out += JSON.stringify(key) + ":" + value;
    }
    seen.splice(seenIndex, 1);
    return "{" + out + "}";
  }

  return _stringify(data);
}

export { fastJsonStableStringify as stringify };
