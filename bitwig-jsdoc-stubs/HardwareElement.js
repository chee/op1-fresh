/* API Version - 3.1.2 */

/**
 * Represents some physical hardware element. Hardware elements can be {@link HardwareControl}s (e.g. buttons,
 * sliders etc) or {@link HardwareOutputElement}s (e.g lights, text displays etc).
 *
 * @since API version 10
 */
function HardwareElement() {}

/**
 * The unique id associated with this element.
 *
 * @return {string}
 */
HardwareElement.prototype.getId = function() {};

/**
 * An optional label associated with this element.
 *
 * @return {string}
 */
HardwareElement.prototype.getLabel = function() {};

/**
 * Sets the label for this hardware control as written on the hardware.
 *
 * @param {string} label
 */
HardwareElement.prototype.setLabel = function(label) {};

/**
 * The color of the label.
 *
 * @return {com.bitwig.extension.api.Color}
 */
HardwareElement.prototype.getLabelColor = function() {};

/**
 * Sets the color of the label.
 *
 * @param {com.bitwig.extension.api.Color} color
 */
HardwareElement.prototype.setLabelColor = function(color) {};

/**
 * {@link RelativePosition} that defines where the label is.
 *
 * @return {com.bitwig.extension.controller.api.RelativePosition}
 */
HardwareElement.prototype.getLabelPosition = function() {};

/**
 * @param {com.bitwig.extension.controller.api.RelativePosition} position
 */
HardwareElement.prototype.setLabelPosition = function(position) {};

/**
 * The physical bounds of this hardware element on the controller.
 *
 * @param {double} xInMM
 * @param {double} yInMM
 * @param {double} widthInMM
 * @param {double} heightInMM
 */
HardwareElement.prototype.setBounds = function(xInMM, yInMM, widthInMM, heightInMM) {};

/**
 * @return {double}
 */
HardwareElement.prototype.getX = function() {};

/**
 * @return {double}
 */
HardwareElement.prototype.getY = function() {};

/**
 * @return {double}
 */
HardwareElement.prototype.getWidth = function() {};

/**
 * @return {double}
 */
HardwareElement.prototype.getHeight = function() {};
