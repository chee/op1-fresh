/* API Version - 3.1.2 */

/**
 * Defines the current state of a {@link MultiStateHardwareLight}. What this state means is entirely up to the
 * controller implementation.
 *
 * @apiNote The {@link Object#equals(Object)} method <b>MUST</b> be overridden to compare light states
         correctly.
 * @since API version 10
 */
function InternalHardwareLightState() {}

/**
 * The visual state of this light (used by Bitwig Studio to visualize the light when needed).
 *
 * @return {HardwareLightVisualState}
 */
InternalHardwareLightState.prototype.getVisualState = function() {};

/**
 * @param {Object} obj
 * @return {boolean}
 */
InternalHardwareLightState.prototype.equals = function(obj) {};
