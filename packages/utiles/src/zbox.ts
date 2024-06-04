import type { BBox, Rect2d } from "@jsse/geotypes";
import type { TileArr } from "./types.js";
import { bbox2dify, bboxclip } from "./bbox.js";
import { tile } from "./utiles.js";

export type ZBox = Rect2d & { z: number };

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
