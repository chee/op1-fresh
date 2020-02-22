/* API Version - 3.1.2 */

/**
 * Defines a physical pixel display on the controller.
 *
 * @since API version 10
 */
function HardwarePixelDisplay() {}

HardwarePixelDisplay.prototype = new HardwareOutputElement();
HardwarePixelDisplay.prototype.constructor = HardwarePixelDisplay;

/**
 * The {@link Bitmap} that contains the contents of this display.
 *
 * @return {Bitmap}
 */
HardwarePixelDisplay.prototype.bitmap = function() {};
