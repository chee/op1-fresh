/* API Version - 3.1.2 */

/**
 * Creates a proxy object to the NoteInput's NoteLatch component.
 *
 * @since API version 10
 */
function NoteLatch() {}

NoteLatch.prototype = new ObjectProxy();
NoteLatch.prototype.constructor = NoteLatch;

/**
 * Returns an object to enable or disable the note latch component.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
NoteLatch.prototype.isEnabled = function() {};

/**
 * Returns an object to configure the note latch mode.
 * Possible values:
 *  - chord
 *  - toggle
 *  - velocity
 *
 * @return {SettableEnumValue}
 * @since API version 10
 */
NoteLatch.prototype.mode = function() {};

/**
 * Only one note at a time.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
NoteLatch.prototype.mono = function() {};

/**
 * The velocity threshold used by the velocity latch mode.
 *
 * @return {SettableIntegerValue}
 * @since API version 10
 */
NoteLatch.prototype.velocityThreshold = function() {};

/**
 * How many notes are being latched.
 *
 * @return {IntegerValue}
 * @since API version 10
 */
NoteLatch.prototype.activeNotes = function() {};

/**
 * Release all notes being latched.
 *
 * @since API version 10
 */
NoteLatch.prototype.releaseNotes = function() {};
