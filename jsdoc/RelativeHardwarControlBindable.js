/* API Version - 3.1.2 */

/**
 * Something that can be bound to an {@link RelativeHardwareControl} and can respond to the user input (such
 * as user turning an encoder left or right) in a meaningful way.
 *
 * @since API version 10
 */
function RelativeHardwarControlBindable() {}

RelativeHardwarControlBindable.prototype = new HardwareBindable();
RelativeHardwarControlBindable.prototype.constructor = RelativeHardwarControlBindable;

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {RelativeHardwareControl} hardwareControl
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwarControlBindable.prototype.addBinding = function(hardwareControl) {};

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {RelativeHardwareControl} hardwareControl
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwarControlBindable.prototype.addBindingWithSensitivity = function(hardwareControl, sensitivity) {};
