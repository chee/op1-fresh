/* API Version - 3.1.2 */

/**
 * Defines a hardware light. There are 2 kinds of lights: {@link OnOffHardwareLight} and
 * {@link MultiStateHardwareLight}.
 *
 * @since API version 10
 */
function HardwareLight() {}

HardwareLight.prototype = new HardwareOutputElement();
HardwareLight.prototype.constructor = HardwareLight;
