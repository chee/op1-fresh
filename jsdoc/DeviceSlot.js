/* API Version - 3.1.2 */

/**
 * Instances of this interface represent nested FX slots in devices.
 *
 * @since API version 1
 */
function DeviceSlot() {}

DeviceSlot.prototype = new DeviceChain();
DeviceSlot.prototype.constructor = DeviceSlot;
