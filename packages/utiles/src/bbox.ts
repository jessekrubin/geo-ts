import type { BBox, BBox2d, BBox3d } from "@jsse/geotypes";
import type { ZoomInt } from "./types.js";
import { MAX_LAT_WEB, MAX_ZOOM, MIN_LAT_WEB } from "./const.js";

export function bbox2dify(bbox: BBox2d | BBox3d): BBox2d {
  if (bbox.length === 6) {
    return [bbox[0], bbox[1], bbox[3], bbox[4]];
  }
  return bbox;
}

export function bboxIsAntimeridian(bbox: BBox): boolean {
  return (
    (bbox.length === 4 && bbox[0] > bbox[2]) ||
    (bbox.length === 6 && bbox[0] > bbox[3])
  );
}

export function bbox2bboxes(bbox: BBox): [BBox2d, BBox2d] | [BBox2d] {
  const bb2d = bbox2dify(bbox);
  return bboxIsAntimeridian(bb2d)
    ? [
        [-180, bb2d[1], bb2d[2], bb2d[3]],
        [bb2d[0], bb2d[1], 180, bb2d[3]],
      ]
    : [bb2d];
}

export function bbox2zoom(bbox: BBox2d | BBox3d): ZoomInt {
  const bbox2d = bbox2dify(bbox);
  for (let z = 0; z < MAX_ZOOM; z++) {
    const mask = 1 << (32 - (z + 1));
    if (
      (bbox2d[0] & mask) !== (bbox2d[2] & mask) ||
      (bbox2d[1] & mask) !== (bbox2d[3] & mask)
    ) {
      return z as ZoomInt;
    }
  }
  return MAX_ZOOM;
}

export function bboxclip<T extends BBox2d | BBox3d>(bbox: T): T {
  return bbox.length === 4
    ? ([
        Math.min(180, Math.max(-180, bbox[0])),
        Math.max(MIN_LAT_WEB, Math.min(MAX_LAT_WEB, bbox[1])),
        Math.min(180, Math.max(-180, bbox[2])),
        Math.max(MIN_LAT_WEB, Math.min(MAX_LAT_WEB, bbox[3])),
      ] as T)
    : ([
        Math.min(180, Math.max(-180, bbox[0])),
        Math.max(MIN_LAT_WEB, Math.min(MAX_LAT_WEB, bbox[1])),
        bbox[2],
        Math.min(180, Math.max(-180, bbox[3])),
        Math.max(MIN_LAT_WEB, Math.min(MAX_LAT_WEB, bbox[4])),
        bbox[5],
      ] as T);
}
