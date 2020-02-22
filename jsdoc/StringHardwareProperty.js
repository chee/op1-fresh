/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware (for example, the title of a track).
 *
 * @since API version 10
 */
function StringHardwareProperty() {}

StringHardwareProperty.prototype = new HardwareProperty();
StringHardwareProperty.prototype.constructor = StringHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {string}
 */
StringHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {string}
 */
StringHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<java.lang.String>} sendValueConsumer
 */
StringHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {string} value
 */
StringHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link Supplier} that supplies the latest value.
 *
 * @param {java.util.function.Supplier<java.lang.String>} supplier
 */
StringHardwareProperty.prototype.setValueSupplier = function(supplier) {};

/**
 * The maximum number of characters that can be output or -1 if not specified and there is no limit.
 *
 * @return {int}
 */
StringHardwareProperty.prototype.getMaxChars = function() {};

/**
 * @param {int} maxChars
 */
StringHardwareProperty.prototype.setMaxChars = function(maxChars) {};
