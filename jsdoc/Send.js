/* API Version - 3.1.2 */

function Send() {}

Send.prototype = new Parameter();
Send.prototype.constructor = Send;

/**
 * Value that reports the color of the channel that this send sends to.
 *
 * @return {SettableColorValue}
 * @since API version 2
 */
Send.prototype.sendChannelColor = function() {};

/**
 * Value that reports if the send happens before or after the fader.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
Send.prototype.isPreFader = function() {};

/**
 * Define how the send will happen.
 * Possible values: AUTO, PRE, POST.
 *
 * @return {SettableEnumValue}
 * @since API version 10
 */
Send.prototype.sendMode = function() {};
