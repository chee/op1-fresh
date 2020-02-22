/* API Version - 3.1.2 */

/**
 * Represents a physical hardware knob that inputs a relative value.
 *
 * @see ControllerHost#createRelativeHardwareKnob()
 * @since API version 10
 */
function RelativeHardwareKnob() {}

RelativeHardwareKnob.prototype = new RelativeHardwareControl();
RelativeHardwareKnob.prototype.constructor = RelativeHardwareKnob;
