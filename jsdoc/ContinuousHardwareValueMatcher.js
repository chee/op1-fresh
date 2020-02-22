/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when a continuous value is input by the user (for example, when moving a
 * slider or turning a knob based on some MIDI message).
 *
 * @see MidiIn#createAbsoluteValueMatcher(String, String, int)
 * @see MidiIn#createAbsoluteCCValueMatcher(int, int)
 * @see MidiIn#createAbsolutePitchBendValueMatcher(int)
 * @since API version 10
 */
function ContinuousHardwareValueMatcher() {}

ContinuousHardwareValueMatcher.prototype = new HardwareInputMatcher();
ContinuousHardwareValueMatcher.prototype.constructor = ContinuousHardwareValueMatcher;
