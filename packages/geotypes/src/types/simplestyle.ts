/**
 * GeoJSON SimpleStyle specification types
 * @see https://github.com/mapbox/simplestyle-spec
 */
type HexDigitChar = "a" | "b" | "c" | "d" | "e" | "f";
type HexDigitDec = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type HexDigit = HexDigitChar | HexDigitDec;
type Hex3 = `${HexDigit}${HexDigit}${HexDigit}`;
type HexColor<T extends string> =
  Lowercase<T> extends `#${Hex3}`
    ? T
    : Lowercase<T> extends `#${Hex3}${infer Rest}`
      ? Rest extends Hex3
        ? T
        : never
      : never;

/**
 * Simple style color hex string type '#RGB' or '#RRGGBB'
 */
export type SimpleStyleColor = HexColor<string> | string;

export type SimpleStyleDefaultProperties = {
  title: "";
  description: "";
  "marker-size": "medium";
  "marker-symbol": "";
  "marker-color": "#7e7e7e";
  stroke: "#555555";
  "stroke-opacity": 1;
  "stroke-width": 2;
  fill: "#555555";
  "fill-opacity": 0.6;
};

export type SimpleStyleProperties<TColor extends string = string> = {
  /**
   * A title to show when this item is clicked or hovered over
   */
  title?: string;

  /**
   * A description to show when this item is clicked or hovered over
   */
  description?: string;

  /**
   * A URL to an image to use as the icon
   */
  "marker-size"?: "small" | "medium" | "large";

  /**
   * A symbol to position in the center of this icon if not provided or "", no symbol is
   * overlaid and only the marker is shown Allowed values include - Icon ID - An integer
   * 0 through 9 - A lowercase character "a" through "z"
   */
  "marker-symbol"?: string;

  /**
   * The marker's color; value must follow COLOR RULES
   */
  "marker-color"?: TColor;

  /**
   * the color of a line as part of a polygon, polyline, or multigeometry value must
   * follow COLOR RULES
   */
  stroke?: TColor;

  /**
   * the opacity of the line component of a polygon, polyline, or multigeometry value
   * must be a floating point number greater than or equal to zero and less or equal to   * than one
   */
  "stroke-opacity"?: number;

  /**
   * the width of the line component of a polygon, polyline, or multigeometry value must
/   * be a floating point number greater than or equal to 0
   */
  "stroke-width"?: number;

  /**
   * the color of the interior of a polygon value must follow COLOR RULES
   */
  fill?: TColor;

  /**
   * the opacity of the interior of a polygon. Implementations may choose to set this to
   * 0 for line features value must be a floating point number greater than or equal to
   * zero and less or equal to than one
   */
  "fill-opacity"?: number;

  /**
   * additional properties...
   */
  [k: string]: unknown;
};
