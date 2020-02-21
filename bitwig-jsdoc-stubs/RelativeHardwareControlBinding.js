/* API Version - 3.1.2 */

/**
 * Represents a binding from a {@link RelativeHardwareControl} to some target.
 *
 * @since API version 10
 */
function RelativeHardwareControlBinding() {}

RelativeHardwareControlBinding.prototype = new HardwareBindingWithSensitivity();
RelativeHardwareControlBinding.prototype.constructor = RelativeHardwareControlBinding;
