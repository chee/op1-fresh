/* API Version - 3.1.2 */

/**
 * Represents a hardware control that can input a relative value (for example, a relative encoder knob).
 * 
 * A relative adjustment is positive value when being increased and a negative when being decreased. The
 * relative amount represents the amount of adjustment made. In order to have relative hardware controls work
 * with the same level of sensitivity the relative amount should be +1.0 if the user were to rotate a knob one
 * full rotation (defined as roughly the same amount of rotation as that of an absolute knob to go from 0 to
 * 1) to the right.
 * 
 * <p>
 * {@link RelativeHardwareControl}s can also be used to step through items (e.g in a list, or an enum
 * parameter). In this case the {@link #getStepSize()} is used to determine how far the knob has to be rotated
 * in order to increment by one step. For example, if a full rotation of a knob should step through 10 items
 * you would set the step size to 1.0 / 10 (i.e 0.1).
 *
 * @since API version 10
 */
function RelativeHardwareControl() {}

RelativeHardwareControl.prototype = new ContinuousHardwareControl();
RelativeHardwareControl.prototype.constructor = RelativeHardwareControl;

/**
 * Sets the sensitivity of this hardware control. The default sensitivity is 1. This value is a multiplied
 * with the adjustment coming from the {@link RelativeHardwareValueMatcher} to determine the final
 * adjustment amount.
 *
 * @param {double} sensitivity
 */
RelativeHardwareControl.prototype.setSensitivity = function(sensitivity) {};

/**
 * Sets the {@link RelativeHardwareValueMatcher} that can be used to detect when the user adjusts the
 * hardware control's value.
 *
 * @param {RelativeHardwareValueMatcher} matcher
 */
RelativeHardwareControl.prototype.setAdjustValueMatcher = function(matcher) {};

/**
 * Adds a binding to the supplied target with the supplied sensitivity.
 *
 * @param {RelativeHardwarControlBindable} target
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.addBindingWithSensitivity = function(target, sensitivity) {};

/**
 * Makes sure there is a single binding to the supplied target with the supplied sensitivity.
 *
 * @param {RelativeHardwarControlBindable} target
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.setBindingWithSensitivity = function(target, sensitivity) {};

/**
 * Adds a binding to the supplied target that does not adjust the target outside of the supplied min and
 * max normalized range.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.addBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};

/**
 * Makes sure there is single binding to the supplied target that does not adjust the target outside of the
 * supplied min and max normalized range.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.setBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};

/**
 * Adds a binding to the supplied target that does not adjust the target outside of the supplied min and
 * max normalized range and is adjusted with the supplied sensitivity.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.addBindingWithRangeAndSensitivity = function(target, minNormalizedValue, maxNormalizedValue, sensitivity) {};

/**
 * Makes sure there is a single binding to the supplied target that does not adjust the target outside of
 * the supplied min and max normalized range and is adjusted with the supplied sensitivity.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.setBindingWithRangeAndSensitivity = function(target, minNormalizedValue, maxNormalizedValue, sensitivity) {};

/**
 * The current steps size (amount of relative rotation) necessary to step through an item in a list.
 *
 * @return {double}
 */
RelativeHardwareControl.prototype.getStepSize = function() {};

/**
 * Sets the step size of this relative hardware control. The step size is used when using this control to
 * step through items in a list, or values in an enum parameter, for example. For each step forwards a
 * certain action can be invoked and for each step backwards a different action.
 *
 * @param {double} stepSize
 */
RelativeHardwareControl.prototype.setStepSize = function(stepSize) {};
