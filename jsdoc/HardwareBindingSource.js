/* API Version - 3.1.2 */

/**
 * Represents the source of a {@link HardwareBinding}.
 *
 * @since API version 10
 */
function HardwareBindingSource() {}

/**
 * Checks if it is possible to make a binding from this source to the supplied target object.
 *
 * @param {Object} target
 * @return {boolean}
 */
HardwareBindingSource.prototype.canBindTo = function(target) {};

/**
 * Binds this source to the supplied target and returns the created binding. This can only be called if the
 * {@link #canBindTo(Object)} returns true.
 *
 * @param {HardwareBindable} target
 * @return {HardwareBindingType}
 */
HardwareBindingSource.prototype.addBinding = function(target) {};

/**
 * Clears all bindings from this source to its targets.
 */
HardwareBindingSource.prototype.clearBindings = function() {};

/**
 * Ensures there is a single binding to the supplied target.
 * 
 * This is a convenience method that is equivalent to calling {@link #clearBindings()} and the
 * {@link #addBinding(HardwareBindable)}
 *
 * @param {HardwareBindable} target
 * @return {HardwareBindingType}
 */
HardwareBindingSource.prototype.setBinding = function(target) {};
