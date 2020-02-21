/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when a {@link HardwareAction} happens based on some hardware input.
 * 
 * For example, when a certain MIDI CC message happens.
 *
 * @see MidiIn#createActionMatcher(String)
 * @since API version 10
 */
function HardwareActionMatcher() {}

HardwareActionMatcher.prototype = new HardwareInputMatcher();
HardwareActionMatcher.prototype.constructor = HardwareActionMatcher;
