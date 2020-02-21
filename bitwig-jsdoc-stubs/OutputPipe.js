/* API Version - 3.1.2 */

/**
 * A pipe that can be used to write data.
 *
 * @since API version 7
 */
function OutputPipe() {}

OutputPipe.prototype = new Pipe();
OutputPipe.prototype.constructor = OutputPipe;

/**
 * Requests to write some data to this pipe in an asynchronous way (the caller is not blocked). Once some
 * data has been written the callback will be notified on the controller's thread.
 *
 * @param data
          A {@link MemoryBlock} containing the data to be written.
 * @param callback
          A callback that is notified on the controller's thread when the write has completed.
 * @param timeoutInMs
          A timeout in milliseconds that will result in an error and termination of the controller if
          the write does not happen in this time. For infinite timeout use 0.
 */
OutputPipe.prototype.writeAsync = function(data, callback, timeoutInMs) {};

/**
 * @param {com.bitwig.extension.api.MemoryBlock} data
 * @param {int} timeoutInMs
 * @return {int}
 */
OutputPipe.prototype.write = function(data, timeoutInMs) {};
