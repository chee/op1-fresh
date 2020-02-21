/* API Version - 3.1.2 */

function SettableBeatTimeValue() {}

SettableBeatTimeValue.prototype = new BeatTimeValue();
SettableBeatTimeValue.prototype.constructor = SettableBeatTimeValue;

/**
 * Stepper that steps through beat values. This can be used as a target for a
 * {@link RelativeHardwareControl}.
 *
 * @return {com.bitwig.extension.controller.api.RelativeHardwarControlBindable}
 * @since API version 10
 */
SettableBeatTimeValue.prototype.beatStepper = function() {};
