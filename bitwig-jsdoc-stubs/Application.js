/* API Version - 3.1.2 */

/**
 * An interface that provides methods for accessing the most common global application commands.<br/>
 * 
 * In addition, functions are provided for accessing any application action in a generic and categorized way,
 * pretty much as displayed in the Bitwig Studio commander dialog (see {@link #getActions()},
 * {@link #getAction(String)}, {@link #getActionCategories()}), {@link #getActionCategory(String)}).<br/>
 * 
 * To receive an instance of the application interface call {@link ControllerHost#createApplication()}.
 *
 * @since API version 1
 */
function Application() {}

/**
 * Creates a new audio track at the given position.
 *
 * @param position
          the index within the list of main tracks where the new track should be inserted, or `-1` in
          case the track should be inserted at the end of the list. Values outside the valid range will
          get pinned to the valid range, so the actual position might be different from the provided
          parameter value.
 * @since API version 1
 */
Application.prototype.createAudioTrack = function(position) {};

/**
 * Creates a new instrument track at the given position.
 *
 * @param position
          the index within the list of main tracks where the new track should be inserted, or `-1` in
          case the track should be inserted at the end of the list. Values outside the valid range will
          get pinned to the valid range, so the actual position might be different from the provided
          parameter value.
 * @since API version 1
 */
Application.prototype.createInstrumentTrack = function(position) {};

/**
 * Creates a new effect track at the given position.
 *
 * @param position
          the index within the list of effect tracks where the new track should be inserted, or `-1` in
          case the track should be inserted at the end of the list. Values outside the valid range will
          get pinned to the valid range, so the actual position might be different from the provided
          parameter value.
 * @since API version 1
 */
Application.prototype.createEffectTrack = function(position) {};

/**
 * Returns a list of actions that the application supports. Actions are commands in Bitwig Studio that are
 * typically accessible through menus or keyboard shortcuts.
 * 
 * Please note that many of the commands encapsulated by the reported actions are also accessible through
 * other (probably more convenient) interfaces methods of the API. In contrast to that, this method
 * provides a more generic way to find available application functionality.
 *
 * @return {com.bitwig.extension.controller.api.Action[]} the list of actions
@since API version 1
 */
Application.prototype.getActions = function() {};

/**
 * Returns the action for the given action identifier. For a list of available actions, see
 * {@link #getActions()}.
 *
 * @param id
          the action identifier string, must not be `null`
 * @return {com.bitwig.extension.controller.api.Action} the action associated with the given id, or null in case there is no action with the given
        identifier.
@since API version 1
 */
Application.prototype.getAction = function(id) {};

/**
 * Returns a list of action categories that is used by Bitwig Studio to group actions into categories.
 *
 * @return {com.bitwig.extension.controller.api.ActionCategory[]} the list of action categories
@since API version 1
 */
Application.prototype.getActionCategories = function() {};

/**
 * Returns the action category associated with the given identifier. For a list of available action
 * categories, see {@link #getActionCategories()}.
 *
 * @param id
          the category identifier string, must not be `null`
 * @return {com.bitwig.extension.controller.api.ActionCategory} the action associated with the given id, or null in case there is no category with the given
        identifier
@since API version 1
 */
Application.prototype.getActionCategory = function(id) {};

/**
 * Activates the audio engine in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.activateEngine = function() {};

/**
 * Deactivates the audio engine in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.deactivateEngine = function() {};

/**
 * Value that reports whether an audio engine is active or not.
 *
 * @return {com.bitwig.extension.controller.api.BooleanValue}
 * @since API version 2
 */
Application.prototype.hasActiveEngine = function() {};

/**
 * Value that reports the name of the current project.
 *
 * @return {com.bitwig.extension.controller.api.StringValue}
 * @since API version 2
 */
Application.prototype.projectName = function() {};

/**
 * Switches to the next project tab in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.nextProject = function() {};

/**
 * Switches to the previous project tab in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.previousProject = function() {};

/**
 * Set BitwigStudio to navigate into the group.
 *
 * @param {com.bitwig.extension.controller.api.Track} track
 * @since API version 2
 */
