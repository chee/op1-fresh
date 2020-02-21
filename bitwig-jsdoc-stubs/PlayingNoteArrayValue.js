/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function PlayingNoteArrayValue() {}

PlayingNoteArrayValue.prototype = new ObjectArrayValue();
PlayingNoteArrayValue.prototype.constructor = PlayingNoteArrayValue;

/**
 * @param {int} note
 * @return {boolean}
 */
PlayingNoteArrayValue.prototype.isNotePlaying = function(note) {};
