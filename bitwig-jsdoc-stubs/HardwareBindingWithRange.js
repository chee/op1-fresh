/* API Version - 3.1.2 */

/**
 * Represents a binding from some hardware input to a ranged value.
 *
 * @since API version 10
 */
function HardwareBindingWithRange() {}

HardwareBindingWithRange.prototype = new HardwareBinding();
HardwareBindingWithRange.prototype.constructor = HardwareBindingWithRange;

/**
 * Sets the minimum normalized value (0...1) that should be used for this binding.
 *
 * @param {double} min
 */
HardwareBindingWithRange.prototype.setMinNormalizedValue = function(min) {};

/**
 * Sets the maximum normalized value (0...1) that should be used for this binding.
 *
 * @param {double} max
 */
HardwareBindingWithRange.prototype.setMaxNormalizedValue = function(max) {};

/**
 * Sets the normalized range (0...1) that should be used for this binding.
 *
 * @param {double} min
 * @param {double} max
 */
HardwareBindingWithRange.prototype.setNormalizedRange = function(min, max) {};
