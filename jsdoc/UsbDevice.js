/* API Version - 3.1.2 */

/**
 * Defines a USB device that is available for communication.
 *
 * @since API version 7
 */
function UsbDevice() {}

UsbDevice.prototype = new HardwareDevice();
UsbDevice.prototype.constructor = UsbDevice;

/**
 * The {@link UsbDeviceMatcher} that was provided by the controller for identifying this device.
 *
 * @return {UsbDeviceMatcher}
 */
UsbDevice.prototype.deviceMatcher = function() {};

/**
 * The list of {@link UsbInterface}s that have been opened for this device.
 *
 * @return {UsbInterface[]}
 */
UsbDevice.prototype.ifaces = function() {};

/**
 * The {@link UsbInterface} that was claimed using the {@link UsbInterfaceMatcher} defined at the
 * corresponding index in the {@link UsbDeviceMatcher}.
 *
 * @param {int} index
 * @return {UsbInterface}
 */
UsbDevice.prototype.iface = function(index) {};
