import type { GeoJSON } from "@jsse/geotypes";
import {
  fastJsonStableStringify,
  type KeyValue,
} from "./fast-json-stable-stringify/fast-json-stable-stringify.js";

type GeoJSONStringifyOptions = {
  fmt?: boolean;
};

/**
 * Sort-fn GeoJSON object keys order is:
 *   - `$schema`
 *   - `type`
 *   - `id`
 *   - `bbox`
 *   - `crs`
 *   - `features`
 *   - `geometry`
 *   - `geometries`
 *   - `properties`
 */

function key2index(key: string | number): number {
  switch (key) {
    case "$schema": {
      return 0;
    }
    case "type": {
      return 1;
    }
    case "id": {
      return 2;
    }
    case "bbox": {
      return 3;
    }
    case "crs": {
      return 4;
    }
    case "features": {
      return 5;
    }
    case "geometry": {
      return 6;
    }
    case "geometries": {
      return 7;
    }
    case "properties": {
      return 8;
    }
    default: {
      return 9;
    }
  }
}

function geojsonKeyCompare(a: KeyValue, b: KeyValue): number {
  const ai = key2index(a.key);
  const bi = key2index(b.key);

  if (ai !== bi) {
    return ai - bi; // compare based on the predefined key order
  }

  // Fallback to lexicographical sort if both keys have the same index
  if (a.key === b.key) {
    return 0;
  }

  return a.key < b.key ? -1 : 1;
}
export function geojsonStringify(
  obj: GeoJSON,
  options?: GeoJSONStringifyOptions,
): string | undefined {
  return fastJsonStableStringify(obj, { cmp: geojsonKeyCompare, ...options });
}
