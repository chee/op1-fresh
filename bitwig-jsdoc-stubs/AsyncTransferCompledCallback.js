/* API Version - 3.1.2 */

/**
 * Callback that is notified when an asynchronous transfer has completed.
 *
 * @newSince API version 7
 */
function AsyncTransferCompledCallback() {}

/**
 * Called upon completion of an asynchronous read.
 *
 * @param {int} amountTransferred
 */
AsyncTransferCompledCallback.prototype.asyncTransferCompleted = function(amountTransferred) {};
