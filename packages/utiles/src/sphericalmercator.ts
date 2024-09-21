import type { BBox2d, Coord2d } from "@jsse/geotypes";
import { DEG2RAD, RAD2DEG } from "./const.js";
import { ll2xy, xy2ll } from "./proj.js";

function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0;
}

type Options = {
  size?: number;
  antimeridian?: boolean;
};

type SphericalMercatorCache = {
  /**
   * Pixel extent at zoom level
   */
  Ac: number[];

  /**
   * Longitude to pixel x at zoom level
   */
  Bc: number[];

  /**
   * Latitude to pixel y at zoom level
   */
  Cc: number[];

  /**
   * Map center in pixels
   */
  zc: number[];
};

export class SphericalMercator {
  private readonly size: number;
  private readonly expansion: number;
  private static cache: Record<number, SphericalMercatorCache> = {};
  private readonly Bc: number[];
  private readonly Cc: number[];
  private readonly zc: number[];
  private readonly Ac: number[];

  constructor(options: Options = {}) {
    this.size = options.size || 256;
    this.expansion = options.antimeridian === true ? 2 : 1;

    if (!SphericalMercator.cache[this.size]) {
      SphericalMercator.cache[this.size] = SphericalMercator.BuildCache(
        this.size,
      );
    }
    const cache = SphericalMercator.GetCache(this.size);
    this.Ac = cache.Ac;
    this.Bc = cache.Bc;
    this.Cc = cache.Cc;
    this.zc = cache.zc;
  }

  public static BuildCache(size: number): SphericalMercatorCache {
    const cacheEntry: SphericalMercatorCache = {
      Ac: [],
      Bc: [],
      Cc: [],
      zc: [],
    };
    let s = size;
    for (let d = 0; d < 30; d++) {
      cacheEntry.Bc.push(s / 360);
      cacheEntry.Cc.push(s / (2 * Math.PI));
      cacheEntry.zc.push(s / 2);
      cacheEntry.Ac.push(s);
      s *= 2;
    }
    return cacheEntry;
  }

  public static GetCache(size: number): SphericalMercatorCache {
    if (!SphericalMercator.cache[size]) {
      SphericalMercator.cache[size] = SphericalMercator.BuildCache(size);
    }
    return SphericalMercator.cache[size];
  }

  // Convert lon/lat to screen pixel value
  px(ll: [number, number], zoom: number): Coord2d {
    if (isFloat(zoom)) {
      const size = this.size * 2 ** zoom;
      const d = size / 2;
      const bc = size / 360;
      const cc = size / (2 * Math.PI);
      const ac = size;
      const f = Math.min(Math.max(Math.sin(DEG2RAD * ll[1]), -0.9999), 0.9999);
      let x = d + ll[0] * bc;
      let y = d + 0.5 * Math.log((1 + f) / (1 - f)) * -cc;
      x = Math.min(x, ac * this.expansion);
      y = Math.min(y, ac);
      return [x, y];
    } else {
      const d = this._zc(zoom);
      const f = Math.min(Math.max(Math.sin(DEG2RAD * ll[1]), -0.9999), 0.9999);
      let x = Math.round(d + ll[0] * this._bc(zoom));
      let y = Math.round(
        d + 0.5 * Math.log((1 + f) / (1 - f)) * -this._cc(zoom),
      );
      x = Math.min(x, this._ac(zoom) * this.expansion);
      y = Math.min(y, this._ac(zoom));
      return [x, y];
    }
  }

  _ac(zoom: number): number {
    return this.Ac[zoom] ?? this.size * 2 ** zoom;
  }

  _bc(zoom: number): number {
    return this.Bc[zoom] ?? this.size / 360;
  }

  _cc(zoom: number): number {
    return this.Cc[zoom] ?? this.size / (2 * Math.PI);
  }

  _zc(zoom: number): number {
    return this.zc[zoom] ?? (this.size * 2 ** zoom) / 2;
  }

