/**
 * Degrees to radians conversion factor
 */
export const DEG2RAD = Math.PI / 180;
/**
 * Alias for DEG2RAD
 */
export const D2R = DEG2RAD;

/**
 * Radians to degrees conversion factor
 */
export const RAD2DEG = 180 / Math.PI;
/**
 * Alias for RAD2DEG
 */
export const R2D = RAD2DEG;

/**
 * Earth radius in meters at the equator (WGS84)
 */
export const WGS84_EQUATORIAL_RADIUS = 6_378_137;

/**
 * Maximum zoom level of a tile in a tile-pyramid/mbtiles-file
 */
export const MAX_ZOOM = 30;
/**
 * Maximum zoom level integer id that can be represented by a js number w/o
 * using bigint
 */
export const MAX_ZOOM_INT = 28;

/**
 * Maximum latitude value in degrees
 */
export const MIN_LNG = -180;

/**
 * Minimum latitude value in degrees
 */
export const MAX_LNG = 180;

/**
 * Maximum latitude value in degrees
 */
export const MIN_LAT = -90;

/**
 * Minimum latitude value in degrees
 */
export const MAX_LAT = 90;

/**
 * Maximum latitude value in degrees (Web Mercator)
 */
export const MIN_LAT_WEB = -85.051_128_779_806_6;

/**
 * Minimum latitude value in degrees (Web Mercator)
 */
export const MAX_LAT_WEB = 85.051_128_779_806_6;

/**
 * Maximum longitude value in degrees (Web Mercator)
 */
export const MAX_EXTENT_WGS84 = [
  MIN_LNG,
  MIN_LAT_WEB,
  MAX_LNG,
  MAX_LAT_WEB,
] as const;

/**
 * Maximum longitude value in Web Mercator
 */
export const MIN_LNG_WEB_MERCATOR = -20_037_508.342_789_244;

/**
 * Minimum longitude value in Web Mercator
 */
export const MAX_LNG_WEB_MERCATOR = 20_037_508.342_789_244;

/**
 * Maximum latitude value in Web Mercator
 */
export const MIN_LAT_WEB_MERCATOR = -20_037_508.342_789_244;

/**
 * Minimum latitude value in Web Mercator
 */
export const MAX_LAT_WEB_MERCATOR = 20_037_508.342_789_244;

export const MAX_EXTENT_MERC = [
  MIN_LNG_WEB_MERCATOR,
  MIN_LAT_WEB_MERCATOR,
  MAX_LNG_WEB_MERCATOR,
  MAX_LAT_WEB_MERCATOR,
] as const;

/**
 * Zoom min/max xy 0-30 (2 ** z)
 */
export const Z2 = [
  1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16_384, 32_768,
  65_536, 131_072, 262_144, 524_288, 1_048_576, 2_097_152, 4_194_304, 8_388_608,
  16_777_216, 33_554_432, 67_108_864, 134_217_728, 268_435_456, 536_870_912,
  1_073_741_824,
] as const;
