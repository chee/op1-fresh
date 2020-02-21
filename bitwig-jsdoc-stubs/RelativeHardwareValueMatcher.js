/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when a relative value is input by the user (for example, when moving a
 * slider or turning a knob).
 * 
 * For example, when a certain MIDI CC message happens.
 *
 * @see MidiIn#createRelative2sComplementCCValueMatcher(int, int)
 * @see MidiIn#createRelativeBinOffsetCCValueMatcher(int, int)
 * @see MidiIn#createRelativeSignedBit2CCValueMatcher(int, int)
 * @since API version 10
 */
function RelativeHardwareValueMatcher() {}

RelativeHardwareValueMatcher.prototype = new ContinuousHardwareValueMatcher();
RelativeHardwareValueMatcher.prototype.constructor = RelativeHardwareValueMatcher;
