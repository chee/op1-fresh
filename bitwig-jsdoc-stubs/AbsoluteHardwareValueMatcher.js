/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when an absolute value is input by the user (for example, when moving a
 * slider or turning a knob based on some MIDI message). This matcher can then be set on an
 * {@link AbsoluteHardwareControl} using
 * {@link AbsoluteHardwareControl#setAdjustValueMatcher(AbsoluteHardwareValueMatcher)}.
 *
 * @see MidiIn#createAbsoluteValueMatcher(String, String, int)
 * @see MidiIn#createAbsoluteCCValueMatcher(int, int)
 * @see MidiIn#createAbsolutePitchBendValueMatcher(int)
 * @since API version 10
 */
function AbsoluteHardwareValueMatcher() {}

AbsoluteHardwareValueMatcher.prototype = new ContinuousHardwareValueMatcher();
AbsoluteHardwareValueMatcher.prototype.constructor = AbsoluteHardwareValueMatcher;
