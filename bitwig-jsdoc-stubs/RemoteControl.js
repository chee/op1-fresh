/* API Version - 3.1.2 */

/**
 * Represents a remote control in Bitwig Studio.
 *
 * @sice API version 2
 */
function RemoteControl() {}

RemoteControl.prototype = new Parameter();
RemoteControl.prototype.constructor = RemoteControl;

/**
 * @return {com.bitwig.extension.controller.api.SettableStringValue}
 */
RemoteControl.prototype.name = function() {};
