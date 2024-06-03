import { type TileArr, siblings } from "./lib.js";

export {
  quadkey2xyz as quadkeyToTile,
  xyz2quadkey as tileToQuadkey,
  xz2lon as tileToLon,
  xy2lat as tileToLat,
  xyz2bbox as tileToBBOX,
  lnglatz2xyzf as pointToTileFraction,
  xyz2geojson as tileToGeoJSON,
  children as getChildren,
  parent as getParent,
  bbox2zoom as getBboxZoom,
  lnglat2xyz as pointToTile,
  bbox2xyz as bboxToTile,
  siblings as getSiblings,
} from "./lib.js";

export function hasTile(tile: TileArr, tiles: TileArr[]): boolean {
  return tiles.some((tile_) => tile_.every((val, i) => val === tile[i]));
}

export function hasSiblings(tile: TileArr, tiles: TileArr[]): boolean {
  return siblings(tile).every((sib) =>
    tiles.some((tile_) => tile_.every((val, i) => val === sib[i])),
  );
}
