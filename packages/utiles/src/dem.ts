/**
 * Decode mapbox-dem to height
 *
 * REF: https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/
 *
 * height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1)
 * @param r uint8
 * @param g uint8
 * @param b uint8
 * @returns height (probably in meters)
 */
export function rgbdemDecode(r: number, g: number, b: number) {
  return (r * 256 * 256 + g * 256 + b) * 0.1 - 10_000;
}

/**
 * Encode height to mapbox-dem
 * @param z height (probably in meters)
 * @returns [r, g, b] uint8 array/tuple
 */
export function rgbdemEncode(z: number): [r: number, g: number, b: number] {
  const v = Math.round((z + 10_000) / 0.1);
  return [Math.floor(v / 256 / 256), Math.floor(v / 256) % 256, v % 256];
}

/**
 * Decode terrarium-dem to height
 *
 * REF: https://github.com/tilezen/joerd/blob/master/docs/formats.md
 *
 * height = (r * 256 + g + b / 256) - 32768
 * @param r uint8
 * @param g uint8
 * @param b uint8
 * @returns height (probably in meters)
 */
export function terrariumDecode(r: number, g: number, b: number) {
  return r * 256 + g + b / 256 - 32_768;
}

/**
 * Encode height to terrarium-dem
 * @param z height (probably in meters)
 * @returns [r, g, b] uint8 array/tuple
 */
export function terrariumEncode(z: number): [r: number, g: number, b: number] {
  const v = z + 32_768;
  return [Math.floor(v / 256), Math.floor(v % 256), Math.floor((v % 1) * 256)];
}
