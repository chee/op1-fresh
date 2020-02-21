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
 * @return {com.bitwig.extension.controller.api.BooleanHardwareProperty}
 */
OnOffHardwareLight.prototype.isOn = function() {};

/**
 * @param {com.bitwig.extension.api.Color} color
 */
OnOffHardwareLight.prototype.setOnColor = function(color) {};

/**
 * @param {com.bitwig.extension.api.Color} color
 */
OnOffHardwareLight.prototype.setOffColor = function(color) {};

/**
 * @param {com.bitwig.extension.controller.api.HardwareLightVisualState} state
 */
OnOffHardwareLight.prototype.setOnVisualState = function(state) {};

/**
 * @param {com.bitwig.extension.controller.api.HardwareLightVisualState} state
 */
OnOffHardwareLight.prototype.setOffVisualState = function(state) {};

/**
 * @param {java.util.function.Function<java.lang.Boolean,com.bitwig.extension.controller.api.HardwareLightVisualState>} function
 */
OnOffHardwareLight.prototype.setStateToVisualStateFuncation = function(function) {};
