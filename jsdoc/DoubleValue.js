/* API Version - 3.1.2 */

/**
 * Instances of this interface represent double values.
 *
 * @since API version 2
 */
function DoubleValue() {}

DoubleValue.prototype = new Value();
DoubleValue.prototype.constructor = DoubleValue;

/**
 * Gets the current value.
 *
 * @return {double}
 * @since API version 2
 */
DoubleValue.prototype.get = function() {};

/**
 * @return {double}
 */
DoubleValue.prototype.getAsDouble = function() {};
