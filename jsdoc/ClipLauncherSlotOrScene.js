/* API Version - 3.1.2 */

function ClipLauncherSlotOrScene() {}

ClipLauncherSlotOrScene.prototype = new ObjectProxy();
ClipLauncherSlotOrScene.prototype.constructor = ClipLauncherSlotOrScene;

/**
 * Returns an object that provides access to the name of the scene.
 *
 * @return {StringValue} a string value object that represents the scene name.
 * @since API version 2
 */
ClipLauncherSlotOrScene.prototype.name = function() {};

/**
 * Launches the scene.
 *
 * @since API version 1
 */
ClipLauncherSlotOrScene.prototype.launch = function() {};

/**
 * @return {HardwareActionBindable}
 */
ClipLauncherSlotOrScene.prototype.launchAction = function() {};

/**
 * Value that reports the position of the scene within the list of Bitwig Studio scenes.
 *
 * @return {IntegerValue}
 * @since API version 2
 */
ClipLauncherSlotOrScene.prototype.sceneIndex = function() {};

/**
 * Value that reports the color of this slot.
 *
 * @return {SettableColorValue}
 * @since API version 7
 */
ClipLauncherSlotOrScene.prototype.color = function() {};

/**
 * Specifies if the Bitwig Studio clip launcher should indicate which slots and scenes are part of the window. By
 * default indications are disabled.
 *
 * @param shouldIndicate
          `true` if visual indications should be enabled, `false` otherwise
 * @since API version 10
 */
ClipLauncherSlotOrScene.prototype.setIndication = function(shouldIndicate) {};

/**
 * An {@link InsertionPoint} that is used to replace the contents of this slot or scene.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
ClipLauncherSlotOrScene.prototype.replaceInsertionPoint = function() {};

/**
 * An {@link InsertionPoint} that can be used to insert content in the next scene.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
ClipLauncherSlotOrScene.prototype.nextSceneInsertionPoint = function() {};

/**
 * An {@link InsertionPoint} that can be used to insert content after this slot or scene.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
ClipLauncherSlotOrScene.prototype.previousSceneInsertionPoint = function() {};
