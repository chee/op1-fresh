/* API Version - 3.1.2 */

function UsbInterface() {}

/**
 * The {@link UsbInterfaceMatcher} that was provided by the controller for identifying this device.
 *
 * @return {com.bitwig.extension.controller.UsbInterfaceMatcher}
 */
UsbInterface.prototype.interfaceMatcher = function() {};

/**
 * The list of pipes that have been opened for this interface.
 *
 * @return {java.util.List<com.bitwig.extension.controller.api.UsbPipe>}
 */
UsbInterface.prototype.pipes = function() {};

/**
 * @param {int} index
 * @return {com.bitwig.extension.controller.api.UsbPipe}
 */
UsbInterface.prototype.pipe = function(index) {};

/**
 * @return {int}
 */
UsbInterface.prototype.pipeCount = function() {};
