/* API Version - 3.1.2 */

function NoArgsCallback() {}

NoArgsCallback.prototype = new Callback();
NoArgsCallback.prototype.constructor = NoArgsCallback;

NoArgsCallback.prototype.call = function() {};
