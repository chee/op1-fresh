/* API Version - 3.1.2 */

/**
 * An interface for representing the current project.
 *
 * @since API version 1
 */
function Project() {}

Project.prototype = new ObjectProxy();
Project.prototype.constructor = Project;

/**
 * Returns an object that represents the root track group of the active Bitwig Studio project.
 *
 * @return {Track} the root track group of the currently active project
 * @since API version 1
 */
Project.prototype.getRootTrackGroup = function() {};

/**
 * Returns an object that represents the top level track group as shown in the arranger/mixer of the active
 * Bitwig Studio project.
 *
 * @return {Track} the shown top level track group of the currently active project
 * @since API version 1
 */
Project.prototype.getShownTopLevelTrackGroup = function() {};

/**
 * Creates a new scene (using an existing empty scene if possible) from the clips that are currently
 * playing in the clip launcher.
 *
 * @since API version 1
 */
Project.prototype.createSceneFromPlayingLauncherClips = function() {};

/**
 * The volume used for cue output.
 *
 * @return {Parameter}
 * @since API version 10
 */
Project.prototype.cueVolume = function() {};

/**
 * Mix between cue bus and the studio bus (master).
 *
 * @return {Parameter}
 * @since API version 10
 */
Project.prototype.cueMix = function() {};

/**
 * Sets the solo state of all tracks to off.
 *
 * @since API version 10
 */
Project.prototype.unsoloAll = function() {};

/**
 * @return {BooleanValue}
 */
Project.prototype.hasSoloedTracks = function() {};

/**
 * Sets the mute state of all tracks to off.
 *
 * @since API version 10
 */
Project.prototype.unmuteAll = function() {};

/**
 * Value that indicates if the project has muted tracks or not.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
Project.prototype.hasMutedTracks = function() {};

/**
 * Sets the arm state of all tracks to off.
 *
 * @since API version 10
 */
Project.prototype.unarmAll = function() {};

/**
 * Value that indicates if the project has armed tracks or not.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
Project.prototype.hasArmedTracks = function() {};
