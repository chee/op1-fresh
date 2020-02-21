/* API Version - 3.1.2 */

/**
 * Represents a hardware device that the user has chosen to communicate with. The hardware devices that the
 * user needs to choose are defined by the
 * {@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)} method.
 *
 * @since API version 7
 */
function HardwareDevice() {}

/**
 * The {@link HardwareDeviceMatcher} that was provided by the controller for identifying this hardware
 * device in {@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)}.
 *
 * @return {com.bitwig.extension.controller.HardwareDeviceMatcher}
 */
HardwareDevice.prototype.deviceMatcher = function() {};
