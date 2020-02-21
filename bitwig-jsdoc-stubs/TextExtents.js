/* API Version - 3.1.2 */

/**
 * @newSince API version 6
 */
function TextExtents() {}

/**
 * Returns the horizontal distance from the origin to the leftmost part of the glyphs as drawn.
 * Positive if the glyphs lie entirely to the right of the origin.
 *
 * @return {double}
 */
TextExtents.prototype.getBearingX = function() {};

/**
 * Returns the vertical distance from the origin to the topmost part of the glyphs as drawn.
 * Positive only if the glyphs lie completely below the origin; will usually be negative.
 *
 * @return {double}
 */
TextExtents.prototype.getBearingY = function() {};

/**
 * Returns the width of the glyphs as drawn.
 *
 * @return {double}
 */
TextExtents.prototype.getWidth = function() {};

/**
 * Returns the height of the glyphs as drawn.
 *
 * @return {double}
 */
TextExtents.prototype.getHeight = function() {};

/**
 * Returns the distance to advance in the X direction after drawing these glyphs.
 *
 * @return {double}
 */
TextExtents.prototype.getAdvanceX = function() {};

/**
 * Returns the distance to advance in the Y direction after drawing these glyphs. Will typically
 * be zero except for vertical text layout as found in East-Asian languages.
 *
 * @return {double}
 */
TextExtents.prototype.getAdvanceY = function() {};
