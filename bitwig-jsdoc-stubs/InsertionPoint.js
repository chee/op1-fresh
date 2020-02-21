/* API Version - 3.1.2 */

/**
 * Defines an insertion point where various objects can be inserted as if the user had dragged and dropped
 * them to this insertion point (e.g with the mouse). Some things may not make sense to insert in which case
 * nothing happens.
 *
 * @since API version 7
 */
function InsertionPoint() {}

/**
 * Copies the supplied tracks to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {com.bitwig.extension.controller.api.Track} tracks
 */
InsertionPoint.prototype.copyTracks = function(/*...*/tracks) {};

/**
 * Moves the supplied tracks to this insertion point. If it's not possible to do so then this does nothing.
 *
 * @param {com.bitwig.extension.controller.api.Track} tracks
 */
InsertionPoint.prototype.moveTracks = function(/*...*/tracks) {};

/**
 * Copies the supplied devices to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {com.bitwig.extension.controller.api.Device} devices
 */
InsertionPoint.prototype.copyDevices = function(/*...*/devices) {};

/**
 * Moves the supplied devices to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {com.bitwig.extension.controller.api.Device} devices
 */
InsertionPoint.prototype.moveDevices = function(/*...*/devices) {};

/**
 * Copies the supplied slots or scenes to this insertion point. If it's not possible to do so then this
 * does nothing.
 *
 * @param {com.bitwig.extension.controller.api.ClipLauncherSlotOrScene} clipLauncherSlotOrScenes
 */
InsertionPoint.prototype.copySlotsOrScenes = function(/*...*/clipLauncherSlotOrScenes) {};

/**
 * Moves the supplied slots or scenes to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {com.bitwig.extension.controller.api.ClipLauncherSlotOrScene} clipLauncherSlotOrScenes
 */
InsertionPoint.prototype.moveSlotsOrScenes = function(/*...*/clipLauncherSlotOrScenes) {};

/**
 * Inserts the supplied file at this insertion point. If it's not possible to do so then this does nothing.
 *
 * @param {string} path
 */
InsertionPoint.prototype.insertFile = function(path) {};

/**
 * Inserts a VST2 plugin device with the supplied id at this insertion point. If the plugin is unknown or
 * it's not possible to insert a plugin here then his does nothing.
 *
 * @param id
          The VST2 plugin id to insert
 */
InsertionPoint.prototype.insertVST2Device = function(id) {};

/**
 * Inserts a VST3 plugin device with the supplied id at this insertion point. If the plugin is unknown or
 * it's not possible to insert a plugin here then his does nothing.
 *
 * @param id
          The VST2 plugin id to insert
 */
InsertionPoint.prototype.insertVST3Device = function(id) {};

/**
 * Pastes the contents of the clipboard at this insertion point.
 */
InsertionPoint.prototype.paste = function() {};

/**
 * Starts browsing using the popup browser for something to insert at this insertion point.
 */
InsertionPoint.prototype.browse = function() {};
