/* API Version - 3.1.2 */

/**
 * Cursor that can be pinned to the current device or follow the selection.
 *
 * @since API version 2
 */
function PinnableCursorDevice() {}

PinnableCursorDevice.prototype = new CursorDevice();
PinnableCursorDevice.prototype.constructor = PinnableCursorDevice;
