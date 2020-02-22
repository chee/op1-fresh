/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware (for example, if an LED is on or off).
 *
 * @since API version 10
 */
function BooleanHardwareProperty() {}

BooleanHardwareProperty.prototype = new HardwareProperty();
BooleanHardwareProperty.prototype.constructor = BooleanHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {boolean}
 */
BooleanHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {boolean}
 */
BooleanHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<java.lang.Boolean>} sendValueConsumer
 */
BooleanHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {boolean} value
 */
BooleanHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link BooleanSupplier} that supplies the latest value.
 *
 * @param {java.util.function.BooleanSupplier} supplier
 */
BooleanHardwareProperty.prototype.setValueSupplier = function(supplier) {};
