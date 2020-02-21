/* API Version - 3.1.2 */

/**
 * Something that can be bound to an {@link AbsoluteHardwareControl} and can respond to the user input (such
 * as user moving a slider up or down) in a meaningful way.
 *
 * @since API version 10
 */
function AbsoluteHardwarControlBindable() {}

AbsoluteHardwarControlBindable.prototype = new HardwareBindable();
AbsoluteHardwarControlBindable.prototype.constructor = AbsoluteHardwarControlBindable;

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {AbsoluteHardwareControl} hardwareControl
 * @return {AbsoluteHardwareControlBinding} The newly created binding
 */
AbsoluteHardwarControlBindable.prototype.addBinding = function(hardwareControl) {};

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way. This target will be adjusted within the supplied normalized
 * range.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {AbsoluteHardwareControl} hardwareControl
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {AbsoluteHardwareControlBinding} The newly created binding
 */
AbsoluteHardwarControlBindable.prototype.addBindingWithRange = function(hardwareControl, minNormalizedValue, maxNormalizedValue) {};
/* API Version - 3.1.2 */

/**
 * Represents a binding from an {@link AbsoluteHardwareControl} to some target.
 *
 * @since API version 10
 */
function AbsoluteHardwareControlBinding() {}

AbsoluteHardwareControlBinding.prototype = new HardwareBinding();
AbsoluteHardwareControlBinding.prototype.constructor = AbsoluteHardwareControlBinding;
/* API Version - 3.1.2 */

/**
 * Represents a hardware control that can input and absolute value (for example, a slider, knob or foot
 * pedal).
 *
 * @since API version 10
 */
function AbsoluteHardwareControl() {}

AbsoluteHardwareControl.prototype = new ContinuousHardwareControl();
AbsoluteHardwareControl.prototype.constructor = AbsoluteHardwareControl;

/**
 * Sets the {@link AbsoluteHardwareValueMatcher} that can be used to detect when the user adjusts the
 * hardware control's value.
 *
 * @param {AbsoluteHardwareValueMatcher} matcher
 */
AbsoluteHardwareControl.prototype.setAdjustValueMatcher = function(matcher) {};

/**
 * The current value of this hardware control (0..1)
 *
 * @return {DoubleValue}
 */
AbsoluteHardwareControl.prototype.value = function() {};

/**
 * The value of the target that this hardware control has been bound to (0..1).
 *
 * @return {DoubleValue}
 */
AbsoluteHardwareControl.prototype.targetValue = function() {};

/**
 * Can be called from the {@link #targetValue()} changed callback to check if this control is responsible
 * for changing the target value or not.
 *
 * @return {BooleanValue}
 */
AbsoluteHardwareControl.prototype.isUpdatingTargetValue = function() {};

/**
 * Value that indicates if this hardware control has a target value that it changes or not.
 *
 * @return {BooleanValue}
 */
AbsoluteHardwareControl.prototype.hasTargetValue = function() {};

/**
 * Determines if this hardware control should immediately take over the parameter it is bound to rather
 * than respecting the user's current take over mode.
 * 
 * This is useful for motorized sliders for example, where the slider is already at the value of the bound
 * parameter.
 */
AbsoluteHardwareControl.prototype.disableTakeOver = function() {};

/**
 * Adds a new binding from this hardware control to the supplied target.
 *
 * @param {AbsoluteHardwarControlBindable} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {AbsoluteHardwareControlBinding}
 */
AbsoluteHardwareControl.prototype.addBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};

/**
 * Convenience methods that ensures there is only a single binding to the supplied target. This is
 * equivalent to calling {@link #clearBindings()} and then
 * {@link #addBindingWithRange(AbsoluteHardwarControlBindable, double, double)}
 *
 * @param {AbsoluteHardwarControlBindable} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {AbsoluteHardwareControlBinding}
 */
AbsoluteHardwareControl.prototype.setBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};
/* API Version - 3.1.2 */

/**
 * Represents a physical hardware knob that inputs an absolute value.
 *
 * @see HardwareSurface#createAbsoluteHardwareKnob(String)
 * @since API version 10
 */
function AbsoluteHardwareKnob() {}

