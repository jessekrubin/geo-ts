import type { BBox, BBox2d, SrtmString } from "@jsse/geotypes";

export type SrtmTileLng = {
  /**
   * north/south
   */
  ns: "N" | "S";
  /**
   * longitude (0-179) if ew is E, (1-180) if ew is W
   */
  lng: number;
};
export type SrtmTileLat = {
  /**
   * east/west
   */
  ew: "E" | "W";
  /**
   * latitude (0-89) if ns is N, (1-90) if ns is S
   */
  lat: number;
};
export type SrtmTileLngLat = SrtmTileLng & SrtmTileLat;

export type SrtmTileXy = {
  /**
   * lng/column index in the srtm grid (0-359)
   */
  x: number;
  /**
   * lat/row index in the srtm grid (0-179)
   */
  y: number;
};

export type SrtmTileIx = {
  /**
   * Srtm row major index; 0 <= id < 64800
   */
  id: number;
} & SrtmTileXy;
export type SrtmTile = { str: SrtmString; ix: SrtmTileIx } & SrtmTileLngLat;
export type SrtmLike =
  | SrtmTileLngLat
  | SrtmString
  | SrtmTileXy
  | { lng: number; lat: number }
  | number
  | bigint
  | string;

const SRTM_MAX_ID = 180 * 360 - 1;

/**
 *  Longitude — E000‑E179 - UPPER-CASE
 */
export const SRTM_LNG_RE =
  /^(?:E(?:0\d\d|1[0-7]\d)|W(?:0\d[1-9]|0[1-9]\d|1[0-7]\d))$/;

/**
 * Latitude — N00‑N89 or S01‑S89 or S90 (N90 and S00 excluded) - UPPER-CASE
 */
export const SRTM_LAT_RE = /^(?:N[0-8]\d|S(?:0[1-9]|[1-8]\d|90))$/;

/**
 * SRTM string format — N00E000, S90W179, etc. - CASE-INSENSITIVE
 */
export const SRTM_LNG_RE_CASE_INSENSITIVE =
  /^(?:e(?:0\d\d|1[0-7]\d)|w(?:0\d[1-9]|0[1-9]\d|1[0-7]\d))$/i;

/**
 * Latitude — N00‑N89 or S01‑S89 or S90 (N90 and S00 excluded) - CASE-INSENSITIVE
 */
export const SRTM_LAT_RE_CASE_INSENSITIVE =
  /^(?:n[0-8]\d|s(?:0[1-9]|[1-8]\d|90))$/i;

// Regular expression to match valid SRTM strings with latitude and longitude ranges
export const SRTM_RE =
  /^(?:N[0-8]\d|S(?:0[1-9]|[1-8]\d|90))(?:E(?:0\d\d|1[0-7]\d)|W(?:0\d[1-9]|0[1-9]\d|1[0-7]\d))$/;
export const SRTM_RE_CASE_INSENSITIVE =
  /^(?:n[0-8]\d|s(?:0[1-9]|[1-8]\d|90))(?:e(?:0\d\d|1[0-7]\d)|w(?:0\d[1-9]|0[1-9]\d|1[0-7]\d))$/i;

// OLD REGEX-ES (?): did not handle 'S00', 'N90', 'E000', 'W180' cases
export const SRTM_LNG_RE_V1 =
  /^(E1[0-7]\d|E0\d\d|W(1[0-7]\d|0\d[1-9]|0[1-9]\d))$/;
export const SRTM_LAT_RE_V1 = /^(N[0-8]\d|S(?!00)[0-8]\d|S90)$/;
export const SRTM_RE_V1 =
  /^(N[0-8]\d|S(?!00)[0-8]\d|S90)(E1[0-7]\d|E0\d\d|W(1[0-7]\d|0\d[1-9]|0[1-9]\d))$/;

/**
 * Check if a string is a valid SRTM string.
 *
 * Valid SRTM strings are of the form `N00E000`, `S90W179`, etc.
 * Invalid SRTM strings are those that contain:
 *  - S00; b/c it would really be N00
 *  - N90; b/c anything at 90 degrees north should translate to N89
 *  - E000; b/c it would really be W000
 *  - W180; b/c anything at 180 degrees west should translate to W179
 *
 * @param str
 * @returns true if the string is a valid SRTM string, false otherwise
 */
export function isSrtmString(
  str: string,
  ignoreCase: boolean= false,
): str is SrtmString {
  return ignoreCase ? SRTM_RE_CASE_INSENSITIVE.test(str) : SRTM_RE.test(str);
}

/**
 * Check if a string is a valid SRTM string.
 *
 * Original version
 * @param str
 * @returns true if the string is a valid SRTM string, false otherwise
 */
export function isSrtmString_v1(str: string): str is SrtmString {
  return (
    str.length === 7 &&
    !str.startsWith("S00") &&
    !str.startsWith("N90") &&
    !str.endsWith("E180") &&
    !str.endsWith("W000") &&
    SRTM_RE_V1.test(str)
  );
}

/**
 * Return true if the string is a valid SRTM longitude string.
 * @param str - the string to check
 * @param ignoreCase - whether to ignore case (default: false)
 * @returns true if the string is a valid SRTM longitude string, false otherwise
 */