Application.prototype.navigateIntoTrackGroup = function(track) {};

/**
 * Set BitwigStudio to navigate into the parent group.
 *
 * @since API version 2
 */
Application.prototype.navigateToParentTrackGroup = function() {};

/**
 * Sends an undo command to Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.undo = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.undoAction = function() {};

/**
 * Sends a redo command to Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.redo = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.redoAction = function() {};

/**
 * Switches the Bitwig Studio user interface to the panel layout with the given name. The list of available
 * panel layouts depends on the active display profile.
 *
 * @param panelLayout
          the name of the new panel layout
 * @since API version 1
 */
Application.prototype.setPanelLayout = function(panelLayout) {};

/**
 * Switches to the next panel layout of the active display profile in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.nextPanelLayout = function() {};

/**
 * Switches to the previous panel layout of the active display profile in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.previousPanelLayout = function() {};

/**
 * Value that reports the name of the active panel layout.
 *
 * @return {com.bitwig.extension.controller.api.StringValue}
 * @since API version 2
 */
Application.prototype.panelLayout = function() {};

/**
 * Value that reports the name of the active display profile.
 *
 * @return {com.bitwig.extension.controller.api.StringValue}
 * @since API version 2
 */
Application.prototype.displayProfile = function() {};

/**
 * Toggles the visibility of the inspector panel.
 *
 * @since API version 1
 */
Application.prototype.toggleInspector = function() {};

/**
 * Toggles the visibility of the device chain panel.
 *
 * @since API version 1
 */
Application.prototype.toggleDevices = function() {};

/**
 * Toggles the visibility of the mixer panel.
 *
 * @since API version 1
 */
Application.prototype.toggleMixer = function() {};

/**
 * Toggles the visibility of the note editor panel.
 *
 * @since API version 1
 */
Application.prototype.toggleNoteEditor = function() {};

/**
 * Toggles the visibility of the automation editor panel.
 *
 * @since API version 1
 */
Application.prototype.toggleAutomationEditor = function() {};

/**
 * Toggles the visibility of the browser panel.
 *
 * @since API version 1
 */
Application.prototype.toggleBrowserVisibility = function() {};

/**
 * Shows the previous detail panel (note editor, device, automation).
 *
 * @since API version 1
 */
Application.prototype.previousSubPanel = function() {};

/**
 * Shows the next detail panel (note editor, device, automation).
 *
 * @since API version 1
 */
Application.prototype.nextSubPanel = function() {};

/**
 * Equivalent to an Arrow-Left key stroke on the computer keyboard. The concrete functionality depends on
 * the current keyboard focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.arrowKeyLeft = function() {};

/**
 * Equivalent to an Arrow-Right key stroke on the computer keyboard. The concrete functionality depends on
 * the current keyboard focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.arrowKeyRight = function() {};

/**
 * Equivalent to an Arrow-Up key stroke on the computer keyboard. The concrete functionality depends on the
 * current keyboard focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.arrowKeyUp = function() {};

/**
 * Equivalent to an Arrow-Down key stroke on the computer keyboard. The concrete functionality depends on
 * the current keyboard focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.arrowKeyDown = function() {};

/**
 * Equivalent to an Enter key stroke on the computer keyboard. The concrete functionality depends on the
 * current keyboard focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.enter = function() {};

/**
 * Equivalent to an Escape key stroke on the computer keyboard. The concrete functionality depends on the
 * current keyboard focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.escape = function() {};

/**
 * Selects all items according the current selection focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.selectAll = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.selectAllAction = function() {};

/**
 * Deselects any items according the current selection focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.selectNone = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.selectNoneAction = function() {};

/**
 * Selects the previous item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectPrevious = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.selectPreviousAction = function() {};

/**
 * Selects the next item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectNext = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.selectNextAction = function() {};

/**
 * Selects the first item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectFirst = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.selectFirstAction = function() {};

/**
 * Selects the last item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectLast = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.selectLastAction = function() {};

/**
 * Cuts the selected items in Bitwig Studio if applicable.
 *
 * @since API version 1
 */
