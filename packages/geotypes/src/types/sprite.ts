/**
 * Sprites and sprite-sheet types
 *
 * Ref (maplibre): https://maplibre.org/maplibre-style-spec/sprite/
 */

/**
 * An array of two-element arrays, consisting of two numbers that represent the
 * "from" position and the "to" position of areas that can be stretched.
 */
export type SpriteStretch = [x: number, y: number][];

export type SpriteEntry = {
  /**
   * Height of the icon in pixels.
   */
  height: number;
  /**
   * Width of the icon in pixels.
   */
  width: number;
  /**
   * X coordinate of the icon image in the sprite-sheet.
   */
  x: number;
  /**
   * Y coordinate of the icon image in the sprite-sheet.
   */
  y: number;

  /**
   * Pixel ratio of the sprite. Defaults to 1.
   */
  pixel_ratio?: number;

  /**
   * Content rect: content: An array of four numbers, with the first two specifying the left, top corner, and the last two specifying the right, bottom corner. If present, and if the icon uses icon-text-fit, the symbol's text will be fit inside the content box.
   */
  content?: [number, number, number, number];
  /**
   * stretch-x: sprite-stretch
   */
  stretch_x?: SpriteStretch;
  /**
   * stretch-y: sprite-stretch
   */
  stretch_y?: SpriteStretch;
  /**
   * sdf: Boolean. If true then the image is handled as a signed-distance field
   * (SDF) and its color can be set at runtime using the icon-color and
   * icon-halo-color properties. Defaults to false.
   */
  sdf?: boolean;
};

// Type for the result of SpriteJson
export type SpriteJson<TKey extends string = string> = Record<
  TKey,
  SpriteEntry
>;
