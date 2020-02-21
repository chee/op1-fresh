/* API Version - 3.1.2 */

/**
 * Represents a physical hardware button on a controller
 *
 * @since API version 10
 */
function HardwareButton() {}

HardwareButton.prototype = new HardwareControl();
HardwareButton.prototype.constructor = HardwareButton;

/**
 * Action that happens when the user presses the button.
 *
 * @return {HardwareAction}
 */
HardwareButton.prototype.pressedAction = function() {};

/**
 * Action that happens when the user releases the button.
 *
 * @return {HardwareAction}
 */
HardwareButton.prototype.releasedAction = function() {};

/**
 * Button state
 *
 * @return {BooleanValue}
 */
HardwareButton.prototype.isPressed = function() {};

/**
 * Sets the optional control that represents the aftertouch value for this button.
 *
 * @param {AbsoluteHardwareControl} control
 */
HardwareButton.prototype.setAftertouchControl = function(control) {};

/**
 * An indication of how rounded the corners of this button should be.
 *
 * @param {double} radiusInMM
 */
HardwareButton.prototype.setRoundedCornerRadius = function(radiusInMM) {};
