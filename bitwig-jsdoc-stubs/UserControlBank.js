/* API Version - 3.1.2 */

/**
 * Instances of this interface represent a bank of custom controls that can be manually learned to device
 * parameters by the user.
 *
 * @since API version 1
 */
function UserControlBank() {}

/**
 * Gets the user control at the given bank index.
 *
 * @param index
          the index of the control within the bank
 * @return {com.bitwig.extension.controller.api.Parameter} the requested user control object
 * @since API version 1
 */
UserControlBank.prototype.getControl = function(index) {};
