/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function ObjectArrayValue() {}

ObjectArrayValue.prototype = new Value();
ObjectArrayValue.prototype.constructor = ObjectArrayValue;

/**
 * @return {ObjectType[]}
 * @since API version 2
 */
ObjectArrayValue.prototype.get = function() {};

/**
 * @param {int} index
 * @return {ObjectType}
 * @since API version 2
 */
ObjectArrayValue.prototype.get = function(index) {};

/**
 * @return {boolean}
 * @since API version 7
 */
ObjectArrayValue.prototype.isEmpty = function() {};
