/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware.
 *
 * @since API version 10
 */
function ObjectHardwareProperty() {}

ObjectHardwareProperty.prototype = new HardwareProperty();
ObjectHardwareProperty.prototype.constructor = ObjectHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {T}
 */
ObjectHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {T}
 */
ObjectHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<T>} sendValueConsumer
 */
ObjectHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {T} value
 */
ObjectHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link BooleanSupplier} that supplies the latest value.
 *
 * @param {java.util.function.Supplier<T>} supplier
 */
ObjectHardwareProperty.prototype.setValueSupplier = function(supplier) {};
