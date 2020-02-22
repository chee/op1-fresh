/* API Version - 3.1.2 */

/**
 * This class represents a linear gradient.
 * Add color stops between 0 and 1.
 *
 * @newSince API version 6
 */
function GradientPattern() {}

GradientPattern.prototype = new Pattern();
GradientPattern.prototype.constructor = GradientPattern;

/**
 * @param {double} offset
 * @param {Color} color
 */
GradientPattern.prototype.addColorStop = function(offset, color) {};

/**
 * @param {double} offset
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 */
GradientPattern.prototype.addColorStop = function(offset, red, green, blue) {};

/**
 * @param {double} offset
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 */
GradientPattern.prototype.addColorStop = function(offset, red, green, blue, alpha) {};
