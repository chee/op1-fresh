/* API Version - 3.1.2 */

function NoteStepChangedCallback() {}

NoteStepChangedCallback.prototype = new Callback();
NoteStepChangedCallback.prototype.constructor = NoteStepChangedCallback;

/**
 * @param {com.bitwig.extension.controller.api.NoteStep} noteStep
 */
NoteStepChangedCallback.prototype.noteStepChanged = function(noteStep) {};
