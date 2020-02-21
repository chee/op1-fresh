/* API Version - 3.1.2 */

/**
 * Something that can be bound to a hardware action (such as user pressing a button).
 *
 * @since API version 10
 */
function HardwareActionBindable() {}

HardwareActionBindable.prototype = new HardwareBindable();
HardwareActionBindable.prototype.constructor = HardwareActionBindable;

/**
 * Binds this target to the supplied {@link HardwareAction} so that when the hardware action occurs this
 * target is invoked.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {com.bitwig.extension.controller.api.HardwareAction} action
 * @return {com.bitwig.extension.controller.api.HardwareActionBinding}
 */
HardwareActionBindable.prototype.addBinding = function(action) {};

/**
 * Invokes the action.
 *
 * @since API version 1
 */
HardwareActionBindable.prototype.invoke = function() {};
