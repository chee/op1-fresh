/* API Version - 3.1.2 */

/**
 * Represents a display on some hardware that shows one or more lines of text.
 *
 * @since API version 10
 */
function HardwareTextDisplay() {}

HardwareTextDisplay.prototype = new HardwareOutputElement();
HardwareTextDisplay.prototype.constructor = HardwareTextDisplay;

/**
 * The line at the supplied line index.
 *
 * @param {int} line
 * @return {com.bitwig.extension.controller.api.HardwareTextDisplayLine}
 */
HardwareTextDisplay.prototype.line = function(line) {};
