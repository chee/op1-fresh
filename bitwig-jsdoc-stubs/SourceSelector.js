/* API Version - 3.1.2 */

/**
 * Instance of this class represent sources selectors in Bitwig Studio, which are shown as choosers in the
 * user interface and contain entries for either note inputs or audio inputs or both.
 * 
 * The most prominent source selector in Bitwig Studio is the one shown in the track IO section, which can be
 * accessed via the API by calling {@link Track#getSourceSelector()}.
 *
 * @since API version 1
 */
function SourceSelector() {}

SourceSelector.prototype = new ObjectProxy();
SourceSelector.prototype.constructor = SourceSelector;

/**
 * Returns an object that indicates if the source selector has note inputs enabled.
 *
 * @return {BooleanValue} a boolean value object
 * @since API version 5
 */
SourceSelector.prototype.hasNoteInputSelected = function() {};

/**
 * Returns an object that indicates if the source selector has audio inputs enabled.
 *
 * @return {BooleanValue} a boolean value object
 * @since API version 5
 */
SourceSelector.prototype.hasAudioInputSelected = function() {};
