/* API Version - 3.1.2 */

/**
 * An action that can happen on a hardware control. For example, the user touching it, pressing it, releasing
 * it etc.
 *
 * @since API version 10
 */
function HardwareAction() {}

HardwareAction.prototype = new HardwareBindingSource();
HardwareAction.prototype.constructor = HardwareAction;

/**
 * Sets the {@link HardwareActionMatcher} that is used to recognize when this action happens.
 *
 * @param {HardwareActionMatcher} actionMatcher
 */
HardwareAction.prototype.setActionMatcher = function(actionMatcher) {};

/**
 * Sets the {@link AbsoluteHardwareValueMatcher} that is used to recognize when this action happens and
 * with what pressure.
 * 
 * This is useful for a button press that is pressure sensitive. The pressure can be obtained by creating a
 * custom action with
 * {@link ControllerHost#createAction(java.util.function.DoubleConsumer, java.util.function.Supplier)} and
 * then binding the created action to this {@link HardwareAction}.
 *
 * @param {AbsoluteHardwareValueMatcher} actionMatcher
 */
HardwareAction.prototype.setPressureActionMatcher = function(actionMatcher) {};

/**
 * Checks if this action is supported (that is, it has a {@link HardwareActionMatcher} that can detect it).
 *
 * @return {boolean}
 */
HardwareAction.prototype.isSupported = function() {};
