/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware (for example, the color of a light).
 *
 * @since API version 10
 */
function ColorHardwareProperty() {}

ColorHardwareProperty.prototype = new HardwareProperty();
ColorHardwareProperty.prototype.constructor = ColorHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {com.bitwig.extension.api.Color}
 */
ColorHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {com.bitwig.extension.api.Color}
 */
ColorHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<com.bitwig.extension.api.Color>} sendValueConsumer
 */
ColorHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {com.bitwig.extension.api.Color} value
 */
ColorHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link Supplier} that supplies the latest value.
 *
 * @param {java.util.function.Supplier<com.bitwig.extension.api.Color>} supplier
 */
ColorHardwareProperty.prototype.setValueSupplier = function(supplier) {};
