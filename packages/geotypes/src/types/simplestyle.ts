export type SimpleStyleProperties = {
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
   * A symbol to position in the center of this icon if not provided or "", no symbol is overlaid and only the marker is shown Allowed values include - Icon ID - An integer 0 through 9 - A lowercase character "a" through "z"
   */
  "marker-symbol"?: string;

  /**
   * The marker's color; value must follow COLOR RULES
   */
  "marker-color"?: string;

  /**
   * the color of a line as part of a polygon, polyline, or multigeometry value must follow COLOR RULES
   */
  stroke?: string;

  /**
   * the opacity of the line component of a polygon, polyline, or multigeometry value must be a floating point number greater than or equal to zero and less or equal to than one
   */
  "stroke-opacity"?: number;

  /**
   * the width of the line component of a polygon, polyline, or multigeometry value must be a floating point number greater than or equal to 0
   */
  "stroke-width"?: number;

  /**
   * the color of the interior of a polygon value must follow COLOR RULES
   */
  fill?: string;

  /**
   * the opacity of the interior of a polygon. Implementations may choose to set this to 0 for line features value must be a floating point number greater than or equal to zero and less or equal to than one
   */
  "fill-opacity"?: number;

  /**
   * additional properties...
   */
  [k: string]: unknown;
};
