/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to access the notes for a specific note key.
 *
 * @since API version 1
 */
function NoteLane() {}

/**
 * Value which represents the id of this lane. is either the note pitch represented by this lane, or in
 * case of audio a lane index (currently always 0 in that case).
 *
 * @return {com.bitwig.extension.controller.api.IntegerValue}
 * @since API version 2
 */
NoteLane.prototype.noteLaneId = function() {};

/**
 * Value  that reports the name of the note lane. Typically the name of a note lane is
 * either equal to the title of an associated drum pad, or reflects the pitch of the note, e.g. "C#3".
 *
 * @return {com.bitwig.extension.controller.api.StringValue}
 */
NoteLane.prototype.name = function() {};

/**
 * Value the color of the note lane. By default the reported color will be the
 * track color, or in case an associated drum pad has a custom color it will be the color of that pad
 *
 * @return {com.bitwig.extension.controller.api.SettableColorValue}
 */
NoteLane.prototype.color = function() {};

/**
 * Plays a note with the key of the note lane and the provided velocity parameter.
 *
 * @param velocity
          the velocity the note should be played with
 * @since API version 1
 */
NoteLane.prototype.play = function(velocity) {};
