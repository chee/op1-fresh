/* API Version - 3.1.2 */

/**
 * Defines a pipe for talking to an endpoint on a USB device.
 *
 * @since API version 7
 */
function UsbPipe() {}

UsbPipe.prototype = new Pipe();
UsbPipe.prototype.constructor = UsbPipe;

/**
 * The device this endpoint is on.
 *
 * @return {UsbDevice}
 * @since API version 7
 */
UsbPipe.prototype.device = function() {};

/**
 * The {@link UsbEndpointMatcher} that was provided by the controller for identifying the endpoint to use
 * for communication.
 *
 * @return {UsbEndpointMatcher}
 */
UsbPipe.prototype.endpointMatcher = function() {};

/**
 * The endpoint address on the device that this endpoint is for.
 *
 * @return {byte}
 * @since API version 7
 */
UsbPipe.prototype.endpointAddress = function() {};

/**
 * {@link UsbTransferDirection} for this pipe.
 *
 * @return {UsbTransferDirection}
 */
UsbPipe.prototype.direction = function() {};

/**
 * The {@link UsbTransferType} type that this pipe uses for communicating with the USB device.
 *
 * @return {UsbTransferType}
 */
UsbPipe.prototype.transferType = function() {};
