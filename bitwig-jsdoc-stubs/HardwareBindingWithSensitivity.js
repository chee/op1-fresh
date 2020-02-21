/* API Version - 3.1.2 */

/**
 * A {@link HardwareBinding} that has some sensitivity setting.
 *
 * @since API version 10
 */
function HardwareBindingWithSensitivity() {}

HardwareBindingWithSensitivity.prototype = new HardwareBinding();
HardwareBindingWithSensitivity.prototype.constructor = HardwareBindingWithSensitivity;

/**
 * Sets the sensitivity of this binding.
 *
 * @param {double} sensitivity
 */
HardwareBindingWithSensitivity.prototype.setSensitivity = function(sensitivity) {};
