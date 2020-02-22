/* API Version - 3.1.2 */

/**
 * Represents a cursor clip.
 *
 * @since API version 10
 */
function CursorClip() {}

CursorClip.prototype = new Clip();
CursorClip.prototype.constructor = CursorClip;

/**
 * Requests that the supplied clip be selected in this cursor.
 *
 * @param {Clip} clip
 * @since API version 10
 */
CursorClip.prototype.selectClip = function(clip) {};
