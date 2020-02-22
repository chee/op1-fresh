/* API Version - 3.1.2 */

/**
 * Provides 2D vector drawing API very similar to cairo graphics.
 * Please read https://www.cairographics.org/manual/ to get a better idea of how this API works.
 *
 * @since API version 6
 */
function GraphicsOutput() {}

GraphicsOutput.prototype.save = function() {};

GraphicsOutput.prototype.restore = function() {};

GraphicsOutput.prototype.clip = function() {};

GraphicsOutput.prototype.clipPreserve = function() {};

GraphicsOutput.prototype.resetClip = function() {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.translate = function(x, y) {};

/**
 * @param {double} angle
 */
GraphicsOutput.prototype.rotate = function(angle) {};

/**
 * @param {double} factor
 */
GraphicsOutput.prototype.scale = function(factor) {};

/**
 * @param {double} xFactor
 * @param {double} yFactor
 */
GraphicsOutput.prototype.scale = function(xFactor, yFactor) {};

GraphicsOutput.prototype.newPath = function() {};

GraphicsOutput.prototype.newSubPath = function() {};

/**
 * @return {Path}
 */
GraphicsOutput.prototype.copyPath = function() {};

/**
 * @return {Path}
 */
GraphicsOutput.prototype.copyPathFlat = function() {};

/**
 * @param {Path} path
 */
GraphicsOutput.prototype.appendPath = function(path) {};

GraphicsOutput.prototype.closePath = function() {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.moveTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.relMoveTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.lineTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.relLineTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 * @param {double} width
 * @param {double} height
 */
GraphicsOutput.prototype.rectangle = function(x, y, width, height) {};

/**
 * @param {double} xc
 * @param {double} yc
 * @param {double} radius
 * @param {double} angle1
 * @param {double} angle2
 */
GraphicsOutput.prototype.arc = function(xc, yc, radius, angle1, angle2) {};

/**
 * @param {double} xc
 * @param {double} yc
 * @param {double} radius
 * @param {double} angle1
 * @param {double} angle2
 */
GraphicsOutput.prototype.arcNegative = function(xc, yc, radius, angle1, angle2) {};

/**
 * @param {double} centerX
 * @param {double} centerY
 * @param {double} radius
 */
GraphicsOutput.prototype.circle = function(centerX, centerY, radius) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 */
GraphicsOutput.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 */
GraphicsOutput.prototype.relCurveTo = function(x1, y1, x2, y2, x3, y3) {};

GraphicsOutput.prototype.paint = function() {};

/**
 * @param {double} alpha
 */
GraphicsOutput.prototype.paintWithAlpha = function(alpha) {};

/**
 * @param {Image} image
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.mask = function(image, x, y) {};

GraphicsOutput.prototype.fill = function() {};

GraphicsOutput.prototype.fillPreserve = function() {};

GraphicsOutput.prototype.stroke = function() {};

GraphicsOutput.prototype.strokePreserve = function() {};

/**
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 */
GraphicsOutput.prototype.setColor = function(red, green, blue) {};

/**
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 */
GraphicsOutput.prototype.setColor = function(red, green, blue, alpha) {};

/**
 * @param {Color} color
 */
GraphicsOutput.prototype.setColor = function(color) {};

/**
 * @param {Pattern} pattern
 */
GraphicsOutput.prototype.setPattern = function(pattern) {};

/**
 * @param {AntialiasMode} antialiasMode
 */
GraphicsOutput.prototype.setAntialias = function(antialiasMode) {};

/**
 * @param {double} width
 */
GraphicsOutput.prototype.setLineWidth = function(width) {};

/**
 * @param {double[]} dashes
 * @param {double} offset
 */
GraphicsOutput.prototype.setDash = function(dashes, offset) {};

/**
 * @param {double[]} dashes
 */
GraphicsOutput.prototype.setDash = function(dashes) {};

/**
 * @param {FillRule} rule
 */
GraphicsOutput.prototype.setFillRule = function(rule) {};

/**
 * @param {LineCap} lineCap
 */
GraphicsOutput.prototype.setLineCap = function(lineCap) {};

/**
 * @param {LineJoin} lineJoin
 */
GraphicsOutput.prototype.setLineJoin = function(lineJoin) {};

/**
 * @param {double} limit
 */
GraphicsOutput.prototype.setMiterLimit = function(limit) {};

/**
 * @param {Operator} operator
 */
GraphicsOutput.prototype.setOperator = function(operator) {};

/**
 * @param {double} tolerance
 */
GraphicsOutput.prototype.setTolerance = function(tolerance) {};

/**
 * @param {Image} image
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.drawImage = function(image, x, y) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @return {GradientPattern}
 */
GraphicsOutput.prototype.createLinearGradient = function(x1, y1, x2, y2) {};

/**
 * @return {MeshPattern}
 */
GraphicsOutput.prototype.createMeshGradient = function() {};

/**
 * @param {string} text
 */
GraphicsOutput.prototype.showText = function(text) {};

/**
 * @param {double} fontSize
 */
GraphicsOutput.prototype.setFontSize = function(fontSize) {};

/**
 * @param {FontFace} fontFace
 */
GraphicsOutput.prototype.setFontFace = function(fontFace) {};

/**
 * @param {FontOptions} fontOptions
 */
GraphicsOutput.prototype.setFontOptions = function(fontOptions) {};

/**
 * @return {FontExtents}
 */
GraphicsOutput.prototype.getFontExtents = function() {};

/**
 * @param {string} text
 * @return {TextExtents}
 */
GraphicsOutput.prototype.getTextExtents = function(text) {};


AntialiasMode = {
	DEFAULT: 0,
	OFF: 1,
	GOOD: 2,
	BEST: 3,
};

SubPixelOrder = {
	DEFAULT: 0,
	RGB: 1,
	BGR: 2,
	VRGB: 3,
	VBGR: 4,
};

HintStyle = {
	DEFAULT: 0,
	NONE: 1,
	SLIGHT: 2,
	MEDIUM: 3,
	FULL: 4,
};

HintMetrics = {
	DEFAULT: 0,
	ON: 1,
	OFF: 2,
};

FillRule = {
	WINDING: 0,
	EVEN_ODD: 1,
};

LineCap = {
	BUTT: 0,
	LINE: 1,
	SQUARE: 2,
};

LineJoin = {
	MITER: 0,
	ROUND: 1,
	BEVEL: 2,
};

Operator = {
	CLEAR: 0,
	SOURCE: 1,
	OVER: 2,
	IN: 3,
	OUT: 4,
	ATOP: 5,
	DEST: 6,
	DEST_OVER: 7,
	DEST_IN: 8,
	DEST_OUT: 9,
	DEST_ATOP: 10,
	XOR: 11,
	ADD: 12,
	SATURATE: 13,
	MULTIPLY: 14,
	SCREEN: 15,
	OVERLAY: 16,
	DARKEN: 17,
	LIGHTEN: 18,
	COLOR_DODGE: 19,
	COLOR_BURN: 20,
	HARD_LIGHT: 21,
	SOFT_LIGHT: 22,
	DIFFERENCE: 23,
	EXCLUSION: 24,
	HSL_HUE: 25,
	HSL_SATURATION: 26,
	HSL_COLOR: 27,
	HSL_LUMINOSITY: 28,
};