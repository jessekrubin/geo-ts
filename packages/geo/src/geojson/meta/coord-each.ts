import type { ExtractCoordType, GeoJSON, GeojsonCoord } from "@jsse/geotypes";
import { coordEach as turfCoordEach } from "@turf/meta";

type CoordEachCallback<TCoord> = (
  currentCoord: TCoord,
  coordIndex: number,
  featureIndex: number,
  multiFeatureIndex: number,
  geometryIndex: number,
) => void;

export function coordEach<
  TGeojson extends GeoJSON<TCoordinate>,
  TCoordinate extends GeojsonCoord = GeojsonCoord,
>(
  geojson: TGeojson,
  callback: CoordEachCallback<ExtractCoordType<TGeojson>>,
  excludeWrapCoord?: boolean,
): undefined | false {
  // @ts-expect-error tcoord mismatch
  return turfCoordEach(geojson, callback, excludeWrapCoord);
}
