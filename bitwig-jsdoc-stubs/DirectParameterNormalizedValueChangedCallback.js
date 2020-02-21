/* API Version - 3.1.2 */

function DirectParameterNormalizedValueChangedCallback() {}

DirectParameterNormalizedValueChangedCallback.prototype = new Callback();
DirectParameterNormalizedValueChangedCallback.prototype.constructor = DirectParameterNormalizedValueChangedCallback;

/**
 * @param {string} id
 * @param {double} normalizedValue
 */
DirectParameterNormalizedValueChangedCallback.prototype.directParameterNormalizedValueChanged = function(id, normalizedValue) {};
