/* API Version - 3.1.2 */

function ClipLauncherSlot() {}

ClipLauncherSlot.prototype = new ClipLauncherSlotOrScene();
ClipLauncherSlot.prototype.constructor = ClipLauncherSlot;

/**
 * Value that reports whether this slot is selected or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.isSelected = function() {};

/**
 * Value that reports whether this slot has content or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.hasContent = function() {};

/**
 * Value that reports whether this slot is playing or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.isPlaying = function() {};

/**
 * Value that reports whether this slot is queued for playback or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.isPlaybackQueued = function() {};

/**
 * Value that reports whether this slot is recording or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.isRecording = function() {};

/**
 * Value that reports whether this slot is queued for recording or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.isRecordingQueued = function() {};

/**
 * Value that reports whether this slot is queued for recording or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.isStopQueued = function() {};

/**
 * Starts browsing for content that can be inserted in this slot in Bitwig Studio's popup browser.
 *
 * @since API version 2
 */
ClipLauncherSlot.prototype.browseToInsertClip = function() {};

/**
 * Value that reports the color of this slot.
 *
 * @return {SettableColorValue}
 * @since API version 2
 */
ClipLauncherSlot.prototype.color = function() {};

/**
 * Selects the slot.
 *
 * @since API version 10
 */
ClipLauncherSlot.prototype.select = function() {};

/**
 * @return {HardwareActionBindable}
 * @since API version 10
 */
ClipLauncherSlot.prototype.selectAction = function() {};

/**
 * Start recording a clip.
 *
 * @since API version 10
 */
ClipLauncherSlot.prototype.record = function() {};

/**
 * @return {HardwareActionBindable}
 * @since API version 10
 */
ClipLauncherSlot.prototype.recordAction = function() {};

/**
 * Makes the clip content of the slot visible in the note or audio editor.
 *
 * @since API version 10
 */
ClipLauncherSlot.prototype.showInEditor = function() {};

/**
 * Creates an new clip.
 *
 * @param {int} lengthInBeats
 * @since API version 10
 */
ClipLauncherSlot.prototype.createEmptyClip = function(lengthInBeats) {};

/**
 * Duplicates the clip.
 *
 * @since API version 10
 */
ClipLauncherSlot.prototype.duplicateClip = function() {};
