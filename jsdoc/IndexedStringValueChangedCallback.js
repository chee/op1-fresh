/* API Version - 3.1.2 */

function IndexedStringValueChangedCallback() {}

IndexedStringValueChangedCallback.prototype = new IndexedValueChangedCallback();
IndexedStringValueChangedCallback.prototype.constructor = IndexedStringValueChangedCallback;

/**
 * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
 * of containing clips.
 *
 * @param {int} index
 * @param {string} newValue
 * @since API version 1
 */
IndexedStringValueChangedCallback.prototype.valueChanged = function(index, newValue) {};
