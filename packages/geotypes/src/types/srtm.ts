/**
 * Srtm (height/srtm) types
 */

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type One2Nine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Zero2Seven = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type SrtmLongitudes_001_To_009 = `00${One2Nine}`;
type SrtmLongitudes_010_To_100 = `0${One2Nine}${Digits}`;
type SrtmLongitudes_100_To_179 = `1${Zero2Seven}${Digits}`;
type SrtmLongitudes_001_To_179 =
  | SrtmLongitudes_001_To_009
  | SrtmLongitudes_010_To_100
  | SrtmLongitudes_100_To_179;
type SrtmLatitudes_01_To_09 = `0${One2Nine}`;
type SrtmLatitudes_10_To_89 = `0${One2Nine}${Digits}`;
type SrtmLatitudes_01_To_89 = SrtmLatitudes_01_To_09 | SrtmLatitudes_10_To_89;
type SrtmWestLongitudes = `W${SrtmLongitudes_001_To_179}` | "W180"; // W000 is invalid
type SrtmEastLongitudes = `E${SrtmLongitudes_001_To_179}` | "E000"; // E180 is invalid
type SrtmNorthLatitudes = `N${SrtmLatitudes_01_To_89}` | "N00"; // N90 is invalid
type SrtmSouthLatitudes = `S${SrtmLatitudes_01_To_89}` | "S90"; // S00 is invalid
export type SrtmLatitudes = SrtmNorthLatitudes | SrtmSouthLatitudes;

export type SrtmLongitudes = SrtmEastLongitudes | SrtmWestLongitudes;
export type NorthEastSrtmString = `${SrtmNorthLatitudes}${SrtmEastLongitudes}`;
export type NorthWestSrtmString = `${SrtmNorthLatitudes}${SrtmWestLongitudes}`;
export type SouthEastSrtmString = `${SrtmSouthLatitudes}${SrtmEastLongitudes}`;
export type SouthWestSrtmString = `${SrtmSouthLatitudes}${SrtmWestLongitudes}`;

/**
 * HGT (height/srtm) filename types
 *
 * There are 180 * 360 = 64,800 possible hgt strings.
 * @example `N01E001` would be geo-bbox { minLat: 1, maxLat: 2, minLon: 1, maxLon: 2 }
 * @example `N01W001` would be geo-bbox { minLat: 1, maxLat: 2, minLon: -1, maxLon: 0 }
 *
 * Invalid hgt strings are are any that contain:
 *   - S00; b/c it would really be N00
 *   - N90; b/c anything at 90 degrees north should translate to N89
 *   - E000; b/c it would really be W000
 *   - W180; b/c anything at 180 degrees west should translate to W179
 *
 * File format ref:
 * https://gis.stackexchange.com/questions/43743/extracting-elevation-from-hgt-file
 * ```
 *     SRTM data are distributed in two levels: SRTM1 (for the U.S. and its territories
 *     and possessions) with data sampled at one arc-second intervals in latitude and
 *     longitude, and SRTM3 (for the world) sampled at three arc-seconds.
 *
 *     Data are divided into one by one degree latitude and longitude tiles in
 *     "geographic" projection, which is to say a raster presentation with equal
 *     intervals of latitude and longitude in no projection at all but easy to
 *     manipulate and mosaic.
 *
 *     File names refer to the latitude and longitude of the lower left corner of the
 *     tile - e.g. N37W105 has its lower left corner at 37 degrees north latitude and
 *     105 degrees west longitude. To be more exact, these coordinates refer to the
 *     geometric center of the lower left pixel, which in the case of SRTM3 data will
 *     be about 90 meters in extent.
 *
 *     Height files have the extension .HGT and are signed two byte integers. The bytes
 *     are in Motorola "big-endian" order with the most significant byte first, directly
 *     readable by systems such as Sun SPARC, Silicon Graphics and Macintosh computers
 *     using Power PC processors. DEC Alpha, most PCs and Macintosh computers built
 *     after 2006 use Intel ("little-endian") order so some byte-swapping may be
 *     necessary. Heights are in meters referenced to the WGS84/EGM96 geoid. Data
 *     voids are assigned the value -32768.
 * ```
 */
export type SrtmString =
  | NorthEastSrtmString
  | NorthWestSrtmString
  | SouthEastSrtmString
  | SouthWestSrtmString;
