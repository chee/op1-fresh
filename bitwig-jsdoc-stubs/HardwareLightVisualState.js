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
 * @param {Color} lightColor
 * @return {Color}
 */
HardwareLightVisualState.prototype.defaultLabelColorForLightColor = function(lightColor) {};

/**
 * @param {Color} color
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createForColor = function(color) {};

/**
 * @param {Color} color
 * @param {Color} labelColor
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createForColor = function(color, labelColor) {};

/**
 * @param {Color} onColor
 * @param {Color} offColor
 * @param {double} onBlinkTimeInSec
 * @param {double} offBlinkTimeInSec
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createBlinking = function(onColor, offColor, onBlinkTimeInSec, offBlinkTimeInSec) {};

/**
 * @param {Color} onColor
 * @param {Color} offColor
 * @param {Color} labelOnColor
 * @param {Color} labelOffColor
 * @param {double} onBlinkTimeInSec
 * @param {double} offBlinkTimeInSec
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createBlinking = function(onColor, offColor, labelOnColor, labelOffColor, onBlinkTimeInSec, offBlinkTimeInSec) {};

/**
 * @return {boolean}
 */
HardwareLightVisualState.prototype.isBlinking = function() {};

/**
 * @return {Color}
 */
HardwareLightVisualState.prototype.getColor = function() {};

/**
 * @return {Color}
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
 * @return {Color}
 */
HardwareLightVisualState.prototype.getLabelColor = function() {};

/**
 * @return {Color}
 */
HardwareLightVisualState.prototype.getLabelBlinkOffColor = function() {};
