/**
 * Hgt (height/srtm) types
 */

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type One2Nine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Zero2Seven = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type HgtLongitudes_001_To_009 = `00${One2Nine}`;
type HgtLongitudes_010_To_100 = `0${One2Nine}${Digits}`;
type HgtLongitudes_100_To_179 = `1${Zero2Seven}${Digits}`;
type HgtLongitudes_001_To_179 =
  | HgtLongitudes_001_To_009
  | HgtLongitudes_010_To_100
  | HgtLongitudes_100_To_179;
type HgtLatitudes_01_To_09 = `0${One2Nine}`;
type HgtLatitudes_10_To_89 = `0${One2Nine}${Digits}`;
type HgtLatitudes_01_To_89 = HgtLatitudes_01_To_09 | HgtLatitudes_10_To_89;
type HgtWestLongitudes = `W${HgtLongitudes_001_To_179}` | "W180"; // W000 is invalid
type HgtEastLongitudes = `E${HgtLongitudes_001_To_179}` | "E000"; // E180 is invalid
type HgtNorthLatitudes = `N${HgtLatitudes_01_To_89}` | "N00"; // N90 is invalid
type HgtSouthLatitudes = `S${HgtLatitudes_01_To_89}` | "S90"; // S00 is invalid
export type HgtLatitudes = HgtNorthLatitudes | HgtSouthLatitudes;

export type HgtLongitudes = HgtEastLongitudes | HgtWestLongitudes;
export type NorthEastHgtString = `${HgtNorthLatitudes}${HgtEastLongitudes}`;
export type NorthWestHgtString = `${HgtNorthLatitudes}${HgtWestLongitudes}`;
export type SouthEastHgtString = `${HgtSouthLatitudes}${HgtEastLongitudes}`;
export type SouthWestHgtString = `${HgtSouthLatitudes}${HgtWestLongitudes}`;

/**
 * HGT (height/srtm) filename types
 *
 * There are 180 * 360 = 64,800 possible hgt strings.
 *
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
export type HgtString =
  | NorthEastHgtString
  | NorthWestHgtString
  | SouthEastHgtString
  | SouthWestHgtString;
