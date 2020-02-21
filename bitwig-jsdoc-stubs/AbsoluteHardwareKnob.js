/* API Version - 3.1.2 */

/**
 * Represents a physical hardware knob that inputs an absolute value.
 *
 * @see HardwareSurface#createAbsoluteHardwareKnob(String)
 * @since API version 10
 */
function AbsoluteHardwareKnob() {}

AbsoluteHardwareKnob.prototype = new AbsoluteHardwareControl();
AbsoluteHardwareKnob.prototype.constructor = AbsoluteHardwareKnob;
