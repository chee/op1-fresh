/* API Version - 3.1.2 */

/**
 * Object that describes the content of a step at a given position: x for the time, and y for the key.
 *
 * @since API version 10
 */
function NoteStep() {}

/**
 * @return {int} the position of the step (time)
 * @since API version 10
 */
NoteStep.prototype.x = function() {};

/**
 * @return {int} the position of the step (key)
 * @since API version 10
 */
NoteStep.prototype.y = function() {};

/**
 * @return {int} the note's channel, in the range 0..15.
 * @since API version 10
 */
NoteStep.prototype.channel = function() {};

/**
 * @return {State} the state of the step, it lets you know if a note starts.
 * @since API version 10
 */
NoteStep.prototype.state = function() {};

/**
 * @return {double} the velocity of the step, in the range 0..1
 * @since API version 10
 */
NoteStep.prototype.velocity = function() {};

/**
 * If there is a note started at this position, it will update the velocity of the note.
 *
 * @param {double} velocity between 0 and 1
 */
NoteStep.prototype.setVelocity = function(velocity) {};

/**
 * @return {double} the release velocity of the step, in the range 0..1
 * @since API version 10
 */
NoteStep.prototype.releaseVelocity = function() {};

/**
 * If there is a note started at this position, it will update the release velocity of the note.
 *
 * @param {double} velocity between 0 and 1
 * @since API version 10
 */
NoteStep.prototype.setReleaseVelocity = function(velocity) {};

/**
 * @return {double} the duration of the step in beats
 * @since API version 10
 */
NoteStep.prototype.duration = function() {};

/**
 * If there is a note started at this position, it will update the duration of the note.
 *
 * @param {double} duration in beats
 * @since API version 10
 */
NoteStep.prototype.setDuration = function(duration) {};

/**
 * @return {double} the pan of the step in the range -1..1
 * @since API version 10
 */
NoteStep.prototype.pan = function() {};

/**
 * If there is a note started at this position, it will update the panning of the note.
 *
 * @param {double} pan -1 for left, +1 for right
 * @since API version 10
 */
NoteStep.prototype.setPan = function(pan) {};

/**
 * @return {double} the timbre of the step, in the range -1..1
 * @since API version 10
 */
NoteStep.prototype.timbre = function() {};

/**
 * If there is a note started at this position, it will update the timbre of the note.
 *
 * @param {double} timbre from -1 to +1
 * @since API version 10
 */
NoteStep.prototype.setTimbre = function(timbre) {};

/**
 * @return {double} the pressure of the step, in the range 0..1
 * @since API version 10
 */
NoteStep.prototype.pressure = function() {};

/**
 * If there is a note started at this position, it will update the pressure of the note.
 *
 * @param {double} pressure from 0 to +1
 * @since API version 10
 */
NoteStep.prototype.setPressure = function(pressure) {};

/**
 * @return {double} the gain of the step, in the range 0..1
 * @since API version 10
 */
NoteStep.prototype.gain = function() {};

/**
 * If there is a note started at this position, it will update the gain of the note.
 *
 * @param {double} gain in the range 0..1, a value of 0.5 results in a gain of 0dB.
 * @since API version 10
 */
NoteStep.prototype.setGain = function(gain) {};

/**
 * @return {double} the transpose of the step, in semitones
 * @since API version 10
 */
NoteStep.prototype.transpose = function() {};

/**
 * If there is a note started at this position, it will update the pitch offset of the note.
 *
 * @param {double} transpose in semitones, from -24 to +24
 * @since API version 10
 */
NoteStep.prototype.setTranspose = function(transpose) {};

/**
 * @return {boolean} true if a note exists and is selected
 * @since API version 10
 */
NoteStep.prototype.isIsSelected = function() {};


/**
 * @since API version 10
 */
State = {
	Empty: 0,
	NoteOn: 1,
	NoteSustain: 2,
};