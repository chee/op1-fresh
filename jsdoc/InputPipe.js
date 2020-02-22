/* API Version - 3.1.2 */

/**
 * A pipe that can be used to read data.
 *
 * @since API version 7
 */
function InputPipe() {}

InputPipe.prototype = new Pipe();
InputPipe.prototype.constructor = InputPipe;

/**
 * Requests to read some data from this pipe in an asynchronous way (the caller is not blocked). Once some
 * data has been read the callback will be notified on the controller's thread.
 *
 * @param data
          A {@link MemoryBlock} that can receive the data that is read.
 * @param callback
          A callback that is notified on the controller's thread when the read has completed.
 * @param timeoutInMs
          A timeout in milliseconds that will result in an error and termination of the controller if
          the read does not happen in this time. For inifnite timeout use 0.
 */
InputPipe.prototype.readAsync = function(data, callback, timeoutInMs) {};

/**
 * Requests to read some data from this pipe in a synchronous way (the caller is blocked until the transfer
 * completes).
 *
 * @param {MemoryBlock} data
 * @param {int} timeoutInMs
 * @return {int} The number of bytes that was read.
 */
InputPipe.prototype.read = function(data, timeoutInMs) {};
