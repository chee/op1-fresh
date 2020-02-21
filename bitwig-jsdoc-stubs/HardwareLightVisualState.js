/* API Version - 3.1.2 */

/**
 * Defines the visual state of a hardware light so that it can be visualized in Bitwig Studio's user
 * interface.
 * 
 * This is currently only used when simulating hardware when it is not present for debugging but it may be
 * used for other purposes in the future.
 *
 * @since API version 10
 */
function HardwareLightVisualState() {}

/**
 * @param {com.bitwig.extension.api.Color} lightColor
 * @return {com.bitwig.extension.api.Color}
 */
HardwareLightVisualState.prototype.defaultLabelColorForLightColor = function(lightColor) {};

/**
 * @param {com.bitwig.extension.api.Color} color
 * @return {com.bitwig.extension.controller.api.HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createForColor = function(color) {};

/**
 * @param {com.bitwig.extension.api.Color} color
 * @param {com.bitwig.extension.api.Color} labelColor
 * @return {com.bitwig.extension.controller.api.HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createForColor = function(color, labelColor) {};

/**
 * @param {com.bitwig.extension.api.Color} onColor
 * @param {com.bitwig.extension.api.Color} offColor
 * @param {double} onBlinkTimeInSec
 * @param {double} offBlinkTimeInSec
 * @return {com.bitwig.extension.controller.api.HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createBlinking = function(onColor, offColor, onBlinkTimeInSec, offBlinkTimeInSec) {};

/**
 * @param {com.bitwig.extension.api.Color} onColor
 * @param {com.bitwig.extension.api.Color} offColor
 * @param {com.bitwig.extension.api.Color} labelOnColor
 * @param {com.bitwig.extension.api.Color} labelOffColor
 * @param {double} onBlinkTimeInSec
 * @param {double} offBlinkTimeInSec
 * @return {com.bitwig.extension.controller.api.HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createBlinking = function(onColor, offColor, labelOnColor, labelOffColor, onBlinkTimeInSec, offBlinkTimeInSec) {};

/**
 * @return {boolean}
 */
HardwareLightVisualState.prototype.isBlinking = function() {};

/**
 * @return {com.bitwig.extension.api.Color}
 */
HardwareLightVisualState.prototype.getColor = function() {};

/**
 * @return {com.bitwig.extension.api.Color}
 */
HardwareLightVisualState.prototype.getBlinkOffColor = function() {};

/**
 * @return {double}
 */
HardwareLightVisualState.prototype.getOffBlinkTime = function() {};

/**
 * @return {double}
 */
HardwareLightVisualState.prototype.getOnBlinkTime = function() {};

/**
 * @return {com.bitwig.extension.api.Color}
 */
HardwareLightVisualState.prototype.getLabelColor = function() {};

/**
 * @return {com.bitwig.extension.api.Color}
 */
HardwareLightVisualState.prototype.getLabelBlinkOffColor = function() {};