AbsoluteHardwareKnob.prototype = new AbsoluteHardwareControl();
AbsoluteHardwareKnob.prototype.constructor = AbsoluteHardwareKnob;
/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when an absolute value is input by the user (for example, when moving a
 * slider or turning a knob based on some MIDI message). This matcher can then be set on an
 * {@link AbsoluteHardwareControl} using
 * {@link AbsoluteHardwareControl#setAdjustValueMatcher(AbsoluteHardwareValueMatcher)}.
 *
 * @see MidiIn#createAbsoluteValueMatcher(String, String, int)
 * @see MidiIn#createAbsoluteCCValueMatcher(int, int)
 * @see MidiIn#createAbsolutePitchBendValueMatcher(int)
 * @since API version 10
 */
function AbsoluteHardwareValueMatcher() {}

AbsoluteHardwareValueMatcher.prototype = new ContinuousHardwareValueMatcher();
AbsoluteHardwareValueMatcher.prototype.constructor = AbsoluteHardwareValueMatcher;
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to categorize actions in Bitwig Studio. The list of action categories
 * provided by Bitwig Studio can be queried by calling {@link Application#getActionCategories()}. To receive a
 * specific action category call {@link Application#getActionCategory(String)}.
 *
 * @see Application#getActionCategories()
 * @see Application#getActionCategory(String)
 * @since API version 1
 */
function ActionCategory() {}

/**
 * Returns a string the identifies this action category uniquely.
 *
 * @return {string} the identifier string
 * @since API version 1
 */
ActionCategory.prototype.getId = function() {};

/**
 * Returns the name of this action category.
 *
 * @return {string} the name string
 * @since API version 1
 */
ActionCategory.prototype.getName = function() {};

/**
 * Lists all actions in this category.
 *
 * @return {Action[]} the array of actions in this category
 * @since API version 1
 */
ActionCategory.prototype.getActions = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent actions in Bitwig Studio, such as commands that can be launched from
 * the main menu or via keyboard shortcuts.
 * 
 * To receive the list of all actions provided by Bitwig Studio call {@link Application#getActions()}. The
 * list of actions that belong to a certain category can be queried by calling
 * {@link ActionCategory#getActions()}. Access to specific actions is provided in
 * {@link Application#getAction(String)}.
 *
 * @since API version 1
 */
function Action() {}

Action.prototype = new HardwareActionBindable();
Action.prototype.constructor = Action;

/**
 * Returns a string the identifies this action uniquely.
 *
 * @return {string} the identifier string
 * @since API version 1
 */
Action.prototype.getId = function() {};

/**
 * Returns the name of this action.
 *
 * @return {string} the name string
 * @since API version 1
 */
Action.prototype.getName = function() {};

/**
 * Returns the category of this action.
 *
 * @return {ActionCategory} the category string
 * @since API version 1
 */
Action.prototype.getCategory = function() {};

/**
 * Returns the text that is displayed in menu items associated with this action.
 *
 * @return {string} the menu item text
 * @since API version 1
 */
Action.prototype.getMenuItemText = function() {};

/**
 * Invokes the action.
 *
 * @since API version 1
 */
Action.prototype.invoke = function() {};
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
 * @return {Action[]} the list of actions
@since API version 1
 */
Application.prototype.getActions = function() {};

/**
 * Returns the action for the given action identifier. For a list of available actions, see
 * {@link #getActions()}.
 *
 * @param id
          the action identifier string, must not be `null`
 * @return {Action} the action associated with the given id, or null in case there is no action with the given
        identifier.
@since API version 1
 */
Application.prototype.getAction = function(id) {};

/**
 * Returns a list of action categories that is used by Bitwig Studio to group actions into categories.
 *
 * @return {ActionCategory[]} the list of action categories
@since API version 1
 */
Application.prototype.getActionCategories = function() {};

/**
 * Returns the action category associated with the given identifier. For a list of available action
 * categories, see {@link #getActionCategories()}.
 *
 * @param id
          the category identifier string, must not be `null`
 * @return {ActionCategory} the action associated with the given id, or null in case there is no category with the given
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
 * @return {BooleanValue}
 * @since API version 2
 */
Application.prototype.hasActiveEngine = function() {};

/**
 * Value that reports the name of the current project.
 *
 * @return {StringValue}
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
 * @param {Track} track
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
 * @return {HardwareActionBindable}
 */
Application.prototype.undoAction = function() {};

/**
 * Sends a redo command to Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.redo = function() {};

/**
 * @return {HardwareActionBindable}
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
 * @return {StringValue}
 * @since API version 2
 */
Application.prototype.panelLayout = function() {};

/**
 * Value that reports the name of the active display profile.
 *
 * @return {StringValue}
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
 * @return {HardwareActionBindable}
 */
Application.prototype.selectAllAction = function() {};

/**
 * Deselects any items according the current selection focus in Bitwig Studio.
 *
 * @since API version 1
 */
Application.prototype.selectNone = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.selectNoneAction = function() {};

/**
 * Selects the previous item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectPrevious = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.selectPreviousAction = function() {};

/**
 * Selects the next item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectNext = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.selectNextAction = function() {};

/**
 * Selects the first item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectFirst = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.selectFirstAction = function() {};

/**
 * Selects the last item in the current selection.
 *
 * @since API version 10
 */
Application.prototype.selectLast = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.selectLastAction = function() {};

/**
 * Cuts the selected items in Bitwig Studio if applicable.
 *
 * @since API version 1
 */
Application.prototype.cut = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.cutAction = function() {};

/**
 * Copies the selected items in Bitwig Studio to the clipboard if applicable.
 *
 * @since API version 1
 */
Application.prototype.copy = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.copyAction = function() {};

/**
 * Pastes the clipboard contents into the current selection focus in Bitwig Studio if applicable.
 *
 * @since API version 1
 */
Application.prototype.paste = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.pasteAction = function() {};

/**
 * Duplicates the active selection in Bitwig Studio if applicable.
 *
 * @since API version 1
 */
Application.prototype.duplicate = function() {};

/**
 * @return {HardwareActionBindable}
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
 * @return {HardwareActionBindable}
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
 * @return {HardwareActionBindable}
 */
Application.prototype.zoomInAction = function() {};

/**
 * Zooms out one step in the currently focused editor of the Bitwig Studio user interface.
 *
 * @since API version 1
 */
Application.prototype.zoomOut = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.zoomOutAction = function() {};

/**
 * Adjusts the zoom level of the currently focused editor so that it matches the active selection.
 *
 * @since API version 1
 */
Application.prototype.zoomToSelection = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.zoomToSelectionAction = function() {};

/**
 * Toggles between zoomToSelection and zoomToFit.
 *
 * @since API version 10
 */
Application.prototype.zoomToSelectionOrAll = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.zoomToSelectionOrAllAction = function() {};

/**
 * Toggles between zoomToSelection and the last śet zoom level.
 *
 * @since API version 10
 */
Application.prototype.zoomToSelectionOrPrevious = function() {};

/**
 * @return {HardwareActionBindable}
 */
Application.prototype.zoomToSelectionOrPreviousAction = function() {};

/**
 * Adjusts the zoom level of the currently focused editor so that all content becomes visible.
 *
 * @since API version 1
 */
Application.prototype.zoomToFit = function() {};

/**
 * @return {HardwareActionBindable}
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
 * @return {SettableEnumValue}
 * @since API version 10
 */
Application.prototype.recordQuantizationGrid = function() {};

/**
 * Returns a settable value to choose if the record quantization should quantize note length.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
Application.prototype.recordQuantizeNoteLength = function() {};
/* API Version - 3.1.2 */

/**
 * Proxy to an arpeggiator component.
 *
 * @since API version 10
 */
function Arpeggiator() {}

Arpeggiator.prototype = new ObjectProxy();
Arpeggiator.prototype.constructor = Arpeggiator;

/**
 * Returns an object to configure the arpeggiator mode.
 * Possible values:
 *  - all
 *  - up
 *  - up-down
 *  - up-then-down
 *  - down
 *  - down-up
 *  - down-then-up
 *  - flow
 *  - random
 *  - converge-up
 *  - converge-down
 *  - diverge-up
 *  - diverge-down
 *  - thumb-up
 *  - thumb-down
 *  - pinky-up
 *  - pinky-down
 *
 * @return {SettableEnumValue}
 * @since API version 10
 */
Arpeggiator.prototype.mode = function() {};

/**
 * Returns an object to configure the range in octaves.
 * The range is between 0 and 8.
 *
 * @return {SettableIntegerValue}
 * @since API version 10
 */
Arpeggiator.prototype.octaves = function() {};

/**
 * Returns an object to enable or disable the note repeat component.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
Arpeggiator.prototype.isEnabled = function() {};

/**
 * If true the arpeggiator will not try to sync to the transport.
 *
 * @return {SettableBooleanValue}
 * @since API version  10
 */
Arpeggiator.prototype.isFreeRunning = function() {};

/**
 * Return an object to configure the note repeat to use shuffle or not.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
Arpeggiator.prototype.shuffle = function() {};

/**
 * Returns an object to configure the note repeat rate in beats.
 *
 * @return {SettableDoubleValue}
 * @since API version 10
 */
Arpeggiator.prototype.rate = function() {};

/**
 * Returns an object to configure the note length, expressed as a ratio of the period.
 * Must be between 1/32 and 1.
 *
 * @return {SettableDoubleValue}
 * @since API version 10
 */
Arpeggiator.prototype.gateLength = function() {};

/**
 * Will use the note pressure to determine the velocity of arpeggiated notes.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
Arpeggiator.prototype.usePressureToVelocity = function() {};

/**
 * Release all notes being played.
 *
 * @since API version 10
 */
Arpeggiator.prototype.releaseNotes = function() {};
/* API Version - 3.1.2 */

/**
 * An interface representing various commands which can be performed on the Bitwig Studio arranger.<br/>
 * 
 * To receive an instance of the application interface call {@link ControllerHost#createArranger}.
 *
 * @since API version 1
 */
function Arranger() {}

/**
 * Gets an object that allows to enable/disable arranger playback follow. Observers can be registered on
 * the returned object for receiving notifications when the setting switches between on and off.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the enabled state of arranger playback follow
 * @since API version 1
 */
Arranger.prototype.isPlaybackFollowEnabled = function() {};

/**
 * Gets an object that allows to control the arranger track height. Observers can be registered on the
 * returned object for receiving notifications when the track height changes.
 *
 * @return {SettableBooleanValue} a boolean value object that has the state `true` when the tracks have double row height and
        `false` when the tracks have single row height.
 * @since API version 1
 */
Arranger.prototype.hasDoubleRowTrackHeight = function() {};

/**
 * Gets an object that allows to show/hide the cue markers in the arranger panel. Observers can be
 * registered on the returned object for receiving notifications when the cue marker lane switches between
 * shown and hidden.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the cue marker section visibility
 * @since API version 1
 */
Arranger.prototype.areCueMarkersVisible = function() {};

/**
 * Gets an object that allows to show/hide the clip launcher in the arranger panel. Observers can be
 * registered on the returned object for receiving notifications when the clip launcher switches between
 * shown and hidden.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the clip launcher visibility
 * @since API version 1
 */
Arranger.prototype.isClipLauncherVisible = function() {};

/**
 * Gets an object that allows to show/hide the timeline in the arranger panel. Observers can be registered
 * on the returned object for receiving notifications when the timeline switches between shown and hidden.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the timeline visibility
 * @since API version 1
 */
Arranger.prototype.isTimelineVisible = function() {};

/**
 * Gets an object that allows to show/hide the track input/output choosers in the arranger panel. Observers
 * can be registered on the returned object for receiving notifications when the I/O section switches
 * between shown and hidden.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the visibility of the track I/O section
 * @since API version 1
 */
Arranger.prototype.isIoSectionVisible = function() {};

/**
 * Gets an object that allows to show/hide the effect tracks in the arranger panel. Observers can be
 * registered on the returned object for receiving notifications when the effect track section switches
 * between shown and hidden.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the visibility of the effect track section
 * @since API version 1
 */
Arranger.prototype.areEffectTracksVisible = function() {};

/**
 * Returns an object that provides access to a bank of successive cue markers using a window configured with
 * the given size, that can be scrolled over the list of markers.
 *
 * @param size
          the number of simultaneously accessible items
 * @return {CueMarkerBank} the requested item bank object
 */
Arranger.prototype.createCueMarkerBank = function(size) {};
/* API Version - 3.1.2 */

/**
 * Callback that is notified when an asynchronous transfer has completed.
 *
 * @newSince API version 7
 */
function AsyncTransferCompledCallback() {}

/**
 * Called upon completion of an asynchronous read.
 *
 * @param {int} amountTransferred
 */
AsyncTransferCompledCallback.prototype.asyncTransferCompleted = function(amountTransferred) {};
/* API Version - 3.1.2 */

function AutoDetectionMidiPortNames() {}

/**
 * @return {String[]}
 */
AutoDetectionMidiPortNames.prototype.getInputNames = function() {};

/**
 * @return {String[]}
 */
AutoDetectionMidiPortNames.prototype.getOutputNames = function() {};
/* API Version - 3.1.2 */

function AutoDetectionMidiPortNamesList() {}

/**
 * @param {String[]} inputNames
 * @param {String[]} outputNames
 */
AutoDetectionMidiPortNamesList.prototype.add = function(inputNames, outputNames) {};

/**
 * @return {java.util.List<AutoDetectionMidiPortNames>}
 */
AutoDetectionMidiPortNamesList.prototype.getPortNames = function() {};

/**
 * @return {int}
 */
AutoDetectionMidiPortNamesList.prototype.getCount = function() {};

/**
 * @param {int} index
 * @return {AutoDetectionMidiPortNames}
 */
AutoDetectionMidiPortNamesList.prototype.getPortNamesAt = function(index) {};
/* API Version - 3.1.2 */

/**
 * A bank provides access to a range of items in Bitwig Studio. Instances of a bank are configured with a
 * fixed number of items and represent an excerpt of a larger list of items. Various methods are provided for
 * scrolling to different sections of the item list. It basically acts like a window moving over the list of
 * underlying items.
 *
 * @since API version 2
 */
function Bank() {}

Bank.prototype = new ObjectProxy();
Bank.prototype.constructor = Bank;

/**
 * The fixed size of this bank.
 * This will be initially equal to the capacity of the Bank.
 *
 * @return {int}
 * @since API version 2
 */
Bank.prototype.getSizeOfBank = function() {};

/**
 * The maximum number of items in the bank which is defined when the bank is initially created.
 *
 * @return {int}
 * @since API version 7
 */
Bank.prototype.getCapacityOfBank = function() {};

/**
 * Sets the size of this bank
 *
 * @param {int} size number of items in the bank that has to be greater than 0 and less or equal to the capacity of the bank.
 * @since API version 7
 */
Bank.prototype.setSizeOfBank = function(size) {};

Bank.prototype.scrollPageForwards = function() {};

Bank.prototype.scrollPageBackwards = function() {};

/**
 * Gets the item in the bank at the supplied index. The index must be >= 0 and < {@link #getSizeOfBank()}.
 *
 * @param {int} index
 * @return {ItemType}
 * @since API version 2
 */
Bank.prototype.getItemAt = function(index) {};

/**
 * Value that reports the underlying total item count (not the number of items available in the bank
 * window).
 *
 * @return {IntegerValue}
 * @since API version 2
 */
Bank.prototype.itemCount = function() {};

/**
 * An integer value that defines the location of the cursor that this bank is following. If there is no
 * cursor or the cursor is not within the bank then the value is -1.
 *
 * @return {SettableIntegerValue}
 * @since API version 2
 */
Bank.prototype.cursorIndex = function() {};
/* API Version - 3.1.2 */

/**
 * Defines a formatter for a beat time that can convert a beat time to a string for display to the user.
 *
 * @since API version 2
 */
function BeatTimeFormatter() {}

/**
 * Formats the supplied beat time as a string in the supplied time signature.
 *
 * @param {double} beatTime
 * @param {boolean} isAbsolute
 * @param {int} timeSignatureNumerator
 * @param {int} timeSignatureDenominator
 * @param {int} timeSignatureTicks
 * @return {string}
 * @since API version 2
 */
BeatTimeFormatter.prototype.formatBeatTime = function(beatTime, isAbsolute, timeSignatureNumerator, timeSignatureDenominator, timeSignatureTicks) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent beat time values.
 * 
 * Beat time values are double-precision number representing the number of quarter notes, regardless of time-signature.
 *
 * @since API version 1
 */
function BeatTimeValue() {}

BeatTimeValue.prototype = new DoubleValue();
BeatTimeValue.prototype.constructor = BeatTimeValue;

/**
 * Gets the current beat time formatted according to the supplied formatter.
 *
 * @param {BeatTimeFormatter} formatter
 * @return {string}
 * @since API version 2
 */
BeatTimeValue.prototype.getFormatted = function(formatter) {};

/**
 * Gets the current beat time formatted according to the default beat time formatter.
 *
 * @return {string}
 * @since API version 2
 */
BeatTimeValue.prototype.getFormatted = function() {};
/* API Version - 3.1.2 */

BitmapFormat = {
	/**
	 * Each pixel is a 32-bit quantity, with alpha in the upper 8 bits, then red, then green, then
 * blue. The 32-bit quantities are stored native-endian. Pre-multiplied alpha is used. (That is,
 * 50% transparent red is 0x80800000, not 0x80ff0000.)
	 */
	ARGB32( 4 ): 0,
	/**
	 * Each pixel is a 32-bit quantity, with the upper 8 bits unused. Red, Green, and Blue are stored
 * in the remaining 24 bits in that order.
	 */
	RGB24_32( 4 ): 1,
	int mBytesPerPixel
	/**
	 * @return {int}
	 */
	BitmapFormat.prototype.bytesPerPixel = function() {};

};/* API Version - 3.1.2 */

/**
 * Represents a bitmap image which can be painted via {@link #render(Renderer)}.
 *
 * @since API version 7
 */
function Bitmap() {}

Bitmap.prototype = new Image();
Bitmap.prototype.constructor = Bitmap;

/**
 * @return {int}
 */
Bitmap.prototype.getWidth = function() {};

/**
 * @return {int}
 */
Bitmap.prototype.getHeight = function() {};

/**
 * @return {BitmapFormat}
 */
Bitmap.prototype.getFormat = function() {};

/**
 * @return {MemoryBlock}
 */
Bitmap.prototype.getMemoryBlock = function() {};

/**
 * Call this method to start painting the bitmap.
 * This method will take care of disposing allocated patterns during the rendering.
 *
 * @param {Renderer} renderer
 * @since API version 7
 */
Bitmap.prototype.render = function(renderer) {};

/**
 * Call this method to show a window which displays the bitmap.
 * You should see this as a debug utility rather than a Control Surface API feature.
 *
 * @since API version 7
 */
Bitmap.prototype.showDisplayWindow = function() {};

/**
 * Updates the display window title.
 *
 * @param {string} title
 * @since API version 7
 */
Bitmap.prototype.setDisplayWindowTitle = function(title) {};

/**
 * Saves the image as a PPM file.
 *
 * @param {string} path the location of the target file.
 * @since API version 7
 */
Bitmap.prototype.saveToDiskAsPPM = function(path) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware (for example, if an LED is on or off).
 *
 * @since API version 10
 */
function BooleanHardwareProperty() {}

BooleanHardwareProperty.prototype = new HardwareProperty();
BooleanHardwareProperty.prototype.constructor = BooleanHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {boolean}
 */
BooleanHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {boolean}
 */
BooleanHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<java.lang.Boolean>} sendValueConsumer
 */
BooleanHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {boolean} value
 */
BooleanHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link BooleanSupplier} that supplies the latest value.
 *
 * @param {java.util.function.BooleanSupplier} supplier
 */
BooleanHardwareProperty.prototype.setValueSupplier = function(supplier) {};
/* API Version - 3.1.2 */

function BooleanValueChangedCallback() {}

BooleanValueChangedCallback.prototype = new ValueChangedCallback();
BooleanValueChangedCallback.prototype.constructor = BooleanValueChangedCallback;

/**
 * @param {boolean} newValue
 */
BooleanValueChangedCallback.prototype.valueChanged = function(newValue) {};
/* API Version - 3.1.2 */

function BooleanValue() {}

BooleanValue.prototype = new Value();
BooleanValue.prototype.constructor = BooleanValue;

/**
 * Gets the current value.
 *
 * @return {boolean}
 * @since API version 2
 */
BooleanValue.prototype.get = function() {};

/**
 * @return {boolean}
 */
BooleanValue.prototype.getAsBoolean = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate a column in the Bitwig Studio browser.
 *
 * @since API version 1
 */
function BrowserColumn() {}

BrowserColumn.prototype = new ObjectProxy();
BrowserColumn.prototype.constructor = BrowserColumn;

/**
 * Value that reports the underlying total count of column entries (not the size of the column window).
 *
 * @return {IntegerValue}
 * @since API version 2
 */
BrowserColumn.prototype.entryCount = function() {};

/**
 * Returns the cursor item, which can be used to navigate over the list of entries.
 *
 * @return {BrowserItem} the requested filter item object
 * @since API version 1
 */
BrowserColumn.prototype.createCursorItem = function() {};

/**
 * Returns an object that provides access to a bank of successive entries using a window configured with
 * the given size, that can be scrolled over the list of entries.
 *
 * @param size
          the number of simultaneously accessible items
 * @return {BrowserItemBank} the requested item bank object
 */
BrowserColumn.prototype.createItemBank = function(size) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate a filter column in the Bitwig Studio browser.
 *
 * @since API version 1
 */
function BrowserFilterColumn() {}

BrowserFilterColumn.prototype = new BrowserColumn();
BrowserFilterColumn.prototype.constructor = BrowserFilterColumn;

/**
 * Returns the filter item that represents the top-level all/any/everything wildcard item.
 *
 * @return {BrowserFilterItem} the requested filter item object
 * @since API version 1
 */
BrowserFilterColumn.prototype.getWildcardItem = function() {};

/**
 * Returns the cursor filter item, which can be used to navigate over the list of entries.
 *
 * @return {BrowserFilterItem} the requested filter item object
 * @since API version 1
 */
BrowserFilterColumn.prototype.createCursorItem = function() {};

/**
 * Returns an object that provides access to a bank of successive entries using a window configured with
 * the given size, that can be scrolled over the list of entries.
 *
 * @param size
          the number of simultaneously accessible items
 * @return {BrowserFilterItemBank} the requested item bank object
 */
BrowserFilterColumn.prototype.createItemBank = function(size) {};

/**
 * Value that reports the name of the filter column.
 *
 * @return {StringValue}
 * @since API version2
 */
BrowserFilterColumn.prototype.name = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate a filter column in the Bitwig Studio browser.
 *
 * @since API version 1
 */
function BrowserFilterItemBank() {}

BrowserFilterItemBank.prototype = new BrowserItemBank();
BrowserFilterItemBank.prototype.constructor = BrowserFilterItemBank;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent entries in a browser filter column.
 *
 * @since API version 1
 */
function BrowserFilterItem() {}

BrowserFilterItem.prototype = new BrowserItem();
BrowserFilterItem.prototype.constructor = BrowserFilterItem;

/**
 * Value that reports the hit count of the filter item.
 *
 * @return {IntegerValue}
 * @since API version 2
 */
BrowserFilterItem.prototype.hitCount = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate a column in the Bitwig Studio browser.
 *
 * @since API version 1
 */
function BrowserItemBank() {}

BrowserItemBank.prototype = new Bank();
BrowserItemBank.prototype.constructor = BrowserItemBank;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent entries in a browser filter column.
 *
 * @since API version 1
 */
function BrowserItem() {}

BrowserItem.prototype = new ObjectProxy();
BrowserItem.prototype.constructor = BrowserItem;

/**
 * Value that reports the name of the browser item.
 *
 * @return {StringValue}
 * @since API version 2
 */
BrowserItem.prototype.name = function() {};

/**
 * Returns an object that provides access to the selected state of the browser item.
 *
 * @return {SettableBooleanValue} an boolean value object
 * @since API version 1
 */
BrowserItem.prototype.isSelected = function() {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate a results column in the Bitwig Studio browser.
 *
 * @since API version 1
 */
function BrowserResultsColumn() {}

BrowserResultsColumn.prototype = new BrowserColumn();
BrowserResultsColumn.prototype.constructor = BrowserResultsColumn;

/**
 * Returns the cursor result item, which can be used to navigate over the list of entries.
 *
 * @return {BrowserResultsItem} the requested filter item object
 * @since API version 1
 */
BrowserResultsColumn.prototype.createCursorItem = function() {};

/**
 * Returns an object that provides access to a bank of successive entries using a window configured with
 * the given size, that can be scrolled over the list of entries.
 *
 * @param size
          the number of simultaneously accessible items
 * @return {BrowserResultsItemBank} the requested item bank object
 */
BrowserResultsColumn.prototype.createItemBank = function(size) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate the results column in the Bitwig Studio browser.
 *
 * @since API version 1
 */
function BrowserResultsItemBank() {}

BrowserResultsItemBank.prototype = new BrowserItemBank();
BrowserResultsItemBank.prototype.constructor = BrowserResultsItemBank;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent entries in a browser results column.
 *
 * @since API version 1
 */
function BrowserResultsItem() {}

BrowserResultsItem.prototype = new BrowserItem();
BrowserResultsItem.prototype.constructor = BrowserResultsItem;
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate the available sessions in Bitwig Studio's contextual
 * browser. The sessions are shown as tabs in the graphical user interface of the browser.
 *
 * @since API version 1
 */
function BrowsingSessionBank() {}

BrowsingSessionBank.prototype = new Bank();
BrowsingSessionBank.prototype.constructor = BrowsingSessionBank;

/**
 * Returns the window size that was used to configure the session bank during creation.
 *
 * @return {int} the size of the session bank.
 * @since API version 1
 */
BrowsingSessionBank.prototype.getSize = function() {};

/**
 * Returns the browser session for the given index.
 *
 * @param index
          the session index, must be in the range `[0..getSize-1]`
 * @return {GenericBrowsingSession} the requested browser session object
 * @since API version 1
 */
BrowsingSessionBank.prototype.getSession = function(index) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

function Callback() {}
/* API Version - 3.1.2 */

/**
 * This interface represents a chain selector device which can be:
 * - instrument selector
 * - effect selector
 *
 * @since API version 6
 */
function ChainSelector() {}

ChainSelector.prototype = new ObjectProxy();
ChainSelector.prototype.constructor = ChainSelector;

/**
 * The index of the active chain in the chain selector.
 * In case the chain selector has no chains or the value is not connected to the chain selector,
 * then the value will be 0.
 *
 * @return {SettableIntegerValue}
 * @since API version 6
 */
ChainSelector.prototype.activeChainIndex = function() {};

/**
 * The number of chains in the chain selector.
 *
 * @return {IntegerValue}
 * @since API version 6
 */
ChainSelector.prototype.chainCount = function() {};

/**
 * The active device layer.
 *
 * @return {DeviceLayer}
 * @since API version 6
 */
ChainSelector.prototype.activeChain = function() {};

/**
 * Cycle to the next chain.
 * If the current active chain is the last one, then moves to the first one.
 *
 * @since API version 6
 */
ChainSelector.prototype.cycleNext = function() {};

/**
 * Cycle to the previous chain.
 * If the current active chain the first one, then moves to the last one.
 *
 * @since API version 6
 */
ChainSelector.prototype.cyclePrevious = function() {};
/* API Version - 3.1.2 */

/**
 * A channel bank provides access to a range of channels in Bitwig Studio, such as tracks or device layers.
 * Instances of channel bank are typically configured with support for a fixed number of channels and
 * represent an excerpt of a larger list of channels. Various methods are provided for scrolling to different
 * sections of the channel list. It basically acts like a window moving over the list of channels.
 *
 * @since API version 1
 */
function ChannelBank() {}

ChannelBank.prototype = new ObjectProxy();
ChannelBank.prototype.constructor = ChannelBank;

/**
 * Sets the step size used for scrolling the channel bank.
 *
 * @param stepSize
          the step size used for scrolling. Default is `1`.
 * @since API version 1
 */
ChannelBank.prototype.setChannelScrollStepSize = function(stepSize) {};

/**
 * Value that reports if the channel bank can be scrolled further down.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ChannelBank.prototype.canScrollChannelsUp = function() {};

/**
 * Value that reports if the channel bank can be scrolled further down.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ChannelBank.prototype.canScrollChannelsDown = function() {};

/**
 * Value that reports the underlying total channel count (not the number of channels available in the bank
 * window).
 *
 * @return {IntegerValue}
 * @since API version 2
 */
ChannelBank.prototype.channelCount = function() {};
/* API Version - 3.1.2 */

/**
 * This interface defines access to the common attributes and operations of channels, such as tracks or nested
 * device channels.
 *
 * @since API version 1
 */
function Channel() {}

Channel.prototype = new DeviceChain();
Channel.prototype.constructor = Channel;

/**
 * Returns an object that represents the activated state of the channel.
 *
 * @return {SettableBooleanValue} an object that provides access to the channels activated state.
 * @since API version 1
 */
Channel.prototype.isActivated = function() {};

/**
 * Gets a representation of the channels volume control.
 *
 * @return {Parameter} an object that provides access to the channels volume control.
 * @since API version 5
 */
Channel.prototype.volume = function() {};

/**
 * Gets a representation of the channels pan control.
 *
 * @return {Parameter} an object that provides access to the channels pan control.
 * @since API version 5
 */
Channel.prototype.pan = function() {};

/**
 * Gets a representation of the channels mute control.
 *
 * @return {SettableBooleanValue} an object that provides access to the channels mute control.
 * @since API version 5
 */
Channel.prototype.mute = function() {};

/**
 * Gets a representation of the channels solo control.
 *
 * @return {SoloValue} an object that provides access to the channels solo control.
 * @since API version 1
 */
Channel.prototype.solo = function() {};

/**
 * True if the current channel is being muted by an other channel with solo on.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
Channel.prototype.isMutedBySolo = function() {};

/**
 * Registers an observer for the VU-meter of this track.
 *
 * @param range
          the number of steps to which the reported values should be scaled. For example a range of 128
          would cause the callback to be called with values between 0 and 127.
 * @param channel
          0 for left channel, 1 for right channel, -1 for the sum of both
 * @param peak
          when `true` the peak value is reported, otherwise the RMS value
 * @param callback
          a callback function that takes a single numeric argument. The value is in the range
          [0..range-1].
 * @since API version 1
 */
Channel.prototype.addVuMeterObserver = function(range, channel, peak, callback) {};

/**
 * Returns an array of the playing notes.
 *
 * @return {PlayingNoteArrayValue}
 * @since API version 2
 */
Channel.prototype.playingNotes = function() {};

/**
 * Get the color of the channel.
 *
 * @return {SettableColorValue}
 * @since API version 2
 */
Channel.prototype.color = function() {};

/**
 * Gets a {@link SendBank} that can be used to navigate the sends of this channel.
 *
 * @return {SendBank}
 * @since API version 2
 */
Channel.prototype.sendBank = function() {};

/**
 * Duplicates the track.
 *
 * @since API version 1
 */
Channel.prototype.duplicate = function() {};

/**
 * Selects the device chain in the Bitwig Studio mixer, in case it is a selectable object.
 *
 * @since API version 1
 */
Channel.prototype.selectInMixer = function() {};

/**
 * Registers an observer that reports if the device chain is selected in Bitwig Studio mixer.
 *
 * @param callback
          a callback function that takes a single boolean parameter.
 * @since API version 1
 */
Channel.prototype.addIsSelectedInMixerObserver = function(callback) {};

/**
 * Tries to scroll the contents of the arrangement editor so that the channel becomes visible.
 *
 * @since API version 1
 */
Channel.prototype.makeVisibleInArranger = function() {};

/**
 * Tries to scroll the contents of the mixer panel so that the channel becomes visible.
 *
 * @since API version 1
 */
Channel.prototype.makeVisibleInMixer = function() {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * An interface that provides access to the contents of a clip in Bitwig Studio.
 * 
 * The note content of the clip is exposed in terms of steps and keys, mainly targeted to x-y-grid
 * applications such as step sequencers.
 *
 * @since API version 1
 */
function Clip() {}

Clip.prototype = new ObjectProxy();
Clip.prototype.constructor = Clip;

/**
 * Scroll the note grid so that the given key becomes the key with y position of 0.
 * 
 * Note: This can cause some parts of the grid to represent invalid keys as there is no clipping
 *
 * @param key
          the key that should be the new key with a y position of 0. This must be a value in the range
          0...127.
 * @since API version 1
 */
Clip.prototype.scrollToKey = function(key) {};

/**
 * Scrolls the note grid keys one page up. For example if the note grid is configured to show 12 keys and
 * is currently showing keys [36..47], calling this method would scroll the note grid to key range
 * [48..59].
 *
 * @since API version 1
 */
Clip.prototype.scrollKeysPageUp = function() {};

/**
 * Scrolls the note grid keys one page down. For example if the note grid is configured to show 12 keys and
 * is currently showing keys [36..47], calling this method would scroll the note grid to key range
 * [48..59].
 *
 * @since API version 1
 */
Clip.prototype.scrollKeysPageDown = function() {};

/**
 * Scrolls the note grid keys one key up. For example if the note grid is configured to show 12 keys and is
 * currently showing keys [36..47], calling this method would scroll the note grid to key range [37..48].
 *
 * @since API version 1
 */
Clip.prototype.scrollKeysStepUp = function() {};

/**
 * Scrolls the note grid keys one key down. For example if the note grid is configured to show 12 keys and
 * is currently showing keys [36..47], calling this method would scroll the note grid to key range
 * [35..46].
 *
 * @since API version 1
 */
Clip.prototype.scrollKeysStepDown = function() {};

/**
 * Scroll the note grid so that the given step becomes visible.
 *
 * @param step
          the step that should become visible
 * @since API version 1
 */
Clip.prototype.scrollToStep = function(step) {};

/**
 * Scrolls the note grid steps one page forward. For example if the note grid is configured to show 16
 * steps and is currently showing keys [0..15], calling this method would scroll the note grid to key range
 * [16..31].
 *
 * @since API version 1
 */
Clip.prototype.scrollStepsPageForward = function() {};

/**
 * Scrolls the note grid steps one page backwards. For example if the note grid is configured to show 16
 * steps and is currently showing keys [16..31], calling this method would scroll the note grid to key
 * range [0..16].
 *
 * @since API version 1
 */
Clip.prototype.scrollStepsPageBackwards = function() {};

/**
 * Scrolls the note grid steps one step forward. For example if the note grid is configured to show 16
 * steps and is currently showing keys [0..15], calling this method would scroll the note grid to key range
 * [1..16].
 *
 * @since API version 1
 */
Clip.prototype.scrollStepsStepForward = function() {};

/**
 * Scrolls the note grid steps one step backwards. For example if the note grid is configured to show 16
 * steps and is currently showing keys [1..16], calling this method would scroll the note grid to key range
 * [0..15].
 *
 * @since API version 1
 */
Clip.prototype.scrollStepsStepBackwards = function() {};

/**
 * Value that reports if the note grid keys can be scrolled further up.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Clip.prototype.canScrollKeysUp = function() {};

/**
 * Value that reports if the note grid keys can be scrolled further down.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Clip.prototype.canScrollKeysDown = function() {};

/**
 * Value that reports if the note grid if the note grid steps can be scrolled backwards.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Clip.prototype.canScrollStepsBackwards = function() {};

/**
 * Value that reports if the note grid if the note grid steps can be scrolled forwards.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Clip.prototype.canScrollStepsForwards = function() {};

/**
 * @param {int} x
 * @param {int} y
 * @param {int} insertVelocity
 * @since API version 1
 */
Clip.prototype.toggleStep = function(x, y, insertVelocity) {};

/**
 * Toggles the existence of a note in the note grid cell specified by the given x and y arguments.
 *
 * @param {int} channel the MIDI channel, between 0 and 15.
 * @param x
          the x position within the note grid, defining the step/time of the target note
 * @param y
          the y position within the note grid, defining the key of the target note
 * @param insertVelocity
          the velocity of the target note in case a new note gets inserted
 * @since API version 10
 */
Clip.prototype.toggleStep = function(channel, x, y, insertVelocity) {};

/**
 * @param {int} x
 * @param {int} y
 * @param {int} insertVelocity
 * @param {double} insertDuration
 * @since API version 1
 */
Clip.prototype.setStep = function(x, y, insertVelocity, insertDuration) {};

/**
 * Creates a note in the grid cell specified by the given x and y arguments. Existing notes are
 * overwritten.
 *
 * @param {int} channel
 * @param {int} x
 * @param {int} y
 * @param {int} insertVelocity
 * @param {double} insertDuration
 * @since API version 1
 */
Clip.prototype.setStep = function(channel, x, y, insertVelocity, insertDuration) {};

/**
 * @param {int} x
 * @param {int} y
 * @since API version 1
 */
Clip.prototype.clearStep = function(x, y) {};

/**
 * Removes the note in the grid cell specified by the given x and y arguments. Calling this method does
 * nothing in case no note exists at the given x-y-coordinates.
 *
 * @param {int} channel MIDI channel, from 0 to 15.
 * @param x
          the x position within the note grid, defining the step/time of the target note
 * @param y
          the y position within the note grid, defining the key of the target note
 * @since API version 10
 */
Clip.prototype.clearStep = function(channel, x, y) {};

/**
 * Removes all notes in the grid started on the step x.
 *
 * @param {int} channel
 * @param {int} x
 * @since API version 10
 */
Clip.prototype.clearStepsAtX = function(channel, x) {};

/**
 * Removes all notes in the grid row specified by the given y argument.
 *
 * @param {int} channel MIDI channel, from 0 to 15.
 * @param {int} y the y position within the note grid, defining the key of the target note
 * @since API version 10
 */
Clip.prototype.clearStepsAtY = function(channel, y) {};

/**
 * Removes all notes in the grid.
 *
 * @since API version 1
 */
Clip.prototype.clearSteps = function() {};

/**
 * @param {int} x
 * @param {int} y
 * @param {boolean} clearCurrentSelection
 * @since API version 1
 */
Clip.prototype.selectStepContents = function(x, y, clearCurrentSelection) {};

/**
 * Selects the note in the grid cell specified by the given x and y arguments, in case there actually is a
 * note at the given x-y-coordinates.
 *
 * @param {int} channel MIDI channel, from 0 to 15.
 * @param x
          the x position within the note grid, defining the step/time of the target note
 * @param y
          the y position within the note grid, defining the key of the target note
 * @param clearCurrentSelection
          `true` if the existing selection should be cleared, {@false} if the note should be added to
          the current selection.
 * @since API version 10
 */
Clip.prototype.selectStepContents = function(channel, x, y, clearCurrentSelection) {};

/**
 * Sets the beat time duration that is represented by one note grid step.
 *
 * @param lengthInBeatTime
          the length of one note grid step in beat time.
 * @since API version 1
 */
Clip.prototype.setStepSize = function(lengthInBeatTime) {};

/**
 * Registers an observer that reports which note grid steps/keys contain notes.
 *
 * @param callback
          A callback function that receives three parameters: 1. the x (step) coordinate within the note
          grid (integer), 2. the y (key) coordinate within the note grid (integer), and 3. an integer
          value that indicates if the step is empty (`0`) or if a note continues playing (`1`) or starts
          playing (`2`).
 * @since API version 1
 */
Clip.prototype.addStepDataObserver = function(callback) {};

/**
 * Registers an observer that reports which note grid steps/keys contain notes.
 *
 * @param {NoteStepChangedCallback} callback A callback function that receives the StepInfo.
 * @since API version 10
 */
Clip.prototype.addNoteStepObserver = function(callback) {};

/**
 * Value that reports note grid cells as they get played by the sequencer.
 *
 * @return {IntegerValue}
 * @since API version 2
 */
Clip.prototype.playingStep = function() {};

/**
 * Updates the name of the clip.
 *
 * @param name
          the new clip name
 * @since API version 1
 */
Clip.prototype.setName = function(name) {};

/**
 * Returns shuffle settings of the clip.
 *
 * @return {SettableBooleanValue} the value object that represents the clips shuffle setting.
 * @since API version 1
 */
Clip.prototype.getShuffle = function() {};

/**
 * Returns accent setting of the clip.
 *
 * @return {SettableRangedValue} the ranged value object that represents the clips accent setting.
 * @since API version 1
 */
Clip.prototype.getAccent = function() {};

/**
 * Returns the start of the clip in beat time.
 *
 * @return {SettableBeatTimeValue} the beat time object that represents the clips start time.
 * @since API version 1
 */
Clip.prototype.getPlayStart = function() {};

/**
 * Returns the length of the clip in beat time.
 *
 * @return {SettableBeatTimeValue} the beat time object that represents the duration of the clip.
 * @since API version 1
 */
Clip.prototype.getPlayStop = function() {};

/**
 * Returns an object that provides access to the loop enabled state of the clip.
 *
 * @return {SettableBooleanValue} a boolean value object.
 * @since API version 1
 */
Clip.prototype.isLoopEnabled = function() {};

/**
 * Returns the loop start time of the clip in beat time.
 *
 * @return {SettableBeatTimeValue} the beat time object that represents the clips loop start time.
 * @since API version 1
 */
Clip.prototype.getLoopStart = function() {};

/**
 * Returns the loop length of the clip in beat time.
 *
 * @return {SettableBeatTimeValue} the beat time object that represents the clips loop length.
 * @since API version 1
 */
Clip.prototype.getLoopLength = function() {};

/**
 * Get the color of the clip.
 *
 * @return {SettableColorValue}
 * @since API version 2
 */
Clip.prototype.color = function() {};

/**
 * Duplicates the clip.
 *
 * @since API version 1
 */
Clip.prototype.duplicate = function() {};

/**
 * Duplicates the content of the clip.
 *
 * @since API version 1
 */
Clip.prototype.duplicateContent = function() {};

/**
 * Transposes all notes in the clip by the given number of semitones.
 *
 * @param semitones
          the amount of semitones to transpose, can be a positive or negative integer value.
 * @since API version 1
 */
Clip.prototype.transpose = function(semitones) {};

/**
 * Quantize the start time of all notes in the clip according to the given amount. The note lengths remain
 * the same as before.
 *
 * @param amount
          a factor between `0` and `1` that allows to morph between the original note start and the
          quantized note start.
 * @since API version 1
 */
Clip.prototype.quantize = function(amount) {};

/**
 * Gets the track that contains the clip.
 *
 * @return {Track} a track object that represents the track which contains the clip.
 * @since API version 1
 */
Clip.prototype.getTrack = function() {};

/**
 * Setting for the default launch quantization.
 * 
 * Possible values are `"default"`, `"none"`, `"8"`, `"4"`, `"2"`, `"1"`, `"1/2"`, `"1/4"`, `"1/8"`,
 * `"1/16"`.
 *
 * @return {SettableEnumValue}
 * @since API version 8
 */
Clip.prototype.launchQuantization = function() {};

/**
 * Setting "Q to loop" in the inspector.
 *
 * @return {SettableBooleanValue}
 * @since API version 8
 */
Clip.prototype.useLoopStartAsQuantizationReference = function() {};

/**
 * Setting "Launch Mode" from the inspector.
 * Possible values are:
 *  - play_with_quantization
 *  - continue_immediately
 *  - continue_with_quantization
 *
 * @return {SettableEnumValue}
 * @since API version 9
 */
Clip.prototype.launchMode = function() {};

/**
 * Get step info
 *
 * @param {int} channel
 * @param {int} x
 * @param {int} y
 * @return {NoteStep}
 * @since API version 10
 */
Clip.prototype.getStep = function(channel, x, y) {};

/**
 * Launches the clip.
 *
 * @since API version 10
 */
Clip.prototype.launch = function() {};

/**
 * Get the clip launcher slot containing the clip.
 *
 * @return {ClipLauncherSlot}
 * @since API version 10
 */
Clip.prototype.clipLauncherSlot = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent a scrollable fixed-size window that is connected to a section of the
 * clip launcher slots for a specific track.
 *
 * @since API version 1
 */
function ClipLauncherSlotBank() {}

ClipLauncherSlotBank.prototype = new ClipLauncherSlotOrSceneBank();
ClipLauncherSlotBank.prototype.constructor = ClipLauncherSlotBank;

/**
 * Selects the slot with the given index.
 *
 * @param slot
          the index of the slot within the slot window.
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.select = function(slot) {};

/**
 * Starts recording into the slot with the given index.
 *
 * @param slot
          the index of the slot within the slot window.
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.record = function(slot) {};

/**
 * Makes the clip content of the slot with the given index visible in the note or audio editor.
 *
 * @param slot
          the index of the slot within the slot window.
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.showInEditor = function(slot) {};

/**
 * Creates an new clip in the slot with the given index.
 *
 * @param {int} slot
 * @param {int} lengthInBeats
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.createEmptyClip = function(slot, lengthInBeats) {};

/**
 * Duplicates the clip in the slot with the given index.
 *
 * @param slot
          the index of the slot within the slot window.
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.duplicateClip = function(slot) {};

/**
 * Registers an observer that reports selection changes for the slots inside the window.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index is selected (`true`) or not (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addIsSelectedObserver = function(callback) {};

/**
 * Registers an observer that reports which slots contain clips.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index contains a clip (`true`) or not
          (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addHasContentObserver = function(callback) {};

/**
 * Registers an observer that reports the playback state of clips / slots. The reported states include
 * `stopped`, `playing`, `recording`, but also `queued for stop`, `queued for playback`, `queued for
 * recording`.
 *
 * @param callback
          a callback function that receives three parameters: 1. the slot index (integer), 2. the queued
          or playback state: `0` when stopped, `1` when playing, or `2` when recording, and 3. a boolean
          parameter indicating if the second argument is referring to the queued state (`true`) or the
          actual playback state (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addPlaybackStateObserver = function(callback) {};

/**
 * Registers an observer that reports which slots have clips that are currently playing.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently playing
          (`true`) or not (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addIsPlayingObserver = function(callback) {};

/**
 * Registers an observer that reports which slots have clips that are currently recording.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently recording
          (`true`) or not (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addIsRecordingObserver = function(callback) {};

/**
 * Add an observer if clip playback is queued on the slot.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently queued for
          playback (`true`) or not (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addIsPlaybackQueuedObserver = function(callback) {};

/**
 * Add an observer if clip recording is queued on the slot.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently queued for
          recording (`true`) or not (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addIsRecordingQueuedObserver = function(callback) {};

/**
 * Add an observer if clip playback is queued to stop on the slot.
 *
 * @param callback
          a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently queued for
          stop (`true`) or not (`false`)
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addIsStopQueuedObserver = function(callback) {};

/**
 * Registers an observer that reports the colors of clip in the current slot window.
 *
 * @param callback
          a callback function that receives four parameters: 1. the slot index (integer), 2. the red
          coordinate of the RBG color value, 3. the green coordinate of the RBG color value, and 4. the
          blue coordinate of the RBG color value
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.addColorObserver = function(callback) {};

/**
 * Specifies if the Bitwig Studio clip launcher should indicate which slots are part of the window. By
 * default indications are disabled.
 *
 * @param shouldIndicate
          `true` if visual indications should be enabled, `false` otherwise
 * @since API version 1
 */
ClipLauncherSlotBank.prototype.setIndication = function(shouldIndicate) {};

/**
 * Returns an object that can be used to observe and toggle if the slots on a connected track group show
 * either scenes launch buttons (for launching the content of the track group) or the clips of the group
 * master track.
 *
 * @return {SettableBooleanValue} a boolean value object.
 */
ClipLauncherSlotBank.prototype.isMasterTrackContentShownOnTrackGroups = function() {};
/* API Version - 3.1.2 */

function ClipLauncherSlotBankPlaybackStateChangedCallback() {}

ClipLauncherSlotBankPlaybackStateChangedCallback.prototype = new Callback();
ClipLauncherSlotBankPlaybackStateChangedCallback.prototype.constructor = ClipLauncherSlotBankPlaybackStateChangedCallback;

/**
 * Registers an observer that reports the playback state of clips / slots. The reported states include
 * `stopped`, `playing`, `recording`, but also `queued for stop`, `queued for playback`, `queued for
 * recording`.
 *
 * @param {int} slotIndex
 * @param {int} playbackState
 * @param {boolean} isQueued
 * @since API version 1
 */
ClipLauncherSlotBankPlaybackStateChangedCallback.prototype.playbackStateChanged = function(slotIndex, playbackState, isQueued) {};
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
/* API Version - 3.1.2 */

/**
 * An abstract interface that represents the clip launcher scenes or slots of a single track.
 *
 * @since API version 1
 */
function ClipLauncherSlotOrSceneBank() {}

ClipLauncherSlotOrSceneBank.prototype = new Bank();
ClipLauncherSlotOrSceneBank.prototype.constructor = ClipLauncherSlotOrSceneBank;

/**
 * Launches the scene/slot with the given index.
 *
 * @param slot
          the index of the slot that should be launched
 * @since API version 1
 */
ClipLauncherSlotOrSceneBank.prototype.launch = function(slot) {};

/**
 * Stops clip launcher playback for the associated track.
 *
 * @since API version 1
 */
ClipLauncherSlotOrSceneBank.prototype.stop = function() {};

/**
 * Action to call {@link #stop()}.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
ClipLauncherSlotOrSceneBank.prototype.stopAction = function() {};

/**
 * Performs a return-to-arrangement operation on the related track, which caused playback to be taken over
 * by the arrangement sequencer.
 *
 * @since API version 1
 */
ClipLauncherSlotOrSceneBank.prototype.returnToArrangement = function() {};

/**
 * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
 * of containing clips.
 *
 * @param callback
          a callback function receiving two parameters: 1. the slot index (integer) within the
          configured window, and 2. the name of the scene/slot (string)
 * @since API version 1
 */
ClipLauncherSlotOrSceneBank.prototype.addNameObserver = function(callback) {};
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
/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware (for example, the color of a light).
 *
 * @since API version 10
 */
function ColorHardwareProperty() {}

ColorHardwareProperty.prototype = new HardwareProperty();
ColorHardwareProperty.prototype.constructor = ColorHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {Color}
 */
ColorHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {Color}
 */
ColorHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<Color>} sendValueConsumer
 */
ColorHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {Color} value
 */
ColorHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link Supplier} that supplies the latest value.
 *
 * @param {java.util.function.Supplier<Color>} supplier
 */
ColorHardwareProperty.prototype.setValueSupplier = function(supplier) {};
/* API Version - 3.1.2 */

/**
 * This class represents an RGBA color with each component being stored as double.
 *
 * @since API version 5
 */
function Color() {}

/**
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @return {Color}
 */
Color.prototype.fromRGB = function(red, green, blue) {};

/**
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 * @return {Color}
 */
Color.prototype.fromRGBA = function(red, green, blue, alpha) {};

/**
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 * @return {Color}
 */
Color.prototype.fromRGB255 = function(red, green, blue) {};

/**
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 * @param {int} alpha
 * @return {Color}
 */
Color.prototype.fromRGBA255 = function(red, green, blue, alpha) {};

/**
 * @param {string} hex
 * @return {Color}
 */
Color.prototype.fromHex = function(hex) {};

/**
 * Mixes two colors.
 *
 * @param {Color} c1
 * @param {Color} c2
 * @param {double} blend
 * @return {Color}
 * @since API version 4
 */
Color.prototype.mix = function(c1, c2, blend) {};

/**
 * @return {Color}
 */
Color.prototype.nullColor = function() {};

/**
 * @return {Color}
 */
Color.prototype.blackColor = function() {};

/**
 * @return {Color}
 */
Color.prototype.whiteColor = function() {};

/**
 * @return {double}
 */
Color.prototype.getRed = function() {};

/**
 * @return {double}
 */
Color.prototype.getGreen = function() {};

/**
 * @return {double}
 */
Color.prototype.getBlue = function() {};

/**
 * @return {double}
 */
Color.prototype.getAlpha = function() {};

/**
 * @return {int}
 */
Color.prototype.getRed255 = function() {};

/**
 * @return {int}
 */
Color.prototype.getGreen255 = function() {};

/**
 * @return {int}
 */
Color.prototype.getBlue255 = function() {};

/**
 * @return {int}
 */
Color.prototype.getAlpha255 = function() {};
/* API Version - 3.1.2 */

function ColorValueChangedCallback() {}

ColorValueChangedCallback.prototype = new ValueChangedCallback();
ColorValueChangedCallback.prototype.constructor = ColorValueChangedCallback;

/**
 * As alpha component was introduced after this interface was released,
 * the alpha component is not part of the parameter and would have to be
 * checked manually.
 *
 * @param {float} red
 * @param {float} green
 * @param {float} blue
 */
ColorValueChangedCallback.prototype.valueChanged = function(red, green, blue) {};
/* API Version - 3.1.2 */

function ColorValue() {}

ColorValue.prototype = new Value();
ColorValue.prototype.constructor = ColorValue;

/**
 * Gets the red component of the current value.
 *
 * @return {float}
 * @since API version 2
 */
ColorValue.prototype.red = function() {};

/**
 * Gets the green component of the current value.
 *
 * @return {float}
 * @since API version 2
 */
ColorValue.prototype.green = function() {};

/**
 * Gets the blue component of the current value.
 *
 * @return {float}
 * @since API version 2
 */
ColorValue.prototype.blue = function() {};

/**
 * Gets the alpha component of the current value.
 *
 * @return {float}
 * @since API version 5
 */
ColorValue.prototype.alpha = function() {};

/**
 * @return {Color}
 */
ColorValue.prototype.get = function() {};
/* API Version - 3.1.2 */

function ConnectionEstablishedCallback() {}

ConnectionEstablishedCallback.prototype = new Callback();
ConnectionEstablishedCallback.prototype.constructor = ConnectionEstablishedCallback;

/**
 * @param {RemoteConnection} connection
 */
ConnectionEstablishedCallback.prototype.connectionEstablished = function(connection) {};
/* API Version - 3.1.2 */

/**
 * Represents a hardware control that can input a relative or absolute value (for example, a slider, knob,
 * relative encoder...).
 *
 * @since API version 10
 */
function ContinuousHardwareControl() {}

ContinuousHardwareControl.prototype = new HardwareControl();
ContinuousHardwareControl.prototype.constructor = ContinuousHardwareControl;

/**
 * An optional button that can be associated with this control when this control can also act as a button
 * (e.g by pressing down on it).
 *
 * @return {HardwareButton}
 */
ContinuousHardwareControl.prototype.hardwareButton = function() {};

/**
 * Sets an optional button that can be associated with this control when this control can also act as a
 * button (e.g by pressing down on it).
 *
 * @param {HardwareButton} button
 */
ContinuousHardwareControl.prototype.setHardwareButton = function(button) {};
/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when a continuous value is input by the user (for example, when moving a
 * slider or turning a knob based on some MIDI message).
 *
 * @see MidiIn#createAbsoluteValueMatcher(String, String, int)
 * @see MidiIn#createAbsoluteCCValueMatcher(int, int)
 * @see MidiIn#createAbsolutePitchBendValueMatcher(int)
 * @since API version 10
 */
function ContinuousHardwareValueMatcher() {}

ContinuousHardwareValueMatcher.prototype = new HardwareInputMatcher();
ContinuousHardwareValueMatcher.prototype.constructor = ContinuousHardwareValueMatcher;
/* API Version - 3.1.2 */

/**
 * Defines an extension that enabled a controller to work with Bitwig Studio.
 */
function ControllerExtensionDefinition() {}

/**
 * @return {string}
 */
ControllerExtensionDefinition.prototype.toString = function() {};

/**
 * The vendor of the controller that this extension is for.
 *
 * @return {string}
 */
ControllerExtensionDefinition.prototype.getHardwareVendor = function() {};

/**
 * The model name of the controller that this extension is for.
 *
 * @return {string}
 */
ControllerExtensionDefinition.prototype.getHardwareModel = function() {};

/**
 * The number of MIDI in ports that this controller extension has.
 *
 * @return {int}
 */
ControllerExtensionDefinition.prototype.getNumMidiInPorts = function() {};

/**
 * The number of MIDI out ports that this controller extension has.
 *
 * @return {int}
 */
ControllerExtensionDefinition.prototype.getNumMidiOutPorts = function() {};

/**
 * Obtains a {@link AutoDetectionMidiPortNamesList} that defines the names of the MIDI in and out ports
 * that can be used for auto detection of the controller for the supplied platform type.
 *
 * @param {PlatformType} platformType
 * @return {AutoDetectionMidiPortNamesList}
 */
ControllerExtensionDefinition.prototype.getAutoDetectionMidiPortNamesList = function(platformType) {};

/**
 * Lists the {@link AutoDetectionMidiPortNames} that defines the names of the MIDI in and out ports that
 * can be used for auto detection of the controller for the supplied platform type.
 *
 * @param {AutoDetectionMidiPortNamesList} list
 * @param {PlatformType} platformType
 */
ControllerExtensionDefinition.prototype.listAutoDetectionMidiPortNames = function(list, platformType) {};

/**
 * @return {HardwareDeviceMatcherList}
 */
ControllerExtensionDefinition.prototype.getHardwareDeviceMatcherList = function() {};

/**
 * Lists the hardware devices that this controller needs to function. For each device that is listed the
 * user will see a chooser in the preferences for this extension that allows them to choose a connected
 * device. The {@link HardwareDeviceMatcher} will also be used during auto detection to automatically add
 * and select the device if possible.
 *
 * @param {HardwareDeviceMatcherList} list
 * @since API version 7
 */
ControllerExtensionDefinition.prototype.listHardwareDevices = function(list) {};

/**
 * Creates an instance of this extension.
 *
 * @param {ControllerHost} host
 * @return {ControllerExtension}
 */
ControllerExtensionDefinition.prototype.createInstance = function(host) {};
/* API Version - 3.1.2 */

/**
 * Defines an extension that enabled a controller to work with Bitwig Studio.
 */
function ControllerExtension() {}

/**
 * @param {int} index
 * @return {MidiIn}
 */
ControllerExtension.prototype.getMidiInPort = function(index) {};

/**
 * @param {int} index
 * @return {MidiOut}
 */
ControllerExtension.prototype.getMidiOutPort = function(index) {};

/**
 * Initializes this controller extension. This will be called once when the extension is started. During initialization the
 * extension should call the various create methods available via the {@link ControllerHost} interface in order to
 * create objects used to communicate with various parts of the Bitwig Studio application (e.g
 * {@link ControllerHost#createCursorTrack(int, int)}.
 */
ControllerExtension.prototype.init = function() {};

/**
 * Called once when this controller extension is stopped.
 */
ControllerExtension.prototype.exit = function() {};

/**
 * Called when this controller extension should flush any pending updates to the controller.
 */
ControllerExtension.prototype.flush = function() {};
/* API Version - 3.1.2 */

/**
 * An interface representing the host application to the script. A singleton instance of this interface is
 * available in the global scope of each script. The methods provided by this interface can be divided in
 * different categories:
 * 
 * 1. functions for registering the script in Bitwig Studio, so that it can be listed, detected and configured
 * in the controller preferences. The methods that belong to this group are {@link #defineController},
 * {@link #defineMidiPorts}, {@link #defineSysexIdentityReply} and {@link #addDeviceNameBasedDiscoveryPair}.
 * 2. functions for creating objects that provide access to the various areas of Bitwig Studio to the script.
 * The name of those methods typically start with `create...` 3. functions for printing to the Control Surface
 * Console, which can be opened from the `View` menu of Bitwig Studio. 4. functions for determining the name
 * of the host application, API version, the host operating system and such.
 * 
 * The first group of methods should be called on the global scope of the script. The function in the second
 * and third group are typically called from the init method of the script or other handler functions. The
 * last group is probably only required in rare cases and can be called any time.
 *
 * @mainpage Introduction

Welcome to the Bitwig Control Surface API.<br/>

The pages shown here include the reference documentation for the various interfaces and functions provided
by the API.<br/>

The best starting point for becoming familiar with the API within these pages is the documentation of the
{@link Host} interface. A singleton instance of that interface is available in the scope of each script.
In addition it is highly recommended to also walk through the <b>Control Surface Scripting Guide</b> that is
available from the @em Help menu in Bitwig Studio.
 * @include api-changes
 * @since API version 1
 */
function ControllerHost() {}

ControllerHost.prototype = new Host();
ControllerHost.prototype.constructor = ControllerHost;

/**
 * Restarts this controller.
 *
 * @since API version 7
 */
ControllerHost.prototype.restart = function() {};

/**
 * Loads the supplied API version into the calling script. This is only intended to be called from a
 * controller script. It cannot be called from a Java controller extension.
 *
 * @param {int} version
 */
ControllerHost.prototype.loadAPI = function(version) {};

/**
 * Call this method to allow your script to use Beta APIs.
 * 
 * Beta APIs are still on development and might not be available in a future version of Bitwig Studio.
 * 
 * Turning this flag to true, will flag your extension as being a beta extension which might not work after
 * updating Bitwig Studio.
 *
 * @since API version 7
 */
ControllerHost.prototype.useBetaApi = function() {};

/**
 * Determines whether the calling script should fail if it calls a deprecated method based on the API
 * version that it requested.
 *
 * @return {boolean}
 */
ControllerHost.prototype.shouldFailOnDeprecatedUse = function() {};

/**
 * Sets whether the calling script should fail if it calls a deprecated method based on the API version
 * that it requested. This is only intended to be called from a controller script. It cannot be called from
 * a Java controller extension.
 *
 * @param {boolean} value
 */
ControllerHost.prototype.setShouldFailOnDeprecatedUse = function(value) {};

/**
 * Loads the script defined by the supplied path. This is only intended to be called from a controller
 * script. It cannot be called from a Java controller extension.
 *
 * @param {string} path
 */
ControllerHost.prototype.load = function(path) {};

/**
 * Indicates if the host platform is Windows.
 *
 * @return {boolean} `true` if the host platform is Windows, `false` otherwise.
 * @since API version 1
 */
ControllerHost.prototype.platformIsWindows = function() {};

/**
 * Indicates if the host platform is Apple Mac OS X.
 *
 * @return {boolean} `true` if the host platform is Mac, `false` otherwise.
 * @since API version 1
 */
ControllerHost.prototype.platformIsMac = function() {};

/**
 * Indicates if the host platform is Linux.
 *
 * @return {boolean} `true` if the host platform is Linux, `false` otherwise.
 * @since API version 1
 */
ControllerHost.prototype.platformIsLinux = function() {};

/**
 * Registers a controller script with the given parameters. This function must be called once at the global
 * scope of the script.
 *
 * @param vendor
          the name of the hardware vendor. Must not be <code>null</code>.
 * @param name
          the name of the controller script as listed in the user interface of Bitwig Studio. Must not
          be <code>null</code>.
 * @param version
          the version of the controller script. Must not be <code>null</code>.
 * @param uuid
          a universal unique identifier (UUID) string that is used to distinguish one script from
          another, for example `550e8400-e29b-11d4-a716-446655440000`. Must not be <code>null</code>.
          For generating random UUID strings several free web tools are available.
 * @param author
          the name of the script author
 * @since API version 1
 */
ControllerHost.prototype.defineController = function(vendor, name, version, uuid, author) {};

/**
 * Defines the number of MIDI ports for input and output that the device uses. This method should be called
 * once in the global scope if the script is supposed to exchange MIDI messages with the device, or if the
 * script adds entries to the MIDI input/output choosers in Bitwig Studio. After calling this method the
 * individual port objects can be accessed using {@link #getMidiInPort(int index)} and
 * {@link #getMidiInPort(int index)}.
 *
 * @param numInports
          the number of input ports
 * @param numOutports
          the number of output ports
 * @since API version 1
 */
ControllerHost.prototype.defineMidiPorts = function(numInports, numOutports) {};

/**
 * Returns the MIDI input port with the given index.
 *
 * @param index
          the index of the MIDI input port, must be valid.
 * @return {MidiIn} the requested MIDI input port
 * @since API version 1
 */
ControllerHost.prototype.getMidiInPort = function(index) {};

/**
 * Returns the MIDI output port with the given index.
 *
 * @param index
          the index of the MIDI output port, must be valid.
 * @return {MidiOut} the requested MIDI output port
 * @since API version 1
 */
ControllerHost.prototype.getMidiOutPort = function(index) {};

/**
 * Gets the {@link HardwareDevice} at the specified index. This index corresponds to the index of the
 * {@link HardwareDeviceMatcher} specified in the
 * {@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)}
 *
 * @param {int} index
 * @return {HardwareDevice}
 * @since API version 7
 */
ControllerHost.prototype.hardwareDevice = function(index) {};

/**
 * Registers patterns which are used to automatically detect hardware devices that can be used with the
 * script.<br/>
 * 
 * When the user clicks on the `detect` button in the Bitwig Studio controller preferences dialog, Bitwig
 * Studio searches for connected controller hardware by comparing the parameters passed into this function
 * are compared with the port names of the available MIDI drivers. Found controller scripts are
 * automatically added with their input/output ports configured.<br/>
 * 
 * Calling this function is optional, but can also be called multiple times in the global script scope in
 * order to support alternative driver names.
 *
 * @param inputs
          the array of strings used to detect MIDI input ports, must not be `null`.
 * @param outputs
          the array of strings used to detect MIDI output ports, must not be `null`.
 * @since API version 1
 */
ControllerHost.prototype.addDeviceNameBasedDiscoveryPair = function(inputs, outputs) {};

/**
 * Creates a preferences object that can be used to insert settings into the Controller Preferences panel
 * in Bitwig Studio.
 *
 * @return {Preferences} an object that provides access to custom controller preferences
 * @since API version 1
 */
ControllerHost.prototype.getPreferences = function() {};

/**
 * Creates a document state object that can be used to insert settings into the Studio I/O Panel in Bitwig
 * Studio.
 *
 * @return {DocumentState} an object that provides access to custom document settings
 * @since API version 1
 */
ControllerHost.prototype.getDocumentState = function() {};

/**
 * Returns an object that is used to configure automatic notifications. Bitwig Studio supports automatic
 * visual feedback from controllers that shows up as popup notifications. For example when the selected
 * track or the current device preset was changed on the controller these notifications are shown,
 * depending on your configuration.
 *
 * @return {NotificationSettings} a configuration object used to enable/disable the various automatic notifications supported by
        Bitwig Studio
 * @since API version 1
 */
ControllerHost.prototype.getNotificationSettings = function() {};

/**
 * Returns an object for controlling various aspects of the currently selected project.
 *
 * @return {Project}
 * @since API version 1
 */
ControllerHost.prototype.getProject = function() {};

/**
 * Returns an object for controlling and monitoring the elements of the `Transport` section in Bitwig
 * Studio. This function should be called once during initialization of the script if transport access is
 * desired.
 *
 * @return {Transport} an object that represents the `Transport` section in Bitwig Studio.
 * @since API version 1
 */
ControllerHost.prototype.createTransport = function() {};

/**
 * Returns an object for controlling and monitoring the `Groove` section in Bitwig Studio. This function
 * should be called once during initialization of the script if groove control is desired.
 *
 * @return {Groove} an object that represents the `Groove` section in Bitwig Studio.
 * @since API version 1
 */
ControllerHost.prototype.createGroove = function() {};

/**
 * Returns an object that provides access to general application functionality, including global view
 * settings, the list of open projects, and other global settings that are not related to a certain
 * document.
 *
 * @return {Application} an application object.
 * @since API version 1
 */
ControllerHost.prototype.createApplication = function() {};

/**
 * Returns an object which provides access to the `Arranger` panel of Bitwig Studio. Calling this function
 * is equal to `createArranger(-1)`.
 *
 * @return {Arranger} an arranger object
 * @since API version 1
 */
ControllerHost.prototype.createArranger = function() {};

/**
 * Returns an object which provides access to the `Arranger` panel inside the specified window.
 *
 * @param window
          the index of the window where the arranger panel is shown, or -1 in case the first arranger
          panel found on any window should be taken
 * @return {Arranger} an arranger object
 * @since API version 1
 */
ControllerHost.prototype.createArranger = function(window) {};

/**
 * Returns an object which provides access to the `Mixer` panel of Bitwig Studio. Calling this function is
 * equal to `createMixer(-1, null)`.
 *
 * @return {Mixer} a `Mixer` object
 * @since API version 1
 */
ControllerHost.prototype.createMixer = function() {};

/**
 * Returns an object which provides access to the `Mixer` panel that belongs to the specified panel layout.
 * Calling this function is equal to `createMixer(-1, panelLayout)`.
 *
 * @param panelLayout
          the name of the panel layout that contains the mixer panel, or `null` in case the selected
          panel layout in Bitwig Studio should be followed. Empty strings or invalid names are treated
          the same way as `null`. To receive the list of available panel layouts see
          {@link Application#addPanelLayoutObserver}.
 * @return {Mixer} a `Mixer` object
 * @since API version 1
 */
ControllerHost.prototype.createMixer = function(panelLayout) {};

/**
 * Returns an object which provides access to the `Mixer` panel inside the specified window. Calling this
 * function is equal to `createMixer(window, null)`.
 *
 * @param window
          the index of the window where the mixer panel is shown, or -1 in case the first mixer panel
          found on any window should be taken
 * @return {Mixer} a `Mixer` object
 * @since API version 1
 */
ControllerHost.prototype.createMixer = function(window) {};

/**
 * Returns an object which provides access to the `Mixer` panel that matches the specified parameters.
 *
 * @param panelLayout
          the name of the panel layout that contains the mixer panel, or `null` in case the selected
          panel layout in Bitwig Studio should be followed. Empty strings or invalid names are treated
          the same way as `null`. To receive the list of available panel layouts see
          {@link Application#addPanelLayoutObserver}.
 * @param window
          the index of the window where the mixer panel is shown, or -1 in case the first mixer panel
          found on any window should be taken
 * @return {Mixer} a `Mixer` object
 * @since API version 1
 */
ControllerHost.prototype.createMixer = function(panelLayout, window) {};

/**
 * Returns a track bank with the given number of tracks, sends and scenes.<br/>
 * 
 * A track bank can be seen as a fixed-size window onto the list of tracks in the current document
 * including their sends and scenes, that can be scrolled in order to access different parts of the track
 * list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>
 * 
 * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
 * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
 * contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
 * The track bank returned by this function provides a convenient interface for controlling which tracks
 * are currently shown on the hardware.<br/>
 * 
 * Creating a track bank using this method will consider all tracks in the document, including effect
 * tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
 * you are only interested in tracks of a certain kind.
 *
 * @param numTracks
          the number of tracks spanned by the track bank
 * @param numSends
          the number of sends spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
ControllerHost.prototype.createTrackBank = function(numTracks, numSends, numScenes) {};

/**
 * Returns a track bank with the given number of child tracks, sends and scenes.<br/>
 * 
 * A track bank can be seen as a fixed-size window onto the list of tracks in the connected track group
 * including their sends and scenes, that can be scrolled in order to access different parts of the track
 * list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>
 * 
 * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
 * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
 * contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
 * The track bank returned by this function provides a convenient interface for controlling which tracks
 * are currently shown on the hardware.<br/>
 * 
 * Creating a track bank using this method will consider all tracks in the document, including effect
 * tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
 * you are only interested in tracks of a certain kind.
 *
 * @param numTracks
          the number of child tracks spanned by the track bank
 * @param numSends
          the number of sends spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @param hasFlatTrackList
          specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
ControllerHost.prototype.createTrackBank = function(numTracks, numSends, numScenes, hasFlatTrackList) {};

/**
 * Returns a track bank with the given number of tracks, sends and scenes. Only audio tracks, instrument
 * tracks and hybrid tracks are considered. For more information about track banks and the `bank pattern`
 * in general, see the documentation for {@link #createTrackBank}.
 *
 * @param numTracks
          the number of tracks spanned by the track bank
 * @param numSends
          the number of sends spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
ControllerHost.prototype.createMainTrackBank = function(numTracks, numSends, numScenes) {};

/**
 * Returns a track bank with the given number of effect tracks and scenes. Only effect tracks are
 * considered. For more information about track banks and the `bank pattern` in general, see the
 * documentation for {@link #createTrackBank}.
 *
 * @param numTracks
          the number of tracks spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
ControllerHost.prototype.createEffectTrackBank = function(numTracks, numScenes) {};

/**
 * Returns an object that represents the master track of the document.
 *
 * @param numScenes
          the number of scenes for bank-wise navigation of the master tracks clip launcher slots.
 * @return {MasterTrack} an object representing the master track.
 * @since API version 1
 */
ControllerHost.prototype.createMasterTrack = function(numScenes) {};

/**
 * Returns an object that represents a named cursor track, that is independent from the arranger or mixer
 * track selection in the user interface of Bitwig Studio.
 *
 * @param {string} id
 * @param {string} name
 * @param {int} numSends
 * @param {int} numScenes
 * @param {boolean} shouldFollowSelection
 * @return {CursorTrack} an object representing the currently selected arranger track (in the future also multiple
        tracks).
 * @since API version 1
 */
ControllerHost.prototype.createCursorTrack = function(id, name, numSends, numScenes, shouldFollowSelection) {};

/**
 * Returns a scene bank with the given number of scenes.<br/>
 * 
 * A scene bank can be seen as a fixed-size window onto the list of scenes in the current document, that
 * can be scrolled in order to access different parts of the scene list. For example a scene bank
 * configured for 8 scenes can show scene 1-8, 2-9, 3-10 and so on.<br/>
 * 
 * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
 * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
 * contain a dynamic list of scenes, most likely more scenes than the hardware can control simultaneously.
 * The scene bank returned by this function provides a convenient interface for controlling which scenes
 * are currently shown on the hardware.<br/>
 *
 * @param numScenes
          the number of scenes spanned by the track bank
 * @return {SceneBank} an object for bank-wise navigation of scenes
 * @since API version 1
 */
ControllerHost.prototype.createSceneBank = function(numScenes) {};

/**
 * Returns a clip object that represents the cursor of the launcher clip selection. The gridWidth and
 * gridHeight parameters specify the grid dimensions used to access the note content of the clip.
 *
 * @param gridWidth
          the number of steps spanned by one page of the note content grid.
 * @param gridHeight
          the number of keys spanned by one page of the note content grid.
 * @return {Clip} an object representing the currently selected cursor clip
 * @since API version 1
 */
ControllerHost.prototype.createLauncherCursorClip = function(gridWidth, gridHeight) {};

/**
 * Returns a clip object that represents the cursor of the arranger clip selection. The gridWidth and
 * gridHeight parameters specify the grid dimensions used to access the note content of the clip.
 *
 * @param gridWidth
          the number of steps spanned by one page of the note content grid.
 * @param gridHeight
          the number of keys spanned by one page of the note content grid.
 * @return {Clip} an object representing the currently selected cursor clip
 * @since API version 1
 */
ControllerHost.prototype.createArrangerCursorClip = function(gridWidth, gridHeight) {};

/**
 * Returns an object that is used to define a bank of custom user controls. These controls are available to
 * the user for free controller assignments and are typically used when bank-wise navigation is
 * inconvenient.
 *
 * @param numControllers
          the number of controls that are available for free assignments
 * @return {UserControlBank} An object that represents a set of custom user controls.
 * @since API version 1
 */
ControllerHost.prototype.createUserControls = function(numControllers) {};

/**
 * Schedules the given callback function for execution after the given delay. For timer applications call
 * this method once initially and then from within the callback function.
 *
 * @param callback
          the callback function that will be called
 * @param delay
          the duration after which the callback function will be called in milliseconds
 * @since API version 2
 */
ControllerHost.prototype.scheduleTask = function(callback, delay) {};

/**
 * Requests that the driver's flush method gets called.
 *
 * @since API version 2
 */
ControllerHost.prototype.requestFlush = function() {};

/**
 * Prints the given string in the control surface console window. The console window can be opened in the
 * view menu of Bitwig Studio.
 *
 * @param s
          the string to be printed
 * @since API version 1
 */
ControllerHost.prototype.println = function(s) {};

/**
 * Prints the given string in the control surface console window using a text style that highlights the
 * string as error. The console window can be opened in the view menu of Bitwig Studio.
 *
 * @param s
          the error string to be printed
 * @since API version 1
 */
ControllerHost.prototype.errorln = function(s) {};

/**
 * Shows a temporary text overlay on top of the application GUI, that will fade-out after a short interval.
 * If the overlay is already shown, it will get updated with the given text.
 *
 * @param text
          the text to be shown
 * @since API version 1
 */
ControllerHost.prototype.showPopupNotification = function(text) {};

/**
 * Opens a TCP (Transmission Control Protocol) host socket for allowing network connections from other
 * hardware and software.
 *
 * @param name
          a meaningful name that describes the purpose of this connection.
 * @param defaultPort
          the port that should be used for the connection. If the port is already in use, then another
          port will be used. Check {@link RemoteSocket#getPort()} on the returned object to be sure.
 * @return {RemoteSocket} the object that represents the socket
 * @since API version 1
 */
ControllerHost.prototype.createRemoteConnection = function(name, defaultPort) {};

/**
 * Connects to a remote TCP (Transmission Control Protocol) socket.
 *
 * @param host
          the host name or IP address to connect to.
 * @param port
          the port to connect to
 * @param callback
          the callback function that gets called when the connection gets established. A single
          {@link RemoteConnection} parameter is passed into the callback function.
 * @since API version 1
 */
ControllerHost.prototype.connectToRemoteHost = function(host, port, callback) {};

/**
 * Sends a UDP (User Datagram Protocol) packet with the given data to the specified host.
 *
 * @param host
          the destination host name or IP address
 * @param port
          the destination port
 * @param data
          the data to be send. When creating a numeric byte array in JavaScript, the byte values must be
          signed (in the range -128..127).
 * @since API version 1
 */
ControllerHost.prototype.sendDatagramPacket = function(host, port, data) {};

/**
 * Adds an observer for incoming UDP (User Datagram Protocol) packets on the selected port.
 *
 * @param name
          a meaningful name that describes the purpose of this observer.
 * @param port
          the port that should be used
 * @param callback
          the callback function that gets called when data arrives. The function receives a single
          parameter that contains the data byte array.
 * @return {boolean} {@true} if was possible to bind the port, false otherwise
 * @since API version 1
 */
ControllerHost.prototype.addDatagramPacketObserver = function(name, port, callback) {};

/**
 * @param {int} numSends
 * @param {int} numScenes
 * @return {CursorTrack}
 * @since API version 1
 */
ControllerHost.prototype.createCursorTrack = function(numSends, numScenes) {};

/**
 * Creates a {@link PopupBrowser} that represents the pop-up browser in Bitwig Studio.
 *
 * @return {PopupBrowser}
 * @since API version 2
 */
ControllerHost.prototype.createPopupBrowser = function() {};

/**
 * {@link BeatTimeFormatter} used to format beat times by default. This will be used to format beat times
 * when asking for a beat time in string format without providing any formatting options. For example by
 * calling {@link BeatTimeStringValue#get()}.
 *
 * @return {BeatTimeFormatter}
 * @since API version 2
 */
ControllerHost.prototype.defaultBeatTimeFormatter = function() {};

/**
 * Sets the {@link BeatTimeFormatter} to use by default for formatting beat times.
 *
 * @param {BeatTimeFormatter} formatter
 * @since API version 2
 */
ControllerHost.prototype.setDefaultBeatTimeFormatter = function(formatter) {};

/**
 * Creates a {@link BeatTimeFormatter} that can be used to format beat times.
 *
 * @param separator
          the character used to separate the segments of the formatted beat time, typically ":", "." or
          "-"
 * @param barsLen
          the number of digits reserved for bars
 * @param beatsLen
          the number of digits reserved for beats
 * @param subdivisionLen
          the number of digits reserved for beat subdivisions
 * @param ticksLen
          the number of digits reserved for ticks
 * @return {BeatTimeFormatter}
 * @since API version 2
 */
ControllerHost.prototype.createBeatTimeFormatter = function(separator, barsLen, beatsLen, subdivisionLen, ticksLen) {};

/**
 * Creates a {@link HardwareSurface} that can contain hardware controls.
 *
 * @return {HardwareSurface}
 * @since API version 10
 */
ControllerHost.prototype.createHardwareSurface = function() {};

/**
 * Creates a {@link HardwareActionMatcher} that is matched by either of the 2 supplied action matchers.
 *
 * @param {HardwareActionMatcher} matcher1
 * @param {HardwareActionMatcher} matcher2
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
ControllerHost.prototype.createOrHardwareActionMatcher = function(matcher1, matcher2) {};

/**
 * Creates a {@link RelativeHardwareValueMatcher} that is matched by either of the 2 supplied action
 * matchers.
 *
 * @param {RelativeHardwareValueMatcher} matcher1
 * @param {RelativeHardwareValueMatcher} matcher2
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
ControllerHost.prototype.createOrRelativeHardwareValueMatcher = function(matcher1, matcher2) {};

/**
 * Creates a {@link AbsoluteHardwareValueMatcher} that is matched by either of the 2 supplied action
 * matchers.
 *
 * @param {AbsoluteHardwareValueMatcher} matcher1
 * @param {AbsoluteHardwareValueMatcher} matcher2
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
ControllerHost.prototype.createOrAbsoluteHardwareValueMatcher = function(matcher1, matcher2) {};

/**
 * An object that can be used to generate useful MIDI expression strings which can be used in
 * {@link MidiIn#createActionMatcher(String)} and other related methods.
 *
 * @return {MidiExpressions}
 * @since API version 10
 */
ControllerHost.prototype.midiExpressions = function() {};

/**
 * Creates a {@link HardwareActionBindable} that can be bound to some {@link HardwareAction} (such as a
 * button press) and when that action occurs the supplied {@link Runnable} will be run
 *
 * @param runnable
          The runnable to be run
 * @param descriptionProvider
          Provider that can provide a description of what the runnable does (used for showing onscreen
          feedback or help to the user).
 * @return {HardwareActionBindable}
 * @since API version 10
 */
ControllerHost.prototype.createAction = function(runnable, descriptionProvider) {};

/**
 * Creates a {@link HardwareActionBindable} that can be bound to some {@link HardwareAction} (such as a
 * button press) and when that action occurs the supplied {@link Runnable} will be run
 *
 * @param actionPressureConsumer
          Consumer that will be notified of the pressure of the action
 * @param descriptionProvider
          Provider that can provide a description of what the runnable does (used for showing onscreen
          feedback or help to the user).
 * @return {HardwareActionBindable}
 * @since API version 10
 */
ControllerHost.prototype.createAction = function(actionPressureConsumer, descriptionProvider) {};

/**
 * Creates a {@link RelativeHardwarControlBindable} that can be used to step forwards or backwards when a
 * {@link RelativeHardwareControl} is adjusted. A step is defined by the
 * {@link RelativeHardwareControl#setStepSize(double)}.
 *
 * @param stepForwardsAction
          The action that should happen when stepping forwards
 * @param stepBackwardsAction
          The action that should happen when stepping backwards
 * @return {RelativeHardwarControlBindable}
 * @since API version 10
 */
ControllerHost.prototype.createRelativeHardwareControlStepTarget = function(stepForwardsAction, stepBackwardsAction) {};

/**
 * Creates a {@link RelativeHardwarControlBindable} that can be used to adjust some value in an arbitrary
 * way.
 *
 * @param adjustmentConsumer
          A consumer that will receive the relative adjustment amount when bound to a
          {@link RelativeHardwareControl}.
 * @return {RelativeHardwarControlBindable}
 * @since API version 10
 */
ControllerHost.prototype.createRelativeHardwareControlAdjustmentTarget = function(adjustmentConsumer) {};

/**
 * Creates a {@link AbsoluteHardwarControlBindable} that can be used to adjust some value in an arbitrary
 * way.
 *
 * @param adjustmentConsumer
          A consumer that will receive the absolute adjustment amount when bound to an
          {@link AbsoluteHardwareControl}.
 * @return {AbsoluteHardwarControlBindable}
 * @since API version 10
 */
ControllerHost.prototype.createAbsoluteHardwareControlAdjustmentTarget = function(adjustmentConsumer) {};

/**
 * It will delete multiple object within one undo step.
 *
 * @param {string} undoName
 * @param {DeleteableObject} objects
 */
ControllerHost.prototype.deleteObjects = function(undoName, /*...*/objects) {};

/**
 * It will delete multiple object within one undo step.
 *
 * @param {DeleteableObject} objects
 */
ControllerHost.prototype.deleteObjects = function(/*...*/objects) {};
/* API Version - 3.1.2 */

/**
 * A cue marker bank provides access to a range of cue markers in Bitwig Studio.
 * Instances are typically configured with a fixed number of markers and represent an excerpt
 * of a larger list of markers. It basically acts like a window moving over the list of markers.
 *
 * @since API version 2
 */
function CueMarkerBank() {}

CueMarkerBank.prototype = new Bank();
CueMarkerBank.prototype.constructor = CueMarkerBank;

/**
 * Scrolls the cue marker bank window so that the marker at the given position becomes visible.
 *
 * @param position
          the index of the marker within the underlying full list of markers (not the index within the
          bank). The position is typically directly related to the layout of the marker list in Bitwig
          Studio, starting with zero in case of the first marker.
 * @since API version 2
 */
CueMarkerBank.prototype.scrollToMarker = function(position) {};
/* API Version - 3.1.2 */

/**
 * This interface defines access to the common attributes and operations of cue markers.
 *
 * @since API version 2
 */
function CueMarker() {}

CueMarker.prototype = new ObjectProxy();
CueMarker.prototype.constructor = CueMarker;

/**
 * Launches playback at the marker position.
 *
 * @param {boolean} quantized Specified if the cue marker should be launched quantized or immediately
 * @since API version 2
 */
CueMarker.prototype.launch = function(quantized) {};

/**
 * Gets a representation of the marker name.
 *
 * @return {StringValue}
 * @since API version 2
 */
CueMarker.prototype.getName = function() {};

/**
 * Gets a representation of the marker color.
 *
 * @return {ColorValue}
 * @since API version 2
 */
CueMarker.prototype.getColor = function() {};

/**
 * Gets a representation of the markers beat-time position in quarter-notes.
 *
 * @return {SettableBeatTimeValue}
 * @since API version 10
 */
CueMarker.prototype.position = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to navigate the filter columns of a Bitwig Studio browsing session.
 *
 * @since API version 1
 */
function CursorBrowserFilterColumn() {}

CursorBrowserFilterColumn.prototype = new BrowserFilterColumn();
CursorBrowserFilterColumn.prototype.constructor = CursorBrowserFilterColumn;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent entries in a browser filter column.
 *
 * @since API version 1
 */
function CursorBrowserFilterItem() {}

CursorBrowserFilterItem.prototype = new BrowserFilterItem();
CursorBrowserFilterItem.prototype.constructor = CursorBrowserFilterItem;

/**
 * Select the parent item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.selectParent = function() {};

/**
 * Select the first child item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.selectFirstChild = function() {};

/**
 * Select the last child item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.selectLastChild = function() {};

/**
 * Select the previous item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToPrevious = function() {};

/**
 * Select the next item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToNext = function() {};

/**
 * Select the first item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToFirst = function() {};

/**
 * Select the last item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToLast = function() {};

/**
 * Select the parent item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToParent = function() {};

/**
 * Move the cursor to the first child item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToFirstChild = function() {};

/**
 * Move the cursor to the last child item.
 *
 * @since API version 1
 */
CursorBrowserFilterItem.prototype.moveToLastChild = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent entries in a browser filter column.
 *
 * @since API version 1
 */
function CursorBrowserItem() {}

CursorBrowserItem.prototype = new BrowserItem();
CursorBrowserItem.prototype.constructor = CursorBrowserItem;

/**
 * Returns a bank object that provides access to the siblings of the cursor item. The bank will
 * automatically scroll so that the cursor item is always visible.
 *
 * @param numSiblings
          the number of simultaneously accessible siblings
 * @return {BrowserItemBank} the requested item bank object
 */
CursorBrowserItem.prototype.createSiblingsBank = function(numSiblings) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent entries in a browser column.
 *
 * @since API version 1
 */
function CursorBrowserResultItem() {}

CursorBrowserResultItem.prototype = new BrowserResultsItem();
CursorBrowserResultItem.prototype.constructor = CursorBrowserResultItem;
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used for navigating the various browsing sessions of Bitwig Studio's
 * contextual browser.
 *
 * @since API version 1
 */
function CursorBrowsingSession() {}

CursorBrowsingSession.prototype = new GenericBrowsingSession();
CursorBrowsingSession.prototype.constructor = CursorBrowsingSession;
/* API Version - 3.1.2 */

/**
 * A special kind of channel that follows a channel selection cursor in Bitwig Studio. The selection can
 * either be a custom selection cursor that gets created by the controller script, or represent the user
 * selection cursor as shown in the Bitwig Studio editors, such as the Arranger track selection cursor.
 *
 * @since API version 1
 */
function CursorChannel() {}

CursorChannel.prototype = new Cursor();
CursorChannel.prototype.constructor = CursorChannel;

/**
 * Points the cursor to the given channel.
 *
 * @param channel
          the channel that this channel cursor should point to
 * @since API version 1
 */
CursorChannel.prototype.selectChannel = function(channel) {};
/* API Version - 3.1.2 */

/**
 * Represents a cursor clip.
 *
 * @since API version 10
 */
function CursorClip() {}

CursorClip.prototype = new Clip();
CursorClip.prototype.constructor = CursorClip;

/**
 * Requests that the supplied clip be selected in this cursor.
 *
 * @param {Clip} clip
 * @since API version 10
 */
CursorClip.prototype.selectClip = function(clip) {};
/* API Version - 3.1.2 */

/**
 * Mode that defines how a {@link CursorDevice} follows a device within the {@link CursorTrack} it is created
 * for by default. The user can still override this on a track by track basis but this defines a default
 * follow mode when the user has not done this.
 */
CursorDeviceFollowMode = {
	/**
	 * Follows the device selection made by the user in the track.
	 */
	FOLLOW_SELECTION: 0,
	/**
	 * Selects the first device in the track if there is one.
	 */
	FIRST_DEVICE: 1,
	/**
	 * Selects the first instrument in the track if there is one.
	 */
	FIRST_INSTRUMENT: 2,
	/**
	 * Selects the first audio effect in the track if there is one.
	 */
	FIRST_AUDIO_EFFECT: 3,
	/**
	 * Selects the first instrument or if there is no instrument the first device.
	 *
	 * @since API version 3
	 */
	FIRST_INSTRUMENT_OR_DEVICE: 4,
	/**
	 * Selects the last device in the track if there is one.
	 *
	 * @since API version 7
	 */
	LAST_DEVICE: 5,
};/* API Version - 3.1.2 */

/**
 * A special kind of selection cursor used for devices.
 *
 * @since API version 1
 */
function CursorDevice() {}

CursorDevice.prototype = new Cursor();
CursorDevice.prototype.constructor = CursorDevice;

/**
 * Returns the channel that this cursor device was created on. Currently this will always be a track or
 * cursor track instance.
 *
 * @return {Channel} the track or cursor track object that was used for creation of this cursor device.
 * @since API version 5
 */
CursorDevice.prototype.channel = function() {};

/**
 * Selects the parent device if there is any.
 *
 * @since API version 1
 */
CursorDevice.prototype.selectParent = function() {};

/**
 * Moves this cursor to the given device.
 *
 * @param device
          the device that this cursor should point to
 * @since API version 1
 */
CursorDevice.prototype.selectDevice = function(device) {};

/**
 * Selects the first device in the given channel.
 *
 * @param channel
          the channel in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectFirstInChannel = function(channel) {};

/**
 * Selects the last device in the given channel.
 *
 * @param channel
          the channel in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectLastInChannel = function(channel) {};

/**
 * Selects the first device in the nested FX slot with the given name.
 *
 * @param chain
          the name of the FX slot in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectFirstInSlot = function(chain) {};

/**
 * Selects the last device in the nested FX slot with the given name.
 *
 * @param chain
          the name of the FX slot in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectLastInSlot = function(chain) {};

/**
 * Selects the first device in the drum pad associated with the given key.
 *
 * @param key
          the key associated with the drum pad in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectFirstInKeyPad = function(key) {};

/**
 * Selects the last device in the drum pad associated with the given key.
 *
 * @param key
          the key associated with the drum pad in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectLastInKeyPad = function(key) {};

/**
 * Selects the first device in the nested layer with the given index.
 *
 * @param index
          the index of the nested layer in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectFirstInLayer = function(index) {};

/**
 * Selects the last device in the nested layer with the given index.
 *
 * @param index
          the index of the nested layer in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectLastInLayer = function(index) {};

/**
 * Selects the first device in the nested layer with the given name.
 *
 * @param name
          the name of the nested layer in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectFirstInLayer = function(name) {};

/**
 * Selects the last device in the nested layer with the given name.
 *
 * @param name
          the name of the nested layer in which the device should be selected
 * @since API version 1
 */
CursorDevice.prototype.selectLastInLayer = function(name) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent the cursor item in device layer selections.
 *
 * @since API version 1
 */
function CursorDeviceLayer() {}

CursorDeviceLayer.prototype = new CursorChannel();
CursorDeviceLayer.prototype.constructor = CursorDeviceLayer;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent the selected device slot as shown in the Bitwig Studio user
 * interface.
 *
 * @since API version 1
 */
function CursorDeviceSlot() {}

CursorDeviceSlot.prototype = new DeviceChain();
CursorDeviceSlot.prototype.constructor = CursorDeviceSlot;

/**
 * @param {string} slot
 */
CursorDeviceSlot.prototype.selectSlot = function(slot) {};
/* API Version - 3.1.2 */

/**
 * A generic interface that provides the foundation for working with selections.
 * 
 * Implementations of this interface can either represent custom selection cursors that are created by
 * controller scripts, or represent the cursor of user selections as shown in Bitwig Studio editors, such as
 * the Arranger track selection cursor, the note editor event selection cursor and so on.
 *
 * @since API version 1
 */
function Cursor() {}

Cursor.prototype = new RelativeHardwarControlBindable();
Cursor.prototype.constructor = Cursor;

/**
 * Select the previous item.
 *
 * @since API version 1
 */
Cursor.prototype.selectPrevious = function() {};

/**
 * @return {HardwareActionBindable}
 */
Cursor.prototype.selectPreviousAction = function() {};

/**
 * Select the next item.
 *
 * @since API version 1
 */
Cursor.prototype.selectNext = function() {};

/**
 * @return {HardwareActionBindable}
 */
Cursor.prototype.selectNextAction = function() {};

/**
 * Select the first item.
 *
 * @since API version 1
 */
Cursor.prototype.selectFirst = function() {};

/**
 * Select the last item.
 *
 * @since API version 1
 */
Cursor.prototype.selectLast = function() {};

/**
 * Boolean value that reports whether there is an item after the current cursor position.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Cursor.prototype.hasNext = function() {};

/**
 * Boolean value that reports whether there is an item before the current cursor position.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Cursor.prototype.hasPrevious = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent the cursor item of track selections.
 *
 * @since API version 1
 */
CursorNavigationMode = {
	NESTED: 0,
	FLAT: 1,
	GUI: 2,
};/* API Version - 3.1.2 */

/**
 * Represents a cursor that looks at a {@link RemoteControlsPage}.
 *
 * @since API version 2
 */
function CursorRemoteControlsPage() {}

CursorRemoteControlsPage.prototype = new Cursor();
CursorRemoteControlsPage.prototype.constructor = CursorRemoteControlsPage;

/**
 * Value that reports the names of the devices parameter pages.
 *
 * @return {StringArrayValue}
 */
CursorRemoteControlsPage.prototype.pageNames = function() {};

/**
 * Selects the next page.
 *
 * @param shouldCycle
          If true then when the end is reached and there is no next page it selects the first page
 * @since API version 2
 */
CursorRemoteControlsPage.prototype.selectNextPage = function(shouldCycle) {};

/**
 * Selects the previous page.
 *
 * @param shouldCycle
          If true then when the end is reached and there is no next page it selects the first page
 * @since API version 2
 */
CursorRemoteControlsPage.prototype.selectPreviousPage = function(shouldCycle) {};

/**
 * Selects the next page that matches the given expression.
 *
 * @param expression
          An expression that can match a page based on how it has been tagged. For now this can only be
          the name of a single tag that you would like to match.
 * @param shouldCycle
          If true then when the end is reached and there is no next page it selects the first page
 * @since API version 2
 */
CursorRemoteControlsPage.prototype.selectNextPageMatching = function(expression, shouldCycle) {};

/**
 * Selects the previous page that matches the given expression.
 *
 * @param expression
          An expression that can match a page based on how it has been tagged. For now this can only be
          the name of a single tag that you would like to match.
 * @param shouldCycle
          If true then when the end is reached and there is no next page it selects the first page
 * @since API version 2
 */
CursorRemoteControlsPage.prototype.selectPreviousPageMatching = function(expression, shouldCycle) {};

/**
 * Value that reports the currently selected parameter page index.
 *
 * @return {SettableIntegerValue}
 * @since API version 2
 */
CursorRemoteControlsPage.prototype.selectedPageIndex = function() {};

/**
 * Value that represents the number of pages.
 *
 * @return {IntegerValue}
 * @since API version 7
 */
CursorRemoteControlsPage.prototype.pageCount = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent the cursor item of track selections.
 *
 * @since API version 1
 */
function CursorTrack() {}

CursorTrack.prototype = new CursorChannel();
CursorTrack.prototype.constructor = CursorTrack;

/**
 * Makes the cursor track point to it's parent group track, in case it is not already pointing to the root
 * group track.
 *
 * @since API version 1
 */
CursorTrack.prototype.selectParent = function() {};

/**
 * Makes the cursor track point to the first child found with the track group that this cursor currently
 * points to. If this cursor is not pointing to a track group or the track group is empty then this has no
 * effect.
 *
 * @since API version 2
 */
CursorTrack.prototype.selectFirstChild = function() {};

/**
 * Specifies the behaviour of the functions {@link #selectPrevious()}, {@link #selectNext()},
 * {@link #selectFirst()} and {@link #selectLast()}. Calling those functions can either navigate the cursor
 * within the current nesting level, or over a flat list of either all tracks or only the expanded tracks.
 * Default is CursorNavigationMode.FLAT.
 *
 * @param {CursorNavigationMode} mode
 * @since API version 1
 */
CursorTrack.prototype.setCursorNavigationMode = function(mode) {};

/**
 * @return {PinnableCursorDevice}
 */
CursorTrack.prototype.createCursorDevice = function() {};

/**
 * Creates a {@link CursorDevice} for this cursor track that by default follows a device based on the
 * supplied follow mode.
 *
 * @param id
          An id that is used to identify this cursor.
 * @param name
          A name that is displayed to the user for this cursor.
 * @param numSends
          the number of sends that are simultaneously accessible in nested channels.
 * @param followMode
          Mode that defines how this cursor should follow devices.
 * @return {PinnableCursorDevice}
 * @since API version 2
 */
CursorTrack.prototype.createCursorDevice = function(id, name, numSends, followMode) {};

/**
 * Creates a {@link PinnableCursorClip} for this track that follows a clip within the track on the clip
 * launcher. This clip typically gets updated when the user selects a new clip on the clip launcher. It can
 * also act independently from the user's selection if the user so chooses in the settings for the
 * controller.
 *
 * @param {int} gridWidth
 * @param {int} gridHeight
 * @return {PinnableCursorClip}
 * @since API version 10
 */
CursorTrack.prototype.createLauncherCursorClip = function(gridWidth, gridHeight) {};

/**
 * Creates a {@link PinnableCursorClip} for this track that follows a clip within the track on the clip
 * launcher. This clip typically gets updated when the user selects a new clip on the clip launcher. It can
 * also act independently from the user's selection if the user so chooses in the settings for the
 * controller.
 *
 * @param {string} id
 * @param {string} name
 * @param {int} gridWidth
 * @param {int} gridHeight
 * @return {PinnableCursorClip}
 * @since API version 10
 */
CursorTrack.prototype.createLauncherCursorClip = function(id, name, gridWidth, gridHeight) {};
/* API Version - 3.1.2 */

function DataReceivedCallback() {}

DataReceivedCallback.prototype = new Callback();
DataReceivedCallback.prototype.constructor = DataReceivedCallback;

/**
 * @param {byte[]} data
 */
DataReceivedCallback.prototype.dataReceived = function(data) {};
/* API Version - 3.1.2 */

/**
 * Interface implemented by objects that can be deleted from the project.
 *
 * @since API version 10
 */
function DeleteableObject() {}

/**
 * Deletes this object from the document.
 * 
 * If you want to delete multiple objects at once, see Host.deleteObjects().
 *
 * @since API version 10
 */
DeleteableObject.prototype.deleteObject = function() {};
/* API Version - 3.1.2 */

/**
 * This interface is used for navigation of device chains in Bitwig Studio. Instances are configured with a
 * fixed number of devices and provide access to a excerpt of the devices inside a device chain. Various
 * methods are provided for scrolling to different sections of the device chain. It basically acts like a
 * window moving over the devices.
 * 
 * To receive an instance of DeviceBank call {@link Track#createDeviceBank}.
 *
 * @see {@link Track#createDeviceBank}
 * @since API version 1
 */
function DeviceBank() {}

DeviceBank.prototype = new Bank();
DeviceBank.prototype.constructor = DeviceBank;

/**
 * Returns the object that was used to instantiate this device bank. Possible device chain instances are
 * tracks, device layers, drums pads, or FX slots.
 *
 * @return {DeviceChain} the requested device chain object
 * @since API version 1
 */
DeviceBank.prototype.getDeviceChain = function() {};

/**
 * Returns the device at the given index within the bank.
 *
 * @param indexInBank
          the device index within this bank, not the position within the device chain. Must be in the
          range [0..sizeOfBank-1].
 * @return {Device} the requested device object
 * @since API version 1
 */
DeviceBank.prototype.getDevice = function(indexInBank) {};

/**
 * Scrolls the device window one page up.
 *
 * @since API version 1
 */
DeviceBank.prototype.scrollPageUp = function() {};

/**
 * Scrolls the device window one page down.
 *
 * @since API version 1
 */
DeviceBank.prototype.scrollPageDown = function() {};

/**
 * Scrolls the device window one device up.
 *
 * @since API version 1
 */
DeviceBank.prototype.scrollUp = function() {};

/**
 * Scrolls the device window one device down.
 *
 * @since API version 1
 */
DeviceBank.prototype.scrollDown = function() {};

/**
 * Browses for content to insert a device at the given index inside this bank.
 *
 * @param index
          the index to insert the device at. Must be >= 0 and <= {@link #getSizeOfBank()}.
 * @since API version 2
 */
DeviceBank.prototype.browseToInsertDevice = function(index) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * The foundation of all interfaces that contain devices, such as tracks, device layers, drum pads or FX
 * slots.
 *
 * @since API version 1
 */
function DeviceChain() {}

DeviceChain.prototype = new ObjectProxy();
DeviceChain.prototype.constructor = DeviceChain;

/**
 * Selects the device chain in Bitwig Studio, in case it is a selectable object.
 *
 * @since API version 1
 */
DeviceChain.prototype.selectInEditor = function() {};

/**
 * Value that reports the name of the device chain, such as the track name or the drum pad
 * name.
 *
 * @return {SettableStringValue}
 * @since API version 2
 */
DeviceChain.prototype.name = function() {};

/**
 * Registers an observer that reports if the device chain is selected in Bitwig Studio editors.
 *
 * @param callback
          a callback function that takes a single boolean parameter.
 * @since API version 1
 */
DeviceChain.prototype.addIsSelectedInEditorObserver = function(callback) {};

/**
 * Returns an object that provides bank-wise navigation of devices.
 *
 * @param numDevices
          the number of devices should be accessible simultaneously
 * @return {DeviceBank} the requested device bank object
@since API version 1
 */
DeviceChain.prototype.createDeviceBank = function(numDevices) {};

/**
 * Returns an object used for browsing devices, presets and other content. Committing the browsing session
 * will load or create a device from the selected resource and insert it into the device chain.
 *
 * @param numFilterColumnEntries
          the size of the window used to navigate the filter column entries.
 * @param numResultsColumnEntries
          the size of the window used to navigate the results column entries.
 * @return {Browser} the requested device browser object.
 * @since API version 1
 */
DeviceChain.prototype.createDeviceBrowser = function(numFilterColumnEntries, numResultsColumnEntries) {};

/**
 * {@link InsertionPoint} that can be used to insert at the start of the device chain.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
DeviceChain.prototype.startOfDeviceChainInsertionPoint = function() {};

/**
 * {@link InsertionPoint} that can be used to insert at the end of the device chain.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
DeviceChain.prototype.endOfDeviceChainInsertionPoint = function() {};
/* API Version - 3.1.2 */

/**
 * This interface represents a device in Bitwig Studio, both internal devices and plugins.
 *
 * @since API version 1
 */
function Device() {}

Device.prototype = new ObjectProxy();
Device.prototype.constructor = Device;

/**
 * Returns a representation of the device chain that contains this device. Possible device chain instances
 * are tracks, device layers, drums pads, or FX slots.
 *
 * @return {DeviceChain} the requested device chain object
 * @since API version 5
 */
Device.prototype.deviceChain = function() {};

/**
 * Value that reports the position of the device within the parent device chain.
 *
 * @return {IntegerValue}
 * @since API version 2
 */
Device.prototype.position = function() {};

/**
 * Returns an object that provides access to the open state of plugin windows.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the open state of the editor window, in case the device
        features a custom editor window (such as plugins).
 * @since API version 1
 */
Device.prototype.isWindowOpen = function() {};

/**
 * Returns an object that provides access to the expanded state of the device.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the expanded state of the device.
 * @since API version 1
 */
Device.prototype.isExpanded = function() {};

/**
 * Returns an object that provides access to the visibility of the device remote controls section.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the remote controls section visibility.
 * @since API version 2
 */
Device.prototype.isRemoteControlsSectionVisible = function() {};

/**
 * Creates a cursor for the selected remote controls page in the device with the supplied number of
 * parameters. This section will follow the current page selection made by the user in the application.
 *
 * @param parameterCount
          The number of parameters the remote controls should contain
 * @return {CursorRemoteControlsPage}
 * @since API version 2
 */
Device.prototype.createCursorRemoteControlsPage = function(parameterCount) {};

/**
 * Creates a cursor for a remote controls page in the device with the supplied number of parameters. This
 * section will be independent from the current page selected by the user in Bitwig Studio's user
 * interface. The supplied filter is an expression that can be used to match pages this section is
 * interested in. The expression is matched by looking at the tags added to the pages. If the expression is
 * empty then no filtering will occur.
 *
 * @param name
          A name to associate with this section. This will be used to remember manual mappings made by
          the user within this section.
 * @param parameterCount
          The number of parameters the remote controls should contain
 * @param filterExpression
          An expression used to match pages that the user can navigate through. For now this can only be
          the name of a single tag the pages should contain (e.g "drawbars", "dyn", "env", "eq",
          "filter", "fx", "lfo", "mixer", "osc", "overview", "perf").
 * @return {CursorRemoteControlsPage}
 * @since API version 2
 */
Device.prototype.createCursorRemoteControlsPage = function(name, parameterCount, filterExpression) {};

/**
 * Selects the device in Bitwig Studio.
 *
 * @since API version 1
 */
Device.prototype.selectInEditor = function() {};

/**
 * Value that reports if the device is a plugin.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Device.prototype.isPlugin = function() {};

/**
 * Switches to the previous parameter page.
 *
 * @since API version 1
 */
Device.prototype.previousParameterPage = function() {};

/**
 * Switches to the next parameter page.
 *
 * @since API version 1
 */
Device.prototype.nextParameterPage = function() {};

/**
 * Registers an observer that reports if there is a previous parameter page.
 *
 * @param callback
          a callback function that receives a single boolean parameter
 * @since API version 1
 */
Device.prototype.addPreviousParameterPageEnabledObserver = function(callback) {};

/**
 * Registers an observer that reports if there is a next parameter page.
 *
 * @param callback
          a callback function that receives a single boolean parameter
 * @since API version 1
 */
Device.prototype.addNextParameterPageEnabledObserver = function(callback) {};

/**
 * Switches to the parameter page at the given page index.
 *
 * @param page
          the index of the desired parameter page
 * @since API version 1
 */
Device.prototype.setParameterPage = function(page) {};

/**
 * Returns an object used for browsing devices, presets and other content. Committing the browsing session
 * will load or create a device from the selected resource and replace the current device.
 *
 * @param numFilterColumnEntries
          the size of the window used to navigate the filter column entries.
 * @param numResultsColumnEntries
          the size of the window used to navigate the results column entries.
 * @return {Browser} the requested device browser object.
 * @since API version 1
 */
Device.prototype.createDeviceBrowser = function(numFilterColumnEntries, numResultsColumnEntries) {};

/**
 * Value that reports the name of the device.
 *
 * @return {StringValue}
 * @since API version 2
 */
Device.prototype.name = function() {};

/**
 * Value that reports the last loaded preset name.
 *
 * @return {StringValue}
 * @since API version 2
 */
Device.prototype.presetName = function() {};

/**
 * Value that reports the current preset category name.
 *
 * @return {StringValue}
 * @since API version 2
 */
Device.prototype.presetCategory = function() {};

/**
 * Value that reports the current preset creator name.
 *
 * @return {StringValue}
 * @since API version 2
 */
Device.prototype.presetCreator = function() {};

/**
 * Value that reports if the device is enabled.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Device.prototype.isEnabled = function() {};

/**
 * Indicates if the device has nested device chain slots. Use {@link #slotNames()} to get a list of
 * available slot names, and navigate to devices in those slots using the {@link CursorDevice} interface.
 *
 * @return {BooleanValue} a value object that indicates if the device has nested device chains in FX slots.
 * @since API version 1
 */
Device.prototype.hasSlots = function() {};

/**
 * Value of the list of available FX slots in this device.
 *
 * @return {StringArrayValue}
 * @since API version 2
 */
Device.prototype.slotNames = function() {};

/**
 * Returns an object that represents the selected device slot as shown in the user interface, and that
 * provides access to the contents of slot's device chain.
 *
 * @return {DeviceSlot} the requested slot cursor object
 * @since API version 1
 */
Device.prototype.getCursorSlot = function() {};

/**
 * Indicates if the device is contained by another device.
 *
 * @return {BooleanValue} a value object that indicates if the device is nested
 * @since API version 1
 */
Device.prototype.isNested = function() {};

/**
 * Indicates if the device supports nested layers.
 *
 * @return {BooleanValue} a value object that indicates if the device supports nested layers.
 * @since API version 1
 */
Device.prototype.hasLayers = function() {};

/**
 * Indicates if the device has individual device chains for each note value.
 *
 * @return {BooleanValue} a value object that indicates if the device has individual device chains for each note value.
 * @since API version 1
 */
Device.prototype.hasDrumPads = function() {};

/**
 * Create a bank for navigating the nested layers of the device using a fixed-size window.
 * 
 * This bank will work over the following devices:
 *  - Instrument Layer
 *  - Effect Layer
 *  - Instrument Selector
 *  - Effect Selector
 *
 * @param numChannels
          the number of channels that the device layer bank should be configured with
 * @return {DeviceLayerBank} a device layer bank object configured with the desired number of channels
 * @since API version 1
 */
Device.prototype.createLayerBank = function(numChannels) {};

/**
 * Create a bank for navigating the nested layers of the device using a fixed-size window.
 *
 * @param numPads
          the number of channels that the drum pad bank should be configured with
 * @return {DrumPadBank} a drum pad bank object configured with the desired number of pads
 * @since API version 1
 */
Device.prototype.createDrumPadBank = function(numPads) {};

/**
 * Returns a device layer instance that can be used to navigate the layers or drum pads of the device, in
 * case it has any
 * 
 * This is the selected layer from the user interface.
 *
 * @return {CursorDeviceLayer} a cursor device layer instance
 * @since API version 1
 */
Device.prototype.createCursorLayer = function() {};

/**
 * Creates a ChainSelector object which will give you control over the current device if it is an
 * Instrument Selector or an Effect Selector.
 * 
 * To check if the device is currently a ChainSelector, use {@link ChainSelector.exists()}.
 * 
 * If you want to have access to all the chains, use {@link #createLayerBank(int)}.
 *
 * @return {ChainSelector} a chain selector instance
 * @since API version 6
 */
Device.prototype.createChainSelector = function() {};

/**
 * Adds an observer on a list of all parameters for the device.
 * 
 * The callback always updates with an array containing all the IDs for the device.
 *
 * @param callback
          function with the signature (String[])
 * @since API version 1
 */
Device.prototype.addDirectParameterIdObserver = function(callback) {};

/**
 * Adds an observer for the parameter names (initial and changes) of all parameters for the device.
 *
 * @param maxChars
          maximum length of the string sent to the observer.
 * @param callback
          function with the signature (String ID, String name)
 * @since API version 1
 */
Device.prototype.addDirectParameterNameObserver = function(maxChars, callback) {};

/**
 * Returns an observer that reports changes of parameter display values, i.e. parameter values formatted as
 * a string to be read by the user, for example "-6.02 dB". The returned observer object can be used to
 * configure which parameters should be observed. By default no parameters are observed. It should be
 * avoided to observe all parameters at the same time for performance reasons.
 *
 * @param maxChars
          maximum length of the string sent to the observer.
 * @param callback
          function with the signature (String ID, String valueDisplay)
 * @return {DirectParameterValueDisplayObserver} an observer object that can be used to enable or disable actual observing for certain
        parameters.
 * @since API version 1
 */
Device.prototype.addDirectParameterValueDisplayObserver = function(maxChars, callback) {};

/**
 * Adds an observer for the parameter display value (initial and changes) of all parameters for the device.
 *
 * @param callback
          a callback function with the signature (String ID, float normalizedValue). If the value is not
          accessible 'Number.NaN' (not-a-number) is reported, can be checked with 'isNaN(value)'.
 * @since API version 1
 */
Device.prototype.addDirectParameterNormalizedValueObserver = function(callback) {};

/**
 * Sets the parameter with the specified `id` to the given `value` according to the given `resolution`.
 *
 * @param id
          the parameter identifier string
 * @param value
          the new value normalized to the range [0..resolution-1]
 * @param resolution
          the resolution of the new value
 * @since API version 1
 */
Device.prototype.setDirectParameterValueNormalized = function(id, value, resolution) {};

/**
 * Increases the parameter with the specified `id` by the given `increment` according to the given
 * `resolution`. To decrease the parameter value pass in a negative increment.
 *
 * @param id
          the parameter identifier string
 * @param increment
          the amount that the parameter value should be increased by, normalized to the range
          [0..resolution-1]
 * @param resolution
          the resolution of the new value
 * @since API version 1
 */
Device.prototype.incDirectParameterValueNormalized = function(id, increment, resolution) {};

/**
 * Value that reports the file name of the currently loaded sample, in case the device is a sample
 * container device.
 *
 * @return {StringValue}
 * @since API version 2
 */
Device.prototype.sampleName = function() {};

/**
 * Returns an object that provides bank-wise navigation of sibling devices of the same device chain
 * (including the device instance used to create the siblings bank).
 *
 * @param numDevices
          the number of devices that are simultaneously accessible
 * @return {DeviceBank} the requested device bank object
@since API version 1
 */
Device.prototype.createSiblingsDeviceBank = function(numDevices) {};

/**
 * {@link InsertionPoint} that can be used for inserting after this device.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
Device.prototype.afterDeviceInsertionPoint = function() {};

/**
 * {@link InsertionPoint} that can be used for inserting before this device.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
Device.prototype.beforeDeviceInsertionPoint = function() {};

/**
 * {@link InsertionPoint} that can be used for replacing this device.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
Device.prototype.replaceDeviceInsertionPoint = function() {};
/* API Version - 3.1.2 */

/**
 * Devices layers are features of special Bitwig Studio devices, more specifically the Layer Instrument and
 * Layer FX devices, and are also shown as sub-channels in the mixer panel.
 * 
 * Instances of device layer bank are configured with a fixed number of channels and represent an excerpt of
 * underlying complete list of channels. Various methods are provided for scrolling to different sections of
 * the underlying list. It basically acts like a one-dimensional window moving over the device layers.
 * 
 * To receive an instance of device layer bank call {@link Device#createLayerBank(int numChannels)}.
 *
 * @see {@link Device#createLayerBank}
 * @since API version 1
 */
function DeviceLayerBank() {}

DeviceLayerBank.prototype = new ChannelBank();
DeviceLayerBank.prototype.constructor = DeviceLayerBank;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent device layers in Bitwig Studio.
 *
 * @since API version 1
 */
function DeviceLayer() {}

DeviceLayer.prototype = new Channel();
DeviceLayer.prototype.constructor = DeviceLayer;
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent nested FX slots in devices.
 *
 * @since API version 1
 */
function DeviceSlot() {}

DeviceSlot.prototype = new DeviceChain();
DeviceSlot.prototype.constructor = DeviceSlot;
/* API Version - 3.1.2 */

function DirectParameterDisplayedValueChangedCallback() {}

DirectParameterDisplayedValueChangedCallback.prototype = new Callback();
DirectParameterDisplayedValueChangedCallback.prototype.constructor = DirectParameterDisplayedValueChangedCallback;

/**
 * @param {string} id
 * @param {string} value
 */
DirectParameterDisplayedValueChangedCallback.prototype.directParameterDisplayedValueChanged = function(id, value) {};
/* API Version - 3.1.2 */

function DirectParameterNameChangedCallback() {}

DirectParameterNameChangedCallback.prototype = new Callback();
DirectParameterNameChangedCallback.prototype.constructor = DirectParameterNameChangedCallback;

/**
 * @param {string} id
 * @param {string} name
 */
DirectParameterNameChangedCallback.prototype.directParameterNameChanged = function(id, name) {};
/* API Version - 3.1.2 */

function DirectParameterNormalizedValueChangedCallback() {}

DirectParameterNormalizedValueChangedCallback.prototype = new Callback();
DirectParameterNormalizedValueChangedCallback.prototype.constructor = DirectParameterNormalizedValueChangedCallback;

/**
 * @param {string} id
 * @param {double} normalizedValue
 */
DirectParameterNormalizedValueChangedCallback.prototype.directParameterNormalizedValueChanged = function(id, normalizedValue) {};
/* API Version - 3.1.2 */

/**
 * This interface is used to configure observation of pretty-printed device parameter values.
 *
 * @since API version 1
 */
function DirectParameterValueDisplayObserver() {}

/**
 * Starts observing the parameters according to the given parameter ID array, or stops observing in case
 * `null` is passed in for the parameter ID array.
 *
 * @param parameterIds
          the array of parameter IDs or `null` to stop observing parameter display values.
 * @since API version 1
 */
DirectParameterValueDisplayObserver.prototype.setObservedParameterIds = function(parameterIds) {};
/* API Version - 3.1.2 */

/**
 * This interface is used to save custom script settings inside Bitwig Studio documents. The settings are
 * shown to the user in the `Studio IO` panel of Bitwig Studio.
 *
 * @since API version 1
 */
function DocumentState() {}

DocumentState.prototype = new Settings();
DocumentState.prototype.constructor = DocumentState;
/* API Version - 3.1.2 */

function DoubleValueChangedCallback() {}

DoubleValueChangedCallback.prototype = new ValueChangedCallback();
DoubleValueChangedCallback.prototype.constructor = DoubleValueChangedCallback;

/**
 * @param {double} newValue
 */
DoubleValueChangedCallback.prototype.valueChanged = function(newValue) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent double values.
 *
 * @since API version 2
 */
function DoubleValue() {}

DoubleValue.prototype = new Value();
DoubleValue.prototype.constructor = DoubleValue;

/**
 * Gets the current value.
 *
 * @return {double}
 * @since API version 2
 */
DoubleValue.prototype.get = function() {};

/**
 * @return {double}
 */
DoubleValue.prototype.getAsDouble = function() {};
/* API Version - 3.1.2 */

/**
 * Drum pads are features of special Bitwig Studio devices (currently only the Bitwig Drum Machine
 * instrument), and are also shown as sub-channels in the mixer panel.
 * 
 * Instances of drum pad bank are configured with a fixed number of pads/channels and represent an excerpt of
 * underlying complete list of channels. Various methods are provided for scrolling to different sections of
 * the underlying list. It basically acts like a one-dimensional window moving over the drum pad channels.
 * 
 * To receive an instance of drum pad bank call {@link Device#createDrumPadBank(int numChannels)}.
 *
 * @see {@link Device#createDrumPadBank}
 * @since API version 1
 */
function DrumPadBank() {}

DrumPadBank.prototype = new ChannelBank();
DrumPadBank.prototype.constructor = DrumPadBank;

/**
 * Specifies if the Drum Machine should visualize which pads are part of the window. By default indications
 * are enabled.
 *
 * @param shouldIndicate
          `true` if visual indications should be enabled, `false` otherwise
 * @since API version 1
 */
DrumPadBank.prototype.setIndication = function(shouldIndicate) {};

/**
 * Clears mute on all drum pads.
 *
 * @since API version 10
 */
DrumPadBank.prototype.clearMutedPads = function() {};

/**
 * Clears solo on all drum pads.
 *
 * @since API version 10
 */
DrumPadBank.prototype.clearSoloedPads = function() {};

/**
 * True if there is one or many muted pads.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
DrumPadBank.prototype.hasMutedPads = function() {};

/**
 * True if there is one or many soloed pads.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
DrumPadBank.prototype.hasSoloedPads = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are special kind of channel objects that represent the pads of a drum machine
 * instrument. Drum pads are typically associated to channel objects via note keys.
 *
 * @since API version 1
 */
function DrumPad() {}

DrumPad.prototype = new Channel();
DrumPad.prototype.constructor = DrumPad;

/**
 * {@link InsertionPoint} that can be used to insert content in this drum pad.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
DrumPad.prototype.insertionPoint = function() {};
/* API Version - 3.1.2 */

function EnumValueChangedCallback() {}

EnumValueChangedCallback.prototype = new ObjectValueChangedCallback();
EnumValueChangedCallback.prototype.constructor = EnumValueChangedCallback;
/* API Version - 3.1.2 */

function EnumValue() {}

EnumValue.prototype = new Value();
EnumValue.prototype.constructor = EnumValue;

/**
 * Gets the current value.
 *
 * @return {string}
 * @since API version 2
 */
EnumValue.prototype.get = function() {};
/* API Version - 3.1.2 */

/**
 * Base class for defining any kind of extension for Bitwig Studio.
 */
function ExtensionDefinition() {}

/**
 * The name of the extension.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getName = function() {};

/**
 * The author of the extension.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getAuthor = function() {};

/**
 * The version of the extension.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getVersion = function() {};

/**
 * A unique id that identifies this extension.
 *
 * @return {java.util.UUID}
 */
ExtensionDefinition.prototype.getId = function() {};

/**
 * The minimum API version number that this extensions requires.
 *
 * @return {int}
 */
ExtensionDefinition.prototype.getRequiredAPIVersion = function() {};

/**
 * Is this extension is using Beta APIs?
 * 
 * Beta APIs are still on development and might not be available in a future version of Bitwig Studio.
 * 
 * Turning this flag to true, will flag your extension as being a beta extension which might not work after
 * updating Bitwig Studio.
 *
 * @return {boolean} true if the extension wants to use Beta APIs.
 */
ExtensionDefinition.prototype.isUsingBetaAPI = function() {};

/**
 * Gets a remote URI or a path within the extension's jar file where documentation for this extension can
 * be found or null if there is none. If the path is not a URI then it is assumed to be a path below the directory
 * "Documentation" within the extension's jar file.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getHelpFilePath = function() {};

/**
 * If true then this extension should fail when it calls a deprecated method in the API. This is useful
 * during development.
 *
 * @return {boolean}
 */
ExtensionDefinition.prototype.shouldFailOnDeprecatedUse = function() {};

/**
 * An e-mail address that can be used to contact the author of this extension if a problem is detected with
 * it or null if none.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getErrorReportingEMail = function() {};

/**
 * @return {string}
 */
ExtensionDefinition.prototype.toString = function() {};
/* API Version - 3.1.2 */

function Extension() {}

/**
 * @return {HostType}
 */
Extension.prototype.getHost = function() {};

/**
 * @return {DefinitionType}
 */
Extension.prototype.getExtensionDefinition = function() {};
/* API Version - 3.1.2 */

function FloatValueChangedCallback() {}

FloatValueChangedCallback.prototype = new Callback();
FloatValueChangedCallback.prototype.constructor = FloatValueChangedCallback;

/**
 * @param {float} newValue
 */
FloatValueChangedCallback.prototype.valueChanged = function(newValue) {};
/* API Version - 3.1.2 */

/**
 * Information about the dimensions of a font.
 *
 * @newSince API version 6
 */
function FontExtents() {}

/**
 * Returns the distance that the font extends above the baseline. Note that this is not always
 * exactly equal to the maximum of the extents of all the glyphs in the font, but rather is
 * picked to express the font designer's intent as to how the font should align with elements
 * above it.
 *
 * @return {double}
 */
FontExtents.prototype.getAscent = function() {};

/**
 * Returns the distance that the font extends below the baseline. This value is positive for
 * typical fonts that include portions below the baseline. Note that this is not always exactly
 * equal to the maximum of the extents of all the glyphs in the font, but rather is picked to
 * express the font designer's intent as to how the the font should align with elements below it.
 *
 * @return {double}
 */
FontExtents.prototype.getDescent = function() {};

/**
 * Returns the recommended vertical distance between baselines when setting consecutive lines of
 * text with the font. This is greater than ascent+descent by a quantity known as the line
 * spacing or external leading. When space is at a premium, most fonts can be set with only a
 * distance of ascent+descent between lines.
 *
 * @return {double}
 */
FontExtents.prototype.getHeight = function() {};

/**
 * the maximum distance in the X direction that the the origin is advanced for any glyph in the
 * font.
 *
 * @return {double}
 */
FontExtents.prototype.getMaxAdvanceX = function() {};

/**
 * Returns the maximum distance in the Y direction that the the origin is advanced for any glyph
 * in the font. this will be zero for normal fonts used for horizontal writing. (The scripts of
 * East Asia are sometimes written vertically.)
 *
 * @return {double}
 */
FontExtents.prototype.getMaxAdvanceY = function() {};
/* API Version - 3.1.2 */

/**
 * @newSince API version 6
 */
function FontFace() {}

/**
 * Get the font name.
 *
 * @return {string}
 */
FontFace.prototype.getName = function() {};
/* API Version - 3.1.2 */

/**
 * Configure the font rendering options.
 *
 * @newSince API version 6
 */
function FontOptions() {}

/**
 * @return {AntialiasMode}
 */
FontOptions.prototype.getAntialiasMode = function() {};

/**
 * @param {AntialiasMode} mode
 */
FontOptions.prototype.setAntialiasMode = function(mode) {};

/**
 * @return {SubPixelOrder}
 */
FontOptions.prototype.getSubPixelOrder = function() {};

/**
 * @param {SubPixelOrder} subPixelOrder
 */
FontOptions.prototype.setSubPixelOrder = function(subPixelOrder) {};

/**
 * @return {HintStyle}
 */
FontOptions.prototype.getHintStyle = function() {};

/**
 * @param {HintStyle} hintStyle
 */
FontOptions.prototype.setHintStyle = function(hintStyle) {};

/**
 * @return {HintMetrics}
 */
FontOptions.prototype.getHintMetrics = function() {};

/**
 * @param {HintMetrics} hintMetrics
 */
FontOptions.prototype.setHintMetrics = function(hintMetrics) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * This class represents a linear gradient.
 * Add color stops between 0 and 1.
 *
 * @newSince API version 6
 */
function GradientPattern() {}

GradientPattern.prototype = new Pattern();
GradientPattern.prototype.constructor = GradientPattern;

/**
 * @param {double} offset
 * @param {Color} color
 */
GradientPattern.prototype.addColorStop = function(offset, color) {};

/**
 * @param {double} offset
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 */
GradientPattern.prototype.addColorStop = function(offset, red, green, blue) {};

/**
 * @param {double} offset
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 */
GradientPattern.prototype.addColorStop = function(offset, red, green, blue, alpha) {};
/* API Version - 3.1.2 */

/**
 * Provides 2D vector drawing API very similar to cairo graphics.
 * Please read https://www.cairographics.org/manual/ to get a better idea of how this API works.
 *
 * @since API version 6
 */
function GraphicsOutput() {}

GraphicsOutput.prototype.save = function() {};

GraphicsOutput.prototype.restore = function() {};

GraphicsOutput.prototype.clip = function() {};

GraphicsOutput.prototype.clipPreserve = function() {};

GraphicsOutput.prototype.resetClip = function() {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.translate = function(x, y) {};

/**
 * @param {double} angle
 */
GraphicsOutput.prototype.rotate = function(angle) {};

/**
 * @param {double} factor
 */
GraphicsOutput.prototype.scale = function(factor) {};

/**
 * @param {double} xFactor
 * @param {double} yFactor
 */
GraphicsOutput.prototype.scale = function(xFactor, yFactor) {};

GraphicsOutput.prototype.newPath = function() {};

GraphicsOutput.prototype.newSubPath = function() {};

/**
 * @return {Path}
 */
GraphicsOutput.prototype.copyPath = function() {};

/**
 * @return {Path}
 */
GraphicsOutput.prototype.copyPathFlat = function() {};

/**
 * @param {Path} path
 */
GraphicsOutput.prototype.appendPath = function(path) {};

GraphicsOutput.prototype.closePath = function() {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.moveTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.relMoveTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.lineTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.relLineTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 * @param {double} width
 * @param {double} height
 */
GraphicsOutput.prototype.rectangle = function(x, y, width, height) {};

/**
 * @param {double} xc
 * @param {double} yc
 * @param {double} radius
 * @param {double} angle1
 * @param {double} angle2
 */
GraphicsOutput.prototype.arc = function(xc, yc, radius, angle1, angle2) {};

/**
 * @param {double} xc
 * @param {double} yc
 * @param {double} radius
 * @param {double} angle1
 * @param {double} angle2
 */
GraphicsOutput.prototype.arcNegative = function(xc, yc, radius, angle1, angle2) {};

/**
 * @param {double} centerX
 * @param {double} centerY
 * @param {double} radius
 */
GraphicsOutput.prototype.circle = function(centerX, centerY, radius) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 */
GraphicsOutput.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 */
GraphicsOutput.prototype.relCurveTo = function(x1, y1, x2, y2, x3, y3) {};

GraphicsOutput.prototype.paint = function() {};

/**
 * @param {double} alpha
 */
GraphicsOutput.prototype.paintWithAlpha = function(alpha) {};

/**
 * @param {Image} image
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.mask = function(image, x, y) {};

GraphicsOutput.prototype.fill = function() {};

GraphicsOutput.prototype.fillPreserve = function() {};

GraphicsOutput.prototype.stroke = function() {};

GraphicsOutput.prototype.strokePreserve = function() {};

/**
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 */
GraphicsOutput.prototype.setColor = function(red, green, blue) {};

/**
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 */
GraphicsOutput.prototype.setColor = function(red, green, blue, alpha) {};

/**
 * @param {Color} color
 */
GraphicsOutput.prototype.setColor = function(color) {};

/**
 * @param {Pattern} pattern
 */
GraphicsOutput.prototype.setPattern = function(pattern) {};

/**
 * @param {AntialiasMode} antialiasMode
 */
GraphicsOutput.prototype.setAntialias = function(antialiasMode) {};

/**
 * @param {double} width
 */
GraphicsOutput.prototype.setLineWidth = function(width) {};

/**
 * @param {double[]} dashes
 * @param {double} offset
 */
GraphicsOutput.prototype.setDash = function(dashes, offset) {};

/**
 * @param {double[]} dashes
 */
GraphicsOutput.prototype.setDash = function(dashes) {};

/**
 * @param {FillRule} rule
 */
GraphicsOutput.prototype.setFillRule = function(rule) {};

/**
 * @param {LineCap} lineCap
 */
GraphicsOutput.prototype.setLineCap = function(lineCap) {};

/**
 * @param {LineJoin} lineJoin
 */
GraphicsOutput.prototype.setLineJoin = function(lineJoin) {};

/**
 * @param {double} limit
 */
GraphicsOutput.prototype.setMiterLimit = function(limit) {};

/**
 * @param {Operator} operator
 */
GraphicsOutput.prototype.setOperator = function(operator) {};

/**
 * @param {double} tolerance
 */
GraphicsOutput.prototype.setTolerance = function(tolerance) {};

/**
 * @param {Image} image
 * @param {double} x
 * @param {double} y
 */
GraphicsOutput.prototype.drawImage = function(image, x, y) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @return {GradientPattern}
 */
GraphicsOutput.prototype.createLinearGradient = function(x1, y1, x2, y2) {};

/**
 * @return {MeshPattern}
 */
GraphicsOutput.prototype.createMeshGradient = function() {};

/**
 * @param {string} text
 */
GraphicsOutput.prototype.showText = function(text) {};

/**
 * @param {double} fontSize
 */
GraphicsOutput.prototype.setFontSize = function(fontSize) {};

/**
 * @param {FontFace} fontFace
 */
GraphicsOutput.prototype.setFontFace = function(fontFace) {};

/**
 * @param {FontOptions} fontOptions
 */
GraphicsOutput.prototype.setFontOptions = function(fontOptions) {};

/**
 * @return {FontExtents}
 */
GraphicsOutput.prototype.getFontExtents = function() {};

/**
 * @param {string} text
 * @return {TextExtents}
 */
GraphicsOutput.prototype.getTextExtents = function(text) {};


AntialiasMode = {
	DEFAULT: 0,
	OFF: 1,
	GOOD: 2,
	BEST: 3,
};

SubPixelOrder = {
	DEFAULT: 0,
	RGB: 1,
	BGR: 2,
	VRGB: 3,
	VBGR: 4,
};

HintStyle = {
	DEFAULT: 0,
	NONE: 1,
	SLIGHT: 2,
	MEDIUM: 3,
	FULL: 4,
};

HintMetrics = {
	DEFAULT: 0,
	ON: 1,
	OFF: 2,
};

FillRule = {
	WINDING: 0,
	EVEN_ODD: 1,
};

LineCap = {
	BUTT: 0,
	LINE: 1,
	SQUARE: 2,
};

LineJoin = {
	MITER: 0,
	ROUND: 1,
	BEVEL: 2,
};

Operator = {
	CLEAR: 0,
	SOURCE: 1,
	OVER: 2,
	IN: 3,
	OUT: 4,
	ATOP: 5,
	DEST: 6,
	DEST_OVER: 7,
	DEST_IN: 8,
	DEST_OUT: 9,
	DEST_ATOP: 10,
	XOR: 11,
	ADD: 12,
	SATURATE: 13,
	MULTIPLY: 14,
	SCREEN: 15,
	OVERLAY: 16,
	DARKEN: 17,
	LIGHTEN: 18,
	COLOR_DODGE: 19,
	COLOR_BURN: 20,
	HARD_LIGHT: 21,
	SOFT_LIGHT: 22,
	DIFFERENCE: 23,
	EXCLUSION: 24,
	HSL_HUE: 25,
	HSL_SATURATION: 26,
	HSL_COLOR: 27,
	HSL_LUMINOSITY: 28,
};/* API Version - 3.1.2 */

/**
 * An interface representing the global groove settings of the project.
 *
 * @since API version 1
 */
function Groove() {}

/**
 * Returns the enabled state of the groove.
 *
 * @return {Parameter} an object that provides access to the groove on/off setting
 * @since API version 1
 */
Groove.prototype.getEnabled = function() {};

/**
 * Returns the object that represents the shuffle amount in Bitwig Studio.
 *
 * @return {Parameter} an ranged value object that provides access to the shuffle amount
 * @since API version 1
 */
Groove.prototype.getShuffleAmount = function() {};

/**
 * Returns the object that represents the shuffle rate in Bitwig Studio.
 *
 * @return {Parameter} an ranged value object that provides access to the shuffle rate
 * @since API version 1
 */
Groove.prototype.getShuffleRate = function() {};

/**
 * Returns the object that represents the accent amount in Bitwig Studio.
 *
 * @return {Parameter} an ranged value object that provides access to the accent amount
 * @since API version 1
 */
Groove.prototype.getAccentAmount = function() {};

/**
 * Returns the object that represents the accent rate in Bitwig Studio.
 *
 * @return {Parameter} an ranged value object that provides access to the accent rate
 * @since API version 1
 */
Groove.prototype.getAccentRate = function() {};

/**
 * Returns the object that represents the accent phase in Bitwig Studio.
 *
 * @return {Parameter} an ranged value object that provides access to the accent phase
 * @since API version 1
 */
Groove.prototype.getAccentPhase = function() {};
/* API Version - 3.1.2 */

/**
 * Something that can be bound to a hardware action (such as user pressing a button).
 *
 * @since API version 10
 */
function HardwareActionBindable() {}

HardwareActionBindable.prototype = new HardwareBindable();
HardwareActionBindable.prototype.constructor = HardwareActionBindable;

/**
 * Binds this target to the supplied {@link HardwareAction} so that when the hardware action occurs this
 * target is invoked.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {HardwareAction} action
 * @return {HardwareActionBinding}
 */
HardwareActionBindable.prototype.addBinding = function(action) {};

/**
 * Invokes the action.
 *
 * @since API version 1
 */
HardwareActionBindable.prototype.invoke = function() {};
/* API Version - 3.1.2 */

/**
 * Represents a binding from a hardware action (such as user pressing a button) to some target action.
 *
 * @since API version 10
 */
function HardwareActionBinding() {}

HardwareActionBinding.prototype = new HardwareBinding();
HardwareActionBinding.prototype.constructor = HardwareActionBinding;
/* API Version - 3.1.2 */

/**
 * An action that can happen on a hardware control. For example, the user touching it, pressing it, releasing
 * it etc.
 *
 * @since API version 10
 */
function HardwareAction() {}

HardwareAction.prototype = new HardwareBindingSource();
HardwareAction.prototype.constructor = HardwareAction;

/**
 * Sets the {@link HardwareActionMatcher} that is used to recognize when this action happens.
 *
 * @param {HardwareActionMatcher} actionMatcher
 */
HardwareAction.prototype.setActionMatcher = function(actionMatcher) {};

/**
 * Sets the {@link AbsoluteHardwareValueMatcher} that is used to recognize when this action happens and
 * with what pressure.
 * 
 * This is useful for a button press that is pressure sensitive. The pressure can be obtained by creating a
 * custom action with
 * {@link ControllerHost#createAction(java.util.function.DoubleConsumer, java.util.function.Supplier)} and
 * then binding the created action to this {@link HardwareAction}.
 *
 * @param {AbsoluteHardwareValueMatcher} actionMatcher
 */
HardwareAction.prototype.setPressureActionMatcher = function(actionMatcher) {};

/**
 * Checks if this action is supported (that is, it has a {@link HardwareActionMatcher} that can detect it).
 *
 * @return {boolean}
 */
HardwareAction.prototype.isSupported = function() {};
/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when a {@link HardwareAction} happens based on some hardware input.
 * 
 * For example, when a certain MIDI CC message happens.
 *
 * @see MidiIn#createActionMatcher(String)
 * @since API version 10
 */
function HardwareActionMatcher() {}

HardwareActionMatcher.prototype = new HardwareInputMatcher();
HardwareActionMatcher.prototype.constructor = HardwareActionMatcher;
/* API Version - 3.1.2 */

/**
 * An object that can be a target in a {@link HardwareBinding}.
 *
 * @since API version 10
 */
function HardwareBindable() {}
/* API Version - 3.1.2 */

/**
 * Represents a binding from some hardware input to a target.
 * 
 * When the binding is no longer needed the {@link #removeBinding()} method can be called to remove it.
 *
 * @since API version 10
 */
function HardwareBinding() {}

/**
 * Removes this binding between its source and target so it is no longer in effect.
 */
HardwareBinding.prototype.removeBinding = function() {};
/* API Version - 3.1.2 */

/**
 * Represents the source of a {@link HardwareBinding}.
 *
 * @since API version 10
 */
function HardwareBindingSource() {}

/**
 * Checks if it is possible to make a binding from this source to the supplied target object.
 *
 * @param {Object} target
 * @return {boolean}
 */
HardwareBindingSource.prototype.canBindTo = function(target) {};

/**
 * Binds this source to the supplied target and returns the created binding. This can only be called if the
 * {@link #canBindTo(Object)} returns true.
 *
 * @param {HardwareBindable} target
 * @return {HardwareBindingType}
 */
HardwareBindingSource.prototype.addBinding = function(target) {};

/**
 * Clears all bindings from this source to its targets.
 */
HardwareBindingSource.prototype.clearBindings = function() {};

/**
 * Ensures there is a single binding to the supplied target.
 * 
 * This is a convenience method that is equivalent to calling {@link #clearBindings()} and the
 * {@link #addBinding(HardwareBindable)}
 *
 * @param {HardwareBindable} target
 * @return {HardwareBindingType}
 */
HardwareBindingSource.prototype.setBinding = function(target) {};
/* API Version - 3.1.2 */

/**
 * Represents a binding from some hardware input to a ranged value.
 *
 * @since API version 10
 */
function HardwareBindingWithRange() {}

HardwareBindingWithRange.prototype = new HardwareBinding();
HardwareBindingWithRange.prototype.constructor = HardwareBindingWithRange;

/**
 * Sets the minimum normalized value (0...1) that should be used for this binding.
 *
 * @param {double} min
 */
HardwareBindingWithRange.prototype.setMinNormalizedValue = function(min) {};

/**
 * Sets the maximum normalized value (0...1) that should be used for this binding.
 *
 * @param {double} max
 */
HardwareBindingWithRange.prototype.setMaxNormalizedValue = function(max) {};

/**
 * Sets the normalized range (0...1) that should be used for this binding.
 *
 * @param {double} min
 * @param {double} max
 */
HardwareBindingWithRange.prototype.setNormalizedRange = function(min, max) {};
/* API Version - 3.1.2 */

/**
 * A {@link HardwareBinding} that has some sensitivity setting.
 *
 * @since API version 10
 */
function HardwareBindingWithSensitivity() {}

HardwareBindingWithSensitivity.prototype = new HardwareBinding();
HardwareBindingWithSensitivity.prototype.constructor = HardwareBindingWithSensitivity;

/**
 * Sets the sensitivity of this binding.
 *
 * @param {double} sensitivity
 */
HardwareBindingWithSensitivity.prototype.setSensitivity = function(sensitivity) {};
/* API Version - 3.1.2 */

/**
 * Represents a physical hardware button on a controller
 *
 * @since API version 10
 */
function HardwareButton() {}

HardwareButton.prototype = new HardwareControl();
HardwareButton.prototype.constructor = HardwareButton;

/**
 * Action that happens when the user presses the button.
 *
 * @return {HardwareAction}
 */
HardwareButton.prototype.pressedAction = function() {};

/**
 * Action that happens when the user releases the button.
 *
 * @return {HardwareAction}
 */
HardwareButton.prototype.releasedAction = function() {};

/**
 * Button state
 *
 * @return {BooleanValue}
 */
HardwareButton.prototype.isPressed = function() {};

/**
 * Sets the optional control that represents the aftertouch value for this button.
 *
 * @param {AbsoluteHardwareControl} control
 */
HardwareButton.prototype.setAftertouchControl = function(control) {};

/**
 * An indication of how rounded the corners of this button should be.
 *
 * @param {double} radiusInMM
 */
HardwareButton.prototype.setRoundedCornerRadius = function(radiusInMM) {};
/* API Version - 3.1.2 */

/**
 * Some kind of physical control on a piece of hardware (such as a knob, button, slider etc).
 *
 * @since API version 10
 */
function HardwareControl() {}

HardwareControl.prototype = new HardwareElement();
HardwareControl.prototype.constructor = HardwareControl;

/**
 * Action that happens when the user touches this control.
 *
 * @return {HardwareAction}
 */
HardwareControl.prototype.beginTouchAction = function() {};

/**
 * Action that happens when the user stops touching this control.
 *
 * @return {HardwareAction}
 */
HardwareControl.prototype.endTouchAction = function() {};

/**
 * Value that indicates if this control is being touched or not.
 *
 * @return {BooleanValue}
 */
HardwareControl.prototype.isBeingTouched = function() {};

/**
 * Optional light that is in the background of this control.
 *
 * @return {HardwareLight}
 */
HardwareControl.prototype.backgroundLight = function() {};

/**
 * Sets the optional light that is in the background of this control.
 *
 * @param {HardwareLight} light
 */
HardwareControl.prototype.setBackgroundLight = function(light) {};
/* API Version - 3.1.2 */

HardwareControlType = {
	KNOB: 0,
	SLIDER: 1,
	ENCODER: 2,
};/* API Version - 3.1.2 */

/**
 * Represents a hardware device that the user has chosen to communicate with. The hardware devices that the
 * user needs to choose are defined by the
 * {@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)} method.
 *
 * @since API version 7
 */
function HardwareDevice() {}

/**
 * The {@link HardwareDeviceMatcher} that was provided by the controller for identifying this hardware
 * device in {@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)}.
 *
 * @return {HardwareDeviceMatcher}
 */
HardwareDevice.prototype.deviceMatcher = function() {};
/* API Version - 3.1.2 */

/**
 * Matcher that can match a particular hardware device that is connected to the user's machine.
 * Sub classes of this define how the hardware is connected.
 * Currently only USB devices are supported.
 *
 * @see UsbDeviceMatcher
 * @see ControllerExtensionDefinition#listHardwareDevices(java.util.List)
 */
function HardwareDeviceMatcher() {}

/**
 * Human friendly name for the kinds of hardware devices this matcher matches.
 *
 * @return {string}
 */
HardwareDeviceMatcher.prototype.getName = function() {};
/* API Version - 3.1.2 */

/**
 * Defines a list of all the hardware devices that a controller needs.
 *
 * @since API version 7
 */
function HardwareDeviceMatcherList() {}

/**
 * Adds information about a hardware device that is needed and how it can be matched. The hardware device
 * will need to match at least one of the supplied matchers.
 * 
 * For each entry added to this list the user will see a device chooser that lets them select an
 * appropriate device. The information added here is also used for auto detection purposes.
 *
 * @param {HardwareDeviceMatcher} deviceMatchers
 */
HardwareDeviceMatcherList.prototype.add = function(/*...*/deviceMatchers) {};

/**
 * The number of hardware devices in the list.
 *
 * @return {int}
 */
HardwareDeviceMatcherList.prototype.getCount = function() {};

/**
 * @param {int} index
 * @return {HardwareDeviceMatcher[]}
 */
HardwareDeviceMatcherList.prototype.getHardwareDeviceMatchersAt = function(index) {};

/**
 * @return {java.util.List<HardwareDeviceMatcher[]>}
 */
HardwareDeviceMatcherList.prototype.getList = function() {};
/* API Version - 3.1.2 */

/**
 * Represents some physical hardware element. Hardware elements can be {@link HardwareControl}s (e.g. buttons,
 * sliders etc) or {@link HardwareOutputElement}s (e.g lights, text displays etc).
 *
 * @since API version 10
 */
function HardwareElement() {}

/**
 * The unique id associated with this element.
 *
 * @return {string}
 */
HardwareElement.prototype.getId = function() {};

/**
 * An optional label associated with this element.
 *
 * @return {string}
 */
HardwareElement.prototype.getLabel = function() {};

/**
 * Sets the label for this hardware control as written on the hardware.
 *
 * @param {string} label
 */
HardwareElement.prototype.setLabel = function(label) {};

/**
 * The color of the label.
 *
 * @return {Color}
 */
HardwareElement.prototype.getLabelColor = function() {};

/**
 * Sets the color of the label.
 *
 * @param {Color} color
 */
HardwareElement.prototype.setLabelColor = function(color) {};

/**
 * {@link RelativePosition} that defines where the label is.
 *
 * @return {RelativePosition}
 */
HardwareElement.prototype.getLabelPosition = function() {};

/**
 * @param {RelativePosition} position
 */
HardwareElement.prototype.setLabelPosition = function(position) {};

/**
 * The physical bounds of this hardware element on the controller.
 *
 * @param {double} xInMM
 * @param {double} yInMM
 * @param {double} widthInMM
 * @param {double} heightInMM
 */
HardwareElement.prototype.setBounds = function(xInMM, yInMM, widthInMM, heightInMM) {};

/**
 * @return {double}
 */
HardwareElement.prototype.getX = function() {};

/**
 * @return {double}
 */
HardwareElement.prototype.getY = function() {};

/**
 * @return {double}
 */
HardwareElement.prototype.getWidth = function() {};

/**
 * @return {double}
 */
HardwareElement.prototype.getHeight = function() {};
/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when some kind of hardware input happens.
 * 
 * For example, when a certain MIDI CC message happens.
 *
 * @see MidiIn#createActionMatcher(String)
 * @since API version 10
 */
function HardwareInputMatcher() {}
/* API Version - 3.1.2 */

/**
 * Defines a hardware light. There are 2 kinds of lights: {@link OnOffHardwareLight} and
 * {@link MultiStateHardwareLight}.
 *
 * @since API version 10
 */
function HardwareLight() {}

HardwareLight.prototype = new HardwareOutputElement();
HardwareLight.prototype.constructor = HardwareLight;
/* API Version - 3.1.2 */

/**
 * Defines the visual state of a hardware light so that it can be visualized in Bitwig Studio's user
 * interface.
 * 
 * This is currently only used when simulating hardware when it is not present for debugging but it may be
 * used for other purposes in the future.
 *
 * @since API version 10
 */
function HardwareLightVisualState() {}

/**
 * @param {Color} lightColor
 * @return {Color}
 */
HardwareLightVisualState.prototype.defaultLabelColorForLightColor = function(lightColor) {};

/**
 * @param {Color} color
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createForColor = function(color) {};

/**
 * @param {Color} color
 * @param {Color} labelColor
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createForColor = function(color, labelColor) {};

/**
 * @param {Color} onColor
 * @param {Color} offColor
 * @param {double} onBlinkTimeInSec
 * @param {double} offBlinkTimeInSec
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createBlinking = function(onColor, offColor, onBlinkTimeInSec, offBlinkTimeInSec) {};

/**
 * @param {Color} onColor
 * @param {Color} offColor
 * @param {Color} labelOnColor
 * @param {Color} labelOffColor
 * @param {double} onBlinkTimeInSec
 * @param {double} offBlinkTimeInSec
 * @return {HardwareLightVisualState}
 */
HardwareLightVisualState.prototype.createBlinking = function(onColor, offColor, labelOnColor, labelOffColor, onBlinkTimeInSec, offBlinkTimeInSec) {};

/**
 * @return {boolean}
 */
HardwareLightVisualState.prototype.isBlinking = function() {};

/**
 * @return {Color}
 */
HardwareLightVisualState.prototype.getColor = function() {};

/**
 * @return {Color}
 */
HardwareLightVisualState.prototype.getBlinkOffColor = function() {};

/**
 * @return {double}
 */
HardwareLightVisualState.prototype.getOffBlinkTime = function() {};

/**
 * @return {double}
 */
HardwareLightVisualState.prototype.getOnBlinkTime = function() {};

/**
 * @return {Color}
 */
HardwareLightVisualState.prototype.getLabelColor = function() {};

/**
 * @return {Color}
 */
HardwareLightVisualState.prototype.getLabelBlinkOffColor = function() {};
/* API Version - 3.1.2 */

/**
 * Represents a physical hardware element that displays some output to the user.
 * 
 * For example, a light, some text etc
 *
 * @since API version 10
 */
function HardwareOutputElement() {}

HardwareOutputElement.prototype = new HardwareElement();
HardwareOutputElement.prototype.constructor = HardwareOutputElement;

/**
 * Sets an optional callback for this element whenever it's state needs to be sent to the hardware. This
 * will be called when calling {@link HardwareSurface#updateHardware()} if the state needs to be sent.
 *
 * @param {java.lang.Runnable} sendStateRunnable
 */
HardwareOutputElement.prototype.onUpdateHardware = function(sendStateRunnable) {};
/* API Version - 3.1.2 */

/**
 * Defines a physical pixel display on the controller.
 *
 * @since API version 10
 */
function HardwarePixelDisplay() {}

HardwarePixelDisplay.prototype = new HardwareOutputElement();
HardwarePixelDisplay.prototype.constructor = HardwarePixelDisplay;

/**
 * The {@link Bitmap} that contains the contents of this display.
 *
 * @return {Bitmap}
 */
HardwarePixelDisplay.prototype.bitmap = function() {};
/* API Version - 3.1.2 */

/**
 * Represents a value that needs to be displayed somehow on the hardware.
 * 
 * A {@link HardwareProperty} is part of a {@link HardwareOutputElement}.
 *
 * @since API version 10
 */
function HardwareProperty() {}
/* API Version - 3.1.2 */

/**
 * Represents a physical hardware button on a controller
 *
 * @since API version 10
 */
function HardwareSlider() {}

HardwareSlider.prototype = new AbsoluteHardwareControl();
HardwareSlider.prototype.constructor = HardwareSlider;

/**
 * Indicates if this slider is horizontal rather than vertical.
 *
 * @param {boolean} isHorizontal
 */
HardwareSlider.prototype.setIsHorizontal = function(isHorizontal) {};
/* API Version - 3.1.2 */

/**
 * Represents a surface that can contain {@link HardwareElement}s such as {@link HardwareButton}s,
 * {@link HardwareSlider}s, {@link MultiStateHardwareLight}s etc
 * 
 * <p>
 * This information allows Bitwig Studio to construct a reliable physical model of the hardware. This
 * information can be used to simulate hardware being present even when physical hardware is not available
 * (and may also be used for other purposes in the future).
 * 
 * <p>
 * To be able to simulate hardware being connected so that you can debug controllers without the real hardware
 * you need to do the following:
 * 
 * <p>
 * Create a file with the name "config.json" in your user settings directory. The location of this directory
 * is platform dependent:
 * 
 * <ul>
 * <li>On Windows: %LOCALAPPDATA%\Bitwig Studio
 * <li>On macOS: Library/Application Support/Bitwig/Bitwig Studio
 * <li>On Linux: $HOME/.BitwigStudio
 * </ul>
 * 
 * <p>
 * Then add the following line to the config.json file:
 * 
 * <pre>
 * extension-dev : true
 * </pre>
 * 
 * <p>
 * You will then need to restart Bitwig Studio. To simulate the controller being connected you can right click
 * on the controller in the preferences and select "Simulate device connected".
 * 
 * <p>
 * If you have also provided physical positions for various {@link HardwareElement}s using
 * {@link HardwareElement#setBounds(double, double, double, double)} then you can also see a GUI simulator for
 * your controller by selecting "Show simulated hardware GUI".
 *
 * @since API version 10
 */
function HardwareSurface() {}

/**
 * Creates a {@link HardwareSlider} that represents a physical slider on a controller.
 *
 * @param id
          A unique string that identifies this control.
 * @return {HardwareSlider}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwareSlider = function(id) {};

/**
 * Creates an {@link AbsoluteHardwareKnob} that represents a physical knob on a controller that can be used
 * to input an absolute value.
 *
 * @param id
          A unique string that identifies this control.
 * @return {AbsoluteHardwareKnob}
 * @since API version 10
 */
HardwareSurface.prototype.createAbsoluteHardwareKnob = function(id) {};

/**
 * Creates an {@link RelativeHardwareKnob} that represents a physical knob on a controller that can be used
 * to input a relative value change.
 *
 * @param id
          A unique string that identifies this control.
 * @return {RelativeHardwareKnob}
 * @since API version 10
 */
HardwareSurface.prototype.createRelativeHardwareKnob = function(id) {};

/**
 * @param {string} id
 * @param {int} numKeys
 * @param {int} octave
 * @param {int} startKeyInOctave
 * @return {PianoKeyboard}
 */
HardwareSurface.prototype.createPianoKeyboard = function(id, numKeys, octave, startKeyInOctave) {};

/**
 * Creates a {@link HardwareButton} that represents a physical button on a controller
 *
 * @param id
          A unique string that identifies this control.
 * @return {HardwareButton}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwareButton = function(id) {};

/**
 * Creates a {@link OnOffHardwareLight} that represents a physical light on a controller
 *
 * @param {string} id
 * @return {OnOffHardwareLight}
 * @since API version 10
 */
HardwareSurface.prototype.createOnOffHardwareLight = function(id) {};

/**
 * Creates a {@link MultiStateHardwareLight} that represents a physical light on a controller
 *
 * @param {string} id
 * @return {MultiStateHardwareLight}
 * @since API version 10
 */
HardwareSurface.prototype.createMultiStateHardwareLight = function(id) {};

/**
 * Creates a {@link HardwareTextDisplay} that represents a physical text display on a controller
 *
 * @param {string} id
 * @param {int} numLines
 * @return {HardwareTextDisplay}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwareTextDisplay = function(id, numLines) {};

/**
 * Creates a {@link HardwarePixelDisplay} that displays the provided {@link Bitmap} that is rendered by the
 * controller.
 *
 * @param {string} id
 * @param {Bitmap} bitmap
 * @return {HardwarePixelDisplay}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwarePixelDisplay = function(id, bitmap) {};

/**
 * Sets the physical size of this controller in mm.
 *
 * @param {double} widthInMM
 * @param {double} heightInMM
 * @since API version 10
 */
HardwareSurface.prototype.setPhysicalSize = function(widthInMM, heightInMM) {};

/**
 * Updates the state of all {@link HardwareOutputElement}s that have changed since the last time this
 * method was called.
 * 
 * Any onUpdateHardware callbacks that have been registered on {@link HardwareOutputElement}s or
 * {@link HardwareProperty}s will be invoked if their state/value has changed since the last time it was
 * called.
 * 
 * This is typically called by the control script from its flush method.
 *
 * @since API version 10
 */
HardwareSurface.prototype.updateHardware = function() {};

/**
 * Mark all {@link HardwareOutputElement}s as needing to resend their output state, regardless of it has
 * changed or not.
 */
HardwareSurface.prototype.invalidateHardwareOutputState = function() {};

/**
 * A list of all the {@link HardwareControl}s that have been created on this {@link HardwareSurface}.
 *
 * @return {java.util.List<? extends HardwareControl>}
 */
HardwareSurface.prototype.hardwareControls = function() {};

/**
 * Finds the {@link HardwareElement} that has the supplied id or null if not found.
 *
 * @param {string} id
 * @return {HardwareElement}
 */
HardwareSurface.prototype.hardwareElementWithId = function(id) {};

/**
 * List of all {@link HardwareElement}s on this {@link HardwareSurface}.
 *
 * @return {java.util.List<? extends HardwareOutputElement>}
 */
HardwareSurface.prototype.hardwareOutputElements = function() {};
/* API Version - 3.1.2 */

/**
 * Represents a display on some hardware that shows one or more lines of text.
 *
 * @since API version 10
 */
function HardwareTextDisplay() {}

HardwareTextDisplay.prototype = new HardwareOutputElement();
HardwareTextDisplay.prototype.constructor = HardwareTextDisplay;

/**
 * The line at the supplied line index.
 *
 * @param {int} line
 * @return {HardwareTextDisplayLine}
 */
HardwareTextDisplay.prototype.line = function(line) {};
/* API Version - 3.1.2 */

/**
 * Represents a line of text on a {@link HardwareTextDisplay}.
 *
 * @since API version 10
 */
function HardwareTextDisplayLine() {}

/**
 * Property that defines the current text shown.
 *
 * @return {StringHardwareProperty}
 */
HardwareTextDisplayLine.prototype.text = function() {};

/**
 * Property that defines the background color of this line.
 *
 * @return {ColorHardwareProperty}
 */
HardwareTextDisplayLine.prototype.backgroundColor = function() {};

/**
 * Property that defines the text color of this line.
 *
 * @return {ColorHardwareProperty}
 */
HardwareTextDisplayLine.prototype.textColor = function() {};
/* API Version - 3.1.2 */

/**
 * Defines the interface through which an extension can talk to the host application.
 */
function Host() {}

/**
 * An interface representing the host application to the script.
 * @global
 * @type {Host}
 */
var host = new Host();
/**
 * Returns the latest supported API version of the host application.
 *
 * @return {int} the latest supported API version of the host application
 * @since API version 1
 */
Host.prototype.getHostApiVersion = function() {};

/**
 * Returns the vendor of the host application.
 *
 * @return {string} the vendor of the host application
 * @since API version 1
 */
Host.prototype.getHostVendor = function() {};

/**
 * Returns the product name of the host application.
 *
 * @return {string} the product name of the host application
 * @since API version 1
 */
Host.prototype.getHostProduct = function() {};

/**
 * Returns the version number of the host application.
 *
 * @return {string} the version number of the host application
 * @since API version 1
 */
Host.prototype.getHostVersion = function() {};

/**
 * The platform type that this host is running on.
 *
 * @return {PlatformType}
 */
Host.prototype.getPlatformType = function() {};

/**
 * Sets an email address to use for reporting errors found in this script.
 *
 * @param {string} address
 * @since API version 2
 */
Host.prototype.setErrorReportingEMail = function(address) {};

/**
 * Gets the OpenSoundControl module.
 *
 * @return {OscModule}
 * @since API version 5
 */
Host.prototype.getOscModule = function() {};

/**
 * Allocates some memory that will be automatically freed once the extension exits.
 *
 * @param {int} size
 * @return {MemoryBlock}
 * @since API version 7
 */
Host.prototype.allocateMemoryBlock = function(size) {};

/**
 * Creates an offscreen bitmap that the extension can use to render into. The memory used by this bitmap is
 * guaranteed to be freed once this extension exits.
 *
 * @param {int} width
 * @param {int} height
 * @param {BitmapFormat} format
 * @return {Bitmap}
 * @since API version 7
 */
Host.prototype.createBitmap = function(width, height, format) {};

/**
 * Loads a font.
 * The memory used by this font is guaranteed to be freed once this extension exits.
 *
 * @param {string} path
 * @return {FontFace}
 * @since API version 7
 */
Host.prototype.loadFontFace = function(path) {};

/**
 * Creates a new FontOptions.
 * This object is used to configure how the GraphicOutput will display text.
 * The memory used by this object is guaranteed to be freed once this extension exits.
 *
 * @return {FontOptions}
 * @since API version 7
 */
Host.prototype.createFontOptions = function() {};

/**
 * Loads a PNG image.
 * The memory used by this image is guaranteed to be freed once this extension exits.
 *
 * @param {string} path
 * @return {Image}
 * @since API version 7
 */
Host.prototype.loadPNG = function(path) {};

/**
 * Loads a SVG image.
 * The memory used by this image is guaranteed to be freed once this extension exits.
 *
 * @param {string} path
 * @param {double} scale
 * @return {Image}
 * @since API version 7
 */
Host.prototype.loadSVG = function(path, scale) {};
/* API Version - 3.1.2 */

/**
 * Represents an abstract image type.
 *
 * @newSince API version 6
 */
function Image() {}

/**
 * Returns the width
 *
 * @return {int}
 */
Image.prototype.getWidth = function() {};

/**
 * Returns the height
 *
 * @return {int}
 */
Image.prototype.getHeight = function() {};
/* API Version - 3.1.2 */

function IndexedBooleanValueChangedCallback() {}

IndexedBooleanValueChangedCallback.prototype = new IndexedValueChangedCallback();
IndexedBooleanValueChangedCallback.prototype.constructor = IndexedBooleanValueChangedCallback;

/**
 * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
 * of containing clips.
 *
 * @param {int} index
 * @param {boolean} newValue
 * @since API version 1
 */
IndexedBooleanValueChangedCallback.prototype.valueChanged = function(index, newValue) {};
/* API Version - 3.1.2 */

function IndexedColorValueChangedCallback() {}

IndexedColorValueChangedCallback.prototype = new IndexedValueChangedCallback();
IndexedColorValueChangedCallback.prototype.constructor = IndexedColorValueChangedCallback;

/**
 * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
 * of containing clips.
 *
 * @param {int} index
 * @param {float} red
 * @param {float} green
 * @param {float} blue
 * @since API version 1
 */
IndexedColorValueChangedCallback.prototype.valueChanged = function(index, red, green, blue) {};
/* API Version - 3.1.2 */

function IndexedStringValueChangedCallback() {}

IndexedStringValueChangedCallback.prototype = new IndexedValueChangedCallback();
IndexedStringValueChangedCallback.prototype.constructor = IndexedStringValueChangedCallback;

/**
 * Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
 * of containing clips.
 *
 * @param {int} index
 * @param {string} newValue
 * @since API version 1
 */
IndexedStringValueChangedCallback.prototype.valueChanged = function(index, newValue) {};
/* API Version - 3.1.2 */

function IndexedValueChangedCallback() {}

IndexedValueChangedCallback.prototype = new Callback();
IndexedValueChangedCallback.prototype.constructor = IndexedValueChangedCallback;
/* API Version - 3.1.2 */

/**
 * A pipe that can be used to read data.
 *
 * @since API version 7
 */
function InputPipe() {}

InputPipe.prototype = new Pipe();
InputPipe.prototype.constructor = InputPipe;

/**
 * Requests to read some data from this pipe in an asynchronous way (the caller is not blocked). Once some
 * data has been read the callback will be notified on the controller's thread.
 *
 * @param data
          A {@link MemoryBlock} that can receive the data that is read.
 * @param callback
          A callback that is notified on the controller's thread when the read has completed.
 * @param timeoutInMs
          A timeout in milliseconds that will result in an error and termination of the controller if
          the read does not happen in this time. For inifnite timeout use 0.
 */
InputPipe.prototype.readAsync = function(data, callback, timeoutInMs) {};

/**
 * Requests to read some data from this pipe in a synchronous way (the caller is blocked until the transfer
 * completes).
 *
 * @param {MemoryBlock} data
 * @param {int} timeoutInMs
 * @return {int} The number of bytes that was read.
 */
InputPipe.prototype.read = function(data, timeoutInMs) {};
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
 * @param {Track} tracks
 */
InsertionPoint.prototype.copyTracks = function(/*...*/tracks) {};

/**
 * Moves the supplied tracks to this insertion point. If it's not possible to do so then this does nothing.
 *
 * @param {Track} tracks
 */
InsertionPoint.prototype.moveTracks = function(/*...*/tracks) {};

/**
 * Copies the supplied devices to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {Device} devices
 */
InsertionPoint.prototype.copyDevices = function(/*...*/devices) {};

/**
 * Moves the supplied devices to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {Device} devices
 */
InsertionPoint.prototype.moveDevices = function(/*...*/devices) {};

/**
 * Copies the supplied slots or scenes to this insertion point. If it's not possible to do so then this
 * does nothing.
 *
 * @param {ClipLauncherSlotOrScene} clipLauncherSlotOrScenes
 */
InsertionPoint.prototype.copySlotsOrScenes = function(/*...*/clipLauncherSlotOrScenes) {};

/**
 * Moves the supplied slots or scenes to this insertion point. If it's not possible to do so then this does
 * nothing.
 *
 * @param {ClipLauncherSlotOrScene} clipLauncherSlotOrScenes
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
/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware.
 *
 * @since API version 10
 */
function IntegerHardwareProperty() {}

IntegerHardwareProperty.prototype = new HardwareProperty();
IntegerHardwareProperty.prototype.constructor = IntegerHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {int}
 */
IntegerHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {int}
 */
IntegerHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.IntConsumer} sendValueConsumer
 */
IntegerHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {int} value
 */
IntegerHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link BooleanSupplier} that supplies the latest value.
 *
 * @param {java.util.function.IntSupplier} supplier
 */
IntegerHardwareProperty.prototype.setValueSupplier = function(supplier) {};
/* API Version - 3.1.2 */

function IntegerValueChangedCallback() {}

IntegerValueChangedCallback.prototype = new ValueChangedCallback();
IntegerValueChangedCallback.prototype.constructor = IntegerValueChangedCallback;

/**
 * @param {int} newValue
 */
IntegerValueChangedCallback.prototype.valueChanged = function(newValue) {};
/* API Version - 3.1.2 */

function IntegerValue() {}

IntegerValue.prototype = new Value();
IntegerValue.prototype.constructor = IntegerValue;

/**
 * Gets the current value.
 *
 * @return {int}
 * @since API version 2
 */
IntegerValue.prototype.get = function() {};

/**
 * @return {int}
 */
IntegerValue.prototype.getAsInt = function() {};

/**
 * Adds an observer that is notified when this value changes. This is intended to aid in backwards
 * compatibility for drivers written to the version 1 API.
 *
 * @param callback
          The callback to notify with the new value
 * @param valueWhenUnassigned
          The value that the callback will be notified with if this value is not currently assigned to
          anything.
 */
IntegerValue.prototype.addValueObserver = function(callback, valueWhenUnassigned) {};
/* API Version - 3.1.2 */

/**
 * Defines the current state of a {@link MultiStateHardwareLight}. What this state means is entirely up to the
 * controller implementation.
 *
 * @apiNote The {@link Object#equals(Object)} method <b>MUST</b> be overridden to compare light states
         correctly.
 * @since API version 10
 */
function InternalHardwareLightState() {}

/**
 * The visual state of this light (used by Bitwig Studio to visualize the light when needed).
 *
 * @return {HardwareLightVisualState}
 */
InternalHardwareLightState.prototype.getVisualState = function() {};

/**
 * @param {Object} obj
 * @return {boolean}
 */
InternalHardwareLightState.prototype.equals = function(obj) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * A special kind of track that represents the master track in Bitwig Studio.
 *
 * @since API version 1
 */
function MasterTrack() {}

MasterTrack.prototype = new Track();
MasterTrack.prototype.constructor = MasterTrack;
/* API Version - 3.1.2 */

/**
 * Defines a block of memory. The memory can be read/written using a {@link ByteBuffer} provided by
 * {@link #createByteBuffer()}.
 *
 * @since API version 7
 */
function MemoryBlock() {}

/**
 * The size in bytes of this memory block.
 *
 * @return {int}
 */
MemoryBlock.prototype.size = function() {};

/**
 * Creates a {@link ByteBuffer} that can be used to read/write the data at this memory block.
 *
 * @return {java.nio.ByteBuffer}
 */
MemoryBlock.prototype.createByteBuffer = function() {};
/* API Version - 3.1.2 */

/**
 * This represent a 2D gradient.
 *
 * @link https://www.cairographics.org/manual/cairo-cairo-pattern-t.html#cairo-pattern-create-mesh
 * @newSince API version 6
 */
function MeshPattern() {}

MeshPattern.prototype = new Pattern();
MeshPattern.prototype.constructor = MeshPattern;

MeshPattern.prototype.beginPatch = function() {};

MeshPattern.prototype.endPatch = function() {};

/**
 * @param {double} x
 * @param {double} y
 */
MeshPattern.prototype.moveTo = function(x, y) {};

/**
 * @param {double} x
 * @param {double} y
 */
MeshPattern.prototype.lineTo = function(x, y) {};

/**
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 */
MeshPattern.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {};

/**
 * @param {int} corner
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 */
MeshPattern.prototype.setCornerColor = function(corner, red, green, blue) {};

/**
 * @param {int} corner
 * @param {double} red
 * @param {double} green
 * @param {double} blue
 * @param {double} alpha
 */
MeshPattern.prototype.setCornerColor = function(corner, red, green, blue, alpha) {};
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
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to setup handler functions for incoming MIDI messages from a specific
 * MIDI hardware.
 * 
 * <p>
 * Expressions can be used to generate matchers for various MIDI events that can then be used to update
 * hardware control states (see {@link MidiIn#createActionMatcher(String)} and {@link HardwareControl}).
 * 
 * <p>
 * The expression language supports these operators in the same way that C, Java, C++ do: +, -, *, /, %,
 * <<, >>, &&, ||, &, |, ^, <, <=, >, >=, ==, !=
 * 
 * <p>
 * The following variables are also defined for matching parts of the event:
 * <ul>
 * <li>status - Value of the status byte
 * <li>data1 - Value of the first data byte
 * <li>data2 - Value of the second data byte
 * <li>event - Integer value of the whole MIDI event with data2 byte in the least significant bits
 * </ul>
 * 
 * <p>
 * Integers can be represented in hex using same syntax as C. 'true' and 'false' keywords are also defined.
 *
 * @since API version 1
 */
function MidiIn() {}

/**
 * Registers a callback for receiving short (normal) MIDI messages on this MIDI input port.
 *
 * @param callback
          a callback function that receives three integer parameters: 1. the status byte 2. the data1
          value 2. the data2 value
@since API version 1
 */
MidiIn.prototype.setMidiCallback = function(callback) {};

/**
 * Registers a callback for receiving sysex MIDI messages on this MIDI input port.
 *
 * @param callback
          a callback function that takes a single string argument
@since API version 1
 */
MidiIn.prototype.setSysexCallback = function(callback) {};

/**
 * Creates a note input that appears in the track input choosers in Bitwig Studio. This method must be
 * called within the `init()` function of the script. The messages matching the given mask parameter will
 * be fed directly to the application, and are not processed by the script.
 *
 * @param name
          the name of the note input as it appears in the track input choosers in Bitwig Studio
 * @param masks
          a filter string formatted as hexadecimal value with `?` as wildcard. For example `80????`
          would match note-off on channel 1 (0). When this parameter is {@null}, a standard filter will
          be used to forward note-related messages on channel 1 (0).

          If multiple note input match the same MIDI event then they'll all receive the MIDI event, and
          if one of them does not consume events then the events wont' be consumed.
 * @return {NoteInput} the object representing the requested note input
 * @since API version 1
 */
MidiIn.prototype.createNoteInput = function(name, /*...*/masks) {};

/**
 * Creates a matcher that matches the absolute value of a MIDI CC message.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createAbsoluteCCValueMatcher = function(channel, controlNumber) {};

/**
 * Creates a matcher that matches the absolute value of a Poly AT message.
 *
 * @param {int} channel
 * @param {int} note
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createPolyAftertouchValueMatcher = function(channel, note) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using signed bit.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBitCCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using signed bit 2.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBit2CCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using bin offset.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeBinOffsetCCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using 2s complement.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelative2sComplementCCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Create a matcher that matches the absolute value of a MIDI pitch bend message.
 *
 * @param {int} channel
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createAbsolutePitchBendValueMatcher = function(channel) {};

/**
 * Creates an absolute value matcher that is defined by 2 separate MIDI events that have to occur in
 * sequence.
 * 
 * This can be used to get a much higher precision value that a single MIDI event would allow. Some
 * controllers for example will send 2 CC events for a single value.
 *
 * @param {AbsoluteHardwareValueMatcher} firstValueMatcher
 * @param {AbsoluteHardwareValueMatcher} secondValueMatcher
 * @param {boolean} areMostSignificantBitsInSecondEvent
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createSequencedValueMatcher = function(firstValueMatcher, secondValueMatcher, areMostSignificantBitsInSecondEvent) {};

/**
 * Creates a matcher that matches the absolute value of a MIDI CC message by using expressions to filter
 * and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createAbsoluteValueMatcher = function(eventExpression, valueExpression, valueBitCount) {};

/**
 * Creates a matcher that applies a relative adjustment when a MIDI event occurs matching an expression.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param relativeAdjustment
          The amount of relative adjustment that should be applied
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeValueMatcher = function(eventExpression, relativeAdjustment) {};

/**
 * Creates a matcher that matches the relative value (encoded as signed bit) of a MIDI CC message by using
 * expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBitValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using signed bit.
 *
 * @param valueMatcher
          Value matcher that matches the value that needs to be converted to a relative value
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBitValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value (encoded as signed bit 2) of a MIDI CC message by
 * using expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBit2ValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using signed bit 2.
 *
 * @param {AbsoluteHardwareValueMatcher} valueMatcher
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBit2ValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value (encoded as bin offset) of a MIDI CC message by using
 * expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeBinOffsetValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using bin offset.
 *
 * @param {AbsoluteHardwareValueMatcher} valueMatcher
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeBinOffsetValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value (encoded as 2s complement) of a MIDI CC message by
 * using expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelative2sComplementValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using 2s complement.
 *
 * @param {AbsoluteHardwareValueMatcher} valueMatcher
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelative2sComplementValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that recognizes an action when getting a MIDI CC event with a specific value.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} value
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createCCActionMatcher = function(channel, controlNumber, value) {};

/**
 * Creates a matcher that recognizes an action when getting a MIDI CC event regardless of the value.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createCCActionMatcher = function(channel, controlNumber) {};

/**
 * Creates a matcher that recognizes an action when a MIDI note on event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOnActionMatcher = function(channel, note) {};

/**
 * Creates a matcher that recognizes a note's on velocity when a MIDI note on event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOnVelocityValueMatcher = function(channel, note) {};

/**
 * Creates a matcher that recognizes a note's off velocity when a MIDI note off event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOffVelocityValueMatcher = function(channel, note) {};

/**
 * Creates a matcher that recognizes an action when a MIDI note off event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOffActionMatcher = function(channel, note) {};

/**
 * Creates a matcher that can match an action from a MIDI event. For example, pressing a button based on
 * input of a MIDI CC event.
 *
 * @param expression
          Expression returns true if the event matches
 * @return {HardwareActionMatcher}
 */
MidiIn.prototype.createActionMatcher = function(expression) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to send MIDI messages to a specific MIDI hardware.
 *
 * @since API version 1
 */
function MidiOut() {}

/**
 * Sends a MIDI message to the hardware device.
 *
 * @param status
          the status byte of the MIDI message, system messages are not permitted.
 * @param data1
          the data1 part of the MIDI message
 * @param data2
          the data2 part of the MIDI message
@since API version 1
 */
MidiOut.prototype.sendMidi = function(status, data1, data2) {};

/**
 * Sends a MIDI SysEx message to the hardware device.
 *
 * @param hexString
          the sysex message formatted as hexadecimal value string
@since API version 1
 */
MidiOut.prototype.sendSysex = function(hexString) {};

/**
 * Sends a MIDI SysEx message to the hardware device.
 *
 * @param hexString
          the sysex message formatted as hexadecimal value string
@since API version 1
 */
MidiOut.prototype.sendSysex = function(data) {};
/* API Version - 3.1.2 */

/**
 * An interface used to access various commands that can be performed on the Bitwig Studio mixer panel.<br/>
 * 
 * To get an instance of the mixer interface call {@link ControllerHost#createMixer}.
 *
 * @since API version 1
 */
function Mixer() {}

/**
 * Gets an object that allows to show/hide the meter section of the mixer panel. Observers can be
 * registered on the returned object for receiving notifications when the meter section switches between
 * shown and hidden state.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the meter section visibility
 * @since API version 1
 */
Mixer.prototype.isMeterSectionVisible = function() {};

/**
 * Gets an object that allows to show/hide the io section of the mixer panel. Observers can be registered
 * on the returned object for receiving notifications when the io section switches between shown and hidden
 * state.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the io section visibility
 * @since API version 1
 */
Mixer.prototype.isIoSectionVisible = function() {};

/**
 * Gets an object that allows to show/hide the sends section of the mixer panel. Observers can be
 * registered on the returned object for receiving notifications when the sends section switches between
 * shown and hidden state.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the sends section visibility
 * @since API version 1
 */
Mixer.prototype.isSendSectionVisible = function() {};

/**
 * Gets an object that allows to show/hide the clip launcher section of the mixer panel. Observers can be
 * registered on the returned object for receiving notifications when the clip launcher section switches
 * between shown and hidden state.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the clip launcher section visibility
 * @since API version 1
 */
Mixer.prototype.isClipLauncherSectionVisible = function() {};

/**
 * Gets an object that allows to show/hide the devices section of the mixer panel. Observers can be
 * registered on the returned object for receiving notifications when the devices section switches between
 * shown and hidden state.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the devices section visibility
 * @since API version 1
 */
Mixer.prototype.isDeviceSectionVisible = function() {};

/**
 * Gets an object that allows to show/hide the cross-fade section of the mixer panel. Observers can be
 * registered on the returned object for receiving notifications when the cross-fade section switches
 * between shown and hidden state.
 *
 * @return {SettableBooleanValue} a boolean value object that represents the cross-fade section visibility
 * @since API version 1
 */
Mixer.prototype.isCrossFadeSectionVisible = function() {};
/* API Version - 3.1.2 */

/**
 * This interface represents a modulation source in Bitwig Studio.
 *
 * @since API version 1
 */
function ModulationSource() {}

/**
 * Value which reports when the modulation source is in mapping mode.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ModulationSource.prototype.isMapping = function() {};

/**
 * Toggles the modulation source between mapping mode and normal control functionality.
 *
 * @since API version 1
 */
ModulationSource.prototype.toggleIsMapping = function() {};

/**
 * Value the reports the name of the modulation source.
 *
 * @return {StringValue}
 * @since API version 2
 */
ModulationSource.prototype.name = function() {};

/**
 * Value which reports if the modulation source is mapped to any destination(s).
 *
 * @return {BooleanValue}
 * @since API version 2
 */
ModulationSource.prototype.isMapped = function() {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * Represents a physical hardware light on a controller. The light has an on/off state and may also be
 * optionally colored.
 *
 * @since API version 10
 */
function MultiStateHardwareLight() {}

MultiStateHardwareLight.prototype = new HardwareLight();
MultiStateHardwareLight.prototype.constructor = MultiStateHardwareLight;

/**
 * Value that represents the current state of this light as an integer. The interpretation of this value is
 * entirely up to the implementation.
 *
 * @return {ObjectHardwareProperty<InternalHardwareLightState>}
 */
MultiStateHardwareLight.prototype.state = function() {};

/**
 * Sets a function that can be used to convert a color to the closest possible state representing that
 * color. Once this function has been provided it is possible to then use the convenient
 * {@link #setColor(Color)} and {@link #setColorSupplier(Supplier)} methods.
 *
 * @param {java.util.function.Function<Color,InternalHardwareLightState>} function
 */
MultiStateHardwareLight.prototype.setColorToStateFunction = function(function) {};

/**
 * Tries to set this light's state to be the best state to represent the supplied {@link Color}. For this
 * to be used you must first call {@link #setColorToStateFunction(IntFunction)}.
 *
 * @param {Color} color
 */
MultiStateHardwareLight.prototype.setColor = function(color) {};

/**
 * Tries to set this light's state to be the best state to represent the value supplied by the
 * {@link Supplier}. For this to be used you must first call {@link #setColorToStateFunction(IntFunction)}.
 *
 * @param {java.util.function.Supplier<Color>} colorSupplier
 */
MultiStateHardwareLight.prototype.setColorSupplier = function(colorSupplier) {};

/**
 * @param {Color} color
 * @return {InternalHardwareLightState}
 */
MultiStateHardwareLight.prototype.getBestLightStateForColor = function(color) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

function NoArgsCallback() {}

NoArgsCallback.prototype = new Callback();
NoArgsCallback.prototype.constructor = NoArgsCallback;

NoArgsCallback.prototype.call = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface implement note input functionality used for recording notes in Bitwig Studio
 * and for playing the instruments in tracks on hardware keyboards. In Bitwig Studio the note inputs are shown
 * in the input choosers of Bitwig Studio tracks.
 *
 * @since API version 1
 */
function NoteInput() {}

/**
 * Specifies if the note input should consume MIDI notes, or in other words if it should prevent forwarding
 * incoming notes to the MIDI callback registered in {@link MidiIn#setMidiCallback}. This setting is `true`
 * by default.
 *
 * @param shouldConsumeEvents
          `true` if note events should be consumed, `false` of the events should be additionally sent to
          the callback registered via {@link MidiIn#setMidiCallback}
 * @since API version 1
 */
NoteInput.prototype.setShouldConsumeEvents = function(shouldConsumeEvents) {};

/**
 * Specifies a translation table which defines the actual key value (0-127) of notes arriving in Bitwig
 * Studio for each note key potentially received from the hardware. This is used for note-on/off and
 * polyphonic aftertouch events. Specifying a value of `-1` for a key means that notes with the key value
 * will be filtered out.
 * 
 * Typically this method is used to implement transposition or scale features in controller scripts. By
 * default an identity transform table is configured, which means that all incoming MIDI notes keep their
 * original key value when being sent into Bitwig Studio.
 *
 * @param table
          an array which should contain 128 entries. Each entry should be a note value in the range
          [0..127] or -1 in case of filtering.
 * @since API version 1
 */
NoteInput.prototype.setKeyTranslationTable = function(table) {};

/**
 * Specifies a translation table which defines the actual velocity value (0-127) of notes arriving in
 * Bitwig Studio for each note velocity potentially received from the hardware. This is used for note-on
 * events only.
 * 
 * Typically this method is used to implement velocity curves or fixed velocity mappings in controller
 * scripts. By default an identity transform table is configured, which means that all incoming MIDI notes
 * keep their original velocity when being sent into Bitwig Studio.
 *
 * @param table
          an array which should contain 128 entries. Each entry should be a note value in the range
          [0..127] or -1 in case of filtering.
 * @since API version 1
 */
NoteInput.prototype.setVelocityTranslationTable = function(table) {};

/**
 * Assigns polyphonic aftertouch MIDI messages to the specified note expression. Multi-dimensional control
 * is possible by calling this method several times with different MIDI channel parameters. If a key
 * translation table is configured by calling {@link #setKeyTranslationTable}, that table is used for
 * polyphonic aftertouch as well.
 *
 * @param channel
          the MIDI channel to map, range [0..15]
 * @param expression
          the note-expression to map for the given MIDI channel
 * @param pitchRange
          the pitch mapping range in semitones, values must be in the range [1..24]. This parameter is
          ignored for non-pitch expressions.
@since API version 1
 */
NoteInput.prototype.assignPolyphonicAftertouchToExpression = function(channel, expression, pitchRange) {};

/**
 * Enables use of Expressive MIDI mode. (note-per-channel)
 *
 * @param useExpressiveMidi
          enabled/disable the MPE mode for this note-input
 * @param baseChannel
          which channel (must be either 0 or 15) which is used as the base for this note-input
 * @param pitchBendRange
          initial pitch bend range used
 */
NoteInput.prototype.setUseExpressiveMidi = function(useExpressiveMidi, baseChannel, pitchBendRange) {};

/**
 * Sends MIDI data directly to the note input. This will bypass both the event filter and translation
 * tables. The MIDI channel of the message will be ignored.
 *
 * @param status
          the status byte of the MIDI message
 * @param data0
          the data0 part of the MIDI message
 * @param data1
          the data1 part of the MIDI message
 * @since API version 1
 */
NoteInput.prototype.sendRawMidiEvent = function(status, data0, data1) {};

/**
 * Creates a proxy object to the NoteInput's NoteLatch component.
 *
 * @return {NoteLatch}
 * @since API version 10
 */
NoteInput.prototype.noteLatch = function() {};

/**
 * Creates a proxy object to the NoteInput's Arpeggiator component.
 *
 * @return {Arpeggiator}
 * @since API version 10
 */
NoteInput.prototype.arpeggiator = function() {};

/**
 * Should this note input be included in the "All Inputs" note source?
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
NoteInput.prototype.includeInAllInputs = function() {};


/**
 * An enum defining the note expressions available in Bitwig Studio, used for the expression parameter of
 * {@link #assignPolyphonicAftertouchToExpression}.
 *
 * @since API version 1
 */
NoteExpression = {
	NONE: 0,
	PITCH_DOWN: 1,
	PITCH_UP: 2,
	GAIN_DOWN: 3,
	GAIN_UP: 4,
	PAN_LEFT: 5,
	PAN_RIGHT: 6,
	TIMBRE_DOWN: 7,
	TIMBRE_UP: 8,
};/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to access the notes for a specific note key.
 *
 * @since API version 1
 */
function NoteLane() {}

/**
 * Value which represents the id of this lane. is either the note pitch represented by this lane, or in
 * case of audio a lane index (currently always 0 in that case).
 *
 * @return {IntegerValue}
 * @since API version 2
 */
NoteLane.prototype.noteLaneId = function() {};

/**
 * Value  that reports the name of the note lane. Typically the name of a note lane is
 * either equal to the title of an associated drum pad, or reflects the pitch of the note, e.g. "C#3".
 *
 * @return {StringValue}
 */
NoteLane.prototype.name = function() {};

/**
 * Value the color of the note lane. By default the reported color will be the
 * track color, or in case an associated drum pad has a custom color it will be the color of that pad
 *
 * @return {SettableColorValue}
 */
NoteLane.prototype.color = function() {};

/**
 * Plays a note with the key of the note lane and the provided velocity parameter.
 *
 * @param velocity
          the velocity the note should be played with
 * @since API version 1
 */
NoteLane.prototype.play = function(velocity) {};
/* API Version - 3.1.2 */

/**
 * Creates a proxy object to the NoteInput's NoteLatch component.
 *
 * @since API version 10
 */
function NoteLatch() {}

NoteLatch.prototype = new ObjectProxy();
NoteLatch.prototype.constructor = NoteLatch;

/**
 * Returns an object to enable or disable the note latch component.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
NoteLatch.prototype.isEnabled = function() {};

/**
 * Returns an object to configure the note latch mode.
 * Possible values:
 *  - chord
 *  - toggle
 *  - velocity
 *
 * @return {SettableEnumValue}
 * @since API version 10
 */
NoteLatch.prototype.mode = function() {};

/**
 * Only one note at a time.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
NoteLatch.prototype.mono = function() {};

/**
 * The velocity threshold used by the velocity latch mode.
 *
 * @return {SettableIntegerValue}
 * @since API version 10
 */
NoteLatch.prototype.velocityThreshold = function() {};

/**
 * How many notes are being latched.
 *
 * @return {IntegerValue}
 * @since API version 10
 */
NoteLatch.prototype.activeNotes = function() {};

/**
 * Release all notes being latched.
 *
 * @since API version 10
 */
NoteLatch.prototype.releaseNotes = function() {};
/* API Version - 3.1.2 */

function NotePlaybackCallback() {}

NotePlaybackCallback.prototype = new Callback();
NotePlaybackCallback.prototype.constructor = NotePlaybackCallback;

/**
 * @param {boolean} isNoteOn
 * @param {int} key
 * @param {float} velocity
 */
NotePlaybackCallback.prototype.notePlaybackEventOccurred = function(isNoteOn, key, velocity) {};
/* API Version - 3.1.2 */

function NoteStepChangedCallback() {}

NoteStepChangedCallback.prototype = new Callback();
NoteStepChangedCallback.prototype.constructor = NoteStepChangedCallback;

/**
 * @param {NoteStep} noteStep
 */
NoteStepChangedCallback.prototype.noteStepChanged = function(noteStep) {};
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
};/* API Version - 3.1.2 */

/**
 * Bitwig Studio supports automatic visual feedback from controllers that shows up as popup notifications. For
 * example when the selected track or the current device preset was changed on the controller, these
 * notifications are shown, depending on the configuration.
 * 
 * It depends both on the users preference and the capabilities of the controller hardware if a certain
 * notification should be shown. This interface provides functions for enabling/disabling the various kinds of
 * automatic notifications from the hardware point of view. Typically, controllers that include an advanced
 * display don't need to show many notifications additionally on screen. For other controllers that do not
 * include a display it might be useful to show all notifications. By default all notifications are disabled.
 * 
 * In addition, the user can enable or disable all notifications the have been enabled using this interface in
 * the preferences dialog of Bitwig Studio.
 *
 * @since API version 1
 */
function NotificationSettings() {}

/**
 * Returns an object that reports if user notifications are enabled and that allows to enable/disable user
 * notifications from the control surface. If user notifications are disabled, no automatic notifications
 * will be shown in the Bitwig Studio user interface. If user notifications are enabled, all automatic
 * notifications will be shown that are enabled using the methods of this interface.
 *
 * @return {SettableBooleanValue} a boolean value object
 * @since API version 1
 */
NotificationSettings.prototype.getUserNotificationsEnabled = function() {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowSelectionNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowChannelSelectionNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowTrackSelectionNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowDeviceSelectionNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowDeviceLayerSelectionNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowPresetNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowMappingNotifications = function(shouldShowNotifications) {};

/**
 * Specifies if user notification related to selection changes should be shown. Please note that this
 * setting only applies when user notifications are enabled in general, otherwise no notification are
 * shown. By default this setting is `false`.
 *
 * @param shouldShowNotifications
          `true` in case selection notifications should be shown, `false` otherwise.
 * @since API version 1
 */
NotificationSettings.prototype.setShouldShowValueNotifications = function(shouldShowNotifications) {};
/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function ObjectArrayValue() {}

ObjectArrayValue.prototype = new Value();
ObjectArrayValue.prototype.constructor = ObjectArrayValue;

/**
 * @return {ObjectType[]}
 * @since API version 2
 */
ObjectArrayValue.prototype.get = function() {};

/**
 * @param {int} index
 * @return {ObjectType}
 * @since API version 2
 */
ObjectArrayValue.prototype.get = function(index) {};

/**
 * @return {boolean}
 * @since API version 7
 */
ObjectArrayValue.prototype.isEmpty = function() {};
/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware.
 *
 * @since API version 10
 */
function ObjectHardwareProperty() {}

ObjectHardwareProperty.prototype = new HardwareProperty();
ObjectHardwareProperty.prototype.constructor = ObjectHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {T}
 */
ObjectHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {T}
 */
ObjectHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<? extends T>} sendValueConsumer
 */
ObjectHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {T} value
 */
ObjectHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link BooleanSupplier} that supplies the latest value.
 *
 * @param {java.util.function.Supplier<? extends T>} supplier
 */
ObjectHardwareProperty.prototype.setValueSupplier = function(supplier) {};
/* API Version - 3.1.2 */

/**
 * Interface for an object that acts as a proxy for the actual object in Bitwig Studio (for example a track, a
 * device etc).
 *
 * @since API version 2
 */
function ObjectProxy() {}

ObjectProxy.prototype = new Subscribable();
ObjectProxy.prototype.constructor = ObjectProxy;

/**
 * Returns a value object that indicates if the object being proxied exists, or if it has content.
 *
 * @return {BooleanValue}
 */
ObjectProxy.prototype.exists = function() {};

/**
 * Creates a {@link BooleanValue} that determines this proxy is considered equal to another proxy. For this
 * to be the case both proxies need to be proxying the same target object.
 *
 * @param {ObjectProxy} other
 * @return {BooleanValue}
 * @since API version 3
 */
ObjectProxy.prototype.createEqualsValue = function(other) {};
/* API Version - 3.1.2 */

function ObjectValueChangedCallback() {}

ObjectValueChangedCallback.prototype = new ValueChangedCallback();
ObjectValueChangedCallback.prototype.constructor = ObjectValueChangedCallback;

/**
 * @param {ValueType} newValue
 */
ObjectValueChangedCallback.prototype.valueChanged = function(newValue) {};
/* API Version - 3.1.2 */

/**
 * Defines a simple hardware light that only has an on and off state.
 *
 * @since API version 10
 */
function OnOffHardwareLight() {}

OnOffHardwareLight.prototype = new HardwareLight();
OnOffHardwareLight.prototype.constructor = OnOffHardwareLight;

/**
 * Property that determines if this light is on or not.
 *
 * @return {BooleanHardwareProperty}
 */
OnOffHardwareLight.prototype.isOn = function() {};

/**
 * @param {Color} color
 */
OnOffHardwareLight.prototype.setOnColor = function(color) {};

/**
 * @param {Color} color
 */
OnOffHardwareLight.prototype.setOffColor = function(color) {};

/**
 * @param {HardwareLightVisualState} state
 */
OnOffHardwareLight.prototype.setOnVisualState = function(state) {};

/**
 * @param {HardwareLightVisualState} state
 */
OnOffHardwareLight.prototype.setOffVisualState = function(state) {};

/**
 * @param {java.util.function.Function<java.lang.Boolean,HardwareLightVisualState>} function
 */
OnOffHardwareLight.prototype.setStateToVisualStateFuncation = function(function) {};
/* API Version - 3.1.2 */

/**
 * An OSC address space.
 * 
 * It contains the root OscContainer.
 *
 * @since API version 5
 */
function OscAddressSpace() {}

/**
 * Register all the methods annotated with @{@link OscMethod} from object.
 * Also if a method is annotated with @{@link OscNode}, this method will be called and the returned object's method
 * will be registered.
 *
 * @param {string} addressPrefix
 * @param {Object} object
 * @throws OscInvalidArgumentTypeException
 */
OscAddressSpace.prototype.registerObjectMethods = function(addressPrefix, object) {};

/**
 * Low level way to register an Osc Method.
 *
 * @param {string} address The address to register the method at
 * @param {string} typeTagPattern The globing pattern used to match the type tag. Pass "*" to match anything.
 * @param {string} desc The method description.
 * @param {OscMethodCallback} callback The OSC Method call handler.
 */
OscAddressSpace.prototype.registerMethod = function(address, typeTagPattern, desc, callback) {};

/**
 * This method will be called if no registered OscMethod could handle incoming OscPacket.
 *
 * @param {OscMethodCallback} callback
 */
OscAddressSpace.prototype.registerDefaultMethod = function(callback) {};

/**
 * Should the address spaces log the messages it dispatches?
 * Default is false.
 *
 * @param {boolean} shouldLogMessages
 */
OscAddressSpace.prototype.setShouldLogMessages = function(shouldLogMessages) {};

/**
 * This gives a display name for this address space.
 * It is useful if you have multiple address space to identify them when we generate the documentation.
 *
 * @param {string} name
 */
OscAddressSpace.prototype.setName = function(name) {};
/* API Version - 3.1.2 */

/**
 * An OSC Bundle.
 *
 * @since API version 5
 */
function OscBundle() {}

OscBundle.prototype = new OscPacket();
OscBundle.prototype.constructor = OscBundle;

/**
 * @return {long}
 */
OscBundle.prototype.getNanoseconds = function() {};

/**
 * @return {java.util.List<OscPacket>}
 */
OscBundle.prototype.getPackets = function() {};
/* API Version - 3.1.2 */

/**
 * This interface lets you send OscMessage through an connection which can be via Tcp, Udp, or whatever.
 * 
 * OscPackets are sent when all the startBundle() have a matching endBundle().
 * If you call sendMessage() with startBundle() before, then the message will be sent directly.
 * 
 * Our maximum packet size is 64K.
 *
 * @since API version 5
 */
function OscConnection() {}

/**
 * Starts an OscBundle.
 *
 * @throws IOException
 */
OscConnection.prototype.startBundle = function() {};

/**
 * Supported object types:
 * - Integer for int32
 * - Long for int64
 * - Float for float
 * - Double for double
 * - null for nil
 * - Boolean for true and false
 * - String for string
 * - byte[] for blob
 *
 * @param {string} address
 * @param {Object} args
 * @throws IOException
 * @throws OscInvalidArgumentTypeException
 */
OscConnection.prototype.sendMessage = function(address, /*...*/args) {};

/**
 * Finishes the previous bundle, and if it was not inside an other bundle, it will send the message
 * directly.
 *
 * @throws IOException
 */
OscConnection.prototype.endBundle = function() {};
/* API Version - 3.1.2 */

function OscInvalidArgumentTypeException() {}
/* API Version - 3.1.2 */

function OscIOException() {}
/* API Version - 3.1.2 */

/**
 * An OSC message.
 *
 * @since API version 5
 */
function OscMessage() {}

OscMessage.prototype = new OscPacket();
OscMessage.prototype.constructor = OscMessage;

/**
 * @return {string}
 */
OscMessage.prototype.getAddressPattern = function() {};

/**
 * @return {string}
 */
OscMessage.prototype.getTypeTag = function() {};

/**
 * @return {java.util.List<java.lang.Object>}
 */
OscMessage.prototype.getArguments = function() {};

/**
 * @param {int} index
 * @return {string}
 */
OscMessage.prototype.getString = function(index) {};

/**
 * @param {int} index
 * @return {byte[]}
 */
OscMessage.prototype.getBlob = function(index) {};

/**
 * @param {int} index
 * @return {java.lang.Integer}
 */
OscMessage.prototype.getInt = function(index) {};

/**
 * @param {int} index
 * @return {java.lang.Long}
 */
OscMessage.prototype.getLong = function(index) {};

/**
 * @param {int} index
 * @return {java.lang.Float}
 */
OscMessage.prototype.getFloat = function(index) {};

/**
 * @param {int} index
 * @return {java.lang.Double}
 */
OscMessage.prototype.getDouble = function(index) {};

/**
 * @param {int} index
 * @return {java.lang.Boolean}
 */
OscMessage.prototype.getBoolean = function(index) {};
/* API Version - 3.1.2 */

function OscMethodCallback() {}

/**
 * @param {OscConnection} source
 * @param {OscMessage} message
 */
OscMethodCallback.prototype.handle = function(source, message) {};
/* API Version - 3.1.2 */

function OscMethod() {}

/**
 * @return {string}
 */
OscMethod.prototype.address = function() {};

/**
 * @return {string}
 */
OscMethod.prototype.typeTagPattern = function() {};

/**
 * @return {string}
 */
OscMethod.prototype.desc = function() {};

/**
 * @return {String[]}
 */
OscMethod.prototype.obsoleteAddresses = function() {};
/* API Version - 3.1.2 */

/**
 * Interface to create Osc related object.
 *
 * @since API version 5
 */
function OscModule() {}

/**
 * Creates a new OscAddressSpace.
 * 
 * In short the OscAddressSpace dispatches the incoming messages to services.
 * An OscAddressSpace is an OscService.
 *
 * @return {OscAddressSpace}
 * @since API version 5
 */
OscModule.prototype.createAddressSpace = function() {};

/**
 * Creates a new OSC Server.
 *
 * @param {int} port
 * @param {OscAddressSpace} addressSpace
 * @since API version 5
 */
OscModule.prototype.createUdpServer = function(port, addressSpace) {};

/**
 * Creates a new OSC Server.
 * This server is not started yet, you'll have to start it by calling server.start(port);
 * Use this method if the port is not known during the initialization (coming from a setting)
 * or if the port number can change at runtime.
 *
 * @param {OscAddressSpace} addressSpace Use {@link #createAddressSpace()}
 * @return {OscServer} a new OscServer
 * @since API version 10
 */
OscModule.prototype.createUdpServer = function(addressSpace) {};

/**
 * Tries to connect to an OscServer.
 *
 * @param {string} host
 * @param {int} port
 * @param {OscAddressSpace} addressSpace
 * @return {OscConnection} a new OscConnection
 * @since API version 5
 */
OscModule.prototype.connectToUdpServer = function(host, port, addressSpace) {};
/* API Version - 3.1.2 */

function OscNode() {}

/**
 * @return {string}
 */
OscNode.prototype.prefix = function() {};
/* API Version - 3.1.2 */

/**
 * Base class for OscPackets.
 *
 * @since API version 5
 */
function OscPacket() {}

/**
 * If the message was part of a bundle, get a pointer back to it.
 * If not, this methods returns null.
 *
 * @return {OscBundle}
 */
OscPacket.prototype.getParentBundle = function() {};
/* API Version - 3.1.2 */

function OscPacketSizeExceededException() {}
/* API Version - 3.1.2 */

/**
 * @since API version 10
 */
function OscServer() {}

/**
 * Starts or restarts the server and restarts it on the given port.
 *
 * @param {int} port
 * @throws IOException
 * @since API version 10
 */
OscServer.prototype.start = function(port) {};
/* API Version - 3.1.2 */

/**
 * A pipe that can be used to write data.
 *
 * @since API version 7
 */
function OutputPipe() {}

OutputPipe.prototype = new Pipe();
OutputPipe.prototype.constructor = OutputPipe;

/**
 * Requests to write some data to this pipe in an asynchronous way (the caller is not blocked). Once some
 * data has been written the callback will be notified on the controller's thread.
 *
 * @param data
          A {@link MemoryBlock} containing the data to be written.
 * @param callback
          A callback that is notified on the controller's thread when the write has completed.
 * @param timeoutInMs
          A timeout in milliseconds that will result in an error and termination of the controller if
          the write does not happen in this time. For infinite timeout use 0.
 */
OutputPipe.prototype.writeAsync = function(data, callback, timeoutInMs) {};

/**
 * @param {MemoryBlock} data
 * @param {int} timeoutInMs
 * @return {int}
 */
OutputPipe.prototype.write = function(data, timeoutInMs) {};
/* API Version - 3.1.2 */

/**
 * Defines a bank of parameters.
 *
 * @since API version 2
 */
function ParameterBank() {}

/**
 * Gets the number of slots that these remote controls have.
 *
 * @return {int}
 * @since API version 2
 */
ParameterBank.prototype.getParameterCount = function() {};

/**
 * Returns the parameter at the given index within the bank.
 *
 * @param indexInBank
          the parameter index within this bank. Must be in the range [0..getParameterCount()-1].
 * @return {Parameter} the requested parameter
 * @since API version 2
 */
ParameterBank.prototype.getParameter = function(indexInBank) {};

/**
 * Informs the application how to display the controls during the on screen notification.
 *
 * @param {HardwareControlType} type which kind of hardware control is used for this bank (knobs/encoders/sliders)
 * @param {int} columns How wide this section is in terms of layout (4/8/9)
 * @since API version 7
 */
ParameterBank.prototype.setHardwareLayout = function(type, columns) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent ranged parameters that can be controlled with automation in Bitwig
 * Studio.
 *
 * @since API version 1
 */
function Parameter() {}

Parameter.prototype = new SettableRangedValue();
Parameter.prototype.constructor = Parameter;

/**
 * Gets the current value of this parameter.
 *
 * @return {SettableRangedValue}
 * @since API version 2
 */
Parameter.prototype.value = function() {};

/**
 * Gets the modulated value of this parameter.
 *
 * @return {RangedValue}
 * @since API version 2
 */
Parameter.prototype.modulatedValue = function() {};

/**
 * The name of the parameter.
 *
 * @return {StringValue}
 * @since API version 2
 */
Parameter.prototype.name = function() {};

/**
 * Resets the value to its default.
 *
 * @since API version 1
 */
Parameter.prototype.reset = function() {};

/**
 * Touch (or un-touch) the value for automation recording.
 *
 * @param isBeingTouched
          `true` for touching, `false` for un-touching
 * @since API version 1
 */
Parameter.prototype.touch = function(isBeingTouched) {};

/**
 * Specifies if this value should be indicated as mapped in Bitwig Studio, which is visually shown as
 * colored dots or tinting on the parameter controls.
 *
 * @param shouldIndicate
          `true` in case visual indications should be shown in Bitwig Studio, `false` otherwise
 * @since API version 1
 */
Parameter.prototype.setIndication = function(shouldIndicate) {};

/**
 * Specifies a label for the mapped hardware parameter as shown in Bitwig Studio, for example in menu items
 * for learning controls.
 *
 * @param label
          the label to be shown in Bitwig Studio
 * @since API version 1
 */
Parameter.prototype.setLabel = function(label) {};

/**
 * Restores control of this parameter to automation playback.
 *
 * @since API version 1
 */
Parameter.prototype.restoreAutomationControl = function() {};
/* API Version - 3.1.2 */

/**
 * @newSince API version 6
 */
function Path() {}
/* API Version - 3.1.2 */

/**
 * Abstract class for patterns (gradient, mesh gradient, ...)
 *
 * @newSince API version 6
 */
function Pattern() {}
/* API Version - 3.1.2 */

/**
 * Represents a physical piano keyboard on a {@link HardwareSurface}.
 */
function PianoKeyboard() {}

PianoKeyboard.prototype = new HardwareElement();
PianoKeyboard.prototype.constructor = PianoKeyboard;

/**
 * The {@link MidiIn} where this piano keyboard would send key presses. If set this allows the simulator
 * for the hardware to simulate the note input.
 *
 * @param {MidiIn} midiIn
 */
PianoKeyboard.prototype.setMidiIn = function(midiIn) {};

/**
 * @param {int} channel
 */
PianoKeyboard.prototype.setChannel = function(channel) {};

/**
 * @param {boolean} value
 */
PianoKeyboard.prototype.setIsVelocitySensitive = function(value) {};

/**
 * @param {boolean} value
 */
PianoKeyboard.prototype.setSupportsPolyAftertouch = function(value) {};
/* API Version - 3.1.2 */

/**
 * Cursor clip that can act independently from the user's clip selection if desired by being pinned in the
 * controller settings panel.
 *
 * @since API version 10
 */
function PinnableCursorClip() {}

PinnableCursorClip.prototype = new CursorClip();
PinnableCursorClip.prototype.constructor = PinnableCursorClip;
/* API Version - 3.1.2 */

/**
 * Cursor that can be pinned to the current device or follow the selection.
 *
 * @since API version 2
 */
function PinnableCursorDevice() {}

PinnableCursorDevice.prototype = new CursorDevice();
PinnableCursorDevice.prototype.constructor = PinnableCursorDevice;
/* API Version - 3.1.2 */

/**
 * Interface that defines a cursor that can be "pinned".
 *
 * @since API version 2
 */
function PinnableCursor() {}

PinnableCursor.prototype = new Cursor();
PinnableCursor.prototype.constructor = PinnableCursor;

/**
 * Determines if this cursor is currently pinned or not. If the cursor is pinned then it won't follow the
 * selection the user makes in the application.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
PinnableCursor.prototype.isPinned = function() {};
/* API Version - 3.1.2 */

/**
 * A pipe represents a communication channel with some other hardware device or network service. Pipes are
 * opened and closed by Bitwig Studio automatically and exist for the entire lifetime of a controller. If
 * communication is lost on a specific pipe (for example the user unplugs a USB device) then the controller
 * will exit and the user will be notified.
 * 
 * A controller defines which pipes it wants to establish for communication using a
 * {@link HardwareDeviceMatcher}.
 *
 * @see ControllerExtensionDefinition#listHardwareDevices(HardwareDeviceMatcherList)
 * @since API version 7
 */
function Pipe() {}
/* API Version - 3.1.2 */

PlatformType = {
	WINDOWS: 0,
	LINUX: 1,
	MAC: 2,
};/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function PlayingNoteArrayValue() {}

PlayingNoteArrayValue.prototype = new ObjectArrayValue();
PlayingNoteArrayValue.prototype.constructor = PlayingNoteArrayValue;

/**
 * @param {int} note
 * @return {boolean}
 */
PlayingNoteArrayValue.prototype.isNotePlaying = function(note) {};
/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function PlayingNote() {}

/**
 * @return {int}
 * @since API version 2
 */
PlayingNote.prototype.pitch = function() {};

/**
 * @return {int}
 * @since API version 2
 */
PlayingNote.prototype.velocity = function() {};
/* API Version - 3.1.2 */

/**
 * Object that represents the popup browser in Bitwig Studio.
 *
 * @since API version 2
 */
function PopupBrowser() {}

PopupBrowser.prototype = new ObjectProxy();
PopupBrowser.prototype.constructor = PopupBrowser;

/**
 * The title of the popup browser.
 *
 * @return {StringValue}
 * @since API version 2
 */
PopupBrowser.prototype.title = function() {};

/**
 * Value that reports the possible content types that can be inserted by the popup browser. These are
 * represented by the tabs in Bitwig Studio's popup browser.
 * 
 * (e.g "Device", "Preset", "Sample" etc.)
 *
 * @return {StringArrayValue}
 * @since API version 2
 */
PopupBrowser.prototype.contentTypeNames = function() {};

/**
 * Value that represents the selected content type.
 *
 * @return {StringValue}
 * @since API version 2
 */
PopupBrowser.prototype.selectedContentTypeName = function() {};

/**
 * Value that represents the index of the selected content type within the content types supported.
 *
 * @return {SettableIntegerValue}
 * @since API version 2
 */
PopupBrowser.prototype.selectedContentTypeIndex = function() {};

/**
 * The smart collections column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.smartCollectionColumn = function() {};

/**
 * The location column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.locationColumn = function() {};

/**
 * The device column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.deviceColumn = function() {};

/**
 * The category column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.categoryColumn = function() {};

/**
 * The tag column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.tagColumn = function() {};

/**
 * The device type column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.deviceTypeColumn = function() {};

/**
 * The file type column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.fileTypeColumn = function() {};

/**
 * The creator column of the browser.
 *
 * @return {BrowserFilterColumn}
 * @since API version 2
 */
PopupBrowser.prototype.creatorColumn = function() {};

/**
 * Column that represents the results of the search.
 *
 * @return {BrowserResultsColumn}
 * @since API version 2
 */
PopupBrowser.prototype.resultsColumn = function() {};

/**
 * Value that indicates if the browser is able to audition material in place while browsing.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
PopupBrowser.prototype.canAudition = function() {};

/**
 * Value that decides if the browser is currently auditioning material in place while browsing or not.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
PopupBrowser.prototype.shouldAudition = function() {};

/**
 * Selects the next file.
 *
 * @since API version 2
 */
PopupBrowser.prototype.selectNextFile = function() {};

/**
 * Selects the previous file.
 *
 * @since API version 2
 */
PopupBrowser.prototype.selectPreviousFile = function() {};

/**
 * Selects the first file.
 *
 * @since API version 2
 */
PopupBrowser.prototype.selectFirstFile = function() {};

/**
 * Selects the last file.
 *
 * @since API version 2
 */
PopupBrowser.prototype.selectLastFile = function() {};

/**
 * Cancels the popup browser.
 *
 * @since API version 2
 */
PopupBrowser.prototype.cancel = function() {};

/**
 * @return {HardwareActionBindable}
 */
PopupBrowser.prototype.cancelAction = function() {};

/**
 * Commits the selected item in the popup browser.
 *
 * @since API version 2
 */
PopupBrowser.prototype.commit = function() {};

/**
 * @return {HardwareActionBindable}
 */
PopupBrowser.prototype.commitAction = function() {};
/* API Version - 3.1.2 */

/**
 * This interface is used to store custom controller settings into the Bitwig Studio preferences. The settings
 * are shown to the user in the controller preferences dialog of Bitwig Studio.
 *
 * @since API version 1
 */
function Preferences() {}

Preferences.prototype = new Settings();
Preferences.prototype.constructor = Preferences;
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */
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
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent numeric values that have an upper and lower limit.
 *
 * @since API version 1
 */
function RangedValue() {}

RangedValue.prototype = new Value();
RangedValue.prototype.constructor = RangedValue;

/**
 * The current value normalized between 0..1 where 0 represents the minimum value and 1 the maximum.
 *
 * @return {double}
 * @since API version 2
 */
RangedValue.prototype.get = function() {};

/**
 * Gets the current value.
 *
 * @return {double}
 * @since API version 2
 */
RangedValue.prototype.getRaw = function() {};

/**
 * @return {double}
 */
RangedValue.prototype.getAsDouble = function() {};

/**
 * Value that represents a formatted text representation of the value whenever the value changes.
 *
 * @return {StringValue}
 * @since API version 2
 */
RangedValue.prototype.displayedValue = function() {};

/**
 * Adds an observer which receives the normalized value of the parameter as an integer number within the
 * range [0..range-1].
 *
 * @param range
          the range used to scale the value when reported to the callback
 * @param callback
          a callback function that receives a single double parameter
 * @since API version 1
 */
RangedValue.prototype.addValueObserver = function(range, callback) {};

/**
 * Add an observer which receives the internal raw of the parameter as floating point.
 *
 * @param callback
          a callback function that receives a single numeric parameter with double precision.
 * @since API version 1
 */
RangedValue.prototype.addRawValueObserver = function(callback) {};
/* API Version - 3.1.2 */

/**
 * Something that can be bound to an {@link RelativeHardwareControl} and can respond to the user input (such
 * as user turning an encoder left or right) in a meaningful way.
 *
 * @since API version 10
 */
function RelativeHardwarControlBindable() {}

RelativeHardwarControlBindable.prototype = new HardwareBindable();
RelativeHardwarControlBindable.prototype.constructor = RelativeHardwarControlBindable;

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {RelativeHardwareControl} hardwareControl
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwarControlBindable.prototype.addBinding = function(hardwareControl) {};

/**
 * Binds this target to the supplied hardware control so that when the user moves the hardware control this
 * target will respond in a meaningful way.
 * 
 * When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
 * it.
 *
 * @param {RelativeHardwareControl} hardwareControl
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwarControlBindable.prototype.addBindingWithSensitivity = function(hardwareControl, sensitivity) {};
/* API Version - 3.1.2 */

/**
 * Represents a binding from a {@link RelativeHardwareControl} to some target.
 *
 * @since API version 10
 */
function RelativeHardwareControlBinding() {}

RelativeHardwareControlBinding.prototype = new HardwareBindingWithSensitivity();
RelativeHardwareControlBinding.prototype.constructor = RelativeHardwareControlBinding;
/* API Version - 3.1.2 */

/**
 * Represents a hardware control that can input a relative value (for example, a relative encoder knob).
 * 
 * A relative adjustment is positive value when being increased and a negative when being decreased. The
 * relative amount represents the amount of adjustment made. In order to have relative hardware controls work
 * with the same level of sensitivity the relative amount should be +1.0 if the user were to rotate a knob one
 * full rotation (defined as roughly the same amount of rotation as that of an absolute knob to go from 0 to
 * 1) to the right.
 * 
 * <p>
 * {@link RelativeHardwareControl}s can also be used to step through items (e.g in a list, or an enum
 * parameter). In this case the {@link #getStepSize()} is used to determine how far the knob has to be rotated
 * in order to increment by one step. For example, if a full rotation of a knob should step through 10 items
 * you would set the step size to 1.0 / 10 (i.e 0.1).
 *
 * @since API version 10
 */
function RelativeHardwareControl() {}

RelativeHardwareControl.prototype = new ContinuousHardwareControl();
RelativeHardwareControl.prototype.constructor = RelativeHardwareControl;

/**
 * Sets the sensitivity of this hardware control. The default sensitivity is 1. This value is a multiplied
 * with the adjustment coming from the {@link RelativeHardwareValueMatcher} to determine the final
 * adjustment amount.
 *
 * @param {double} sensitivity
 */
RelativeHardwareControl.prototype.setSensitivity = function(sensitivity) {};

/**
 * Sets the {@link RelativeHardwareValueMatcher} that can be used to detect when the user adjusts the
 * hardware control's value.
 *
 * @param {RelativeHardwareValueMatcher} matcher
 */
RelativeHardwareControl.prototype.setAdjustValueMatcher = function(matcher) {};

/**
 * Adds a binding to the supplied target with the supplied sensitivity.
 *
 * @param {RelativeHardwarControlBindable} target
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.addBindingWithSensitivity = function(target, sensitivity) {};

/**
 * Makes sure there is a single binding to the supplied target with the supplied sensitivity.
 *
 * @param {RelativeHardwarControlBindable} target
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.setBindingWithSensitivity = function(target, sensitivity) {};

/**
 * Adds a binding to the supplied target that does not adjust the target outside of the supplied min and
 * max normalized range.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.addBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};

/**
 * Makes sure there is single binding to the supplied target that does not adjust the target outside of the
 * supplied min and max normalized range.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.setBindingWithRange = function(target, minNormalizedValue, maxNormalizedValue) {};

/**
 * Adds a binding to the supplied target that does not adjust the target outside of the supplied min and
 * max normalized range and is adjusted with the supplied sensitivity.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.addBindingWithRangeAndSensitivity = function(target, minNormalizedValue, maxNormalizedValue, sensitivity) {};

/**
 * Makes sure there is a single binding to the supplied target that does not adjust the target outside of
 * the supplied min and max normalized range and is adjusted with the supplied sensitivity.
 *
 * @param {SettableRangedValue} target
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @param {double} sensitivity
 * @return {RelativeHardwareControlBinding}
 */
RelativeHardwareControl.prototype.setBindingWithRangeAndSensitivity = function(target, minNormalizedValue, maxNormalizedValue, sensitivity) {};

/**
 * The current steps size (amount of relative rotation) necessary to step through an item in a list.
 *
 * @return {double}
 */
RelativeHardwareControl.prototype.getStepSize = function() {};

/**
 * Sets the step size of this relative hardware control. The step size is used when using this control to
 * step through items in a list, or values in an enum parameter, for example. For each step forwards a
 * certain action can be invoked and for each step backwards a different action.
 *
 * @param {double} stepSize
 */
RelativeHardwareControl.prototype.setStepSize = function(stepSize) {};
/* API Version - 3.1.2 */

/**
 * Represents a binding from an {@link RelativeHardwareControl} to a {@link SettableRangedValue}
 *
 * @since API version 10
 */
function RelativeHardwareControlToRangedValueBinding() {}

RelativeHardwareControlToRangedValueBinding.prototype = new RelativeHardwareControlBinding();
RelativeHardwareControlToRangedValueBinding.prototype.constructor = RelativeHardwareControlToRangedValueBinding;
/* API Version - 3.1.2 */

/**
 * Represents a physical hardware knob that inputs a relative value.
 *
 * @see ControllerHost#createRelativeHardwareKnob()
 * @since API version 10
 */
function RelativeHardwareKnob() {}

RelativeHardwareKnob.prototype = new RelativeHardwareControl();
RelativeHardwareKnob.prototype.constructor = RelativeHardwareKnob;
/* API Version - 3.1.2 */

/**
 * Defines a means of recognizing when a relative value is input by the user (for example, when moving a
 * slider or turning a knob).
 * 
 * For example, when a certain MIDI CC message happens.
 *
 * @see MidiIn#createRelative2sComplementCCValueMatcher(int, int)
 * @see MidiIn#createRelativeBinOffsetCCValueMatcher(int, int)
 * @see MidiIn#createRelativeSignedBit2CCValueMatcher(int, int)
 * @since API version 10
 */
function RelativeHardwareValueMatcher() {}

RelativeHardwareValueMatcher.prototype = new ContinuousHardwareValueMatcher();
RelativeHardwareValueMatcher.prototype.constructor = RelativeHardwareValueMatcher;
/* API Version - 3.1.2 */

/**
 * Defines a relative position of something to something else.
 *
 * @since API version 10
 */
RelativePosition = {
	ABOVE: 0,
	BELOW: 1,
	LEFT: 2,
	RIGHT: 3,
	INSIDE: 4,
};/* API Version - 3.1.2 */

/**
 * Instances of this interface are reported to the supplied script callback when connecting to a remote TCP
 * socket via {@link ControllerHost#connectToRemoteHost}.
 *
 * @see {@link ControllerHost#connectToRemoteHost}
 * @since API version 1
 */
function RemoteConnection() {}

/**
 * Disconnects from the remote host.
 *
 * @since API version 1
 */
RemoteConnection.prototype.disconnect = function() {};

/**
 * Registers a callback function that gets called when the connection gets lost or disconnected.
 *
 * @param callback
          a callback function that doesn't receive any parameters
 * @since API version 1
 */
RemoteConnection.prototype.setDisconnectCallback = function(callback) {};

/**
 * Sets the callback used for receiving data.
 * 
 * The remote connection needs a header for each message sent to it containing a 32-bit big-endian integer
 * saying how big the rest of the message is. The data delivered to the script will not include this
 * header.
 *
 * @param callback
          a callback function with the signature `(byte[] data)`
 * @since API version 1
 */
RemoteConnection.prototype.setReceiveCallback = function(callback) {};

/**
 * Sends data to the remote host.
 *
 * @param data
          the byte array containing the data to be sent. When creating a numeric byte array in
          JavaScript, the byte values must be signed (in the range -128..127).
 * @throws IOException
 * @since API version 1
 */
RemoteConnection.prototype.send = function(data) {};
/* API Version - 3.1.2 */

/**
 * Represents a remote control in Bitwig Studio.
 *
 * @sice API version 2
 */
function RemoteControl() {}

RemoteControl.prototype = new Parameter();
RemoteControl.prototype.constructor = RemoteControl;

/**
 * @return {SettableStringValue}
 */
RemoteControl.prototype.name = function() {};
/* API Version - 3.1.2 */

/**
 * Represents a page of remote controls in a device.
 *
 * @since API version 2
 */
function RemoteControlsPage() {}

RemoteControlsPage.prototype = new ParameterBank();
RemoteControlsPage.prototype.constructor = RemoteControlsPage;

/**
 * @param {int} indexInBank
 * @return {RemoteControl}
 */
RemoteControlsPage.prototype.getParameter = function(indexInBank) {};

/**
 * @return {StringValue}
 */
RemoteControlsPage.prototype.getName = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent a TCP socket that other network clients can connect to, typically
 * created by calling {@link ControllerHost#createRemoteConnection}.
 *
 * @see {@link ControllerHost#createRemoteConnection}
 * @since API version 1
 */
function RemoteSocket() {}

/**
 * Sets a callback which receives a remote connection object for each incoming connection.
 *
 * @param callback
          a callback function which receives a single {@link RemoteConnection} argument
 * @since API version 1
 */
RemoteSocket.prototype.setClientConnectCallback = function(callback) {};

/**
 * Gets the actual port used for the remote socket, which might differ from the originally requested port
 * when calling {@link ControllerHost#createRemoteConnection(String name, int port)} in case the requested port was
 * already used.
 *
 * @return {int} the actual port used for the remote socket
 * @since API version 1
 */
RemoteSocket.prototype.getPort = function() {};
/* API Version - 3.1.2 */

/**
 * This class is a renderer.
 * The render method will be called by the Host with a provided GraphicsOutput context.
 *
 * @newSince API version 6
 */
function Renderer() {}

/**
 * @param {GraphicsOutput} gc
 */
Renderer.prototype.render = function(gc) {};
/* API Version - 3.1.2 */
/* API Version - 3.1.2 */

/**
 * A scene bank provides access to a range of scenes in Bitwig Studio. Instances of scene bank are configured
 * with a fixed number of scenes and represent an excerpt of a larger list of scenes. Various methods are
 * provided for scrolling to different sections of the scene list. It basically acts like a window moving over
 * the list of underlying scenes.
 * 
 * To receive an instance of scene bank call
 * {@link ControllerHost#createSceneBank}.
 *
 * @see {@link ControllerHost#createSceneBank}
 * @since API version 1
 */
function SceneBank() {}

SceneBank.prototype = new ClipLauncherSlotOrSceneBank();
SceneBank.prototype.constructor = SceneBank;

/**
 * Returns the scene at the given index within the bank.
 *
 * @param indexInBank
          the scene index within this bank, not the index within the list of all Bitwig Studio scenes.
          Must be in the range [0..sizeOfBank-1].
 * @return {Scene} the requested scene object
 * @since API version 1
 */
SceneBank.prototype.getScene = function(indexInBank) {};

/**
 * Launches the scene with the given bank index.
 *
 * @param indexInWindow
          the scene index within the bank, not the position of the scene withing the underlying full
          list of scenes.
 * @since API version 1
 */
SceneBank.prototype.launchScene = function(indexInWindow) {};

/**
 * Specifies if the Bitwig Studio clip launcher should indicate which scenes are part of the window. By
 * default indications are disabled.
 *
 * @param shouldIndicate
          `true` if visual indications should be enabled, `false` otherwise
 * @since API version 10
 */
SceneBank.prototype.setIndication = function(shouldIndicate) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent scenes in Bitwig Studio.
 *
 * @since API version 1
 */
function Scene() {}

Scene.prototype = new ClipLauncherSlotOrScene();
Scene.prototype.constructor = Scene;

/**
 * Returns an object that provides access to the name of the scene.
 *
 * @return {SettableStringValue} a string value object that represents the scene name.
 * @since API version 2
 */
Scene.prototype.name = function() {};

/**
 * Value that reports the number of clips in the scene.
 *
 * @return {IntegerValue}
 * @since API version 2
 */
Scene.prototype.clipCount = function() {};

/**
 * Registers an observer that reports if the scene is selected in Bitwig Studio.
 *
 * @param callback
          a callback function that takes a single boolean parameter.
 * @since API version 1
 */
Scene.prototype.addIsSelectedInEditorObserver = function(callback) {};

/**
 * Selects the scene in Bitwig Studio.
 *
 * @since API version 1
 */
Scene.prototype.selectInEditor = function() {};

/**
 * Makes the scene visible in the Bitwig Studio user interface.
 *
 * @since API version 1
 */
Scene.prototype.showInEditor = function() {};
/* API Version - 3.1.2 */

/**
 * Interface for something that can be scrolled.
 *
 * @since API version 2
 */
function Scrollable() {}

Scrollable.prototype = new RelativeHardwarControlBindable();
Scrollable.prototype.constructor = Scrollable;

/**
 * Value that reports the current scroll position.
 *
 * @return {SettableIntegerValue}
 * @since API version 2
 */
Scrollable.prototype.scrollPosition = function() {};

/**
 * Scrolls the supplied position into view if it isn't already.
 *
 * @param {int} position
 * @since API version 7
 */
Scrollable.prototype.scrollIntoView = function(position) {};

/**
 * Scrolls by a number of steps.
 *
 * @param amount
          The number of steps to scroll by (positive is forwards and negative is backwards).
 */
Scrollable.prototype.scrollBy = function(amount) {};

/**
 * Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with 1
 *
 * @since API version 2
 */
Scrollable.prototype.scrollForwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollForwardsAction = function() {};

/**
 * Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with -1
 *
 * @since API version 2
 */
Scrollable.prototype.scrollBackwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollBackwardsAction = function() {};

/**
 * Scrolls by a number of pages.
 *
 * @param amount
          The number of pages to scroll by (positive is forwards and negative is backwards).
 */
Scrollable.prototype.scrollByPages = function(amount) {};

/**
 * Scrolls forwards by one page.
 *
 * @since API version 2
 */
Scrollable.prototype.scrollPageForwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollPageForwardsAction = function() {};

/**
 * Scrolls backwards by one page.
 *
 * @since API version 2
 */
Scrollable.prototype.scrollPageBackwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollPageBackwardsAction = function() {};

/**
 * Value that reports if it is possible to scroll the bank backwards or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Scrollable.prototype.canScrollBackwards = function() {};

/**
 * Value that reports if it is possible to scroll the bank forwards or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Scrollable.prototype.canScrollForwards = function() {};
/* API Version - 3.1.2 */

function SendBank() {}

SendBank.prototype = new Bank();
SendBank.prototype.constructor = SendBank;
/* API Version - 3.1.2 */

function Send() {}

Send.prototype = new Parameter();
Send.prototype.constructor = Send;

/**
 * Value that reports the color of the channel that this send sends to.
 *
 * @return {SettableColorValue}
 * @since API version 2
 */
Send.prototype.sendChannelColor = function() {};

/**
 * Value that reports if the send happens before or after the fader.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
Send.prototype.isPreFader = function() {};

/**
 * Define how the send will happen.
 * Possible values: AUTO, PRE, POST.
 *
 * @return {SettableEnumValue}
 * @since API version 10
 */
Send.prototype.sendMode = function() {};
/* API Version - 3.1.2 */

function SettableBeatTimeValue() {}

SettableBeatTimeValue.prototype = new BeatTimeValue();
SettableBeatTimeValue.prototype.constructor = SettableBeatTimeValue;

/**
 * Stepper that steps through beat values. This can be used as a target for a
 * {@link RelativeHardwareControl}.
 *
 * @return {RelativeHardwarControlBindable}
 * @since API version 10
 */
SettableBeatTimeValue.prototype.beatStepper = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent boolean values.
 *
 * @since API version 1
 */
function SettableBooleanValue() {}

SettableBooleanValue.prototype = new BooleanValue();
SettableBooleanValue.prototype.constructor = SettableBooleanValue;

/**
 * Sets the internal value.
 *
 * @param value
          the new boolean value.
 * @since API version 1
 */
SettableBooleanValue.prototype.set = function(value) {};

/**
 * Toggles the current state. In case the current value is `false`, the new value will be `true` and the
 * other way round.
 *
 * @since API version 1
 */
SettableBooleanValue.prototype.toggle = function() {};

/**
 * @return {HardwareActionBindable}
 */
SettableBooleanValue.prototype.toggleAction = function() {};

/**
 * @return {HardwareActionBindable}
 */
SettableBooleanValue.prototype.setToTrueAction = function() {};

/**
 * @return {HardwareActionBindable}
 */
SettableBooleanValue.prototype.setToFalseAction = function() {};
/* API Version - 3.1.2 */

function SettableColorValue() {}

SettableColorValue.prototype = new ColorValue();
SettableColorValue.prototype.constructor = SettableColorValue;

/**
 * Sets the internal value.
 *
 * @param {float} red
 * @param {float} green
 * @param {float} blue
 * @since API version 2
 */
SettableColorValue.prototype.set = function(red, green, blue) {};

/**
 * Sets the internal value.
 *
 * @param {float} red
 * @param {float} green
 * @param {float} blue
 * @param {float} alpha
 * @since API version 5
 */
SettableColorValue.prototype.set = function(red, green, blue, alpha) {};
/* API Version - 3.1.2 */

function SettableDoubleValue() {}

SettableDoubleValue.prototype = new DoubleValue();
SettableDoubleValue.prototype.constructor = SettableDoubleValue;

/**
 * Sets the internal value.
 *
 * @param value
          the new integer value.
 * @since API version 1
 */
SettableDoubleValue.prototype.set = function(value) {};

/**
 * Increases/decrease the internal value by the given amount.
 *
 * @param amount
          the integer amount to increase
 * @since API version 1
 */
SettableDoubleValue.prototype.inc = function(amount) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent enumeration values. Enum values work similar to string values, but
 * are limited to a fixed set of value options.
 *
 * @since API version 1
 */
function SettableEnumValue() {}

SettableEnumValue.prototype = new EnumValue();
SettableEnumValue.prototype.constructor = SettableEnumValue;

/**
 * Sets the value to the enumeration item with the given name.
 *
 * @param name
          the name of the new enum item
 * @since API version 1
 */
SettableEnumValue.prototype.set = function(value) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent integer values.
 *
 * @since API version 1
 */
function SettableIntegerValue() {}

SettableIntegerValue.prototype = new IntegerValue();
SettableIntegerValue.prototype.constructor = SettableIntegerValue;

/**
 * Sets the internal value.
 *
 * @param value
          the new integer value.
 * @since API version 1
 */
SettableIntegerValue.prototype.set = function(value) {};

/**
 * Increases/decrease the internal value by the given amount.
 *
 * @param amount
          the integer amount to increase
 * @since API version 1
 */
SettableIntegerValue.prototype.inc = function(amount) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent numeric values that have an upper and lower limit.
 *
 * @since API version 1
 */
function SettableRangedValue() {}

SettableRangedValue.prototype = new RangedValue();
SettableRangedValue.prototype.constructor = SettableRangedValue;

/**
 * Sets the value in an absolute fashion as a value between 0 .. 1 where 0 represents the minimum value and
 * 1 the maximum. The value may not be set immediately if the user has configured a take over strategy for
 * the controller.
 *
 * @param value
          absolute value [0 .. 1]
 * @since API version 2
 */
SettableRangedValue.prototype.set = function(value) {};

/**
 * Sets the value in an absolute fashion as a value between 0 .. 1 where 0 represents the minimum value and
 * 1 the maximum. The value change is applied immediately and does not care about what take over mode the
 * user has selected. This is useful if the value does not need take over (e.g. a motorized slider).
 *
 * @param value
          absolute value [0 .. 1]
 * @since API version 4
 */
SettableRangedValue.prototype.setImmediately = function(value) {};

/**
 * Sets the value in an absolute fashion. The value will be scaled according to the given resolution.
 * 
 * Typically the resolution would be specified as the amount of steps the hardware control provides (for
 * example 128) and just pass the integer value as it comes from the MIDI device. The host application will
 * take care of scaling it.
 *
 * @param value
          integer number in the range [0 .. resolution-1]
 * @param resolution
          the resolution used for scaling @ if passed-in parameters are null
 * @since API version 1
 */
SettableRangedValue.prototype.set = function(value, resolution) {};

/**
 * Increments or decrements the value by a normalized amount assuming the whole range of the value is 0 ..
 * 1. For example to increment by 10% you would use 0.1 as the increment.
 *
 * @param {double} increment
 * @since API version 2
 */
SettableRangedValue.prototype.inc = function(increment) {};

/**
 * Increments or decrements the value according to the given increment and resolution parameters.
 * 
 * Typically the resolution would be specified as the amount of steps the hardware control provides (for
 * example 128) and just pass the integer value as it comes from the MIDI device. The host application will
 * take care of scaling it.
 *
 * @param increment
          the amount that the current value is increased by
 * @param resolution
          the resolution used for scaling
 * @since API version 1
 */
SettableRangedValue.prototype.inc = function(increment, resolution) {};

/**
 * Set the internal (raw) value.
 *
 * @param value
          the new value with double precision. Range is undefined.
 * @since API version 1
 */
SettableRangedValue.prototype.setRaw = function(value) {};

/**
 * Increments / decrements the internal (raw) value.
 *
 * @param delta
          the amount that the current internal value get increased by.
 * @since API version 1
 */
SettableRangedValue.prototype.incRaw = function(delta) {};

/**
 * @param {AbsoluteHardwareControl} hardwareControl
 * @return {AbsoluteHardwareControlBinding}
 */
SettableRangedValue.prototype.addBinding = function(hardwareControl) {};

/**
 * @param {AbsoluteHardwareControl} hardwareControl
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {AbsoluteHardwareControlBinding}
 */
SettableRangedValue.prototype.addBindingWithRange = function(hardwareControl, minNormalizedValue, maxNormalizedValue) {};

/**
 * @param {RelativeHardwareControl} hardwareControl
 * @return {RelativeHardwareControlToRangedValueBinding}
 */
SettableRangedValue.prototype.addBinding = function(hardwareControl) {};

/**
 * @param {RelativeHardwareControl} hardwareControl
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @return {RelativeHardwareControlBinding}
 */
SettableRangedValue.prototype.addBindingWithRange = function(hardwareControl, minNormalizedValue, maxNormalizedValue) {};

/**
 * @param {RelativeHardwareControl} hardwareControl
 * @param {double} minNormalizedValue
 * @param {double} maxNormalizedValue
 * @param {double} sensitivity
 * @return {RelativeHardwareControlToRangedValueBinding}
 */
SettableRangedValue.prototype.addBindingWithRangeAndSensitivity = function(hardwareControl, minNormalizedValue, maxNormalizedValue, sensitivity) {};

/**
 * @param {RelativeHardwareControl} hardwareControl
 * @param {double} sensitivity
 * @return {RelativeHardwareControlToRangedValueBinding}
 */
SettableRangedValue.prototype.addBindingWithSensitivity = function(hardwareControl, sensitivity) {};
/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function SettableStringArrayValue() {}

SettableStringArrayValue.prototype = new StringArrayValue();
SettableStringArrayValue.prototype.constructor = SettableStringArrayValue;

/**
 * Sets the internal value.
 *
 * @param value
          the new value.
 * @since API version 2
 */
SettableStringArrayValue.prototype.set = function(value) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface implement the {@link Value} interface for string values.
 *
 * @since API version 1
 */
function SettableStringValue() {}

SettableStringValue.prototype = new StringValue();
SettableStringValue.prototype.constructor = SettableStringValue;

/**
 * Sets the value object to the given string.
 *
 * @param value
          the new value string
 * @since API version 1
 */
SettableStringValue.prototype.set = function(value) {};
/* API Version - 3.1.2 */

/**
 * A common base interface for labeled and categorized settings.
 *
 * @since API version 1
 */
function Setting() {}

/**
 * Returns the category name of the setting.
 *
 * @return {string} a string value containing the category name
 * @since API version 1
 */
Setting.prototype.getCategory = function() {};

/**
 * Returns the label text of the setting.
 *
 * @return {string} a string value containing the label text
 * @since API version 1
 */
Setting.prototype.getLabel = function() {};

/**
 * Marks the settings as enabled in Bitwig Studio. By default the setting is enabled.
 *
 * @since API version 1
 */
Setting.prototype.enable = function() {};

/**
 * Marks the settings as disabled in Bitwig Studio. By default the setting is enabled.
 *
 * @since API version 1
 */
Setting.prototype.disable = function() {};

/**
 * Shows the setting in Bitwig Studio. By default the setting is shown.
 *
 * @since API version 1
 */
Setting.prototype.show = function() {};

/**
 * Hides the setting in Bitwig Studio. By default the setting is shown.
 *
 * @since API version 1
 */
Setting.prototype.hide = function() {};
/* API Version - 3.1.2 */

/**
 * This interface builds the foundation for storing custom settings in Bitwig Studio documents or in the
 * Bitwig Studio preferences.
 *
 * @since API version 1
 */
function Settings() {}

/**
 * Returns a signal setting object, which is shown a push button with the given label in Bitwig Studio.
 *
 * @param label
          the name of the setting, must not be `null`
 * @param category
          the name of the category, may not be `null`
 * @param action
          the action string as displayed on the related Bitwig Studio button, must not be `null`
 * @return {Signal} the object that encapsulates the requested signal
 * @since API version 1
 */
Settings.prototype.getSignalSetting = function(label, category, action) {};

/**
 * Returns a numeric setting that is shown a number field in Bitwig Studio.
 *
 * @param label
          the name of the setting, must not be `null`
 * @param category
          the name of the category, may not be `null`
 * @param minValue
          the minimum value that the user is allowed to enter
 * @param maxValue
          the minimum value that the user is allowed to enter
 * @param stepResolution
          the step resolution used for the number field
 * @param unit
          the string that should be used to display the unit of the number
 * @param initialValue
          the initial numeric value of the setting
 * @return {SettableRangedValue} the object that encapsulates the requested numeric setting
 * @since API version 1
 */
Settings.prototype.getNumberSetting = function(label, category, minValue, maxValue, stepResolution, unit, initialValue) {};

/**
 * Returns an enumeration setting that is shown either as a chooser or as a button group in Bitwig Studio,
 * depending on the number of provided options.
 *
 * @param label
          the name of the setting, must not be `null`
 * @param category
          the name of the category, may not be `null`
 * @param options
          the string array that defines the allowed options for the button group or chooser
 * @param initialValue
          the initial string value, must be one of the items specified with the option argument
 * @return {SettableEnumValue} the object that encapsulates the requested enum setting
 * @since API version 1
 */
Settings.prototype.getEnumSetting = function(label, category, options, initialValue) {};

/**
 * Returns a textual setting that is shown as a text field in the Bitwig Studio user interface.
 *
 * @param label
          the name of the setting, must not be `null`
 * @param category
          the name of the category, may not be `null`
 * @param numChars
          the maximum number of character used for the text value
 * @param initialText
          the initial text value of the setting
 * @return {SettableStringValue} the object that encapsulates the requested string setting
 * @since API version 1
 */
Settings.prototype.getStringSetting = function(label, category, numChars, initialText) {};

/**
 * Returns a color setting that is shown in the Bitwig Studio user interface.
 *
 * @param label
          the name of the setting, must not be `null`
 * @param category
          the name of the category, may not be `null`
 * @param initialColor
          the initial color value of the setting
 * @return {SettableColorValue} the object that encapsulates the requested string setting
 * @since API version 5
 */
Settings.prototype.getColorSetting = function(label, category, initialColor) {};

/**
 * Returns a boolean setting.
 *
 * @param label
          the name of the setting, must not be `null`
 * @param category
          the name of the category, may not be `null`
 * @param initialValue
          the initial color value of the setting
 * @return {SettableBooleanValue} the object that encapsulates the requested string setting
 * @since API version 7
 */
Settings.prototype.getBooleanSetting = function(label, category, initialValue) {};
/* API Version - 3.1.2 */

function ShortMidiDataReceivedCallback() {}

ShortMidiDataReceivedCallback.prototype = new Callback();
ShortMidiDataReceivedCallback.prototype.constructor = ShortMidiDataReceivedCallback;

/**
 * Registers a callback for receiving short (normal) MIDI messages on this MIDI input port.
 *
 * @param {int} statusByte
 * @param {int} data1
 * @param {int} data2
 */
ShortMidiDataReceivedCallback.prototype.midiReceived = function(statusByte, data1, data2) {};
/* API Version - 3.1.2 */

function ShortMidiMessage() {}

/**
 * @return {int}
 */
ShortMidiMessage.prototype.getStatusByte = function() {};

/**
 * @return {int}
 */
ShortMidiMessage.prototype.getData1 = function() {};

/**
 * @return {int}
 */
ShortMidiMessage.prototype.getData2 = function() {};

/**
 * @return {int}
 */
ShortMidiMessage.prototype.getChannel = function() {};

/**
 * @return {int}
 */
ShortMidiMessage.prototype.getStatusMessage = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isNoteOff = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isNoteOn = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isPitchBend = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isPolyPressure = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isControlChange = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isProgramChange = function() {};

/**
 * @return {boolean}
 */
ShortMidiMessage.prototype.isChannelPressure = function() {};

/**
 * @return {string}
 */
ShortMidiMessage.prototype.toString = function() {};
/* API Version - 3.1.2 */

function ShortMidiMessageReceivedCallback() {}

ShortMidiMessageReceivedCallback.prototype = new ShortMidiDataReceivedCallback();
ShortMidiMessageReceivedCallback.prototype.constructor = ShortMidiMessageReceivedCallback;

/**
 * Registers a callback for receiving short (normal) MIDI messages on this MIDI input port.
 *
 * @param callback
          a callback function that receives a ShortMidiMessage instance.
@since API version 2
 */
ShortMidiMessageReceivedCallback.prototype.midiReceived = function(msg) {};

/**
 * @param {int} statusByte
 * @param {int} data1
 * @param {int} data2
 */
ShortMidiMessageReceivedCallback.prototype.midiReceived = function(statusByte, data1, data2) {};
/* API Version - 3.1.2 */

/**
 * A generic interface used to implement actions or events that are not associated with a value.
 *
 * @since API version 1
 */
function Signal() {}

/**
 * Registers an observer that gets notified when the signal gets fired.
 *
 * @param callback
          a callback function that does not receive any argument.
 * @since API version 1
 */
Signal.prototype.addSignalObserver = function(callback) {};

/**
 * Fires the action or event represented by the signal object.
 *
 * @since API version 1
 */
Signal.prototype.fire = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent the state of a solo button.
 *
 * @since API version 1
 */
function SoloValue() {}

SoloValue.prototype = new SettableBooleanValue();
SoloValue.prototype.constructor = SoloValue;

/**
 * Toggles the current solo state.
 *
 * @param exclusive
          specifies if solo on other channels should be disabled automatically ('true') or not
          ('false').
 * @since API version 1
 */
SoloValue.prototype.toggle = function(exclusive) {};
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
/* API Version - 3.1.2 */

function StepDataChangedCallback() {}

StepDataChangedCallback.prototype = new Callback();
StepDataChangedCallback.prototype.constructor = StepDataChangedCallback;

/**
 * A callback function that receives three parameters: 1. the x (step) coordinate within the note grid
 * (integer), 2. the y (key) coordinate within the note grid (integer), and 3. an integer value that
 * indicates if the step is empty (`0`) or if a note continues playing (`1`) or starts playing (`2`).
 *
 * @param {int} x
 * @param {int} y
 * @param {int} state
 */
StepDataChangedCallback.prototype.stepStateChanged = function(x, y, state) {};
/* API Version - 3.1.2 */

function StringArrayValueChangedCallback() {}

StringArrayValueChangedCallback.prototype = new ObjectValueChangedCallback();
StringArrayValueChangedCallback.prototype.constructor = StringArrayValueChangedCallback;
/* API Version - 3.1.2 */

/**
 * @since API version 2
 */
function StringArrayValue() {}

StringArrayValue.prototype = new ObjectArrayValue();
StringArrayValue.prototype.constructor = StringArrayValue;

/**
 * Gets the current value.
 *
 * @return {String[]}
 * @since API version 2
 */
StringArrayValue.prototype.get = function() {};
/* API Version - 3.1.2 */

/**
 * Represents an output value shown on some hardware (for example, the title of a track).
 *
 * @since API version 10
 */
function StringHardwareProperty() {}

StringHardwareProperty.prototype = new HardwareProperty();
StringHardwareProperty.prototype.constructor = StringHardwareProperty;

/**
 * Gets the current value. This is the value that should be sent to the hardware to be displayed.
 *
 * @return {string}
 */
StringHardwareProperty.prototype.currentValue = function() {};

/**
 * The value that was last sent to the hardware.
 *
 * @return {string}
 */
StringHardwareProperty.prototype.lastSentValue = function() {};

/**
 * Specifies a callback that should be called with the value that needs to be sent to the hardware. This
 * callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
 * from the flush method).
 *
 * @param {java.util.function.Consumer<java.lang.String>} sendValueConsumer
 */
StringHardwareProperty.prototype.onUpdateHardware = function(sendValueConsumer) {};

/**
 * Sets the current value.
 *
 * @param {string} value
 */
StringHardwareProperty.prototype.setValue = function(value) {};

/**
 * Sets the current value from a {@link Supplier} that supplies the latest value.
 *
 * @param {java.util.function.Supplier<java.lang.String>} supplier
 */
StringHardwareProperty.prototype.setValueSupplier = function(supplier) {};

/**
 * The maximum number of characters that can be output or -1 if not specified and there is no limit.
 *
 * @return {int}
 */
StringHardwareProperty.prototype.getMaxChars = function() {};

/**
 * @param {int} maxChars
 */
StringHardwareProperty.prototype.setMaxChars = function(maxChars) {};
/* API Version - 3.1.2 */

function StringValueChangedCallback() {}

StringValueChangedCallback.prototype = new ObjectValueChangedCallback();
StringValueChangedCallback.prototype.constructor = StringValueChangedCallback;
/* API Version - 3.1.2 */

function StringValue() {}

StringValue.prototype = new Value();
StringValue.prototype.constructor = StringValue;

/**
 * Gets the current value.
 *
 * @return {string}
 * @since API version 2
 */
StringValue.prototype.get = function() {};

/**
 * Gets the current value and tries to intelligently limit it to the supplied length in the best way
 * possible.
 *
 * @param {int} maxLength
 * @return {string}
 * @since API version 2
 */
StringValue.prototype.getLimited = function(maxLength) {};
/* API Version - 3.1.2 */

/**
 * Interface for an object that can be 'subscribed' or not. A subscribed object will notify any observers when
 * changes occur to it. When it is unsubscribed the observers will no longer be notified. A driver can use
 * this to say which objects it is interested in and which ones it is not (for example in one mode the driver
 * may not be interested in track meters) at runtime. This allows the driver to improve efficiency by only
 * getting notified about changes that are really relevant to it. By default a driver is subscribed to
 * everything.
 * 
 * Subscription is counter based.
 *
 * @since API version 2
 */
function Subscribable() {}

/**
 * Determines if this object is currently 'subscribed'. In the subscribed state it will notify any
 * observers registered on it.
 *
 * @return {boolean}
 */
Subscribable.prototype.isSubscribed = function() {};

/**
 * Subscribes the driver to this object.
 */
Subscribable.prototype.subscribe = function() {};

/**
 * Unsubscribes the driver from this object.
 */
Subscribable.prototype.unsubscribe = function() {};
/* API Version - 3.1.2 */

function SysexBuilder() {}

/**
 * @param {string} hexString
 * @return {SysexBuilder}
 */
SysexBuilder.prototype.fromHex = function(hexString) {};

/**
 * @param {int} value
 * @return {SysexBuilder}
 */
SysexBuilder.prototype.addByte = function(value) {};

/**
 * @param {string} string
 * @param {int} length
 * @return {SysexBuilder}
 */
SysexBuilder.prototype.addString = function(string, length) {};

/**
 * @param {byte[]} bytes
 * @return {SysexBuilder}
 */
SysexBuilder.prototype.add = function(bytes) {};

/**
 * @param {string} hex
 * @return {SysexBuilder}
 */
SysexBuilder.prototype.addHex = function(hex) {};

/**
 * @return {byte[]}
 */
SysexBuilder.prototype.terminate = function() {};

/**
 * @return {byte[]}
 */
SysexBuilder.prototype.array = function() {};
/* API Version - 3.1.2 */

function SysexMidiDataReceivedCallback() {}

SysexMidiDataReceivedCallback.prototype = new Callback();
SysexMidiDataReceivedCallback.prototype.constructor = SysexMidiDataReceivedCallback;

/**
 * @param data
          The data encoded as a hex string
 */
SysexMidiDataReceivedCallback.prototype.sysexDataReceived = function(data) {};
/* API Version - 3.1.2 */

/**
 * @newSince API version 6
 */
function TextExtents() {}

/**
 * Returns the horizontal distance from the origin to the leftmost part of the glyphs as drawn.
 * Positive if the glyphs lie entirely to the right of the origin.
 *
 * @return {double}
 */
TextExtents.prototype.getBearingX = function() {};

/**
 * Returns the vertical distance from the origin to the topmost part of the glyphs as drawn.
 * Positive only if the glyphs lie completely below the origin; will usually be negative.
 *
 * @return {double}
 */
TextExtents.prototype.getBearingY = function() {};

/**
 * Returns the width of the glyphs as drawn.
 *
 * @return {double}
 */
TextExtents.prototype.getWidth = function() {};

/**
 * Returns the height of the glyphs as drawn.
 *
 * @return {double}
 */
TextExtents.prototype.getHeight = function() {};

/**
 * Returns the distance to advance in the X direction after drawing these glyphs.
 *
 * @return {double}
 */
TextExtents.prototype.getAdvanceX = function() {};

/**
 * Returns the distance to advance in the Y direction after drawing these glyphs. Will typically
 * be zero except for vertical text layout as found in East-Asian languages.
 *
 * @return {double}
 */
TextExtents.prototype.getAdvanceY = function() {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent time signature values.
 *
 * @since API version 1
 */
function TimeSignatureValue() {}

TimeSignatureValue.prototype = new Value();
TimeSignatureValue.prototype.constructor = TimeSignatureValue;

/**
 * Gets the current value.
 *
 * @return {string}
 * @since API version 2
 */
TimeSignatureValue.prototype.get = function() {};

/**
 * Updates the time signature according to the given string.
 *
 * @param name
          a textual representation of the new time signature value, formatted as
          `numerator/denominator[, ticks]`
 * @since API version 1
 */
TimeSignatureValue.prototype.set = function(name) {};

/**
 * Returns an object that provides access to the time signature numerator.
 *
 * @return {SettableIntegerValue} an integer value object that represents the time signature numerator.
 * @since API version 5
 */
TimeSignatureValue.prototype.numerator = function() {};

/**
 * Returns an object that provides access to the time signature denominator.
 *
 * @return {SettableIntegerValue} an integer value object that represents the time signature denominator.
 * @since API version 5
 */
TimeSignatureValue.prototype.denominator = function() {};

/**
 * Returns an object that provides access to the time signature tick subdivisions.
 *
 * @return {SettableIntegerValue} an integer value object that represents the time signature ticks.
 * @since API version 5
 */
TimeSignatureValue.prototype.ticks = function() {};
/* API Version - 3.1.2 */

/**
 * A track bank provides access to a range of tracks and their scenes (clip launcher slots) in Bitwig Studio.
 * Instances of track bank are configured with a fixed number of tracks and scenes and represent an excerpt of
 * a larger list of tracks and scenes. Various methods are provided for scrolling to different sections of the
 * track/scene list. It basically acts like a 2-dimensional window moving over the grid of tracks and scenes.
 * 
 * To receive an instance of track bank that supports all kinds of tracks call {@link ControllerHost#createTrackBank}.
 * Additional methods are provided in the {@link ControllerHost} interface to create track banks that include only main
 * tracks ({@link ControllerHost#createMainTrackBank}) or only effect tracks ({@link ControllerHost#createEffectTrackBank}).
 *
 * @see {@link ControllerHost#createTrackBank}
 * @see {@link ControllerHost#createMainTrackBank}
 * @see {@link ControllerHost#createEffectTrackBank}
 * @since API version 1
 */
function TrackBank() {}

TrackBank.prototype = new ChannelBank();
TrackBank.prototype.constructor = TrackBank;

/**
 * {@link SceneBank} that represents a view on the scenes in this {@link TrackBank}.
 *
 * @return {SceneBank}
 * @since API version 2
 */
TrackBank.prototype.sceneBank = function() {};

/**
 * Scrolls the scenes one step up.
 *
 * @since API version 1
 */
TrackBank.prototype.scrollScenesUp = function() {};

/**
 * Scrolls the scenes one step down.
 *
 * @since API version 1
 */
TrackBank.prototype.scrollScenesDown = function() {};

/**
 * Makes the scene with the given position visible in the track bank.
 *
 * @param position
          the position of the scene within the underlying full list of scenes
 * @since API version 1
 */
TrackBank.prototype.scrollToScene = function(position) {};

/**
 * Causes this bank to follow the supplied cursor. When the cursor moves to a new item the bank will be
 * scrolled so that the cursor is within the bank, if possible.
 *
 * @param cursorTrack
          The {@link CursorTrack} that this bank should follow.
 * @since API version 2
 */
TrackBank.prototype.followCursorTrack = function(cursorTrack) {};
/* API Version - 3.1.2 */

/**
 * Instances of this interface represent tracks in Bitwig Studio.
 *
 * @since API version 1
 */
function Track() {}

Track.prototype = new Channel();
Track.prototype.constructor = Track;

/**
 * Value that reports the position of the track within the list of Bitwig Studio tracks.
 *
 * @return {IntegerValue}
 * @since API version 2
 */
Track.prototype.position = function() {};

/**
 * Returns an object that can be used to access the clip launcher slots of the track.
 *
 * @return {ClipLauncherSlotBank} an object that represents the clip launcher slots of the track
 * @since API version 2
 */
Track.prototype.clipLauncherSlotBank = function() {};

/**
 * Returns an object that provides access to the arm state of the track.
 *
 * @return {SettableBooleanValue} a boolean value object
 * @since API version 5
 */
Track.prototype.arm = function() {};

/**
 * Returns an object that provides access to the monitoring state of the track.
 *
 * @return {SettableBooleanValue} a boolean value object
 * @since API version 5
 */
Track.prototype.monitor = function() {};

/**
 * Returns an object that provides access to the auto-monitoring state of the track.
 *
 * @return {SettableBooleanValue} a boolean value object
 * @since API version 5
 */
Track.prototype.autoMonitor = function() {};

/**
 * Returns an object that provides access to the cross-fade mode of the track.
 *
 * @return {SettableEnumValue} an enum value object that has three possible states: "A", "B", or "AB"
 * @since API version 5
 */
Track.prototype.crossFadeMode = function() {};

/**
 * Value that reports if this track is currently stopped. When a track is stopped it is not playing content
 * from the arranger or clip launcher.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Track.prototype.isStopped = function() {};

/**
 * Value that reports if the clip launcher slots are queued for stop.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Track.prototype.isQueuedForStop = function() {};

/**
 * Returns the source selector for the track, which is shown in the IO section of the track in Bitwig
 * Studio and lists either note or audio sources or both depending on the track type.
 *
 * @return {SourceSelector} a source selector object
 * @since API version 5
 */
Track.prototype.sourceSelector = function() {};

/**
 * Stops playback of the track.
 *
 * @since API version 1
 */
Track.prototype.stop = function() {};

/**
 * Action to call {@link #stop()}.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Track.prototype.stopAction = function() {};

/**
 * Calling this method causes the arrangement sequencer to take over playback.
 *
 * @since API version 1
 */
Track.prototype.returnToArrangement = function() {};

/**
 * Updates the name of the track.
 *
 * @param name
          the new track name
 * @since API version 1
 */
Track.prototype.setName = function(name) {};

/**
 * Registers an observer that reports names for note key values on this track. The track might provide
 * special names for certain keys if it contains instruments that support that features, such as the Bitwig
 * Drum Machine.
 *
 * @param callback
          a callback function that receives two arguments: 1. the key value in the range [0..127], and
          2. the name string
 * @since API version 1
 */
Track.prototype.addPitchNamesObserver = function(callback) {};

/**
 * Plays a note on the track with a default duration and the given key and velocity.
 *
 * @param key
          the key value of the played note
 * @param velocity
          the velocity of the played note
 * @since API version 1
 */
Track.prototype.playNote = function(key, velocity) {};

/**
 * Starts playing a note on the track with the given key and velocity.
 *
 * @param key
          the key value of the played note
 * @param velocity
          the velocity of the played note
 * @since API version 1
 */
Track.prototype.startNote = function(key, velocity) {};

/**
 * Stops playing a currently played note.
 *
 * @param key
          the key value of the playing note
 * @param velocity
          the note-off velocity
 * @since API version 1
 */
Track.prototype.stopNote = function(key, velocity) {};

/**
 * Sends a MIDI message to the hardware device.
 *
 * @param status
          the status byte of the MIDI message
 * @param data1
          the data1 part of the MIDI message
 * @param data2
          the data2 part of the MIDI message
@since API version 2
 */
Track.prototype.sendMidi = function(status, data1, data2) {};

/**
 * Value that reports the track type. Possible reported track types are `Group`, `Instrument`, `Audio`,
 * `Hybrid`, `Effect` or `Master`.
 *
 * @return {StringValue}
 * @since API version 2
 */
Track.prototype.trackType = function() {};

/**
 * Value that reports if the track may contain child tracks, which is the case for group tracks.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Track.prototype.isGroup = function() {};

/**
 * If the track is an effect track, returns an object that indicates if the effect track is configured
 * as pre-fader.
 *
 * @return {SettableBooleanValue}
 * @since API version 10
 */
Track.prototype.getIsPreFader = function() {};

/**
 * Returns an object that indicates if the track may contain notes.
 *
 * @return {SettableBooleanValue} a boolean value object
 * @since API version 5
 */
Track.prototype.canHoldNoteData = function() {};

/**
 * Returns an object that indicates if the track may contain audio events.
 *
 * @return {SettableBooleanValue} a boolean value object
 * @since API version 5
 */
Track.prototype.canHoldAudioData = function() {};

/**
 * Returns an object that provides access to the cursor item of the track's device selection as shown in
 * the Bitwig Studio user interface.
 *
 * @return {CursorDevice} the requested device selection cursor object
@since API version 1
 */
Track.prototype.createCursorDevice = function() {};

/**
 * Creates a named device selection cursor that is independent from the device selection in the Bitwig
 * Studio user interface, assuming the name parameter is not null. When `name` is `null` the result is
 * equal to calling {@link Track#createCursorDevice}.
 *
 * @param name
          the name of the custom device selection cursor, for example "Primary", or `null` to refer to
          the device selection cursor in the arranger cursor track as shown in the Bitwig Studio user
          interface.
 * @return {CursorDevice} the requested device selection cursor object
@see Track#createCursorDevice
 * @since API version 1
 */
Track.prototype.createCursorDevice = function(name) {};

/**
 * Creates a named device selection cursor that is independent from the device selection in the Bitwig
 * Studio user interface, assuming the name parameter is not null. When `name` is `null` the result is
 * equal to calling {@link Track#createCursorDevice}.
 *
 * @param name
          the name of the custom device selection cursor, for example "Primary", or `null` to refer to
          the device selection cursor in the arranger cursor track as shown in the Bitwig Studio user
          interface.
 * @param numSends
          the number of sends that are simultaneously accessible in nested channels.
 * @return {CursorDevice} the requested device selection cursor object
@see Track#createCursorDevice
 * @since API version 1
 */
Track.prototype.createCursorDevice = function(name, numSends) {};

/**
 * Returns a track bank with the given number of child tracks, sends and scenes. The track bank will only
 * have content if the connected track is a group track.<br/>
 * 
 * A track bank can be seen as a fixed-size window onto the list of tracks in the connected track group
 * including their sends and scenes, that can be scrolled in order to access different parts of the track
 * list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>
 * 
 * The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
 * strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
 * contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
 * The track bank returned by this function provides a convenient interface for controlling which tracks
 * are currently shown on the hardware.<br/>
 * 
 * Creating a track bank using this method will consider all tracks in the document, including effect
 * tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
 * you are only interested in tracks of a certain kind.
 *
 * @param numTracks
          the number of child tracks spanned by the track bank
 * @param numSends
          the number of sends spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @param hasFlatTrackList
          specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
Track.prototype.createTrackBank = function(numTracks, numSends, numScenes, hasFlatTrackList) {};

/**
 * Returns a track bank with the given number of child tracks, sends and scenes. Only audio tracks,
 * instrument tracks and hybrid tracks are considered. The track bank will only have content if the
 * connected track is a group track. For more information about track banks and the `bank pattern` in
 * general, see the documentation for {@link #createTrackBank}.
 *
 * @param numTracks
          the number of child tracks spanned by the track bank
 * @param numSends
          the number of sends spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @param hasFlatTrackList
          specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
Track.prototype.createMainTrackBank = function(numTracks, numSends, numScenes, hasFlatTrackList) {};

/**
 * Returns a track bank with the given number of child effect tracks and scenes. Only effect tracks are
 * considered. The track bank will only have content if the connected track is a group track. For more
 * information about track banks and the `bank pattern` in general, see the documentation for
 * {@link #createTrackBank}.
 *
 * @param numTracks
          the number of child tracks spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @param hasFlatTrackList
          specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.
 * @return {TrackBank} an object for bank-wise navigation of tracks, sends and scenes
 * @since API version 1
 */
Track.prototype.createEffectTrackBank = function(numTracks, numScenes, hasFlatTrackList) {};

/**
 * Returns an object that represents the master track of the connected track group. The returned object
 * will only have content if the connected track is a group track.
 *
 * @param numScenes
          the number of scenes for bank-wise navigation of the master tracks clip launcher slots.
 * @return {MasterTrack} an object representing the master track of the connected track group.
 * @since API version 1
 */
Track.prototype.createMasterTrack = function(numScenes) {};

/**
 * Returns a bank of sibling tracks with the given number of tracks, sends and scenes. For more information
 * about track banks and the `bank pattern` in general, see the documentation for {@link #createTrackBank}.
 *
 * @param numTracks
          the number of child tracks spanned by the track bank
 * @param numSends
          the number of sends spanned by the track bank
 * @param numScenes
          the number of scenes spanned by the track bank
 * @param shouldIncludeEffectTracks
          specifies whether effect tracks should be included
 * @param shouldIncludeMasterTrack
          specifies whether the master should be included
 * @return {TrackBank} an object for bank-wise navigation of sibling tracks
 * @since API version 1
 */
Track.prototype.createSiblingsTrackBank = function(numTracks, numSends, numScenes, shouldIncludeEffectTracks, shouldIncludeMasterTrack) {};

/**
 * {@link InsertionPoint} that can be used to insert after this track.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
Track.prototype.afterTrackInsertionPoint = function() {};

/**
 * {@link InsertionPoint} that can be used to insert after this track.
 *
 * @return {InsertionPoint}
 * @since API version 7
 */
Track.prototype.beforeTrackInsertionPoint = function() {};

/**
 * Creates an object that represent the parent track.
 *
 * @param {int} numSends
 * @param {int} numScenes
 * @return {Track}
 * @since API version 10
 */
Track.prototype.createParentTrack = function(numSends, numScenes) {};

/**
 * Routes the given noteInput directly to the track regardless of monitoring.
 *
 * @param {NoteInput} noteInput
 */
Track.prototype.addNoteSource = function(noteInput) {};

/**
 * Removes a routing operated by {@link #addNoteSource(NoteInput)}
 *
 * @param {NoteInput} noteInput
 */
Track.prototype.removeNoteSource = function(noteInput) {};

/**
 * Will create a new empty clip at or after slot index.
 * If necessary, a new scene will be created.
 * The new clip will be selected.
 *
 * @param {int} slotIndex
 * @param {int} lengthInBeats
 * @since API version 10
 */
Track.prototype.createNewLauncherClip = function(slotIndex, lengthInBeats) {};

/**
 * Will create a new empty clip at or after slot index.
 * It will use the default clip length.
 * If necessary, a new scene will be created.
 * The new clip will be selected.
 *
 * @param {int} slotIndex
 * @since API version 10
 */
Track.prototype.createNewLauncherClip = function(slotIndex) {};

/**
 * Will start recording a new clip at or after slot index.
 * If necessary, a new scene will be created.
 * The new clip will be selected.
 *
 * @param {int} slotIndex
 * @since API version 10
 */
Track.prototype.recordNewLauncherClip = function(slotIndex) {};

/**
 * Selects the slot at the given index.
 *
 * @param {int} slotIndex
 * @since API version 10
 */
Track.prototype.selectSlot = function(slotIndex) {};
/* API Version - 3.1.2 */

/**
 * An interface representing the transport section in Bitwig Studio.
 *
 * @since API version 1
 */
function Transport() {}

Transport.prototype = new ObjectProxy();
Transport.prototype.constructor = Transport;

/**
 * Starts playback in the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.play = function() {};

/**
 * Continues the playback in the Bitwig Studio transport.
 *
 * @since API version 10
 */
Transport.prototype.continuePlayback = function() {};

/**
 * Action that can be used to play the transport.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.playAction = function() {};

/**
 * Action that can be used to continue the transport.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.continuePlaybackAction = function() {};

/**
 * Stops playback in the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.stop = function() {};

/**
 * Action that can be used to stop the transport.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.stopAction = function() {};

/**
 * Toggles the transport playback state between playing and stopped.
 *
 * @since API version 1
 */
Transport.prototype.togglePlay = function() {};

/**
 * When the transport is stopped, calling this function starts transport playback, otherwise the transport
 * is first stopped and the playback is restarted from the last play-start position.
 *
 * @since API version 1
 */
Transport.prototype.restart = function() {};

/**
 * Action that can be used to restart the transport.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.restartAction = function() {};

/**
 * Starts recording in the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.record = function() {};

/**
 * Action that can be used to start recording
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.recordAction = function() {};

/**
 * Rewinds the Bitwig Studio transport to the beginning of the arrangement.
 *
 * @since API version 1
 */
Transport.prototype.rewind = function() {};

/**
 * Action that can be used to rewind the transport.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.rewindAction = function() {};

/**
 * Calling this function is equivalent to pressing the fast forward button in the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.fastForward = function() {};

/**
 * Action that can be used to fast forward the transport.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.fastForwardAction = function() {};

/**
 * When calling this function multiple times, the timing of those calls gets evaluated and causes
 * adjustments to the project tempo.
 *
 * @since API version 1
 */
Transport.prototype.tapTempo = function() {};

/**
 * Action that can be used to tap the tempo.
 *
 * @return {HardwareActionBindable}
 * @since API version 10
 */
Transport.prototype.tapTempoAction = function() {};

/**
 * Value that reports if the Bitwig Studio transport is playing.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isPlaying = function() {};

/**
 * Value that reports if the Bitwig Studio transport is recording.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isArrangerRecordEnabled = function() {};

/**
 * Value that reports if overdubbing is enabled in Bitwig Studio.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isArrangerOverdubEnabled = function() {};

/**
 * Value reports if clip launcher overdubbing is enabled in Bitwig Studio.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isClipLauncherOverdubEnabled = function() {};

/**
 * Value that reports the current automation write mode. Possible values are `"latch"`, `"touch"` or
 * `"write"`.
 *
 * @return {SettableEnumValue}
 * @since API version 2
 */
Transport.prototype.automationWriteMode = function() {};

/**
 * Value that reports if automation write is currently enabled for the arranger.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isArrangerAutomationWriteEnabled = function() {};

/**
 * Value that reports if automation write is currently enabled on the clip launcher.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isClipLauncherAutomationWriteEnabled = function() {};

/**
 * Value that indicates if automation override is currently on.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Transport.prototype.isAutomationOverrideActive = function() {};

/**
 * Value that indicates if the loop is currently active or not.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isArrangerLoopEnabled = function() {};

/**
 * Value that reports if punch-in is enabled in the Bitwig Studio transport.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isPunchInEnabled = function() {};

/**
 * Value that reports if punch-in is enabled in the Bitwig Studio transport.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isPunchOutEnabled = function() {};

/**
 * Value that reports if the metronome is enabled in Bitwig Studio.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isMetronomeEnabled = function() {};

/**
 * Value that reports if the metronome has tick playback enabled.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isMetronomeTickPlaybackEnabled = function() {};

/**
 * Value that reports the metronome volume.
 *
 * @return {SettableRangedValue}
 * @since API version 2
 */
Transport.prototype.metronomeVolume = function() {};

/**
 * Value that reports if the metronome is audible during pre-roll.
 *
 * @return {SettableBooleanValue}
 * @since API version 2
 */
Transport.prototype.isMetronomeAudibleDuringPreRoll = function() {};

/**
 * Value that reports the current pre-roll setting. Possible values are `"none"`, `"one_bar"`,
 * `"two_bars"`, or `"four_bars"`.
 *
 * @return {SettableEnumValue}
 * @since API version 2
 */
Transport.prototype.preRoll = function() {};

/**
 * Toggles the latch automation write mode in the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.toggleLatchAutomationWriteMode = function() {};

/**
 * Toggles the arranger automation write enabled state of the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.toggleWriteArrangerAutomation = function() {};

/**
 * Toggles the clip launcher automation write enabled state of the Bitwig Studio transport.
 *
 * @since API version 1
 */
Transport.prototype.toggleWriteClipLauncherAutomation = function() {};

/**
 * Resets any automation overrides in Bitwig Studio.
 *
 * @since API version 1
 */
Transport.prototype.resetAutomationOverrides = function() {};

/**
 * Switches playback to the arrangement sequencer on all tracks.
 *
 * @since API version 1
 */
Transport.prototype.returnToArrangement = function() {};

/**
 * Returns an object that provides access to the project tempo.
 *
 * @return {Parameter} the requested tempo value object
 * @since API version 1
 */
Transport.prototype.tempo = function() {};

/**
 * Increases the project tempo value by the given amount, which is specified relative to the given range.
 *
 * @param amount
          the new tempo value relative to the specified range. Values should be in the range
          [0..range-1].
 * @param range
          the range of the provided amount value
 * @since API version 1
 */
Transport.prototype.increaseTempo = function(amount, range) {};

/**
 * Returns an object that provides access to the transport position in Bitwig Studio.
 *
 * @return {SettableBeatTimeValue} a beat time object that represents the transport position
 * @since API version 1
 */
Transport.prototype.getPosition = function() {};

/**
 * Returns an object that provides access to the current transport position.
 *
 * @return {BeatTimeValue} beat-time value
 * @since API version 10
 */
Transport.prototype.playPosition = function() {};

/**
 * Returns an object that provides access to the current transport position in seconds.
 *
 * @return {DoubleValue} value (seconds)
 * @since API version 10
 */
Transport.prototype.playPositionInSeconds = function() {};

/**
 * Returns an object that provides access to the transport's play-start position. (blue triangle)
 *
 * @return {SettableBeatTimeValue} beat-time value
 * @since API version 10
 */
Transport.prototype.playStartPosition = function() {};

/**
 * Returns an object that provides access to the transport's play-start position in seconds. (blue triangle)
 *
 * @return {SettableDoubleValue} value (seconds)
 * @since API version 10
 */
Transport.prototype.playStartPositionInSeconds = function() {};

/**
 * Make the transport jump to the play-start position.
 *
 * @since API version 10
 */
Transport.prototype.launchFromPlayStartPosition = function() {};

/**
 * @return {HardwareActionBindable}
 */
Transport.prototype.launchFromPlayStartPositionAction = function() {};

/**
 * Make the transport jump to the play-start position.
 *
 * @since API version 10
 */
Transport.prototype.jumpToPlayStartPosition = function() {};

/**
 * @return {HardwareActionBindable}
 */
Transport.prototype.jumpToPlayStartPositionAction = function() {};

/**
 * Make the transport jump to the previous cue marker.
 *
 * @since API version 10
 */
Transport.prototype.jumpToPreviousCueMarker = function() {};

/**
 * @return {HardwareActionBindable}
 */
Transport.prototype.jumpToPreviousCueMarkerAction = function() {};

/**
 * Make the transport jump to the previous cue marker.
 *
 * @since API version 10
 */
Transport.prototype.jumpToNextCueMarker = function() {};

/**
 * @return {HardwareActionBindable}
 */
Transport.prototype.jumpToNextCueMarkerAction = function() {};

/**
 * Sets the transport playback position to the given beat time value.
 *
 * @param beats
          the new playback position in beats
 * @since API version 1
 */
Transport.prototype.setPosition = function(beats) {};

/**
 * Increases the transport position value by the given number of beats, which is specified relative to the
 * given range.
 *
 * @param beats
          the beat time value that gets added to the current transport position. Values have double
          precision and can be positive or negative.
 * @param snap
          when `true` the actual new transport position will be quantized to the beat grid, when `false`
          the position will be increased exactly by the specified beat time
 * @since API version 1
 */
Transport.prototype.incPosition = function(beats, snap) {};

/**
 * Returns an object that provides access to the punch-in position in the Bitwig Studio transport.
 *
 * @return {SettableBeatTimeValue} a beat time object that represents the punch-in position
 * @since API version 1
 */
Transport.prototype.getInPosition = function() {};

/**
 * Returns an object that provides access to the punch-out position in the Bitwig Studio transport.
 *
 * @return {SettableBeatTimeValue} a beat time object that represents the punch-out position
 * @since API version 1
 */
Transport.prototype.getOutPosition = function() {};

/**
 * Returns an object that provides access to the cross-fader, used for mixing between A/B-channels as
 * specified on the Bitwig Studio tracks.
 *
 * @return {Parameter}
 * @since API version 5
 */
Transport.prototype.crossfade = function() {};

/**
 * Returns an object that provides access to the transport time signature.
 *
 * @return {TimeSignatureValue} the time signature value object that represents the transport time signature.
 * @since API version 5
 */
Transport.prototype.timeSignature = function() {};

/**
 * Value that reports the current clip launcher post recording action. Possible values are `"off"`,
 * `"play_recorded"`, `"record_next_free_slot"`, `"stop"`, `"return_to_arrangement"`,
 * `"return_to_previous_clip"` or `"play_random"`.
 *
 * @return {SettableEnumValue}
 * @since API version 2
 */
Transport.prototype.clipLauncherPostRecordingAction = function() {};

/**
 * Returns an object that provides access to the clip launcher post recording time offset.
 *
 * @return {SettableBeatTimeValue} a beat time object that represents the post recording time offset
 * @since API version 1
 */
Transport.prototype.getClipLauncherPostRecordingTimeOffset = function() {};

/**
 * Setting for the default launch quantization.
 * 
 * Possible values are `"none"`, `"8"`, `"4"`, `"2"`, `"1"`, `"1/2"`, `"1/4"`, `"1/8"`, `"1/16"`.
 *
 * @return {SettableEnumValue}
 * @since API version 8
 */
Transport.prototype.defaultLaunchQuantization = function() {};
/* API Version - 3.1.2 */

function UsbConfigurationMatcher() {}

/**
 * @return {UsbInterfaceMatcher[]}
 */
UsbConfigurationMatcher.prototype.getInterfaceMatchers = function() {};
/* API Version - 3.1.2 */

/**
 * Defines a USB device that is available for communication.
 *
 * @since API version 7
 */
function UsbDevice() {}

UsbDevice.prototype = new HardwareDevice();
UsbDevice.prototype.constructor = UsbDevice;

/**
 * The {@link UsbDeviceMatcher} that was provided by the controller for identifying this device.
 *
 * @return {UsbDeviceMatcher}
 */
UsbDevice.prototype.deviceMatcher = function() {};

/**
 * The list of {@link UsbInterface}s that have been opened for this device.
 *
 * @return {java.util.List<UsbInterface>}
 */
UsbDevice.prototype.ifaces = function() {};

/**
 * The {@link UsbInterface} that was claimed using the {@link UsbInterfaceMatcher} defined at the
 * corresponding index in the {@link UsbDeviceMatcher}.
 *
 * @param {int} index
 * @return {UsbInterface}
 */
UsbDevice.prototype.iface = function(index) {};
/* API Version - 3.1.2 */

/**
 * Defines information needed to identify suitable USB devices for use by an extension.
 *
 * @since API version 7
 */
function UsbDeviceMatcher() {}

/**
 * An expression that can be used on the USB device descriptor to decide if the device matches.
 *           Variables in the expression can refer to the following fields of the device descriptor:
 * 
 *           - bDeviceClass - bDeviceSubClass - bDeviceProtocol - idVendor - idProduct
 * 
 *           For example to match a device that has vendor id 0x10 product id 0x20 the expression would be:
 * 
 *           "idVendor == 0x10 && idProduct == 0x20"
 *
 * @return {string}
 */
UsbDeviceMatcher.prototype.getExpression = function() {};

/**
 * Object that tries to match a configuration on the device that it can use.
 *
 * @return {UsbConfigurationMatcher}
 */
UsbDeviceMatcher.prototype.getConfigurationMatcher = function() {};
/* API Version - 3.1.2 */

function UsbEndpointMatcher() {}

/**
 * @return {UsbTransferDirection}
 */
UsbEndpointMatcher.prototype.getDirection = function() {};

/**
 * @return {UsbTransferType}
 */
UsbEndpointMatcher.prototype.getTransferType = function() {};
/* API Version - 3.1.2 */

function UsbInputPipe() {}

UsbInputPipe.prototype = new UsbPipe();
UsbInputPipe.prototype.constructor = UsbInputPipe;
/* API Version - 3.1.2 */

function UsbInterface() {}

/**
 * The {@link UsbInterfaceMatcher} that was provided by the controller for identifying this device.
 *
 * @return {UsbInterfaceMatcher}
 */
UsbInterface.prototype.interfaceMatcher = function() {};

/**
 * The list of pipes that have been opened for this interface.
 *
 * @return {java.util.List<UsbPipe>}
 */
UsbInterface.prototype.pipes = function() {};

/**
 * @param {int} index
 * @return {UsbPipe}
 */
UsbInterface.prototype.pipe = function(index) {};

/**
 * @return {int}
 */
UsbInterface.prototype.pipeCount = function() {};
/* API Version - 3.1.2 */

function UsbInterfaceMatcher() {}

/**
 * @return {UsbEndpointMatcher[]}
 */
UsbInterfaceMatcher.prototype.getEndpointMatchers = function() {};
/* API Version - 3.1.2 */

function UsbMatcher() {}

/**
 * @return {string}
 */
UsbMatcher.prototype.getExpression = function() {};

/**
 * @return {int}
 */
UsbMatcher.prototype.getMatchOccurrence = function() {};
/* API Version - 3.1.2 */

function UsbOutputPipe() {}

UsbOutputPipe.prototype = new UsbPipe();
UsbOutputPipe.prototype.constructor = UsbOutputPipe;
/* API Version - 3.1.2 */

/**
 * Defines a pipe for talking to an endpoint on a USB device.
 *
 * @since API version 7
 */
function UsbPipe() {}

UsbPipe.prototype = new Pipe();
UsbPipe.prototype.constructor = UsbPipe;

/**
 * The device this endpoint is on.
 *
 * @return {UsbDevice}
 * @since API version 7
 */
UsbPipe.prototype.device = function() {};

/**
 * The {@link UsbEndpointMatcher} that was provided by the controller for identifying the endpoint to use
 * for communication.
 *
 * @return {UsbEndpointMatcher}
 */
UsbPipe.prototype.endpointMatcher = function() {};

/**
 * The endpoint address on the device that this endpoint is for.
 *
 * @return {byte}
 * @since API version 7
 */
UsbPipe.prototype.endpointAddress = function() {};

/**
 * {@link UsbTransferDirection} for this pipe.
 *
 * @return {UsbTransferDirection}
 */
UsbPipe.prototype.direction = function() {};

/**
 * The {@link UsbTransferType} type that this pipe uses for communicating with the USB device.
 *
 * @return {UsbTransferType}
 */
UsbPipe.prototype.transferType = function() {};
/* API Version - 3.1.2 */

UsbTransferDirection = {
	IN: 0,
	OUT: 1,
	/**
	 * @param {byte} bEndpointAddress
	 * @return {UsbTransferDirection}
	 */
	UsbTransferDirection.prototype.getForEndpointAddress = function(bEndpointAddress) {};

};/* API Version - 3.1.2 */

/**
 * Status of an USB transfer.
 *
 * @newSince API version 7
 */
UsbTransferStatus = {
	Completed: 0,
	Error: 1,
	TimedOut: 2,
	Cancelled: 3,
	Stall: 4,
	NoDevice: 5,
	Overflow: 6,
};/* API Version - 3.1.2 */

UsbTransferType = {
	BULK: 0,
	INTERRUPT: 1,
};/* API Version - 3.1.2 */

/**
 * Instances of this interface represent a bank of custom controls that can be manually learned to device
 * parameters by the user.
 *
 * @since API version 1
 */
function UserControlBank() {}

/**
 * Gets the user control at the given bank index.
 *
 * @param index
          the index of the control within the bank
 * @return {Parameter} the requested user control object
 * @since API version 1
 */
UserControlBank.prototype.getControl = function(index) {};
/* API Version - 3.1.2 */

function ValueChangedCallback() {}

ValueChangedCallback.prototype = new Callback();
ValueChangedCallback.prototype.constructor = ValueChangedCallback;
/* API Version - 3.1.2 */

/**
 * The common interface that is shared by all value objects in the controller API.
 *
 * @since API version 1
 */
function Value() {}

Value.prototype = new Subscribable();
Value.prototype.constructor = Value;

/**
 * Marks this value as being of interest to the driver. This can only be called once during the driver's
 * init method. A value that is of interest to the driver can be obtained using the value's get method. If
 * a value has not been marked as interested then an error will be reported if the driver attempts to get
 * the current value. Adding an observer to a value will automatically mark this value as interested.
 *
 * @since API version 2
 */
Value.prototype.markInterested = function() {};

/**
 * Registers an observer that reports the current value.
 *
 * @param callback
          a callback function that receives a single parameter
 * @since API version 1
 */
Value.prototype.addValueObserver = function(callback) {};
