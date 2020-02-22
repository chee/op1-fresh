/* API Version - 3.1.2 */

/**
 * Creates useful MIDI expressions that can be used to match MIDI events.
 *
 * @since API version 10
 */
function MidiExpressions() {}

/**
 * Creates an expression that recognizes a MIDI CC event.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @return {string}
 */
MidiExpressions.prototype.createIsCCExpression = function(channel, controlNumber) {};

/**
 * Creates an expression that recognizes a MIDI CC event with a specific value. This expression can be used
 * in {@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
 * example.
 *
 * @param {int} channel
 * @param {int} control
 * @param {int} value
 * @return {string}
 * @since API version 10
 */
MidiExpressions.prototype.createIsCCValueExpression = function(channel, control, value) {};

/**
 * Creates an expression that recognizes a pitch bend event. This expression can be used in
 * {@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
 * example.
 *
 * @param {int} channel
 * @return {string}
 * @since API version 10
 */
MidiExpressions.prototype.createIsPitchBendExpression = function(channel) {};

/**
 * Creates an expression that recognizes a note on event. This expression can be used in
 * {@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
 * example.
 *
 * @param {int} channel
 * @param {int} note
 * @return {string}
 * @since API version 10
 */
MidiExpressions.prototype.createIsNoteOnExpression = function(channel, note) {};

/**
 * Creates an expression that recognizes a note off event. This expression can be used in
 * {@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
 * example.
 *
 * @param {int} channel
 * @param {int} note
 * @return {string}
 * @since API version 10
 */
MidiExpressions.prototype.createIsNoteOffExpression = function(channel, note) {};

/**
 * Creates an expression that recognizes a polyphonic aftertouch event. This expression can be used in
 * {@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
 * example.
 *
 * @param {int} channel
 * @param {int} note
 * @return {string}
 * @since API version 10
 */
MidiExpressions.prototype.createIsPolyAftertouch = function(channel, note) {};
