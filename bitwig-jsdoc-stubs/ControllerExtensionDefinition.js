/* API Version - 3.1.2 */

/**
 * Defines an extension that enabled a controller to work with Bitwig Studio.
 */
function ControllerExtensionDefinition() {}

/**
 * @return {string}
 */
ControllerExtensionDefinition.prototype.toString = function() {};

/**
 * The vendor of the controller that this extension is for.
 *
 * @return {string}
 */
ControllerExtensionDefinition.prototype.getHardwareVendor = function() {};

/**
 * The model name of the controller that this extension is for.
 *
 * @return {string}
 */
ControllerExtensionDefinition.prototype.getHardwareModel = function() {};

/**
 * The number of MIDI in ports that this controller extension has.
 *
 * @return {int}
 */
ControllerExtensionDefinition.prototype.getNumMidiInPorts = function() {};

/**
 * The number of MIDI out ports that this controller extension has.
 *
 * @return {int}
 */
ControllerExtensionDefinition.prototype.getNumMidiOutPorts = function() {};

/**
 * Obtains a {@link AutoDetectionMidiPortNamesList} that defines the names of the MIDI in and out ports
 * that can be used for auto detection of the controller for the supplied platform type.
 *
 * @param {com.bitwig.extension.api.PlatformType} platformType
 * @return {com.bitwig.extension.controller.AutoDetectionMidiPortNamesList}
 */
ControllerExtensionDefinition.prototype.getAutoDetectionMidiPortNamesList = function(platformType) {};

/**
 * Lists the {@link AutoDetectionMidiPortNames} that defines the names of the MIDI in and out ports that
 * can be used for auto detection of the controller for the supplied platform type.
 *
 * @param {com.bitwig.extension.controller.AutoDetectionMidiPortNamesList} list
 * @param {com.bitwig.extension.api.PlatformType} platformType
 */
ControllerExtensionDefinition.prototype.listAutoDetectionMidiPortNames = function(list, platformType) {};

/**
 * @return {com.bitwig.extension.controller.HardwareDeviceMatcherList}
 */
ControllerExtensionDefinition.prototype.getHardwareDeviceMatcherList = function() {};

/**
 * Lists the hardware devices that this controller needs to function. For each device that is listed the
 * user will see a chooser in the preferences for this extension that allows them to choose a connected
 * device. The {@link HardwareDeviceMatcher} will also be used during auto detection to automatically add
 * and select the device if possible.
 *
 * @param {com.bitwig.extension.controller.HardwareDeviceMatcherList} list
 * @since API version 7
 */
ControllerExtensionDefinition.prototype.listHardwareDevices = function(list) {};

/**
 * Creates an instance of this extension.
 *
 * @param {com.bitwig.extension.controller.api.ControllerHost} host
 * @return {com.bitwig.extension.controller.ControllerExtension}
 */
ControllerExtensionDefinition.prototype.createInstance = function(host) {};
