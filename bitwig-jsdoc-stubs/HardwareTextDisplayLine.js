/* API Version - 3.1.2 */

/**
 * Represents a line of text on a {@link HardwareTextDisplay}.
 *
 * @since API version 10
 */
function HardwareTextDisplayLine() {}

/**
 * Property that defines the current text shown.
 *
 * @return {com.bitwig.extension.controller.api.StringHardwareProperty}
 */
HardwareTextDisplayLine.prototype.text = function() {};

/**
 * Property that defines the background color of this line.
 *
 * @return {com.bitwig.extension.controller.api.ColorHardwareProperty}
 */
HardwareTextDisplayLine.prototype.backgroundColor = function() {};

/**
 * Property that defines the text color of this line.
 *
 * @return {com.bitwig.extension.controller.api.ColorHardwareProperty}
 */
HardwareTextDisplayLine.prototype.textColor = function() {};
