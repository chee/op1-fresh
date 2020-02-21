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
 * @return {com.bitwig.extension.controller.api.HardwareAction}
 */
HardwareControl.prototype.beginTouchAction = function() {};

/**
 * Action that happens when the user stops touching this control.
 *
 * @return {com.bitwig.extension.controller.api.HardwareAction}
 */
HardwareControl.prototype.endTouchAction = function() {};

/**
 * Value that indicates if this control is being touched or not.
 *
 * @return {com.bitwig.extension.controller.api.BooleanValue}
 */
HardwareControl.prototype.isBeingTouched = function() {};

/**
 * Optional light that is in the background of this control.
 *
 * @return {com.bitwig.extension.controller.api.HardwareLight}
 */
HardwareControl.prototype.backgroundLight = function() {};

/**
 * Sets the optional light that is in the background of this control.
 *
 * @param {com.bitwig.extension.controller.api.HardwareLight} light
 */
HardwareControl.prototype.setBackgroundLight = function(light) {};
