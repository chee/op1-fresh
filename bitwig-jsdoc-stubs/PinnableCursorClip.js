/* API Version - 3.1.2 */

/**
 * Cursor clip that can act independently from the user's clip selection if desired by being pinned in the
 * controller settings panel.
 *
 * @since API version 10
 */
function PinnableCursorClip() {}

PinnableCursorClip.prototype = new CursorClip();
PinnableCursorClip.prototype.constructor = PinnableCursorClip;
