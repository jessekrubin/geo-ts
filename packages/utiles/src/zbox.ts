import type { BBox, ZBox } from "@jsse/geotypes";
import type { TileArr } from "./types.js";
import { bbox2dify, bboxclip } from "./bbox.js";
import { tile } from "./utiles.js";

/**
 * Check if ZBox is valid (min <= max, x/y in range) and z >= 0 and ymin <= ymax
 * @param zbox ZBox
 * @returns boolean if ZBox is valid
 */
export function zboxOk(zbox: ZBox): boolean {
  const tileMax = 2 ** zbox.z - 1;
  return (
    zbox.z >= 0 &&
    zbox.min.x >= 0 &&
    zbox.min.y >= 0 &&
    zbox.max.x <= tileMax &&
    zbox.max.y <= tileMax &&
    zbox.min.y <= zbox.max.y
  );
}

export function zboxIsAntimeridian(zbox: ZBox) {
  return zbox.min.x > zbox.max.x;
}

export function zboxAntimeridianSplit(zbox: ZBox): ZBox[] {
  return [
    {
      ...zbox,
      max: { ...zbox.max, x: 2 ** zbox.z - 1 },
    },
    {
      ...zbox,
      min: { ...zbox.min, x: 0 },
    },
  ];
}

export function zbox({ bbox, z }: { bbox: BBox; z: number }): ZBox {
  const [w, s, e, n] = bboxclip(bbox2dify(bbox));
  const [xmin, ymin] = tile(w, n, z);
  const [xmax, ymax] = tile(e, s, z);
  return {
    z,
    min: { x: xmin, y: ymin },
    max: { x: xmax, y: ymax },
  };
}

export function zboxTilesCount(zbox: ZBox): number {
  if (zboxIsAntimeridian(zbox)) {
    return zboxAntimeridianSplit(zbox).reduce(
      (acc, z) => acc + zboxTilesCount(z),
      0,
    );
  }
  return (zbox.max.x - zbox.min.x + 1) * (zbox.max.y - zbox.min.y + 1);
}

export function* zboxgen(zbox: ZBox | ZBox[]): Generator<TileArr> {
  if (Array.isArray(zbox)) {
    for (const z of zbox) {
      yield* zboxgen(z);
    }
    return;
  }
  for (let x = zbox.min.x; x <= zbox.max.x; x++) {
    for (let y = zbox.min.y; y <= zbox.max.y; y++) {
      yield [x, y, zbox.z];
    }
  }
}

export function zboxsort(a: ZBox, b: ZBox): number {
  return (
    a.z - b.z ||
    a.min.x - b.min.x ||
    a.min.y - b.min.y ||
    a.max.x - b.max.x ||
    a.max.y - b.max.y
  );
}
