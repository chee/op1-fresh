/* API Version - 3.1.2 */

/**
 * Defines a list of all the hardware devices that a controller needs.
 *
 * @since API version 7
 */
function HardwareDeviceMatcherList() {}

/**
 * Adds information about a hardware device that is needed and how it can be matched. The hardware device
 * will need to match at least one of the supplied matchers.
 * 
 * For each entry added to this list the user will see a device chooser that lets them select an
 * appropriate device. The information added here is also used for auto detection purposes.
 *
 * @param {HardwareDeviceMatcher} deviceMatchers
 */
HardwareDeviceMatcherList.prototype.add = function(/*...*/deviceMatchers) {};

/**
 * The number of hardware devices in the list.
 *
 * @return {int}
 */
HardwareDeviceMatcherList.prototype.getCount = function() {};

/**
 * @param {int} index
 * @return {HardwareDeviceMatcher[]}
 */
HardwareDeviceMatcherList.prototype.getHardwareDeviceMatchersAt = function(index) {};

/**
 * @return {java.util.List<HardwareDeviceMatcher[]>}
 */
HardwareDeviceMatcherList.prototype.getList = function() {};
