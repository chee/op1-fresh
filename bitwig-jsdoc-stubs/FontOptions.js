/* API Version - 3.1.2 */

/**
 * Configure the font rendering options.
 *
 * @newSince API version 6
 */
function FontOptions() {}

/**
 * @return {com.bitwig.extension.api.graphics.GraphicsOutput.AntialiasMode}
 */
FontOptions.prototype.getAntialiasMode = function() {};

/**
 * @param {com.bitwig.extension.api.graphics.GraphicsOutput.AntialiasMode} mode
 */
FontOptions.prototype.setAntialiasMode = function(mode) {};

/**
 * @return {com.bitwig.extension.api.graphics.GraphicsOutput.SubPixelOrder}
 */
FontOptions.prototype.getSubPixelOrder = function() {};

/**
 * @param {com.bitwig.extension.api.graphics.GraphicsOutput.SubPixelOrder} subPixelOrder
 */
FontOptions.prototype.setSubPixelOrder = function(subPixelOrder) {};

/**
 * @return {com.bitwig.extension.api.graphics.GraphicsOutput.HintStyle}
 */
FontOptions.prototype.getHintStyle = function() {};

/**
 * @param {com.bitwig.extension.api.graphics.GraphicsOutput.HintStyle} hintStyle
 */
FontOptions.prototype.setHintStyle = function(hintStyle) {};

/**
 * @return {com.bitwig.extension.api.graphics.GraphicsOutput.HintMetrics}
 */
FontOptions.prototype.getHintMetrics = function() {};

/**
 * @param {com.bitwig.extension.api.graphics.GraphicsOutput.HintMetrics} hintMetrics
 */
FontOptions.prototype.setHintMetrics = function(hintMetrics) {};
