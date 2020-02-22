/* API Version - 3.1.2 */

function NoteStepChangedCallback() {}

NoteStepChangedCallback.prototype = new Callback();
NoteStepChangedCallback.prototype.constructor = NoteStepChangedCallback;

/**
 * @param {NoteStep} noteStep
 */
NoteStepChangedCallback.prototype.noteStepChanged = function(noteStep) {};
