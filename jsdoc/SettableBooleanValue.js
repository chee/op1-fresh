/* API Version - 3.1.2 */

/**
 * Instances of this interface represent boolean values.
 *
 * @since API version 1
 */
function SettableBooleanValue() {}

SettableBooleanValue.prototype = new BooleanValue();
SettableBooleanValue.prototype.constructor = SettableBooleanValue;

/**
 * Sets the internal value.
 *
 * @param value
          the new boolean value.
 * @since API version 1
 */
SettableBooleanValue.prototype.set = function(value) {};

/**
 * Toggles the current state. In case the current value is `false`, the new value will be `true` and the
 * other way round.
 *
 * @since API version 1
 */
SettableBooleanValue.prototype.toggle = function() {};

/**
 * @return {HardwareActionBindable}
 */
SettableBooleanValue.prototype.toggleAction = function() {};

/**
 * @return {HardwareActionBindable}
 */
SettableBooleanValue.prototype.setToTrueAction = function() {};

/**
 * @return {HardwareActionBindable}
 */
SettableBooleanValue.prototype.setToFalseAction = function() {};
