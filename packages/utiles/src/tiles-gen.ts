import type { BBox, BBox2d, BBox3d } from "@jsse/geotypes";
import type { TileArr } from "./types.js";
import { bbox2bboxes, bbox2dify, bboxclip } from "./bbox.js";
import { MAX_LAT_WEB, MAX_LNG, MIN_LAT_WEB, MIN_LNG } from "./const.js";
import { zbox, zboxgen, zboxTilesCount } from "./zbox.js";

export type TilesOptions = {
  bbox?: BBox2d | BBox3d;
  zooms: number[] | number;
  truncate?: boolean;
};

function _tilesopts(options: {
  bbox?: BBox;
  zooms: number[] | number;
  truncate?: boolean;
}): {
  bbox: BBox2d;
  zooms: number[];
  truncate?: boolean;
} {
  const {
    bbox = [MIN_LNG, MIN_LAT_WEB, MAX_LNG, MAX_LAT_WEB],
    zooms,
    truncate,
  } = { ...options };
  return {
    bbox: truncate ? bboxclip(bbox2dify(bbox)) : bbox2dify(bbox),
    zooms: Array.isArray(zooms)
      ? [...new Set(zooms)].sort((a, b) => a - b)
      : [zooms],
  };
}

/**
 * Return number of tiles for bbox and zoom/zooms
 * @param options
 * @param options.bbox Bounding box
 * @param options.zooms Zoom levels
 */
export function ntiles({
  bbox,
  zooms,
}: {
  bbox: BBox;
  zooms: number | number[];
}): number {
  if (Array.isArray(zooms)) {
    return [...new Set(zooms)].reduce(
      (acc, zoom) =>
        acc +
        ntiles({
          bbox,
          zooms: zoom,
        }),
      0,
    );
  }
  const zb = zbox({ bbox, z: zooms });
  return zboxTilesCount(zb);
}

export function* tilesgenz({
  bbox,
  zoom,
}: {
  bbox: BBox;
  zoom: number;
}): Generator<TileArr, void> {
  const zb = zbox({ bbox, z: zoom });
  yield* zboxgen(zb);
}

export function* tilesgen(options: TilesOptions): Generator<TileArr, void> {
  const { bbox: bboxInput, zooms } = _tilesopts(options);
  const bboxes = bbox2bboxes(bboxInput);
  for (const bbox of bboxes) {
    for (const zoom of zooms) {
      yield* tilesgenz({ bbox, zoom });
    }
  }
}

export function tilesarr(options: TilesOptions): TileArr[] {
  return [...tilesgen(options)];
}
