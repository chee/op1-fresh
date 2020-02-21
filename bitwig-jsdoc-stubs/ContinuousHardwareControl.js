/* API Version - 3.1.2 */

/**
 * Represents a hardware control that can input a relative or absolute value (for example, a slider, knob,
 * relative encoder...).
 *
 * @since API version 10
 */
function ContinuousHardwareControl() {}

ContinuousHardwareControl.prototype = new HardwareControl();
ContinuousHardwareControl.prototype.constructor = ContinuousHardwareControl;

/**
 * An optional button that can be associated with this control when this control can also act as a button
 * (e.g by pressing down on it).
 *
 * @return {HardwareButton}
 */
ContinuousHardwareControl.prototype.hardwareButton = function() {};

/**
 * Sets an optional button that can be associated with this control when this control can also act as a
 * button (e.g by pressing down on it).
 *
 * @param {HardwareButton} button
 */
ContinuousHardwareControl.prototype.setHardwareButton = function(button) {};
