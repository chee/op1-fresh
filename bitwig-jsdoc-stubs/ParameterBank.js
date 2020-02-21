/* API Version - 3.1.2 */

/**
 * Defines a bank of parameters.
 *
 * @since API version 2
 */
function ParameterBank() {}

/**
 * Gets the number of slots that these remote controls have.
 *
 * @return {int}
 * @since API version 2
 */
ParameterBank.prototype.getParameterCount = function() {};

/**
 * Returns the parameter at the given index within the bank.
 *
 * @param indexInBank
          the parameter index within this bank. Must be in the range [0..getParameterCount()-1].
 * @return {Parameter} the requested parameter
 * @since API version 2
 */
ParameterBank.prototype.getParameter = function(indexInBank) {};

/**
 * Informs the application how to display the controls during the on screen notification.
 *
 * @param {HardwareControlType} type which kind of hardware control is used for this bank (knobs/encoders/sliders)
 * @param {int} columns How wide this section is in terms of layout (4/8/9)
 * @since API version 7
 */
ParameterBank.prototype.setHardwareLayout = function(type, columns) {};
