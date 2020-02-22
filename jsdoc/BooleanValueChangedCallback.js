/* API Version - 3.1.2 */

function BooleanValueChangedCallback() {}

BooleanValueChangedCallback.prototype = new ValueChangedCallback();
BooleanValueChangedCallback.prototype.constructor = BooleanValueChangedCallback;

/**
 * @param {boolean} newValue
 */
BooleanValueChangedCallback.prototype.valueChanged = function(newValue) {};
