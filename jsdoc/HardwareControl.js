/* API Version - 3.1.2 */

/**
 * Some kind of physical control on a piece of hardware (such as a knob, button, slider etc).
 *
 * @since API version 10
 */
function HardwareControl() {}

HardwareControl.prototype = new HardwareElement();
HardwareControl.prototype.constructor = HardwareControl;

/**
 * Action that happens when the user touches this control.
 *
 * @return {HardwareAction}
 */
HardwareControl.prototype.beginTouchAction = function() {};

/**
 * Action that happens when the user stops touching this control.
 *
 * @return {HardwareAction}
 */
HardwareControl.prototype.endTouchAction = function() {};

/**
 * Value that indicates if this control is being touched or not.
 *
 * @return {BooleanValue}
 */
HardwareControl.prototype.isBeingTouched = function() {};

/**
 * Optional light that is in the background of this control.
 *
 * @return {HardwareLight}
 */
HardwareControl.prototype.backgroundLight = function() {};

/**
 * Sets the optional light that is in the background of this control.
 *
 * @param {HardwareLight} light
 */
HardwareControl.prototype.setBackgroundLight = function(light) {};
