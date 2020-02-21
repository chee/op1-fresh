/* API Version - 3.1.2 */

/**
 * Represents a physical hardware button on a controller
 *
 * @since API version 10
 */
function HardwareSlider() {}

HardwareSlider.prototype = new AbsoluteHardwareControl();
HardwareSlider.prototype.constructor = HardwareSlider;

/**
 * Indicates if this slider is horizontal rather than vertical.
 *
 * @param {boolean} isHorizontal
 */
HardwareSlider.prototype.setIsHorizontal = function(isHorizontal) {};