Application.prototype.cut = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.cutAction = function() {};

/**
 * Copies the selected items in Bitwig Studio to the clipboard if applicable.
 *
 * @since API version 1
 */
Application.prototype.copy = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.copyAction = function() {};

/**
 * Pastes the clipboard contents into the current selection focus in Bitwig Studio if applicable.
 *
 * @since API version 1
 */
Application.prototype.paste = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.pasteAction = function() {};

/**
 * Duplicates the active selection in Bitwig Studio if applicable.
 *
 * @since API version 1
 */
Application.prototype.duplicate = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 * @since API version 10
 */
Application.prototype.duplicateAction = function() {};

/**
 * Deletes the selected items in Bitwig Studio if applicable. Originally this function was called `delete`
 * (Bitwig Studio 1.0). But as `delete` is reserved in JavaScript this function got renamed to `remove` in
 * Bitwig Studio 1.0.9.
 *
 * @since API version 1
 */
Application.prototype.remove = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.removeAction = function() {};

/**
 * Opens a text input field in Bitwig Studio for renaming the selected item.
 *
 * @since API version 1
 */
Application.prototype.rename = function() {};

/**
 * Zooms in one step into the currently focused editor of the Bitwig Studio user interface.
 *
 * @since API version 1
 */
Application.prototype.zoomIn = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.zoomInAction = function() {};

/**
 * Zooms out one step in the currently focused editor of the Bitwig Studio user interface.
 *
 * @since API version 1
 */
Application.prototype.zoomOut = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.zoomOutAction = function() {};

/**
 * Adjusts the zoom level of the currently focused editor so that it matches the active selection.
 *
 * @since API version 1
 */
Application.prototype.zoomToSelection = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.zoomToSelectionAction = function() {};

/**
 * Toggles between zoomToSelection and zoomToFit.
 *
 * @since API version 10
 */
Application.prototype.zoomToSelectionOrAll = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.zoomToSelectionOrAllAction = function() {};

/**
 * Toggles between zoomToSelection and the last śet zoom level.
 *
 * @since API version 10
 */
Application.prototype.zoomToSelectionOrPrevious = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.zoomToSelectionOrPreviousAction = function() {};

/**
 * Adjusts the zoom level of the currently focused editor so that all content becomes visible.
 *
 * @since API version 1
 */
Application.prototype.zoomToFit = function() {};

/**
 * @return {com.bitwig.extension.controller.api.HardwareActionBindable}
 */
Application.prototype.zoomToFitAction = function() {};

/**
 * Moves the panel focus to the panel on the left of the currently focused panel.
 *
 * @since API version 1
 */
Application.prototype.focusPanelToLeft = function() {};

/**
 * Moves the panel focus to the panel right to the currently focused panel.
 *
 * @since API version 1
 */
Application.prototype.focusPanelToRight = function() {};

/**
 * Moves the panel focus to the panel above the currently focused panel.
 *
 * @since API version 1
 */
Application.prototype.focusPanelAbove = function() {};

/**
 * Moves the panel focus to the panel below the currently focused panel.
 *
 * @since API version 1
 */
Application.prototype.focusPanelBelow = function() {};

/**
 * Toggles between full screen and windowed user interface.
 *
 * @since API version 1
 */
Application.prototype.toggleFullScreen = function() {};

/**
 * Returns the record quantization grid setting from the preferences.
 * Possible values are "OFF", "1/32", "1/16", "1/8", "1/4".
 *
 * @return {com.bitwig.extension.controller.api.SettableEnumValue}
 * @since API version 10
 */
Application.prototype.recordQuantizationGrid = function() {};

/**
 * Returns a settable value to choose if the record quantization should quantize note length.
 *
 * @return {com.bitwig.extension.controller.api.SettableBooleanValue}
 * @since API version 10
 */
Application.prototype.recordQuantizeNoteLength = function() {};
