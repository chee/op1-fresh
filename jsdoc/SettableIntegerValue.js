/* API Version - 3.1.2 */

/**
 * Instances of this interface represent integer values.
 *
 * @since API version 1
 */
function SettableIntegerValue() {}

SettableIntegerValue.prototype = new IntegerValue();
SettableIntegerValue.prototype.constructor = SettableIntegerValue;

/**
 * Sets the internal value.
 *
 * @param value
          the new integer value.
 * @since API version 1
 */
SettableIntegerValue.prototype.set = function(value) {};

/**
 * Increases/decrease the internal value by the given amount.
 *
 * @param amount
          the integer amount to increase
 * @since API version 1
 */
SettableIntegerValue.prototype.inc = function(amount) {};