export function isSrtmLngString(str: string, ignoreCase: boolean = false): boolean {
  return ignoreCase ? SRTM_LNG_RE_CASE_INSENSITIVE.test(str) : SRTM_LNG_RE.test(str);
}

/**
 * Return true if the string is a valid SRTM latitude string.
 * @param str - the string to check
 * @param ignoreCase - whether to ignore case (default: false)
 * @returns true if the string is a valid SRTM latitude string, false otherwise
 */
export function isSrtmLatString(str: string, ignoreCase: boolean = false): boolean {
  return ignoreCase ? SRTM_LAT_RE_CASE_INSENSITIVE.test(str) : SRTM_LAT_RE.test(str);
}

/**
 * @example `N01E001` would be geo-bbox { minLat: 1, maxLat: 2, minLon: 1, maxLon: 2 }
 * @example `N01W001` would be geo-bbox { minLat: 1, maxLat: 2, minLon: -1, maxLon: 0 }
 *
 * Invalid hgt strings are are any that contain:
 *   - S00; b/c it would really be N00
 *   - N90; b/c anything at 90 degrees north should translate to N89
 *   - E000; b/c it would really be W000
 *   - W180; b/c anything at 180 degrees west should translate to W179
 */
export function ll2srtm({ lng, lat }: { lng: number; lat: number }): SrtmTile {
  if (lat < -90 || lat > 90 || Number.isNaN(lat)) {
    throw new Error(`latitude ${lat} is out of range`);
  }
  if (lng < -180 || lng > 180 || Number.isNaN(lng)) {
    throw new Error(`longitude ${lng} is out of range`);
  }
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  const latInt = lat === 90 ? 89 : Math.abs(Math.floor(lat));
  const lngInt = lng === 180 || lng === -180 ? 179 : Math.abs(Math.floor(lng));
  const latStr = latInt.toString().padStart(2, "0");
  const lngStr = lngInt.toString().padStart(3, "0");
  const x = (ew === "W" ? -lngInt : lngInt) + 180;
  const y = (ns === "S" ? -latInt : latInt) + 90;
  return {
    ns,
    lat: latInt,
    ew,
    lng: lngInt,
    str: `${ns}${latStr}${ew}${lngStr}` as SrtmString,
    ix: {
      x,
      y,
      id: y * 360 + x,
    },
  };
}


export function parseSrtmString(str: string): SrtmTile {
  if (!isSrtmString(str)) {
    throw new Error(`invalid srtm string: ${str}`);
  }
  const ns = str[0] as "N" | "S";
  const lat = Number.parseInt(str.slice(1, 3), 10);
  const ew = str[3] as "E" | "W";
  const lng = Number.parseInt(str.slice(4, 7), 10);
  const x = (ew === "W" ? -lng : lng) + 180;
  const y = (ns === "S" ? -lat : lat) + 90;
  return {
    str,
    ns,
    lat,
    ew,
    lng,
    ix: {
      x,
      y,
      id: y * 360 + x,
    },
  };
}

export function xy2srtm({ x, y }: SrtmTileXy): SrtmTile {
  if (
    x < 0 ||
    x > 359 ||
    y < 0 ||
    y > 179 ||
    !Number.isInteger(x) ||
    !Number.isInteger(y)
  ) {
    throw new Error(`invalid srtm x/y: ${x}/${y}`);
  }
  return ll2srtm({ lng: x - 180, lat: y - 90 });
}

export function srtmid2srtm(id: number | bigint): SrtmTile {
  if (id < 0 || id > SRTM_MAX_ID || Number.isNaN(id) || !Number.isInteger(id)) {
    throw new Error(`invalid srtm id '${id}'; 0 <= integer < 64800`);
  }
  const x = Number(id) % 360;
  const y = Math.floor(Number(id) / 360);
  return xy2srtm({ x, y });
}

export function srtm2bbox(srtm: SrtmTile): BBox2d {
  const _lng = srtm.ew === "W" ? -srtm.lng : srtm.lng;
  const _lat = srtm.ns === "S" ? -srtm.lat : srtm.lat;
  return [
    _lng,
    _lat, // ll
    _lng + 1,
    _lat + 1, // ur
  ];
}

export function* bbox2srtms(bbox: BBox): Generator<SrtmTile> {
  const [xmin, ymin, xmax, ymax] = bbox;
  // if is antimeridian bbox, split into two bboxes
  if (xmin > xmax) {
    yield* bbox2srtms([xmin, ymin, 180, ymax]);
    yield* bbox2srtms([-180, ymin, xmax, ymax]);
    return;
  }
  const ul = ll2srtm({ lng: xmin, lat: ymin });
  const lr = ll2srtm({ lng: xmax, lat: ymax });
  for (let _y = ul.ix.y; _y <= lr.ix.y; _y++) {
    for (let _x = ul.ix.x; _x <= lr.ix.x; _x++) {
      yield xy2srtm({ x: _x, y: _y });
    }
  }
}

export function parseSrtm(input: SrtmLike): SrtmTile {
  if (typeof input === "number" || typeof input === "bigint") {
    return srtmid2srtm(input);
  }
  if (typeof input === "string") {
    return parseSrtmString(input);
  }
  if ("x" in input && "y" in input) {
    return xy2srtm(input);
  }
  return ll2srtm(input);
}
