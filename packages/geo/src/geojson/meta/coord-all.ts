import type { ExtractCoordType, GeoJSON } from "@jsse/geotypes";
import { coordEach } from "./coord-each.js";

export function coordAll<TGeojson extends GeoJSON>(
  geojson: TGeojson,
): ExtractCoordType<TGeojson>[] {
  const coords: ExtractCoordType<TGeojson>[] = [];
  coordEach(geojson, (coord) => {
    coords.push(coord);
  });
  return coords;
}
