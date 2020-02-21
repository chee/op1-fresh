/* API Version - 3.1.2 */

/**
 * Interface that defines a cursor that can be "pinned".
 *
 * @since API version 2
 */
function PinnableCursor() {}

PinnableCursor.prototype = new Cursor();
PinnableCursor.prototype.constructor = PinnableCursor;

/**
 * Determines if this cursor is currently pinned or not. If the cursor is pinned then it won't follow the
 * selection the user makes in the application.
 *
 * @return {com.bitwig.extension.controller.api.SettableBooleanValue}
 * @since API version 2
 */
PinnableCursor.prototype.isPinned = function() {};
