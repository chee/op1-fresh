/* API Version - 3.1.2 */

/**
 * Something that can be bound to an {@link AbsoluteHardwareControl} and can respond to the user input (such
 * as user moving a slider up or down) in a meaningful way.
 *
 * @since API version 10
 */
function AbsoluteHardwarControlBindable() {}

AbsoluteHardwarControlBindable.prototype = new HardwareBindable();
AbsoluteHardwarControlBindable.prototype.constructor = AbsoluteHardwarControlBindable;

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {com.bitwig.extension.controller.api.AbsoluteHardwareControl} hardwareControl
 * @return {com.bitwig.extension.controller.api.AbsoluteHardwareControlBinding} The newly created binding
 */
AbsoluteHardwarControlBindable.prototype.addBinding = function(hardwareControl) {};

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way. This target will be adjusted within the supplied normalized
 * range.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {com.bitwig.extension.controller.api.AbsoluteHardwareControl} hardwareControl
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {com.bitwig.extension.controller.api.AbsoluteHardwareControlBinding} The newly created binding
 */
AbsoluteHardwarControlBindable.prototype.addBindingWithRange = function(hardwareControl, minNormalizedValue, maxNormalizedValue) {};
