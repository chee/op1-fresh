/* API Version - 3.1.2 */

function ConnectionEstablishedCallback() {}

ConnectionEstablishedCallback.prototype = new Callback();
ConnectionEstablishedCallback.prototype.constructor = ConnectionEstablishedCallback;

/**
 * @param {com.bitwig.extension.controller.api.RemoteConnection} connection
 */
ConnectionEstablishedCallback.prototype.connectionEstablished = function(connection) {};
