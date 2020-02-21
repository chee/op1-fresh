/* API Version - 3.1.2 */

/**
 * Instances of this interface represent beat time values.
 * 
 * Beat time values are double-precision number representing the number of quarter notes, regardless of time-signature.
 *
 * @since API version 1
 */
function BeatTimeValue() {}

BeatTimeValue.prototype = new DoubleValue();
BeatTimeValue.prototype.constructor = BeatTimeValue;

/**
 * Gets the current beat time formatted according to the supplied formatter.
 *
 * @param {BeatTimeFormatter} formatter
 * @return {string}
 * @since API version 2
 */
BeatTimeValue.prototype.getFormatted = function(formatter) {};

/**
 * Gets the current beat time formatted according to the default beat time formatter.
 *
 * @return {string}
 * @since API version 2
 */
BeatTimeValue.prototype.getFormatted = function() {};
