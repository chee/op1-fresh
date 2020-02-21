/* API Version - 3.1.2 */

/**
 * Represents a physical hardware element that displays some output to the user.
 * 
 * For example, a light, some text etc
 *
 * @since API version 10
 */
function HardwareOutputElement() {}

HardwareOutputElement.prototype = new HardwareElement();
HardwareOutputElement.prototype.constructor = HardwareOutputElement;

/**
 * Sets an optional callback for this element whenever it's state needs to be sent to the hardware. This
 * will be called when calling {@link HardwareSurface#updateHardware()} if the state needs to be sent.
 *
 * @param {java.lang.Runnable} sendStateRunnable
 */
HardwareOutputElement.prototype.onUpdateHardware = function(sendStateRunnable) {};