  // Convert screen pixel value to lon/lat
  ll(px: [number, number], zoom: number): Coord2d {
    if (isFloat(zoom)) {
      const size = this.size * 2 ** zoom;
      const bc = size / 360;
      const cc = size / (2 * Math.PI);
      const zc = size / 2;
      const g = (px[1] - zc) / -cc;
      const lon = (px[0] - zc) / bc;
      const lat = RAD2DEG * (2 * Math.atan(Math.exp(g)) - 0.5 * Math.PI);
      return [lon, lat];
    } else {
      const g = (px[1] - this._zc(zoom)) / -this._cc(zoom);
      const lon = (px[0] - this._zc(zoom)) / this._bc(zoom);
      const lat = RAD2DEG * (2 * Math.atan(Math.exp(g)) - 0.5 * Math.PI);
      return [lon, lat];
    }
  }

  // Convert tile xyz value to bbox
  bbox(
    x: number,
    y: number,
    zoom: number,
    tms_style: boolean = false,
    srs: string = "WGS84",
  ): [number, number, number, number] {
    if (tms_style) {
      y = 2 ** zoom - 1 - y;
    }
    const ll = [x * this.size, (+y + 1) * this.size] as [number, number]; // lower left
    const ur = [(+x + 1) * this.size, y * this.size] as [number, number]; // upper right
    const bbox = [...this.ll(ll, zoom), ...this.ll(ur, zoom)] as [
      number,
      number,
      number,
      number,
    ];

    return srs === "900913" ? this.convert(bbox, "900913") : bbox;
  }

  // Convert bbox to xyz bounds
  xyz(
    bbox: BBox2d,
    zoom: number,
    tms_style: boolean = false,
    srs: string = "WGS84",
  ): { minX: number; maxX: number; minY: number; maxY: number } {
    if (srs === "900913") {
      bbox = this.convert(bbox, "WGS84");
    }

    const ll = [bbox[0], bbox[1]] as [number, number]; // lower left
    const ur = [bbox[2], bbox[3]] as [number, number]; // upper right
    const px_ll = this.px(ll, zoom);
    const px_ur = this.px(ur, zoom);

    const x = [
      Math.floor(px_ll[0] / this.size),
      Math.floor((px_ur[0] - 1) / this.size),
    ];
    const y = [
      Math.floor(px_ur[1] / this.size),
      Math.floor((px_ll[1] - 1) / this.size),
    ];

    let bounds = {
      minX: Math.max(Math.min(...x), 0),
      minY: Math.max(Math.min(...y), 0),
      maxX: Math.max(...x),
      maxY: Math.max(...y),
    };

    if (tms_style) {
      bounds = {
        ...bounds,
        minY: 2 ** zoom - 1 - bounds.maxY,
        maxY: 2 ** zoom - 1 - bounds.minY,
      };
    }

    return bounds;
  }

  convert2web(bbox: BBox2d): BBox2d {
    const [minX, minY, maxX, maxY] = bbox;
    return [
      ...this.forward([minX, minY]),
      ...this.forward([maxX, maxY]),
    ] as BBox2d;
  }

  convert2ll(bbox: BBox2d): BBox2d {
    const [minX, minY, maxX, maxY] = bbox;
    return [
      ...this.inverse([minX, minY]),
      ...this.inverse([maxX, maxY]),
    ] as BBox2d;
  }

  // Convert projection of given bbox
  convert(
    bbox: BBox2d,
    to: "900913" | "EPSG:3857" | "WEBM" | "LL" | "WGS84",
  ): BBox2d {
    return to === "900913" || to === "EPSG:3857" || to === "WEBM"
      ? this.convert2web(bbox)
      : this.convert2ll(bbox);
  }

  // Convert lon/lat values to 900913 x/y
  forward(ll: Coord2d): Coord2d {
    return ll2xy(ll);
  }

  // Convert 900913 x/y values to lon/lat
  inverse(xy: Coord2d): Coord2d {
    return xy2ll(xy);
  }
}
