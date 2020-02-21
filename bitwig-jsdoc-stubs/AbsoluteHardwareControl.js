/* API Version - 3.1.2 */

/**
 * Represents a hardware control that can input and absolute value (for example, a slider, knob or foot
 * pedal).
 *
 * @since API version 10
 */
function AbsoluteHardwareControl() {}

AbsoluteHardwareControl.prototype = new ContinuousHardwareControl();
AbsoluteHardwareControl.prototype.constructor = AbsoluteHardwareControl;

/**
 * Sets the {@link AbsoluteHardwareValueMatcher} that can be used to detect when the user adjusts the
 * hardware control's value.
 *
 * @param {AbsoluteHardwareValueMatcher} matcher
 */
AbsoluteHardwareControl.prototype.setAdjustValueMatcher = function(matcher) {};

/**
 * The current value of this hardware control (0..1)
 *
 * @return {DoubleValue}
 */
AbsoluteHardwareControl.prototype.value = function() {};

/**
 * The value of the target that this hardware control has been bound to (0..1).
 *
 * @return {DoubleValue}
 */
AbsoluteHardwareControl.prototype.targetValue = function() {};

/**
 * Can be called from the {@link #targetValue()} changed callback to check if this control is responsible
 * for changing the target value or not.
 *
 * @return {BooleanValue}
 */
AbsoluteHardwareControl.prototype.isUpdatingTargetValue = function() {};

/**
 * Value that indicates if this hardware control has a target value that it changes or not.
 *
 * @return {BooleanValue}
 */
AbsoluteHardwareControl.prototype.hasTargetValue = function() {};

/**
 * Determines if this hardware control should immediately take over the parameter it is bound to rather
 * than respecting the user's current take over mode.
 * 
 * This is useful for motorized sliders for example, where the slider is already at the value of the bound
 * parameter.
 */
AbsoluteHardwareControl.prototype.disableTakeOver = function() {};

/**
 * Adds a new binding from this hardware control to the supplied target.
 *
 * @param {AbsoluteHardwarControlBindable} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {AbsoluteHardwareControlBinding}
 */
AbsoluteHardwareControl.prototype.addBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};

/**
 * Convenience methods that ensures there is only a single binding to the supplied target. This is
 * equivalent to calling {@link #clearBindings()} and then
 * {@link #addBindingWithRange(AbsoluteHardwarControlBindable, double, double)}
 *
 * @param {AbsoluteHardwarControlBindable} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {AbsoluteHardwareControlBinding}
 */
AbsoluteHardwareControl.prototype.setBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};
