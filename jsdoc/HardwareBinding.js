/* API Version - 3.1.2 */

/**
 * Represents a binding from some hardware input to a target.
 * 
 * When the binding is no longer needed the {@link #removeBinding()} method can be called to remove it.
 *
 * @since API version 10
 */
function HardwareBinding() {}

/**
 * Removes this binding between its source and target so it is no longer in effect.
 */
HardwareBinding.prototype.removeBinding = function() {};
