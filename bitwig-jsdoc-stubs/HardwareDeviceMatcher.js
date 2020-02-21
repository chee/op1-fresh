/* API Version - 3.1.2 */

/**
 * Matcher that can match a particular hardware device that is connected to the user's machine.
 * Sub classes of this define how the hardware is connected.
 * Currently only USB devices are supported.
 *
 * @see UsbDeviceMatcher
 * @see ControllerExtensionDefinition#listHardwareDevices(java.util.List)
 */
function HardwareDeviceMatcher() {}

/**
 * Human friendly name for the kinds of hardware devices this matcher matches.
 *
 * @return {string}
 */
HardwareDeviceMatcher.prototype.getName = function() {};
