/* API Version - 3.1.2 */

function ObjectValueChangedCallback() {}

ObjectValueChangedCallback.prototype = new ValueChangedCallback();
ObjectValueChangedCallback.prototype.constructor = ObjectValueChangedCallback;

/**
 * @param {ValueType} newValue
 */
ObjectValueChangedCallback.prototype.valueChanged = function(newValue) {};
