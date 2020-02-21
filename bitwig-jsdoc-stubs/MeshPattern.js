/* API Version - 3.1.2 */

/**
 * This represent a 2D gradient.
 *
 * @link https://www.cairographics.org/manual/cairo-cairo-pattern-t.html#cairo-pattern-create-mesh
 * @newSince API version 6
 */
function MeshPattern() {}

MeshPattern.prototype = new Pattern();
MeshPattern.prototype.constructor = MeshPattern;

MeshPattern.prototype.beginPatch = function() {};

MeshPattern.prototype.endPatch = function() {};

/**
 * @param {double} x
 * @param {double} y
 */
MeshPattern.prototype.moveTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
MeshPattern.prototype.lineTo = function(x, y) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 */
MeshPattern.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {};

/**
 * @param {int} corner
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 */
MeshPattern.prototype.setCornerColor = function(corner, red, green, blue) {};

/**
 * @param {int} corner
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 */
MeshPattern.prototype.setCornerColor = function(corner, red, green, blue, alpha) {};
