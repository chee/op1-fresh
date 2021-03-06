/* API Version - 3.1.2 */

/**
 * Defines a simple hardware light that only has an on and off state.
 *
 * @since API version 10
 */
function OnOffHardwareLight() {}

OnOffHardwareLight.prototype = new HardwareLight();
OnOffHardwareLight.prototype.constructor = OnOffHardwareLight;

/**
 * Property that determines if this light is on or not.
 *
 * @return {BooleanHardwareProperty}
 */
OnOffHardwareLight.prototype.isOn = function() {};

/**
 * @param {Color} color
 */
OnOffHardwareLight.prototype.setOnColor = function(color) {};

/**
 * @param {Color} color
 */
OnOffHardwareLight.prototype.setOffColor = function(color) {};

/**
 * @param {HardwareLightVisualState} state
 */
OnOffHardwareLight.prototype.setOnVisualState = function(state) {};

/**
 * @param {HardwareLightVisualState} state
 */
OnOffHardwareLight.prototype.setOffVisualState = function(state) {};

/**
 * @param {java.util.function.Function<java.lang.Boolean,HardwareLightVisualState>} fn
 */
OnOffHardwareLight.prototype.setStateToVisualStateFuncation = function(fn) {};
