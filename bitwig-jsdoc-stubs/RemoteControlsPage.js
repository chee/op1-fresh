/* API Version - 3.1.2 */

/**
 * Represents a page of remote controls in a device.
 *
 * @since API version 2
 */
function RemoteControlsPage() {}

RemoteControlsPage.prototype = new ParameterBank();
RemoteControlsPage.prototype.constructor = RemoteControlsPage;

/**
 * @param {int} indexInBank
 * @return {com.bitwig.extension.controller.api.RemoteControl}
 */
RemoteControlsPage.prototype.getParameter = function(indexInBank) {};

/**
 * @return {com.bitwig.extension.controller.api.StringValue}
 */
RemoteControlsPage.prototype.getName = function() {};
