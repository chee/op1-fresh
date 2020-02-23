/** Something that can be bound to an {@link AbsoluteHardwareControl} and can respond to the user input (such
as user moving a slider up or down) in a meaningful way. */
declare interface AbsoluteHardwareControlBindable extends HardwareBindable {

	/** Binds this target to the supplied hardware control so that when the user moves the hardware control this
target will respond in a meaningful way.

When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
it. */
	addBinding(hardwareControl: AbsoluteHardwareControl): AbsoluteHardwareControlBinding

	/** Binds this target to the supplied hardware control so that when the user moves the hardware control this
target will respond in a meaningful way. This target will be adjusted within the supplied normalized
range.

When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
it. */
	addBindingWithRange(hardwareControl: AbsoluteHardwareControl, minNormalizedValue: number, maxNormalizedValue: number): AbsoluteHardwareControlBinding
}

/** Represents a hardware control that can input and absolute value (for example, a slider, knob or foot
pedal). */
declare interface AbsoluteHardwareControl extends ContinuousHardwareControl<AbsoluteHardwareControlBinding> {

	/** Sets the {@link AbsoluteHardwareValueMatcher} that can be used to detect when the user adjusts the
hardware control's value. */
	setAdjustValueMatcher(matcher: AbsoluteHardwareValueMatcher): void

	/** The current value of this hardware control (0..1) */
	value(): DoubleValue

	/** The value of the target that this hardware control has been bound to (0..1). */
	targetValue(): DoubleValue

	/** Can be called from the {@link #targetValue()} changed callback to check if this control is responsible
for changing the target value or not. */
	isUpdatingTargetValue(): BooleanValue

	/** Value that indicates if this hardware control has a target value that it changes or not. */
	hasTargetValue(): BooleanValue

	/** Determines if this hardware control should immediately take over the parameter it is bound to rather
than respecting the user's current take over mode.

This is useful for motorized sliders for example, where the slider is already at the value of the bound
parameter. */
	disableTakeOver(): void

	/** Adds a new binding from this hardware control to the supplied target. */
	addBindingWithRange(target: AbsoluteHardwareControlBindable, minNormalizedValue: number, maxNormalizedValue: number): AbsoluteHardwareControlBinding

	/** Convenience methods that ensures there is only a single binding to the supplied target. This is
equivalent to calling {@link #clearBindings()} and then
{@link #addBindingWithRange(AbsoluteHardwareControlBindable, double, double)} */
	setBindingWithRange(target: AbsoluteHardwareControlBindable, minNormalizedValue: number, maxNormalizedValue: number): AbsoluteHardwareControlBinding
}

/** Represents a binding from an {@link AbsoluteHardwareControl} to some target. */
declare interface AbsoluteHardwareControlBinding extends HardwareBindingWithRange {
}

/** Represents a physical hardware knob that inputs an absolute value. */
declare interface AbsoluteHardwareKnob extends AbsoluteHardwareControl {
}

/** Defines a means of recognizing when an absolute value is input by the user (for example, when moving a
slider or turning a knob based on some MIDI message). This matcher can then be set on an
{@link AbsoluteHardwareControl} using
{@link AbsoluteHardwareControl#setAdjustValueMatcher(AbsoluteHardwareValueMatcher)}. */
declare interface AbsoluteHardwareValueMatcher extends ContinuousHardwareValueMatcher {
}

/** Instances of this interface represent actions in Bitwig Studio, such as commands that can be launched from
the main menu or via keyboard shortcuts.

To receive the list of all actions provided by Bitwig Studio call {@link Application#getActions()}. The
list of actions that belong to a certain category can be queried by calling
{@link ActionCategory#getActions()}. Access to specific actions is provided in
{@link Application#getAction(String)}. */
declare interface Action extends HardwareActionBindable {

	/** Returns a string the identifies this action uniquely. */
	getId(): string

	/** Returns the name of this action. */
	getName(): string

	/** Returns the category of this action. */
	getCategory(): ActionCategory

	/** Returns the text that is displayed in menu items associated with this action. */
	getMenuItemText(): string

	/** Invokes the action. */
	invoke(): void
}

/** Instances of this interface are used to categorize actions in Bitwig Studio. The list of action categories
provided by Bitwig Studio can be queried by calling {@link Application#getActionCategories()}. To receive a
specific action category call {@link Application#getActionCategory(String)}. */
declare interface ActionCategory {

	/** Returns a string the identifies this action category uniquely. */
	getId(): string

	/** Returns the name of this action category. */
	getName(): string

	/** Lists all actions in this category. */
	getActions(): Action[]
}

/** An interface that provides methods for accessing the most common global application commands.<br/>

In addition, functions are provided for accessing any application action in a generic and categorized way,
pretty much as displayed in the Bitwig Studio commander dialog (see {@link #getActions()},
{@link #getAction(String)}, {@link #getActionCategories()}), {@link #getActionCategory(String)}).<br/>

To receive an instance of the application interface call {@link ControllerHost#createApplication()}. */
declare interface Application {

	/** Creates a new audio track at the given position. */
	createAudioTrack(

		/** the index within the list of main tracks where the new track should be inserted, or `-1` in
          case the track should be inserted at the end of the list. Values outside the valid range will
          get pinned to the valid range, so the actual position might be different from the provided
          parameter value.*/
		position: number): void

	/** Creates a new instrument track at the given position. */
	createInstrumentTrack(

		/** the index within the list of main tracks where the new track should be inserted, or `-1` in
          case the track should be inserted at the end of the list. Values outside the valid range will
          get pinned to the valid range, so the actual position might be different from the provided
          parameter value.*/
		position: number): void

	/** Creates a new effect track at the given position. */
	createEffectTrack(

		/** the index within the list of effect tracks where the new track should be inserted, or `-1` in
          case the track should be inserted at the end of the list. Values outside the valid range will
          get pinned to the valid range, so the actual position might be different from the provided
          parameter value.*/
		position: number): void

	/** Returns a list of actions that the application supports. Actions are commands in Bitwig Studio that are
typically accessible through menus or keyboard shortcuts.

Please note that many of the commands encapsulated by the reported actions are also accessible through
other (probably more convenient) interfaces methods of the API. In contrast to that, this method
provides a more generic way to find available application functionality. */
	getActions(): Action[]

	/** Returns the action for the given action identifier. For a list of available actions, see
{@link #getActions()}. */
	getAction(

		/** the action identifier string, must not be `null`*/
		id: string): Action

	/** Returns a list of action categories that is used by Bitwig Studio to group actions into categories. */
	getActionCategories(): ActionCategory[]

	/** Returns the action category associated with the given identifier. For a list of available action
categories, see {@link #getActionCategories()}. */
	getActionCategory(

		/** the category identifier string, must not be `null`*/
		id: string): ActionCategory

	/** Activates the audio engine in Bitwig Studio. */
	activateEngine(): void

	/** Deactivates the audio engine in Bitwig Studio. */
	deactivateEngine(): void

	/** Value that reports whether an audio engine is active or not. */
	hasActiveEngine(): BooleanValue

	/** Value that reports the name of the current project. */
	projectName(): StringValue

	/** Switches to the next project tab in Bitwig Studio. */
	nextProject(): void

	/** Switches to the previous project tab in Bitwig Studio. */
	previousProject(): void

	/** Set BitwigStudio to navigate into the group. */
	navigateIntoTrackGroup(track: Track): void

	/** Set BitwigStudio to navigate into the parent group. */
	navigateToParentTrackGroup(): void

	/** Sends an undo command to Bitwig Studio. */
	undo(): void
	undoAction(): HardwareActionBindable

	/** Sends a redo command to Bitwig Studio. */
	redo(): void
	redoAction(): HardwareActionBindable

	/** Switches the Bitwig Studio user interface to the panel layout with the given name. The list of available
panel layouts depends on the active display profile. */
	setPanelLayout(

		/** the name of the new panel layout*/
		panelLayout: string): void

	/** Switches to the next panel layout of the active display profile in Bitwig Studio. */
	nextPanelLayout(): void

	/** Switches to the previous panel layout of the active display profile in Bitwig Studio. */
	previousPanelLayout(): void

	/** Value that reports the name of the active panel layout. */
	panelLayout(): StringValue

	/** Value that reports the name of the active display profile. */
	displayProfile(): StringValue

	/** Toggles the visibility of the inspector panel. */
	toggleInspector(): void

	/** Toggles the visibility of the device chain panel. */
	toggleDevices(): void

	/** Toggles the visibility of the mixer panel. */
	toggleMixer(): void

	/** Toggles the visibility of the note editor panel. */
	toggleNoteEditor(): void

	/** Toggles the visibility of the automation editor panel. */
	toggleAutomationEditor(): void

	/** Toggles the visibility of the browser panel. */
	toggleBrowserVisibility(): void

	/** Shows the previous detail panel (note editor, device, automation). */
	previousSubPanel(): void

	/** Shows the next detail panel (note editor, device, automation). */
	nextSubPanel(): void

	/** Equivalent to an Arrow-Left key stroke on the computer keyboard. The concrete functionality depends on
the current keyboard focus in Bitwig Studio. */
	arrowKeyLeft(): void

	/** Equivalent to an Arrow-Right key stroke on the computer keyboard. The concrete functionality depends on
the current keyboard focus in Bitwig Studio. */
	arrowKeyRight(): void

	/** Equivalent to an Arrow-Up key stroke on the computer keyboard. The concrete functionality depends on the
current keyboard focus in Bitwig Studio. */
	arrowKeyUp(): void

	/** Equivalent to an Arrow-Down key stroke on the computer keyboard. The concrete functionality depends on
the current keyboard focus in Bitwig Studio. */
	arrowKeyDown(): void

	/** Equivalent to an Enter key stroke on the computer keyboard. The concrete functionality depends on the
current keyboard focus in Bitwig Studio. */
	enter(): void

	/** Equivalent to an Escape key stroke on the computer keyboard. The concrete functionality depends on the
current keyboard focus in Bitwig Studio. */
	escape(): void

	/** Selects all items according the current selection focus in Bitwig Studio. */
	selectAll(): void
	selectAllAction(): HardwareActionBindable

	/** Deselects any items according the current selection focus in Bitwig Studio. */
	selectNone(): void
	selectNoneAction(): HardwareActionBindable

	/** Selects the previous item in the current selection. */
	selectPrevious(): void
	selectPreviousAction(): HardwareActionBindable

	/** Selects the next item in the current selection. */
	selectNext(): void
	selectNextAction(): HardwareActionBindable

	/** Selects the first item in the current selection. */
	selectFirst(): void
	selectFirstAction(): HardwareActionBindable

	/** Selects the last item in the current selection. */
	selectLast(): void
	selectLastAction(): HardwareActionBindable

	/** Cuts the selected items in Bitwig Studio if applicable. */
	cut(): void
	cutAction(): HardwareActionBindable

	/** Copies the selected items in Bitwig Studio to the clipboard if applicable. */
	copy(): void
	copyAction(): HardwareActionBindable

	/** Pastes the clipboard contents into the current selection focus in Bitwig Studio if applicable. */
	paste(): void
	pasteAction(): HardwareActionBindable

	/** Duplicates the active selection in Bitwig Studio if applicable. */
	duplicate(): void
	duplicateAction(): HardwareActionBindable

	/** Deletes the selected items in Bitwig Studio if applicable. Originally this function was called `delete`
(Bitwig Studio 1.0). But as `delete` is reserved in JavaScript this function got renamed to `remove` in
Bitwig Studio 1.0.9. */
	remove(): void
	removeAction(): HardwareActionBindable

	/** Opens a text input field in Bitwig Studio for renaming the selected item. */
	rename(): void

	/** Zooms in one step into the currently focused editor of the Bitwig Studio user interface. */
	zoomIn(): void
	zoomInAction(): HardwareActionBindable

	/** Zooms out one step in the currently focused editor of the Bitwig Studio user interface. */
	zoomOut(): void
	zoomOutAction(): HardwareActionBindable

	/** Adjusts the zoom level of the currently focused editor so that it matches the active selection. */
	zoomToSelection(): void
	zoomToSelectionAction(): HardwareActionBindable

	/** Toggles between zoomToSelection and zoomToFit. */
	zoomToSelectionOrAll(): void
	zoomToSelectionOrAllAction(): HardwareActionBindable

	/** Toggles between zoomToSelection and the last śet zoom level. */
	zoomToSelectionOrPrevious(): void
	zoomToSelectionOrPreviousAction(): HardwareActionBindable

	/** Adjusts the zoom level of the currently focused editor so that all content becomes visible. */
	zoomToFit(): void
	zoomToFitAction(): HardwareActionBindable

	/** Moves the panel focus to the panel on the left of the currently focused panel. */
	focusPanelToLeft(): void

	/** Moves the panel focus to the panel right to the currently focused panel. */
	focusPanelToRight(): void

	/** Moves the panel focus to the panel above the currently focused panel. */
	focusPanelAbove(): void

	/** Moves the panel focus to the panel below the currently focused panel. */
	focusPanelBelow(): void

	/** Toggles between full screen and windowed user interface. */
	toggleFullScreen(): void

	/** Returns the record quantization grid setting from the preferences.
Possible values are "OFF", "1/32", "1/16", "1/8", "1/4". */
	recordQuantizationGrid(): SettableEnumValue

	/** Returns a settable value to choose if the record quantization should quantize note length. */
	recordQuantizeNoteLength(): SettableBooleanValue
}

/** Proxy to an arpeggiator component. */
declare interface Arpeggiator extends ObjectProxy {

	/** Returns an object to configure the arpeggiator mode.
Possible values:
 - all
 - up
 - up-down
 - up-then-down
 - down
 - down-up
 - down-then-up
 - flow
 - random
 - converge-up
 - converge-down
 - diverge-up
 - diverge-down
 - thumb-up
 - thumb-down
 - pinky-up
 - pinky-down */
	mode(): SettableEnumValue

	/** Returns an object to configure the range in octaves.
The range is between 0 and 8. */
	octaves(): SettableIntegerValue

	/** Returns an object to enable or disable the note repeat component. */
	isEnabled(): SettableBooleanValue

	/** If true the arpeggiator will not try to sync to the transport. */
	isFreeRunning(): SettableBooleanValue

	/** Return an object to configure the note repeat to use shuffle or not. */
	shuffle(): SettableBooleanValue

	/** Returns an object to configure the note repeat rate in beats. */
	rate(): SettableDoubleValue

	/** Returns an object to configure the note length, expressed as a ratio of the period.
Must be between 1/32 and 1. */
	gateLength(): SettableDoubleValue

	/** Will use the note pressure to determine the velocity of arpeggiated notes. */
	usePressureToVelocity(): SettableBooleanValue

	/** Release all notes being played. */
	releaseNotes(): void
}

/** An interface representing various commands which can be performed on the Bitwig Studio arranger.<br/>

To receive an instance of the application interface call {@link ControllerHost#createArranger}. */
declare interface Arranger {

	/** Gets an object that allows to enable/disable arranger playback follow. Observers can be registered on
the returned object for receiving notifications when the setting switches between on and off. */
	isPlaybackFollowEnabled(): SettableBooleanValue

	/** Gets an object that allows to control the arranger track height. Observers can be registered on the
returned object for receiving notifications when the track height changes. */
	hasDoubleRowTrackHeight(): SettableBooleanValue

	/** Gets an object that allows to show/hide the cue markers in the arranger panel. Observers can be
registered on the returned object for receiving notifications when the cue marker lane switches between
shown and hidden. */
	areCueMarkersVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the clip launcher in the arranger panel. Observers can be
registered on the returned object for receiving notifications when the clip launcher switches between
shown and hidden. */
	isClipLauncherVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the timeline in the arranger panel. Observers can be registered
on the returned object for receiving notifications when the timeline switches between shown and hidden. */
	isTimelineVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the track input/output choosers in the arranger panel. Observers
can be registered on the returned object for receiving notifications when the I/O section switches
between shown and hidden. */
	isIoSectionVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the effect tracks in the arranger panel. Observers can be
registered on the returned object for receiving notifications when the effect track section switches
between shown and hidden. */
	areEffectTracksVisible(): SettableBooleanValue

	/** Returns an object that provides access to a bank of successive cue markers using a window configured with
the given size, that can be scrolled over the list of markers. */
	createCueMarkerBank(

		/** the number of simultaneously accessible items*/
		size: number): CueMarkerBank
}

/** Callback that is notified when an asynchronous transfer has completed. */
declare interface AsyncTransferCompledCallback {

	/** Called upon completion of an asynchronous read. */
	asyncTransferCompleted(amountTransferred: number): void
}

declare interface AutoDetectionMidiPortNames {
	getInputNames(): String[]
	getOutputNames(): String[]
}

declare interface AutoDetectionMidiPortNamesList {
	add(inputNames: String[], outputNames: String[]): void
	getPortNames(): AutoDetectionMidiPortNames[]
	getCount(): number
	getPortNamesAt(index: number): AutoDetectionMidiPortNames
}

/** A bank provides access to a range of items in Bitwig Studio. Instances of a bank are configured with a
fixed number of items and represent an excerpt of a larger list of items. Various methods are provided for
scrolling to different sections of the item list. It basically acts like a window moving over the list of
underlying items. */
declare interface Bank<ItemType> extends ObjectProxy, Scrollable {

	/** The fixed size of this bank.
This will be initially equal to the capacity of the Bank. */
	getSizeOfBank(): number

	/** The maximum number of items in the bank which is defined when the bank is initially created. */
	getCapacityOfBank(): number

	/** Sets the size of this bank */
	setSizeOfBank(

		/** number of items in the bank that has to be greater than 0 and less or equal to the capacity of the bank.*/
		size: number): void

	/** Gets the item in the bank at the supplied index. The index must be >= 0 and < {@link #getSizeOfBank()}. */
	getItemAt(index: number): ItemType

	/** Value that reports the underlying total item count (not the number of items available in the bank
window). */
	itemCount(): IntegerValue

	/** An integer value that defines the location of the cursor that this bank is following. If there is no
cursor or the cursor is not within the bank then the value is -1. */
	cursorIndex(): SettableIntegerValue
}

/** Defines a formatter for a beat time that can convert a beat time to a string for display to the user. */
declare interface BeatTimeFormatter {

	/** Formats the supplied beat time as a string in the supplied time signature. */
	formatBeatTime(beatTime: number, isAbsolute: boolean, timeSignatureNumerator: number, timeSignatureDenominator: number, timeSignatureTicks: number): string
}

/** Instances of this interface represent beat time values.

Beat time values are double-precision number representing the number of quarter notes, regardless of time-signature. */
declare interface BeatTimeValue extends DoubleValue {

	/** Gets the current beat time formatted according to the default beat time formatter. */
	getFormatted(): string
}

/** Represents a bitmap image which can be painted via {@link #render(Renderer)}. */
declare interface Bitmap extends Image {
	getWidth(): number
	getHeight(): number
	getFormat(): any
	getMemoryBlock(): MemoryBlock

	/** Call this method to start painting the bitmap.
This method will take care of disposing allocated patterns during the rendering. */
	render(renderer: Renderer): void

	/** Call this method to show a window which displays the bitmap.
You should see this as a debug utility rather than a Control Surface API feature. */
	showDisplayWindow(): void

	/** Updates the display window title. */
	setDisplayWindowTitle(title: string): void

	/** Saves the image as a PPM file. */
	saveToDiskAsPPM(

		/** the location of the target file.*/
		path: string): void
}

/** Represents an output value shown on some hardware (for example, if an LED is on or off). */
declare interface BooleanHardwareProperty extends HardwareProperty {

	/** Gets the current value. This is the value that should be sent to the hardware to be displayed. */
	currentValue(): boolean

	/** The value that was last sent to the hardware. */
	lastSentValue(): boolean

	/** Specifies a callback that should be called with the value that needs to be sent to the hardware. This
callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
from the flush method). */
	onUpdateHardware(sendValueConsumer: (bool: boolean) => any): void

	/** Sets the current value. */
	setValue(value: boolean): void

	/** Sets the current value from a {@link BooleanSupplier} that supplies the latest value. */
	setValueSupplier(supplier: (...args: any[]) => boolean): void
}

declare interface BooleanValue extends Value<BooleanValueChangedCallback> {

	/** Gets the current value. */
	get(): boolean
	getAsBoolean(): boolean
}

/** Instances of this interface are used to navigate a column in the Bitwig Studio browser. */
declare interface BrowserColumn {

	/** Value that reports the underlying total count of column entries (not the size of the column window). */
	entryCount(): IntegerValue

	/** Returns the cursor item, which can be used to navigate over the list of entries. */
	createCursorItem(): BrowserItem

	/** Returns an object that provides access to a bank of successive entries using a window configured with
the given size, that can be scrolled over the list of entries. */
	createItemBank(

		/** the number of simultaneously accessible items*/
		size: number): BrowserItemBank
}

/** Instances of this interface are used to navigate a filter column in the Bitwig Studio browser. */
declare interface BrowserFilterColumn {

	/** Returns the filter item that represents the top-level all/any/everything wildcard item. */
	getWildcardItem(): BrowserFilterItem

	/** Returns the cursor filter item, which can be used to navigate over the list of entries. */
	createCursorItem(): BrowserFilterItem

	/** Returns an object that provides access to a bank of successive entries using a window configured with
the given size, that can be scrolled over the list of entries. */
	createItemBank(

		/** the number of simultaneously accessible items*/
		size: number): BrowserFilterItemBank

	/** Value that reports the name of the filter column. */
	name(): StringValue
}

/** Instances of this interface represent entries in a browser filter column. */
declare interface BrowserFilterItem {

	/** Value that reports the hit count of the filter item. */
	hitCount(): IntegerValue
}

/** Instances of this interface are used to navigate a filter column in the Bitwig Studio browser. */
declare interface BrowserFilterItemBank {
}

/** Instances of this interface represent entries in a browser filter column. */
declare interface BrowserItem {

	/** Value that reports the name of the browser item. */
	name(): StringValue

	/** Returns an object that provides access to the selected state of the browser item. */
	isSelected(): SettableBooleanValue
}

/** Instances of this interface are used to navigate a column in the Bitwig Studio browser. */
declare interface BrowserItemBank {
}

/** Instances of this interface are used to navigate a results column in the Bitwig Studio browser. */
declare interface BrowserResultsColumn {

	/** Returns the cursor result item, which can be used to navigate over the list of entries. */
	createCursorItem(): BrowserResultsItem

	/** Returns an object that provides access to a bank of successive entries using a window configured with
the given size, that can be scrolled over the list of entries. */
	createItemBank(

		/** the number of simultaneously accessible items*/
		size: number): BrowserResultsItemBank
}

/** Instances of this interface represent entries in a browser results column. */
declare interface BrowserResultsItem {
}

/** Instances of this interface are used to navigate the results column in the Bitwig Studio browser. */
declare interface BrowserResultsItemBank {
}

/** This interface represents a chain selector device which can be:
- instrument selector
- effect selector */
declare interface ChainSelector extends ObjectProxy, Cursor {

	/** The index of the active chain in the chain selector.
In case the chain selector has no chains or the value is not connected to the chain selector,
then the value will be 0. */
	activeChainIndex(): SettableIntegerValue

	/** The number of chains in the chain selector. */
	chainCount(): IntegerValue

	/** The active device layer. */
	activeChain(): DeviceLayer

	/** Cycle to the next chain.
If the current active chain is the last one, then moves to the first one. */
	cycleNext(): void

	/** Cycle to the previous chain.
If the current active chain the first one, then moves to the last one. */
	cyclePrevious(): void
}

declare interface SendBank extends Bank<Send> {}

/** This interface defines access to the common attributes and operations of channels, such as tracks or nested
device channels. */
declare interface Channel extends DeviceChain, DeleteableObject {

	/** Returns an object that represents the activated state of the channel. */
	isActivated(): SettableBooleanValue

	/** Gets a representation of the channels volume control. */
	volume(): Parameter

	/** Gets a representation of the channels pan control. */
	pan(): Parameter

	/** Gets a representation of the channels mute control. */
	mute(): SettableBooleanValue

	/** Gets a representation of the channels solo control. */
	solo(): SoloValue

	/** True if the current channel is being muted by an other channel with solo on. */
	isMutedBySolo(): BooleanValue

	/** Registers an observer for the VU-meter of this track. */
	addVuMeterObserver(

		/** the number of steps to which the reported values should be scaled. For example a range of 128
          would cause the callback to be called with values between 0 and 127.*/
		range: number,

		/** 0 for left channel, 1 for right channel, -1 for the sum of both*/
		channel: number,

		/** when `true` the peak value is reported, otherwise the RMS value*/
		peak: boolean,

		/** a callback function that takes a single numeric argument. The value is in the range
          [0..range-1].*/
		callback: (value: number) => void): void

	/** Returns an array of the playing notes. */
	playingNotes(): PlayingNoteArrayValue

	/** Get the color of the channel. */
	color(): SettableColorValue

	/** Gets a {@link SendBank} that can be used to navigate the sends of this channel. */
	sendBank(): SendBank

	/** Duplicates the track. */
	duplicate(): void

	/** Selects the device chain in the Bitwig Studio mixer, in case it is a selectable object. */
	selectInMixer(): void

	/** Registers an observer that reports if the device chain is selected in Bitwig Studio mixer. */
	addIsSelectedInMixerObserver(

		/** a callback function that takes a single boolean parameter.*/
		callback: (isSelectedInMixer: boolean) => void): void

	/** Tries to scroll the contents of the arrangement editor so that the channel becomes visible. */
	makeVisibleInArranger(): void

	/** Tries to scroll the contents of the mixer panel so that the channel becomes visible. */
	makeVisibleInMixer(): void
}

/** A channel bank provides access to a range of channels in Bitwig Studio, such as tracks or device layers.
Instances of channel bank are typically configured with support for a fixed number of channels and
represent an excerpt of a larger list of channels. Various methods are provided for scrolling to different
sections of the channel list. It basically acts like a window moving over the list of channels. */
declare interface ChannelBank<ChannelType extends Channel> extends ObjectProxy, Bank<ChannelType> {

	/** Sets the step size used for scrolling the channel bank. */
	setChannelScrollStepSize(

		/** the step size used for scrolling. Default is `1`.*/
		stepSize: number): void

	/** Value that reports if the channel bank can be scrolled further down. */
	canScrollChannelsUp(): BooleanValue

	/** Value that reports if the channel bank can be scrolled further down. */
	canScrollChannelsDown(): BooleanValue

	/** Value that reports the underlying total channel count (not the number of channels available in the bank
window). */
	channelCount(): IntegerValue
}

/** An interface that provides access to the contents of a clip in Bitwig Studio.

The note content of the clip is exposed in terms of steps and keys, mainly targeted to x-y-grid
applications such as step sequencers. */
declare interface Clip extends ObjectProxy {

	/** Scroll the note grid so that the given key becomes the key with y position of 0.

Note: This can cause some parts of the grid to represent invalid keys as there is no clipping */
	scrollToKey(

		/** the key that should be the new key with a y position of 0. This must be a value in the range
          0...127.*/
		key: number): void

	/** Scrolls the note grid keys one page up. For example if the note grid is configured to show 12 keys and
is currently showing keys [36..47], calling this method would scroll the note grid to key range
[48..59]. */
	scrollKeysPageUp(): void

	/** Scrolls the note grid keys one page down. For example if the note grid is configured to show 12 keys and
is currently showing keys [36..47], calling this method would scroll the note grid to key range
[48..59]. */
	scrollKeysPageDown(): void

	/** Scrolls the note grid keys one key up. For example if the note grid is configured to show 12 keys and is
currently showing keys [36..47], calling this method would scroll the note grid to key range [37..48]. */
	scrollKeysStepUp(): void

	/** Scrolls the note grid keys one key down. For example if the note grid is configured to show 12 keys and
is currently showing keys [36..47], calling this method would scroll the note grid to key range
[35..46]. */
	scrollKeysStepDown(): void

	/** Scroll the note grid so that the given step becomes visible. */
	scrollToStep(

		/** the step that should become visible*/
		step: number): void

	/** Scrolls the note grid steps one page forward. For example if the note grid is configured to show 16
steps and is currently showing keys [0..15], calling this method would scroll the note grid to key range
[16..31]. */
	scrollStepsPageForward(): void

	/** Scrolls the note grid steps one page backwards. For example if the note grid is configured to show 16
steps and is currently showing keys [16..31], calling this method would scroll the note grid to key
range [0..16]. */
	scrollStepsPageBackwards(): void

	/** Scrolls the note grid steps one step forward. For example if the note grid is configured to show 16
steps and is currently showing keys [0..15], calling this method would scroll the note grid to key range
[1..16]. */
	scrollStepsStepForward(): void

	/** Scrolls the note grid steps one step backwards. For example if the note grid is configured to show 16
steps and is currently showing keys [1..16], calling this method would scroll the note grid to key range
[0..15]. */
	scrollStepsStepBackwards(): void

	/** Value that reports if the note grid keys can be scrolled further up. */
	canScrollKeysUp(): BooleanValue

	/** Value that reports if the note grid keys can be scrolled further down. */
	canScrollKeysDown(): BooleanValue

	/** Value that reports if the note grid if the note grid steps can be scrolled backwards. */
	canScrollStepsBackwards(): BooleanValue

	/** Value that reports if the note grid if the note grid steps can be scrolled forwards. */
	canScrollStepsForwards(): BooleanValue

	/** Toggles the existence of a note in the note grid cell specified by the given x and y arguments. */
	toggleStep(

		/** the MIDI channel, between 0 and 15.*/
		channel: number,

		/** the x position within the note grid, defining the step/time of the target note*/
		x: number,

		/** the y position within the note grid, defining the key of the target note*/
		y: number,

		/** the velocity of the target note in case a new note gets inserted*/
		insertVelocity: number): void

	/** Creates a note in the grid cell specified by the given x and y arguments. Existing notes are
overwritten. */
	setStep(channel: number, x: number, y: number, insertVelocity: number, insertDuration: number): void

	/** Removes the note in the grid cell specified by the given x and y arguments. Calling this method does
nothing in case no note exists at the given x-y-coordinates. */
	clearStep(

		/** MIDI channel, from 0 to 15.*/
		channel: number,

		/** the x position within the note grid, defining the step/time of the target note*/
		x: number,

		/** the y position within the note grid, defining the key of the target note*/
		y: number): void

	/** Removes all notes in the grid started on the step x. */
	clearStepsAtX(channel: number, x: number): void

	/** Removes all notes in the grid row specified by the given y argument. */
	clearStepsAtY(

		/** MIDI channel, from 0 to 15.*/
		channel: number,

		/** the y position within the note grid, defining the key of the target note*/
		y: number): void

	/** Removes all notes in the grid. */
	clearSteps(): void

	/** Selects the note in the grid cell specified by the given x and y arguments, in case there actually is a
note at the given x-y-coordinates. */
	selectStepContents(

		/** MIDI channel, from 0 to 15.*/
		channel: number,

		/** the x position within the note grid, defining the step/time of the target note*/
		x: number,

		/** the y position within the note grid, defining the key of the target note*/
		y: number,

		/** `true` if the existing selection should be cleared, {@false} if the note should be added to
          the current selection.*/
		clearCurrentSelection: boolean): void

	/** Sets the beat time duration that is represented by one note grid step. */
	setStepSize(

		/** the length of one note grid step in beat time.*/
		lengthInBeatTime: number): void

	/** Registers an observer that reports which note grid steps/keys contain notes. */
	addStepDataObserver(

		/** A callback function that receives three parameters: 1. the x (step) coordinate within the note
          grid (integer), 2. the y (key) coordinate within the note grid (integer), and 3. an integer
          value that indicates if the step is empty (`0`) or if a note continues playing (`1`) or starts
          playing (`2`).*/
		callback: (x: number, y: number, state: number) => void
	): void

	/** Registers an observer that reports which note grid steps/keys contain notes. */
	addNoteStepObserver(

		/** A callback function that receives the StepInfo.*/
		callback: NoteStepChangedCallback
	): void

	/** Value that reports note grid cells as they get played by the sequencer. */
	playingStep(): IntegerValue

	/** Updates the name of the clip. */
	setName(

		/** the new clip name*/
		name: string): void

	/** Returns shuffle settings of the clip. */
	getShuffle(): SettableBooleanValue

	/** Returns accent setting of the clip. */
	getAccent(): SettableRangedValue

	/** Returns the start of the clip in beat time. */
	getPlayStart(): SettableBeatTimeValue

	/** Returns the length of the clip in beat time. */
	getPlayStop(): SettableBeatTimeValue

	/** Returns an object that provides access to the loop enabled state of the clip. */
	isLoopEnabled(): SettableBooleanValue

	/** Returns the loop start time of the clip in beat time. */
	getLoopStart(): SettableBeatTimeValue

	/** Returns the loop length of the clip in beat time. */
	getLoopLength(): SettableBeatTimeValue

	/** Get the color of the clip. */
	color(): SettableColorValue

	/** Duplicates the clip. */
	duplicate(): void

	/** Duplicates the content of the clip. */
	duplicateContent(): void

	/** Transposes all notes in the clip by the given number of semitones. */
	transpose(

		/** the amount of semitones to transpose, can be a positive or negative integer value.*/
		semitones: number): void

	/** Quantize the start time of all notes in the clip according to the given amount. The note lengths remain
the same as before. */
	quantize(

		/** a factor between `0` and `1` that allows to morph between the original note start and the
          quantized note start.*/
		amount: number): void

	/** Gets the track that contains the clip. */
	getTrack(): Track

	/** Setting for the default launch quantization.

Possible values are `"default"`, `"none"`, `"8"`, `"4"`, `"2"`, `"1"`, `"1/2"`, `"1/4"`, `"1/8"`,
`"1/16"`. */
	launchQuantization(): SettableEnumValue

	/** Setting "Q to loop" in the inspector. */
	useLoopStartAsQuantizationReference(): SettableBooleanValue

	/** Setting "Launch Mode" from the inspector.
Possible values are:
 - play_with_quantization
 - continue_immediately
 - continue_with_quantization */
	launchMode(): SettableEnumValue

	/** Get step info */
	getStep(channel: number, x: number, y: number): NoteStep

	/** Launches the clip. */
	launch(): void

	/** Get the clip launcher slot containing the clip. */
	clipLauncherSlot(): ClipLauncherSlot
}

declare interface ClipLauncherSlot extends ClipLauncherSlotOrScene {

	/** Value that reports whether this slot is selected or not. */
	isSelected(): BooleanValue

	/** Value that reports whether this slot has content or not. */
	hasContent(): BooleanValue

	/** Value that reports whether this slot is playing or not. */
	isPlaying(): BooleanValue

	/** Value that reports whether this slot is queued for playback or not. */
	isPlaybackQueued(): BooleanValue

	/** Value that reports whether this slot is recording or not. */
	isRecording(): BooleanValue

	/** Value that reports whether this slot is queued for recording or not. */
	isRecordingQueued(): BooleanValue

	/** Value that reports whether this slot is queued for recording or not. */
	isStopQueued(): BooleanValue

	/** Starts browsing for content that can be inserted in this slot in Bitwig Studio's popup browser. */
	browseToInsertClip(): void

	/** Value that reports the color of this slot. */
	color(): SettableColorValue

	/** Selects the slot. */
	select(): void
	selectAction(): HardwareActionBindable

	/** Start recording a clip. */
	record(): void
	recordAction(): HardwareActionBindable

	/** Makes the clip content of the slot visible in the note or audio editor. */
	showInEditor(): void

	/** Creates an new clip. */
	createEmptyClip(lengthInBeats: number): void

	/** Duplicates the clip. */
	duplicateClip(): void
}

/** Instances of this interface represent a scrollable fixed-size window that is connected to a section of the
clip launcher slots for a specific track. */
declare interface ClipLauncherSlotBank extends ClipLauncherSlotOrSceneBank<ClipLauncherSlot> {

	/** Selects the slot with the given index. */
	select(

		/** the index of the slot within the slot window.*/
		slot: number): void

	/** Starts recording into the slot with the given index. */
	record(

		/** the index of the slot within the slot window.*/
		slot: number): void

	/** Makes the clip content of the slot with the given index visible in the note or audio editor. */
	showInEditor(

		/** the index of the slot within the slot window.*/
		slot: number): void

	/** Creates an new clip in the slot with the given index. */
	createEmptyClip(slot: number, lengthInBeats: number): void

	/** Duplicates the clip in the slot with the given index. */
	duplicateClip(

		/** the index of the slot within the slot window.*/
		slot: number): void

	/** Registers an observer that reports selection changes for the slots inside the window. */
	addIsSelectedObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index is selected (`true`) or not (`false`)*/
		callback: (slot: number, selected: boolean) => void): void

	/** Registers an observer that reports which slots contain clips. */
	addHasContentObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index contains a clip (`true`) or not
          (`false`)*/
		callback: (slot: number, containsClip: boolean) => void): void

	/** Registers an observer that reports the playback state of clips / slots. The reported states include
`stopped`, `playing`, `recording`, but also `queued for stop`, `queued for playback`, `queued for
recording`. */
	addPlaybackStateObserver(

		/** a callback function that receives three parameters: 1. the slot index (integer), 2. the queued
          or playback state: `0` when stopped, `1` when playing, or `2` when recording, and 3. a boolean
          parameter indicating if the second argument is referring to the queued state (`true`) or the
          actual playback state (`false`)*/
		callback: (slot: number, state: number, refersToQueuedState: boolean) => void
	): void

	/** Registers an observer that reports which slots have clips that are currently playing. */
	addIsPlayingObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently playing
          (`true`) or not (`false`)*/
		callback: (slot: number, playing: boolean) => void): void

	/** Registers an observer that reports which slots have clips that are currently recording. */
	addIsRecordingObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently recording
          (`true`) or not (`false`)*/
		callback: (slot: number, recording: boolean) => void): void

	/** Add an observer if clip playback is queued on the slot. */
	addIsPlaybackQueuedObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently queued for
          playback (`true`) or not (`false`)*/
		callback: (slot: number, queued: boolean) => void): void

	/** Add an observer if clip recording is queued on the slot. */
	addIsRecordingQueuedObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently queued for
          recording (`true`) or not (`false`)*/
		callback: (slot: number, queued: boolean) => void): void

	/** Add an observer if clip playback is queued to stop on the slot. */
	addIsStopQueuedObserver(

		/** a callback function that receives two parameters: 1. the slot index (integer), and 2. a
          boolean parameter indicating if the slot at that index has a clip that is currently queued for
          stop (`true`) or not (`false`)*/
		callback: (slot: number, queued: boolean) => void): void

	/** Registers an observer that reports the colors of clip in the current slot window. */
	addColorObserver(

		/** a callback function that receives four parameters: 1. the slot index (integer), 2. the red
          coordinate of the RBG color value, 3. the green coordinate of the RBG color value, and 4. the
          blue coordinate of the RBG color value*/
		callback: (slot: number, red: number, green: number, blue: number) => void): void

	/** Specifies if the Bitwig Studio clip launcher should indicate which slots are part of the window. By
default indications are disabled. */
	setIndication(

		/** `true` if visual indications should be enabled, `false` otherwise*/
		shouldIndicate: boolean): void

	/** Returns an object that can be used to observe and toggle if the slots on a connected track group show
either scenes launch buttons (for launching the content of the track group) or the clips of the group
master track. */
	isMasterTrackContentShownOnTrackGroups(): SettableBooleanValue
}

declare interface ClipLauncherSlotBankPlaybackStateChangedCallback {

	/** Registers an observer that reports the playback state of clips / slots. The reported states include
`stopped`, `playing`, `recording`, but also `queued for stop`, `queued for playback`, `queued for
recording`. */
	playbackStateChanged(slotIndex: number, playbackState: number, isQueued: boolean): void
}

declare interface ClipLauncherSlotOrScene extends ObjectProxy, DeleteableObject {

	/** Returns an object that provides access to the name of the scene. */
	name(): StringValue

	/** Launches the scene. */
	launch(): void
	launchAction(): HardwareActionBindable

	/** Value that reports the position of the scene within the list of Bitwig Studio scenes. */
	sceneIndex(): IntegerValue

	/** Value that reports the color of this slot. */
	color(): SettableColorValue

	/** Specifies if the Bitwig Studio clip launcher should indicate which slots and scenes are part of the window. By
default indications are disabled. */
	setIndication(

		/** `true` if visual indications should be enabled, `false` otherwise*/
		shouldIndicate: boolean): void

	/** An {@link InsertionPoint} that is used to replace the contents of this slot or scene. */
	replaceInsertionPoint(): InsertionPoint

	/** An {@link InsertionPoint} that can be used to insert content in the next scene. */
	nextSceneInsertionPoint(): InsertionPoint

	/** An {@link InsertionPoint} that can be used to insert content after this slot or scene. */
	previousSceneInsertionPoint(): InsertionPoint
}

/** An abstract interface that represents the clip launcher scenes or slots of a single track. */
declare interface ClipLauncherSlotOrSceneBank<ClipLauncherType extends ClipLauncherSlotOrScene> extends Bank<ClipLauncherType> {

	/** Launches the scene/slot with the given index. */
	launch(

		/** the index of the slot that should be launched*/
		slot: number): void

	/** Stops clip launcher playback for the associated track. */
	stop(): void

	/** Action to call {@link #stop()}. */
	stopAction(): HardwareActionBindable

	/** Performs a return-to-arrangement operation on the related track, which caused playback to be taken over
by the arrangement sequencer. */
	returnToArrangement(): void

	/** Registers an observer that reports the names of the scenes and slots. The slot names reflect the names
of containing clips. */
	addNameObserver(

		/** a callback function receiving two parameters: 1. the slot index (integer) within the
          configured window, and 2. the name of the scene/slot (string)*/
		callback: (slot: number, name: string) => void
	): void
}

/** This class represents an RGBA color with each component being stored as double. */
declare interface Color {
	fromRGB(red: number, green: number, blue: number): Color
	fromRGBA(red: number, green: number, blue: number, alpha: number): Color
	fromRGB255(red: number, green: number, blue: number): Color
	fromRGBA255(red: number, green: number, blue: number, alpha: number): Color
	fromHex(hex: string): Color

	/** Mixes two colors. */
	mix(c1: Color, c2: Color, blend: number): Color
	nullColor(): Color
	blackColor(): Color
	whiteColor(): Color
	getRed(): number
	getGreen(): number
	getBlue(): number
	getAlpha(): number
	getRed255(): number
	getGreen255(): number
	getBlue255(): number
	getAlpha255(): number
}

/** Represents an output value shown on some hardware (for example, the color of a light). */
declare interface ColorHardwareProperty extends HardwareProperty {

	/** Gets the current value. This is the value that should be sent to the hardware to be displayed. */
	currentValue(): Color

	/** The value that was last sent to the hardware. */
	lastSentValue(): Color

	/** Specifies a callback that should be called with the value that needs to be sent to the hardware. This
callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
from the flush method). */
	onUpdateHardware(sendValueConsumer: (color: Color) => any): void

	/** Sets the current value. */
	setValue(value: Color): void

	/** Sets the current value from a {@link Supplier} that supplies the latest value. */
	setValueSupplier(supplier: (...args: any[]) => Color): void
}

declare interface ColorValue extends Value<ColorValueChangedCallback> {
	/** Gets the red component of the current value. */
	red(): number

	/** Gets the green component of the current value. */
	green(): number

	/** Gets the blue component of the current value. */
	blue(): number

	/** Gets the alpha component of the current value. */
	alpha(): number
	get(): Color
}

declare interface ConnectionEstablishedCallback {
	connectionEstablished(connection: RemoteConnection): void
}

/** Represents a hardware control that can input a relative or absolute value (for example, a slider, knob,
relative encoder...). */
declare interface ContinuousHardwareControl<HardwareBindingType extends HardwareBinding> extends HardwareBindingSource<HardwareBindingType> {

	/** An optional button that can be associated with this control when this control can also act as a button
(e.g by pressing down on it). */
	hardwareButton(): HardwareButton

	/** Sets an optional button that can be associated with this control when this control can also act as a
button (e.g by pressing down on it). */
	setHardwareButton(button: HardwareButton): void
}

/** Defines a means of recognizing when a continuous value is input by the user (for example, when moving a
slider or turning a knob based on some MIDI message). */
declare interface ContinuousHardwareValueMatcher extends HardwareInputMatcher {
}

/** Defines an extension that enabled a controller to work with Bitwig Studio. */
declare interface ControllerExtension {
	getMidiInPort(index: number): MidiIn
	getMidiOutPort(index: number): MidiOut

	/** Initializes this controller extension. This will be called once when the extension is started. During initialization the
extension should call the various create methods available via the {@link ControllerHost} interface in order to
create objects used to communicate with various parts of the Bitwig Studio application (e.g
{@link ControllerHost#createCursorTrack(int, int)}. */
	init(): void

	/** Called once when this controller extension is stopped. */
	exit(): void

	/** Called when this controller extension should flush any pending updates to the controller. */
	flush(): void
}

/** Defines an extension that enabled a controller to work with Bitwig Studio. */
declare interface ControllerExtensionDefinition {
	toString(): string

	/** The vendor of the controller that this extension is for. */
	getHardwareVendor(): string

	/** The model name of the controller that this extension is for. */
	getHardwareModel(): string

	/** The number of MIDI in ports that this controller extension has. */
	getNumMidiInPorts(): number

	/** The number of MIDI out ports that this controller extension has. */
	getNumMidiOutPorts(): number

	/** Obtains a {@link AutoDetectionMidiPortNamesList} that defines the names of the MIDI in and out ports
that can be used for auto detection of the controller for the supplied platform type. */
	getAutoDetectionMidiPortNamesList(platformType: PlatformType): AutoDetectionMidiPortNamesList

	/** Lists the {@link AutoDetectionMidiPortNames} that defines the names of the MIDI in and out ports that
can be used for auto detection of the controller for the supplied platform type. */
	listAutoDetectionMidiPortNames(list: AutoDetectionMidiPortNamesList, platformType: PlatformType): void
	getHardwareDeviceMatcherList(): HardwareDeviceMatcherList

	/** Lists the hardware devices that this controller needs to function. For each device that is listed the
user will see a chooser in the preferences for this extension that allows them to choose a connected
device. The {@link HardwareDeviceMatcher} will also be used during auto detection to automatically add
and select the device if possible. */
	listHardwareDevices(list: HardwareDeviceMatcherList): void

	/** Creates an instance of this extension. */
	createInstance(host: ControllerHost): ControllerExtension
}

/** An interface representing the host application to the script. A singleton instance of this interface is
available in the global scope of each script. The methods provided by this interface can be divided in
different categories:

1. functions for registering the script in Bitwig Studio, so that it can be listed, detected and configured
in the controller preferences. The methods that belong to this group are {@link #defineController},
{@link #defineMidiPorts}, {@link #defineSysexIdentityReply} and {@link #addDeviceNameBasedDiscoveryPair}.
2. functions for creating objects that provide access to the various areas of Bitwig Studio to the script.
The name of those methods typically start with `create...` 3. functions for printing to the Control Surface
Console, which can be opened from the `View` menu of Bitwig Studio. 4. functions for determining the name
of the host application, API version, the host operating system and such.

The first group of methods should be called on the global scope of the script. The function in the second
and third group are typically called from the init method of the script or other handler functions. The
last group is probably only required in rare cases and can be called any time. */
declare interface ControllerHost extends Host {

	/** Restarts this controller. */
	restart(): void

	/** Loads the supplied API version into the calling script. This is only intended to be called from a
controller script. It cannot be called from a Java controller extension. */
	loadAPI(version: number): void

	/** Call this method to allow your script to use Beta APIs.

Beta APIs are still on development and might not be available in a future version of Bitwig Studio.

Turning this flag to true, will flag your extension as being a beta extension which might not work after
updating Bitwig Studio. */
	useBetaApi(): void

	/** Determines whether the calling script should fail if it calls a deprecated method based on the API
version that it requested. */
	shouldFailOnDeprecatedUse(): boolean

	/** Sets whether the calling script should fail if it calls a deprecated method based on the API version
that it requested. This is only intended to be called from a controller script. It cannot be called from
a Java controller extension. */
	setShouldFailOnDeprecatedUse(value: boolean): void

	/** Loads the script defined by the supplied path. This is only intended to be called from a controller
script. It cannot be called from a Java controller extension. */
	load(path: string): void

	/** Indicates if the host platform is Windows. */
	platformIsWindows(): boolean

	/** Indicates if the host platform is Apple Mac OS X. */
	platformIsMac(): boolean

	/** Indicates if the host platform is Linux. */
	platformIsLinux(): boolean

	/** Registers a controller script with the given parameters. This function must be called once at the global
scope of the script. */
	defineController(

		/** the name of the hardware vendor. Must not be <code>null</code>.*/
		vendor: string,

		/** the name of the controller script as listed in the user interface of Bitwig Studio. Must not
          be <code>null</code>.*/
		name: string,

		/** the version of the controller script. Must not be <code>null</code>.*/
		version: string,

		/** a universal unique identifier (UUID) string that is used to distinguish one script from
          another, for example `550e8400-e29b-11d4-a716-446655440000`. Must not be <code>null</code>.
          For generating random UUID strings several free web tools are available.*/
		uuid: string,

		/** the name of the script author*/
		author: string): void

	/** Defines the number of MIDI ports for input and output that the device uses. This method should be called
once in the global scope if the script is supposed to exchange MIDI messages with the device, or if the
script adds entries to the MIDI input/output choosers in Bitwig Studio. After calling this method the
individual port objects can be accessed using {@link #getMidiInPort(int index)} and
{@link #getMidiInPort(int index)}. */
	defineMidiPorts(

		/** the number of input ports*/
		numInports: number,

		/** the number of output ports*/
		numOutports: number): void

	/** Returns the MIDI input port with the given index. */
	getMidiInPort(

		/** the index of the MIDI input port, must be valid.*/
		index: number): MidiIn

	/** Returns the MIDI output port with the given index. */
	getMidiOutPort(

		/** the index of the MIDI output port, must be valid.*/
		index: number): MidiOut

	/** Gets the {@link HardwareDevice} at the specified index. This index corresponds to the index of the
{@link HardwareDeviceMatcher} specified in the
{@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)} */
	hardwareDevice(index: number): HardwareDevice

	/** Registers patterns which are used to automatically detect hardware devices that can be used with the
script.<br/>

When the user clicks on the `detect` button in the Bitwig Studio controller preferences dialog, Bitwig
Studio searches for connected controller hardware by comparing the parameters passed into this function
are compared with the port names of the available MIDI drivers. Found controller scripts are
automatically added with their input/output ports configured.<br/>

Calling this function is optional, but can also be called multiple times in the global script scope in
order to support alternative driver names. */
	addDeviceNameBasedDiscoveryPair(

		/** the array of strings used to detect MIDI input ports, must not be `null`.*/
		inputs: string[],

		/** the array of strings used to detect MIDI output ports, must not be `null`.*/
		outputs: string[]): void

	/** Creates a preferences object that can be used to insert settings into the Controller Preferences panel
in Bitwig Studio. */
	getPreferences(): Preferences

	/** Creates a document state object that can be used to insert settings into the Studio I/O Panel in Bitwig
Studio. */
	getDocumentState(): DocumentState

	/** Returns an object that is used to configure automatic notifications. Bitwig Studio supports automatic
visual feedback from controllers that shows up as popup notifications. For example when the selected
track or the current device preset was changed on the controller these notifications are shown,
depending on your configuration. */
	getNotificationSettings(): NotificationSettings

	/** Returns an object for controlling various aspects of the currently selected project. */
	getProject(): Project

	/** Returns an object for controlling and monitoring the elements of the `Transport` section in Bitwig
Studio. This function should be called once during initialization of the script if transport access is
desired. */
	createTransport(): Transport

	/** Returns an object for controlling and monitoring the `Groove` section in Bitwig Studio. This function
should be called once during initialization of the script if groove control is desired. */
	createGroove(): Groove

	/** Returns an object that provides access to general application functionality, including global view
settings, the list of open projects, and other global settings that are not related to a certain
document. */
	createApplication(): Application

	/** Returns an object which provides access to the `Arranger` panel inside the specified window. */
	createArranger(

		/** the index of the window where the arranger panel is shown, or -1 in case the first arranger
          panel found on any window should be taken*/
		window: number): Arranger

	/** Returns an object which provides access to the `Mixer` panel that matches the specified parameters. */
	createMixer(

		/** the name of the panel layout that contains the mixer panel, or `null` in case the selected
          panel layout in Bitwig Studio should be followed. Empty strings or invalid names are treated
          the same way as `null`. To receive the list of available panel layouts see
          {@link Application#addPanelLayoutObserver}.*/
		panelLayout: string,

		/** the index of the window where the mixer panel is shown, or -1 in case the first mixer panel
          found on any window should be taken*/
		window: number): Mixer

	/** Returns a track bank with the given number of child tracks, sends and scenes.<br/>

A track bank can be seen as a fixed-size window onto the list of tracks in the connected track group
including their sends and scenes, that can be scrolled in order to access different parts of the track
list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>

The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
The track bank returned by this function provides a convenient interface for controlling which tracks
are currently shown on the hardware.<br/>

Creating a track bank using this method will consider all tracks in the document, including effect
tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
you are only interested in tracks of a certain kind. */
	createTrackBank(

		/** the number of child tracks spanned by the track bank*/
		numTracks: number,

		/** the number of sends spanned by the track bank*/
		numSends: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number,

		/** specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.*/
		hasFlatTrackList: boolean): TrackBank

	/** Returns a track bank with the given number of tracks, sends and scenes. Only audio tracks, instrument
tracks and hybrid tracks are considered. For more information about track banks and the `bank pattern`
in general, see the documentation for {@link #createTrackBank}. */
	createMainTrackBank(

		/** the number of tracks spanned by the track bank*/
		numTracks: number,

		/** the number of sends spanned by the track bank*/
		numSends: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number): TrackBank

	/** Returns a track bank with the given number of effect tracks and scenes. Only effect tracks are
considered. For more information about track banks and the `bank pattern` in general, see the
documentation for {@link #createTrackBank}. */
	createEffectTrackBank(

		/** the number of tracks spanned by the track bank*/
		numTracks: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number): TrackBank

	/** Returns an object that represents the master track of the document. */
	createMasterTrack(

		/** the number of scenes for bank-wise navigation of the master tracks clip launcher slots.*/
		numScenes: number): MasterTrack

	createCursorTrack(numSends: number, numScenes: number): CursorTrack

	/** Returns a scene bank with the given number of scenes.<br/>

A scene bank can be seen as a fixed-size window onto the list of scenes in the current document, that
can be scrolled in order to access different parts of the scene list. For example a scene bank
configured for 8 scenes can show scene 1-8, 2-9, 3-10 and so on.<br/>

The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
contain a dynamic list of scenes, most likely more scenes than the hardware can control simultaneously.
The scene bank returned by this function provides a convenient interface for controlling which scenes
are currently shown on the hardware.<br/> */
	createSceneBank(

		/** the number of scenes spanned by the track bank*/
		numScenes: number): SceneBank

	/** Returns a clip object that represents the cursor of the launcher clip selection. The gridWidth and
gridHeight parameters specify the grid dimensions used to access the note content of the clip. */
	createLauncherCursorClip(

		/** the number of steps spanned by one page of the note content grid.*/
		gridWidth: number,

		/** the number of keys spanned by one page of the note content grid.*/
		gridHeight: number): Clip

	/** Returns a clip object that represents the cursor of the arranger clip selection. The gridWidth and
gridHeight parameters specify the grid dimensions used to access the note content of the clip. */
	createArrangerCursorClip(

		/** the number of steps spanned by one page of the note content grid.*/
		gridWidth: number,

		/** the number of keys spanned by one page of the note content grid.*/
		gridHeight: number): Clip

	/** Returns an object that is used to define a bank of custom user controls. These controls are available to
the user for free controller assignments and are typically used when bank-wise navigation is
inconvenient. */
	createUserControls(
		/** the number of controls that are available for free assignments*/
		numControllers: number): UserControlBank

	/** Schedules the given callback function for execution after the given delay. For timer applications call
this method once initially and then from within the callback function. */
	scheduleTask(

		/** the callback function that will be called*/
		callback: () => void,

		/** the duration after which the callback function will be called in milliseconds*/
		delay: number): void

	/** Requests that the driver's flush method gets called. */
	requestFlush(): void

	/** Prints the given string in the control surface console window. The console window can be opened in the
view menu of Bitwig Studio. */
	println(

		/** the string to be printed*/
		message: string): void

	/** Prints the given string in the control surface console window using a text style that highlights the
string as error. The console window can be opened in the view menu of Bitwig Studio. */
	errorln(

		/** the error string to be printed*/
		message: string): void

	/** Shows a temporary text overlay on top of the application GUI, that will fade-out after a short interval.
If the overlay is already shown, it will get updated with the given text. */
	showPopupNotification(

		/** the text to be shown*/
		text: string): void

	/** Opens a TCP (Transmission Control Protocol) host socket for allowing network connections from other
hardware and software. */
	createRemoteConnection(

		/** a meaningful name that describes the purpose of this connection.*/
		name: string,

		/** the port that should be used for the connection. If the port is already in use, then another
          port will be used. Check {@link RemoteSocket#getPort()} on the returned object to be sure.*/
		defaultPort: number): RemoteSocket

	/** Connects to a remote TCP (Transmission Control Protocol) socket. */
	connectToRemoteHost(

		/** the host name or IP address to connect to.*/
		host: string,

		/** the port to connect to*/
		port: number,

		/** the callback function that gets called when the connection gets established. A single
          {@link RemoteConnection} parameter is passed into the callback function.*/
		callback: (connection: RemoteConnection) => void): void

	/** Sends a UDP (User Datagram Protocol) packet with the given data to the specified host. */
	sendDatagramPacket(

		/** the destination host name or IP address*/
		host: string,

		/** the destination port*/
		port: number,

		/** the data to be send. When creating a numeric byte array in JavaScript, the byte values must be
          signed (in the range -128..127).*/
		data: number): void

	/** Adds an observer for incoming UDP (User Datagram Protocol) packets on the selected port. */
	addDatagramPacketObserver(

		/** a meaningful name that describes the purpose of this observer.*/
		name: number,

		/** the port that should be used*/
		port: number,

		/** the callback function that gets called when data arrives. The function receives a single
          parameter that contains the data byte array.*/
		callback: (bytes: number[]) => void): boolean

	/** Creates a {@link PopupBrowser} that represents the pop-up browser in Bitwig Studio. */
	createPopupBrowser(): PopupBrowser

	/** {@link BeatTimeFormatter} used to format beat times by default. This will be used to format beat times
when asking for a beat time in string format without providing any formatting options. For example by
calling {@link BeatTimeStringValue#get()}. */
	defaultBeatTimeFormatter(): BeatTimeFormatter

	/** Sets the {@link BeatTimeFormatter} to use by default for formatting beat times. */
	setDefaultBeatTimeFormatter(formatter: BeatTimeFormatter): void

	/** Creates a {@link BeatTimeFormatter} that can be used to format beat times. */
	createBeatTimeFormatter(

		/** the character used to separate the segments of the formatted beat time, typically ":", "." or
          "-"*/
		separator: string,

		/** the number of digits reserved for bars*/
		barsLen: number,

		/** the number of digits reserved for beats*/
		beatsLen: number,

		/** the number of digits reserved for beat subdivisions*/
		subdivisionLen: number,

		/** the number of digits reserved for ticks*/
		ticksLen: number): BeatTimeFormatter

	/** Creates a {@link HardwareSurface} that can contain hardware controls. */
	createHardwareSurface(): HardwareSurface

	/** Creates a {@link HardwareActionMatcher} that is matched by either of the 2 supplied action matchers. */
	createOrHardwareActionMatcher(matcher1: HardwareActionMatcher, matcher2: HardwareActionMatcher): HardwareActionMatcher

	/** Creates a {@link RelativeHardwareValueMatcher} that is matched by either of the 2 supplied action
matchers. */
	createOrRelativeHardwareValueMatcher(matcher1: RelativeHardwareValueMatcher, matcher2: RelativeHardwareValueMatcher): RelativeHardwareValueMatcher

	/** Creates a {@link AbsoluteHardwareValueMatcher} that is matched by either of the 2 supplied action
matchers. */
	createOrAbsoluteHardwareValueMatcher(matcher1: AbsoluteHardwareValueMatcher, matcher2: AbsoluteHardwareValueMatcher): AbsoluteHardwareValueMatcher

	/** An object that can be used to generate useful MIDI expression strings which can be used in
{@link MidiIn#createActionMatcher(String)} and other related methods. */
	midiExpressions(): MidiExpressions

	/** Creates a {@link HardwareActionBindable} that can be bound to some {@link HardwareAction} (such as a
button press) and when that action occurs the supplied {@link Runnable} will be run */
	createAction(

		/** Consumer that will be notified of the pressure of the action*/
		actionPressureConsumer: any,

		/** Provider that can provide a description of what the runnable does (used for showing onscreen
          feedback or help to the user).*/
		descriptionProvider: any): HardwareActionBindable

	/** Creates a {@link RelativeHardwareControlBindable} that can be used to step forwards or backwards when a
{@link RelativeHardwareControl} is adjusted. A step is defined by the
{@link RelativeHardwareControl#setStepSize(double)}. */
	createRelativeHardwareControlStepTarget(

		/** The action that should happen when stepping forwards*/
		stepForwardsAction: any,

		/** The action that should happen when stepping backwards*/
		stepBackwardsAction: any): RelativeHardwareControlBindable

	/** Creates a {@link RelativeHardwareControlBindable} that can be used to adjust some value in an arbitrary
way. */
	createRelativeHardwareControlAdjustmentTarget(

		/** A consumer that will receive the relative adjustment amount when bound to a
          {@link RelativeHardwareControl}.*/
		adjustmentConsumer: any): RelativeHardwareControlBindable

	/** Creates a {@link AbsoluteHardwareControlBindable} that can be used to adjust some value in an arbitrary
way. */
	createAbsoluteHardwareControlAdjustmentTarget(

		/** A consumer that will receive the absolute adjustment amount when bound to an
          {@link AbsoluteHardwareControl}.*/
		adjustmentConsumer: any): AbsoluteHardwareControlBindable

	/** It will delete multiple object within one undo step. */
	deleteObjects(objects: DeleteableObject): void
}

/** This interface defines access to the common attributes and operations of cue markers. */
declare interface CueMarker {

	/** Launches playback at the marker position. */
	launch(

		/** Specified if the cue marker should be launched quantized or immediately*/
		quantized: boolean): void

	/** Gets a representation of the marker name. */
	getName(): StringValue

	/** Gets a representation of the marker color. */
	getColor(): ColorValue

	/** Gets a representation of the markers beat-time position in quarter-notes. */
	position(): SettableBeatTimeValue
}

/** A cue marker bank provides access to a range of cue markers in Bitwig Studio.
Instances are typically configured with a fixed number of markers and represent an excerpt
of a larger list of markers. It basically acts like a window moving over the list of markers. */
declare interface CueMarkerBank {

	/** Scrolls the cue marker bank window so that the marker at the given position becomes visible. */
	scrollToMarker(

		/** the index of the marker within the underlying full list of markers (not the index within the
          bank). The position is typically directly related to the layout of the marker list in Bitwig
          Studio, starting with zero in case of the first marker.*/
		position: number): void
}

/** A generic interface that provides the foundation for working with selections.

Implementations of this interface can either represent custom selection cursors that are created by
controller scripts, or represent the cursor of user selections as shown in Bitwig Studio editors, such as
the Arranger track selection cursor, the note editor event selection cursor and so on. */
declare interface Cursor extends RelativeHardwareControlBindable {

	/** Select the previous item. */
	selectPrevious(): void
	selectPreviousAction(): HardwareActionBindable

	/** Select the next item. */
	selectNext(): void
	selectNextAction(): HardwareActionBindable

	/** Select the first item. */
	selectFirst(): void

	/** Select the last item. */
	selectLast(): void

	/** Boolean value that reports whether there is an item after the current cursor position. */
	hasNext(): BooleanValue

	/** Boolean value that reports whether there is an item before the current cursor position. */
	hasPrevious(): BooleanValue
}

/** Instances of this interface are used to navigate the filter columns of a Bitwig Studio browsing session. */
declare interface CursorBrowserFilterColumn extends Cursor, BrowserFilterColumn {
}

/** Instances of this interface represent entries in a browser filter column. */
declare interface CursorBrowserFilterItem extends CursorBrowserItem, BrowserFilterItem {

	/** Select the parent item. */
	selectParent(): void

	/** Select the first child item. */
	selectFirstChild(): void

	/** Select the last child item. */
	selectLastChild(): void

	/** Select the previous item. */
	moveToPrevious(): void

	/** Select the next item. */
	moveToNext(): void

	/** Select the first item. */
	moveToFirst(): void

	/** Select the last item. */
	moveToLast(): void

	/** Select the parent item. */
	moveToParent(): void

	/** Move the cursor to the first child item. */
	moveToFirstChild(): void

	/** Move the cursor to the last child item. */
	moveToLastChild(): void
}

/** Instances of this interface represent entries in a browser filter column. */
declare interface CursorBrowserItem extends BrowserItem, Cursor {

	/** Returns a bank object that provides access to the siblings of the cursor item. The bank will
automatically scroll so that the cursor item is always visible. */
	createSiblingsBank(

		/** the number of simultaneously accessible siblings*/
		numSiblings: number): BrowserItemBank
}

/** Instances of this interface represent entries in a browser column. */
declare interface CursorBrowserResultItem extends CursorBrowserItem, BrowserResultsItem {
}

/** Instances of this interface are used for navigating the various browsing sessions of Bitwig Studio's
contextual browser. */
// declare interface CursorBrowsingSession extends Cursor, GenericBrowsingSession {
// }

/** A special kind of channel that follows a channel selection cursor in Bitwig Studio. The selection can
either be a custom selection cursor that gets created by the controller script, or represent the user
selection cursor as shown in the Bitwig Studio editors, such as the Arranger track selection cursor. */
declare interface CursorChannel extends Channel, Cursor {

	/** Points the cursor to the given channel. */
	selectChannel(
		/** the channel that this channel cursor should point to*/
		channel: Channel
	): void
}

/** Represents a cursor clip. */
declare interface CursorClip extends Clip, Cursor {

	/** Requests that the supplied clip be selected in this cursor. */
	selectClip(clip: Clip): void
}

/** A special kind of selection cursor used for devices. */
declare interface CursorDevice extends Device, Cursor {

	/** Returns the channel that this cursor device was created on. Currently this will always be a track or
cursor track instance. */
	channel(): Channel

	/** Selects the parent device if there is any. */
	selectParent(): void

	/** Moves this cursor to the given device. */
	selectDevice(

		/** the device that this cursor should point to*/
		device: Device): void

	/** Selects the first device in the given channel. */
	selectFirstInChannel(

		/** the channel in which the device should be selected*/
		channel: Channel): void

	/** Selects the last device in the given channel. */
	selectLastInChannel(

		/** the channel in which the device should be selected*/
		channel: Channel): void

	/** Selects the first device in the nested FX slot with the given name. */
	selectFirstInSlot(

		/** the name of the FX slot in which the device should be selected*/
		chain: string): void

	/** Selects the last device in the nested FX slot with the given name. */
	selectLastInSlot(

		/** the name of the FX slot in which the device should be selected*/
		chain: string): void

	/** Selects the first device in the drum pad associated with the given key. */
	selectFirstInKeyPad(

		/** the key associated with the drum pad in which the device should be selected*/
		key: number): void

	/** Selects the last device in the drum pad associated with the given key. */
	selectLastInKeyPad(

		/** the key associated with the drum pad in which the device should be selected*/
		key: number): void

	/** Selects the first device in the nested layer with the given name. */
	selectFirstInLayer(

		/** the name of the nested layer in which the device should be selected*/
		name: number): void

	/** Selects the last device in the nested layer with the given name. */
	selectLastInLayer(

		/** the name of the nested layer in which the device should be selected*/
		name: number): void
}

/** Instances of this interface represent the cursor item in device layer selections. */
declare interface CursorDeviceLayer extends DeviceLayer, CursorChannel {
}

/** Instances of this interface represent the selected device slot as shown in the Bitwig Studio user
interface. */
declare interface CursorDeviceSlot extends DeviceChain {
	selectSlot(slot: string): void
}

/** Represents a cursor that looks at a {@link RemoteControlsPage}. */
declare interface CursorRemoteControlsPage extends Cursor, RemoteControlsPage {

	/** Value that reports the names of the devices parameter pages. */
	pageNames(): StringArrayValue

	/** Selects the next page. */
	selectNextPage(

		/** If true then when the end is reached and there is no next page it selects the first page*/
		shouldCycle: boolean): void

	/** Selects the previous page. */
	selectPreviousPage(

		/** If true then when the end is reached and there is no next page it selects the first page*/
		shouldCycle: boolean): void

	/** Selects the next page that matches the given expression. */
	selectNextPageMatching(

		/** An expression that can match a page based on how it has been tagged. For now this can only be
          the name of a single tag that you would like to match.*/
		expression: number,

		/** If true then when the end is reached and there is no next page it selects the first page*/
		shouldCycle: boolean): void

	/** Selects the previous page that matches the given expression. */
	selectPreviousPageMatching(

		/** An expression that can match a page based on how it has been tagged. For now this can only be
          the name of a single tag that you would like to match.*/
		expression: string,

		/** If true then when the end is reached and there is no next page it selects the first page*/
		shouldCycle: boolean): void

	/** Value that reports the currently selected parameter page index. */
	selectedPageIndex(): SettableIntegerValue

	/** Value that represents the number of pages. */
	pageCount(): IntegerValue
}

/** Instances of this interface represent the cursor item of track selections. */
declare interface CursorTrack extends PinnableCursor, CursorChannel, Track {

	/** Makes the cursor track point to it's parent group track, in case it is not already pointing to the root
group track. */
	selectParent(): void

	/** Makes the cursor track point to the first child found with the track group that this cursor currently
points to. If this cursor is not pointing to a track group or the track group is empty then this has no
effect. */
	selectFirstChild(): void

	/** Specifies the behaviour of the functions {@link #selectPrevious()}, {@link #selectNext()},
{@link #selectFirst()} and {@link #selectLast()}. Calling those functions can either navigate the cursor
within the current nesting level, or over a flat list of either all tracks or only the expanded tracks.
Default is CursorNavigationMode.FLAT. */
	setCursorNavigationMode(mode: CursorNavigationMode): void

	/** Returns an object that provides access to the cursor item of the
	track's device selection as shown in the Bitwig Studio user interface. */
	createCursorDevice(): PinnableCursorDevice

	createCursorDevice(
		id: string,
		/** the name of the custom device selection cursor, for example "Primary", or `null` to refer to
          the device selection cursor in the arranger cursor track as shown in the Bitwig Studio user
          interface.*/
		name: string|null,

		/** the number of sends that are simultaneously accessible in nested channels.*/
		numSends: number,
		/** Mode that defines how this cursor should follow devices. */
		followMode: CursorDeviceFollowMode
	): PinnableCursorDevice

	/** Creates a {@link PinnableCursorClip} for this track that follows a clip within the track on the clip
launcher. This clip typically gets updated when the user selects a new clip on the clip launcher. It can
also act independently from the user's selection if the user so chooses in the settings for the
controller. */
	createLauncherCursorClip(id: string, name: string, gridWidth: number, gridHeight: number): PinnableCursorClip
}

declare interface DataReceivedCallback {
	dataReceived(data: string[]): void
}

/** Interface implemented by objects that can be deleted from the project. */
declare interface DeleteableObject {

	/** Deletes this object from the document.

If you want to delete multiple objects at once, see Host.deleteObjects(). */
	deleteObject(): void
}

/** This interface represents a device in Bitwig Studio, both internal devices and plugins. */
declare interface Device extends ObjectProxy, DeleteableObject {

	/** Returns a representation of the device chain that contains this device. Possible device chain instances
are tracks, device layers, drums pads, or FX slots. */
	deviceChain(): DeviceChain

	/** Value that reports the position of the device within the parent device chain. */
	position(): IntegerValue

	/** Returns an object that provides access to the open state of plugin windows. */
	isWindowOpen(): SettableBooleanValue

	/** Returns an object that provides access to the expanded state of the device. */
	isExpanded(): SettableBooleanValue

	/** Returns an object that provides access to the visibility of the device remote controls section. */
	isRemoteControlsSectionVisible(): SettableBooleanValue

	/** Creates a cursor for a remote controls page in the device with the supplied number of parameters. This
section will be independent from the current page selected by the user in Bitwig Studio's user
interface. The supplied filter is an expression that can be used to match pages this section is
interested in. The expression is matched by looking at the tags added to the pages. If the expression is
empty then no filtering will occur. */
	createCursorRemoteControlsPage(

		/** A name to associate with this section. This will be used to remember manual mappings made by
          the user within this section.*/
		name: string,

		/** The number of parameters the remote controls should contain*/
		parameterCount: number,

		/** An expression used to match pages that the user can navigate through. For now this can only be
          the name of a single tag the pages should contain (e.g "drawbars", "dyn", "env", "eq",
          "filter", "fx", "lfo", "mixer", "osc", "overview", "perf").*/
		filterExpression: string): CursorRemoteControlsPage

	/** Selects the device in Bitwig Studio. */
	selectInEditor(): void

	/** Value that reports if the device is a plugin. */
	isPlugin(): BooleanValue

	/** Switches to the previous parameter page. */
	previousParameterPage(): void

	/** Switches to the next parameter page. */
	nextParameterPage(): void

	/** Registers an observer that reports if there is a previous parameter page. */
	addPreviousParameterPageEnabledObserver(

		/** a callback function that receives a single boolean parameter*/
		callback: (enabled: boolean) => void): void

	/** Registers an observer that reports if there is a next parameter page. */
	addNextParameterPageEnabledObserver(

		/** a callback function that receives a single boolean parameter*/
		callback: (enabled: boolean) => void): void

	/** Switches to the parameter page at the given page index. */
	setParameterPage(

		/** the index of the desired parameter page*/
		page: number): void

	/** Returns//  an object used for browsing devices, presets and other content. Committing the browsing session
// will load or create a device from the selected resource and replace the current device. */
// 	createDeviceBrowser(

// 		/** the size of the window used to navigate the filter column entries.*/
// 		numFilterColumnEntries: any,

// 		/** the size of the window used to navigate the results column entries.*/
// 		numResultsColumnEntries: any): Browser

	/** Value that reports the name of the device. */
	name(): StringValue

	/** Value that reports the last loaded preset name. */
	presetName(): StringValue

	/** Value that reports the current preset category name. */
	presetCategory(): StringValue

	/** Value that reports the current preset creator name. */
	presetCreator(): StringValue

	/** Value that reports if the device is enabled. */
	isEnabled(): SettableBooleanValue

	/** Indicates if the device has nested device chain slots. Use {@link #slotNames()} to get a list of
available slot names, and navigate to devices in those slots using the {@link CursorDevice} interface. */
	hasSlots(): BooleanValue

	/** Value of the list of available FX slots in this device. */
	slotNames(): StringArrayValue

	/** Returns an object that represents the selected device slot as shown in the user interface, and that
provides access to the contents of slot's device chain. */
	getCursorSlot(): DeviceSlot

	/** Indicates if the device is contained by another device. */
	isNested(): BooleanValue

	/** Indicates if the device supports nested layers. */
	hasLayers(): BooleanValue

	/** Indicates if the device has individual device chains for each note value. */
	hasDrumPads(): BooleanValue

	/** Create a bank for navigating the nested layers of the device using a fixed-size window.

This bank will work over the following devices:
 - Instrument Layer
 - Effect Layer
 - Instrument Selector
 - Effect Selector */
	createLayerBank(

		/** the number of channels that the device layer bank should be configured with*/
		numChannels: number): DeviceLayerBank

	/** Create a bank for navigating the nested layers of the device using a fixed-size window. */
	createDrumPadBank(

		/** the number of channels that the drum pad bank should be configured with*/
		numPads: number): DrumPadBank

	/** Returns a device layer instance that can be used to navigate the layers or drum pads of the device, in
case it has any

This is the selected layer from the user interface. */
	createCursorLayer(): CursorDeviceLayer

	/** Creates a ChainSelector object which will give you control over the current device if it is an
Instrument Selector or an Effect Selector.

To check if the device is currently a ChainSelector, use {@link ChainSelector.exists()}.

If you want to have access to all the chains, use {@link #createLayerBank(int)}. */
	createChainSelector(): ChainSelector

	/** Adds an observer on a list of all parameters for the device.

The callback always updates with an array containing all the IDs for the device. */
	addDirectParameterIdObserver(

		/** function with the signature (String[])*/
		callback: (ids: string[]) => void): void

	/** Adds an observer for the parameter names (initial and changes) of all parameters for the device. */
	addDirectParameterNameObserver(

		/** maximum length of the string sent to the observer.*/
		maxChars: number,

		/** function with the signature (String ID, String name)*/
		callback: (id: string, name: string) => void): void

	/** Returns an observer that reports changes of parameter display values, i.e. parameter values formatted as
a string to be read by the user, for example "-6.02 dB". The returned observer object can be used to
configure which parameters should be observed. By default no parameters are observed. It should be
avoided to observe all parameters at the same time for performance reasons. */
	addDirectParameterValueDisplayObserver(

		/** maximum length of the string sent to the observer.*/
		maxChars: number,

		/** function with the signature (String ID, String valueDisplay)*/
		callback: (id: string, valueDisplay: string) => void): DirectParameterValueDisplayObserver

	/** Adds an observer for the parameter display value (initial and changes) of all parameters for the device. */
	addDirectParameterNormalizedValueObserver(

		/** a callback function with the signature (String ID, float normalizedValue). If the value is not
          accessible 'Number.NaN' (not-a-number) is reported, can be checked with 'isNaN(value)'.*/
		callback: (id: string, normalizedValue: number) => void): void

	/** Sets the parameter with the specified `id` to the given `value` according to the given `resolution`. */
	setDirectParameterValueNormalized(

		/** the parameter identifier string*/
		id: string,

		/** the new value normalized to the range [0..resolution-1]*/
		value: number,

		/** the resolution of the new value*/
		resolution: number): void

	/** Increases the parameter with the specified `id` by the given `increment` according to the given
`resolution`. To decrease the parameter value pass in a negative increment. */
	incDirectParameterValueNormalized(

		/** the parameter identifier string*/
		id: string,

		/** the amount that the parameter value should be increased by, normalized to the range
          [0..resolution-1]*/
		increment: number,

		/** the resolution of the new value*/
		resolution: number): void

	/** Value that reports the file name of the currently loaded sample, in case the device is a sample
container device. */
	sampleName(): StringValue

	/** Returns an object that provides bank-wise navigation of sibling devices of the same device chain
(including the device instance used to create the siblings bank). */
	createSiblingsDeviceBank(

		/** the number of devices that are simultaneously accessible*/
		numDevices: number): DeviceBank

	/** {@link InsertionPoint} that can be used for inserting after this device. */
	afterDeviceInsertionPoint(): InsertionPoint

	/** {@link InsertionPoint} that can be used for inserting before this device. */
	beforeDeviceInsertionPoint(): InsertionPoint

	/** {@link InsertionPoint} that can be used for replacing this device. */
	replaceDeviceInsertionPoint(): InsertionPoint
}

/** This interface is used for navigation of device chains in Bitwig Studio. Instances are configured with a
fixed number of devices and provide access to a excerpt of the devices inside a device chain. Various
methods are provided for scrolling to different sections of the device chain. It basically acts like a
window moving over the devices.

To receive an instance of DeviceBank call {@link Track#createDeviceBank}. */
declare interface DeviceBank extends Bank<Device> {

	/** Returns the object that was used to instantiate this device bank. Possible device chain instances are
tracks, device layers, drums pads, or FX slots. */
	getDeviceChain(): DeviceChain

	/** Returns the device at the given index within the bank. */
	getDevice(

		/** the device index within this bank, not the position within the device chain. Must be in the
          range [0..sizeOfBank-1].*/
		indexInBank: number): Device

	/** Scrolls the device window one page up. */
	scrollPageUp(): void

	/** Scrolls the device window one page down. */
	scrollPageDown(): void

	/** Scrolls the device window one device up. */
	scrollUp(): void

	/** Scrolls the device window one device down. */
	scrollDown(): void

	/** Browses for content to insert a device at the given index inside this bank. */
	browseToInsertDevice(

		/** the index to insert the device at. Must be >= 0 and <= {@link #getSizeOfBank()}.*/
		index: number): void
}

/** The foundation of all interfaces that contain devices, such as tracks, device layers, drum pads or FX
slots. */
declare interface DeviceChain extends ObjectProxy {

	/** Selects the device chain in Bitwig Studio, in case it is a selectable object. */
	selectInEditor(): void

	/** Value that reports the name of the device chain, such as the track name or the drum pad
name. */
	name(): SettableStringValue

	/** Registers an observer that reports if the device chain is selected in Bitwig Studio editors. */
	addIsSelectedInEditorObserver(

		/** a callback function that takes a single boolean parameter.*/
		callback: (bool: boolean) => void
	): void

	/** Returns an object that provides bank-wise navigation of devices. */
	createDeviceBank(

		/** the number of devices should be accessible simultaneously*/
		numDevices: number
	): DeviceBank

// 	/** Returns an object used for browsing devices, presets and other content. Committing the browsing session
// will load or create a device from the selected resource and insert it into the device chain. */
// 	createDeviceBrowser(

// 		/** the size of the window used to navigate the filter column entries.*/
// 		numFilterColumnEntries: any,

// 		/** the size of the window used to navigate the results column entries.*/
// 		numResultsColumnEntries: any): Browser

	/** {@link InsertionPoint} that can be used to insert at the start of the device chain. */
	startOfDeviceChainInsertionPoint(): InsertionPoint

	/** {@link InsertionPoint} that can be used to insert at the end of the device chain. */
	endOfDeviceChainInsertionPoint(): InsertionPoint
}

/** Instances of this interface represent device layers in Bitwig Studio. */
declare interface DeviceLayer extends Channel {
}

/** Devices layers are features of special Bitwig Studio devices, more specifically the Layer Instrument and
Layer FX devices, and are also shown as sub-channels in the mixer panel.

Instances of device layer bank are configured with a fixed number of channels and represent an excerpt of
underlying complete list of channels. Various methods are provided for scrolling to different sections of
the underlying list. It basically acts like a one-dimensional window moving over the device layers.

To receive an instance of device layer bank call {@link Device#createLayerBank(int numChannels)}. */
declare interface DeviceLayerBank extends ChannelBank<DeviceLayer> {
}

/** Instances of this interface represent nested FX slots in devices. */
declare interface DeviceSlot extends DeviceChain {
}

/** This interface is used to configure observation of pretty-printed device parameter values. */
declare interface DirectParameterValueDisplayObserver {

	/** Starts observing the parameters according to the given parameter ID array, or stops observing in case
`null` is passed in for the parameter ID array. */
	setObservedParameterIds(

		/** the array of parameter IDs or `null` to stop observing parameter display values.*/
		parameterIds: number[]|null): void
}

/** This interface is used to save custom script settings inside Bitwig Studio documents. The settings are
shown to the user in the `Studio IO` panel of Bitwig Studio. */
declare interface DocumentState extends Settings {
}

/** Instances of this interface represent double values. */
declare interface DoubleValue extends Value<DoubleValueChangedCallback> {

	/** Gets the current value. */
	get(): number
	getAsDouble(): number
}

/** Instances of this interface are special kind of channel objects that represent the pads of a drum machine
instrument. Drum pads are typically associated to channel objects via note keys. */
declare interface DrumPad extends Channel {

	/** {@link InsertionPoint} that can be used to insert content in this drum pad. */
	insertionPoint(): InsertionPoint
}

/** Drum pads are features of special Bitwig Studio devices (currently only the Bitwig Drum Machine
instrument), and are also shown as sub-channels in the mixer panel.

Instances of drum pad bank are configured with a fixed number of pads/channels and represent an excerpt of
underlying complete list of channels. Various methods are provided for scrolling to different sections of
the underlying list. It basically acts like a one-dimensional window moving over the drum pad channels.

To receive an instance of drum pad bank call {@link Device#createDrumPadBank(int numChannels)}. */
declare interface DrumPadBank extends ChannelBank<DrumPad> {

	/** Specifies if the Drum Machine should visualize which pads are part of the window. By default indications
are enabled. */
	setIndication(

		/** `true` if visual indications should be enabled, `false` otherwise*/
		shouldIndicate: boolean): void

	/** Clears mute on all drum pads. */
	clearMutedPads(): void

	/** Clears solo on all drum pads. */
	clearSoloedPads(): void

	/** True if there is one or many muted pads. */
	hasMutedPads(): BooleanValue

	/** True if there is one or many soloed pads. */
	hasSoloedPads(): BooleanValue
}

declare interface EnumValue extends Value<EnumValueChangedCallback> {
	/** Gets the current value. */
	get(): string
}

declare interface Extension<HostType extends Host, DefinitionType extends ExtensionDefinition> {
	getHost(): HostType
	getExtensionDefinition(): DefinitionType
}

/** Base class for defining any kind of extension for Bitwig Studio. */
declare interface ExtensionDefinition {

	/** The name of the extension. */
	getName(): string

	/** The author of the extension. */
	getAuthor(): string

	/** The version of the extension. */
	getVersion(): string

	/** A unique id that identifies this extension. */
	getId(): string

	/** The minimum API version number that this extensions requires. */
	getRequiredAPIVersion(): number

	/** Is this extension is using Beta APIs?

Beta APIs are still on development and might not be available in a future version of Bitwig Studio.

Turning this flag to true, will flag your extension as being a beta extension which might not work after
updating Bitwig Studio. */
	isUsingBetaAPI(): boolean

	/** Gets a remote URI or a path within the extension's jar file where documentation for this extension can
be found or null if there is none. If the path is not a URI then it is assumed to be a path below the directory
"Documentation" within the extension's jar file. */
	getHelpFilePath(): string

	/** If true then this extension should fail when it calls a deprecated method in the API. This is useful
during development. */
	shouldFailOnDeprecatedUse(): boolean

	/** An e-mail address that can be used to contact the author of this extension if a problem is detected with
it or null if none. */
	getErrorReportingEMail(): string
	toString(): string
}

/** Information about the dimensions of a font. */
declare interface FontExtents {

	/** Returns the distance that the font extends above the baseline. Note that this is not always
exactly equal to the maximum of the extents of all the glyphs in the font, but rather is
picked to express the font designer's intent as to how the font should align with elements
above it. */
	getAscent(): number

	/** Returns the distance that the font extends below the baseline. This value is positive for
typical fonts that include portions below the baseline. Note that this is not always exactly
equal to the maximum of the extents of all the glyphs in the font, but rather is picked to
express the font designer's intent as to how the the font should align with elements below it. */
	getDescent(): number

	/** Returns the recommended vertical distance between baselines when setting consecutive lines of
text with the font. This is greater than ascent+descent by a quantity known as the line
spacing or external leading. When space is at a premium, most fonts can be set with only a
distance of ascent+descent between lines. */
	getHeight(): number

	/** the maximum distance in the X direction that the the origin is advanced for any glyph in the
font. */
	getMaxAdvanceX(): number

	/** Returns the maximum distance in the Y direction that the the origin is advanced for any glyph
in the font. this will be zero for normal fonts used for horizontal writing. (The scripts of
East Asia are sometimes written vertically.) */
	getMaxAdvanceY(): number
}

declare interface FontFace {

	/** Get the font name. */
	getName(): string
}

/** Configure the font rendering options. */
declare interface FontOptions {
	// getAntialiasMode(): AntialiasMode
	// setAntialiasMode(mode: AntialiasMode): void
	// getSubPixelOrder(): SubPixelOrder
	// setSubPixelOrder(subPixelOrder: SubPixelOrder): void
	// getHintStyle(): HintStyle
	// setHintStyle(hintStyle: HintStyle): void
	// getHintMetrics(): HintMetrics
	// setHintMetrics(hintMetrics: HintMetrics): void
}

/** This class represents a linear gradient.
Add color stops between 0 and 1. */
declare interface GradientPattern {
	addColorStop(offset: number, red: number, green: number, blue: number, alpha: number): void
}

declare enum Operator {
	CLEAR,
 	SOURCE,
 	OVER,
 	IN,
 	OUT,
 	ATOP,
 	DEST,
 	DEST_OVER,
 	DEST_IN,
 	DEST_OUT,
 	DEST_ATOP,
 	XOR,
 	ADD,
 	SATURATE,
 	MULTIPLY,
 	SCREEN,
 	OVERLAY,
 	DARKEN,
 	LIGHTEN,
 	COLOR_DODGE,
 	COLOR_BURN,
 	HARD_LIGHT,
 	SOFT_LIGHT,
 	DIFFERENCE,
 	EXCLUSION,
 	HSL_HUE,
 	HSL_SATURATION,
 	HSL_COLOR,
 	HSL_LUMINOSITY
}

/** Provides 2D vector drawing API very similar to cairo graphics.
Please read https://www.cairographics.org/manual/ to get a better idea of how this API works. */
declare interface GraphicsOutput {
	translate(x: number, y: number): void
	rotate(angle: number): void
	scale(xFactor: number, yFactor: number): void
	copyPath(): Path
	copyPathFlat(): Path
	appendPath(path: Path): void
	moveTo(x: number, y: number): void
	relMoveTo(x: number, y: number): void
	lineTo(x: number, y: number): void
	relLineTo(x: number, y: number): void
	rectangle(x: number, y: number, width: number, height: number): void
	arc(xc: number, yc: number, radius: number, angle1: number, angle2: number): void
	arcNegative(xc: number, yc: number, radius: number, angle1: number, angle2: number): void
	circle(centerX: number, centerY: number, radius: number): void
	curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void
	relCurveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void
	paintWithAlpha(alpha: number): void
	mask(image: Image, x: number, y: number): void
	setColor(color: Color): void
	// setPattern(pattern: Pattern): void
	// setAntialias(antialiasMode: AntialiasMode): void
	setLineWidth(width: number): void
	setDash(dashes: string): void
	// setFillRule(rule: FillRule): void
	// setLineCap(lineCap: LineCap): void
	// setLineJoin(lineJoin: LineJoin): void
	setMiterLimit(limit: number): void
	setOperator(operator: Operator): void
	setTolerance(tolerance: number): void
	drawImage(image: Image, x: number, y: number): void
	// createLinearGradient(x1: number, y1: number, x2: number, y2: number): GradientPattern
	// createMeshGradient(): MeshPattern
	showText(text: string): void
	setFontSize(fontSize: number): void
	// setFontFace(fontFace: FontFace): void
	// setFontOptions(fontOptions: FontOptions): void
	// getFontExtents(): FontExtents
	// getTextExtents(text: string): TextExtents
}

/** An interface representing the global groove settings of the project. */
declare interface Groove {

	/** Returns the enabled state of the groove. */
	getEnabled(): Parameter

	/** Returns the object that represents the shuffle amount in Bitwig Studio. */
	getShuffleAmount(): Parameter

	/** Returns the object that represents the shuffle rate in Bitwig Studio. */
	getShuffleRate(): Parameter

	/** Returns the object that represents the accent amount in Bitwig Studio. */
	getAccentAmount(): Parameter

	/** Returns the object that represents the accent rate in Bitwig Studio. */
	getAccentRate(): Parameter

	/** Returns the object that represents the accent phase in Bitwig Studio. */
	getAccentPhase(): Parameter
}

/** An action that can happen on a hardware control. For example, the user touching it, pressing it, releasing
it etc. */
declare interface HardwareAction extends HardwareBindingSource<HardwareActionBinding> {

	/** Sets the {@link HardwareActionMatcher} that is used to recognize when this action happens. */
	setActionMatcher(actionMatcher: HardwareActionMatcher): void

	/** Sets the {@link AbsoluteHardwareValueMatcher} that is used to recognize when this action happens and
with what pressure.

This is useful for a button press that is pressure sensitive. The pressure can be obtained by creating a
custom action with
{@link ControllerHost#createAction(java.util.function.DoubleConsumer, java.util.function.Supplier)} and
then binding the created action to this {@link HardwareAction}. */
	setPressureActionMatcher(actionMatcher: AbsoluteHardwareValueMatcher): void

	/** Checks if this action is supported (that is, it has a {@link HardwareActionMatcher} that can detect it). */
	isSupported(): boolean
}

/** Something that can be bound to a hardware action (such as user pressing a button). */
declare interface HardwareActionBindable extends HardwareBindable {

	/** Binds this target to the supplied {@link HardwareAction} so that when the hardware action occurs this
target is invoked.

When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
it. */
	addBinding(action: HardwareAction): HardwareActionBinding

	/** Invokes the action. */
	invoke(): void
}

/** Represents a binding from a hardware action (such as user pressing a button) to some target action. */
declare interface HardwareActionBinding extends HardwareBinding {
}

/** Defines a means of recognizing when a {@link HardwareAction} happens based on some hardware input.

For example, when a certain MIDI CC message happens. */
declare interface HardwareActionMatcher extends HardwareInputMatcher {
}

/** An object that can be a target in a {@link HardwareBinding}. */
declare interface HardwareBindable {
}

/** Represents a binding from some hardware input to a target.

When the binding is no longer needed the {@link #removeBinding()} method can be called to remove it. */
declare interface HardwareBinding {
	/** Removes this binding between its source and target so it is no longer in effect. */
	removeBinding(): void
}

/** Represents the source of a {@link HardwareBinding}. */
declare interface HardwareBindingSource<HardwareBindingType extends HardwareBinding> {

	/** Checks if it is possible to make a binding from this source to the supplied target object. */
	canBindTo(target: Object): boolean

	/** Binds this source to the supplied target and returns the created binding. This can only be called if the
{@link #canBindTo(Object)} returns true. */
	addBinding(target: HardwareBindable): HardwareBindingType

	/** Clears all bindings from this source to its targets. */
	clearBindings(): void

	/** Ensures there is a single binding to the supplied target.

This is a convenience method that is equivalent to calling {@link #clearBindings()} and the
{@link #addBinding(HardwareBindable)} */
	setBinding(target: HardwareBindable): HardwareBindingType
}

/** Represents a binding from some hardware input to a ranged value. */
declare interface HardwareBindingWithRange extends HardwareBinding {

	/** Sets the minimum normalized value (0...1) that should be used for this binding. */
	setMinNormalizedValue(min: number): void

	/** Sets the maximum normalized value (0...1) that should be used for this binding. */
	setMaxNormalizedValue(max: number): void

	/** Sets the normalized range (0...1) that should be used for this binding. */
	setNormalizedRange(min: number, max: number): void
}

/** A {@link HardwareBinding} that has some sensitivity setting. */
declare interface HardwareBindingWithSensitivity extends HardwareBinding {

	/** Sets the sensitivity of this binding. */
	setSensitivity(sensitivity: number): void
}

/** Represents a physical hardware button on a controller */
declare interface HardwareButton extends HardwareControl {

	/** Action that happens when the user presses the button. */
	pressedAction(): HardwareAction

	/** Action that happens when the user releases the button. */
	releasedAction(): HardwareAction

	/** Button state */
	isPressed(): BooleanValue

	/** Sets the optional control that represents the aftertouch value for this button. */
	setAftertouchControl(control: AbsoluteHardwareControl): void

	/** An indication of how rounded the corners of this button should be. */
	setRoundedCornerRadius(radiusInMM: number): void
}

/** Some kind of physical control on a piece of hardware (such as a knob, button, slider etc). */
declare interface HardwareControl extends HardwareElement {
	/** Action that happens when the user touches this control. */
	beginTouchAction(): HardwareAction

	/** Action that happens when the user stops touching this control. */
	endTouchAction(): HardwareAction

	/** Value that indicates if this control is being touched or not. */
	isBeingTouched(): BooleanValue

	/** Optional light that is in the background of this control. */
	backgroundLight(): HardwareLight

	/** Sets the optional light that is in the background of this control. */
	setBackgroundLight(light: HardwareLight): void
}

/** Represents a hardware device that the user has chosen to communicate with. The hardware devices that the
user needs to choose are defined by the
{@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)} method. */
declare interface HardwareDevice {

	/** The {@link HardwareDeviceMatcher} that was provided by the controller for identifying this hardware
device in {@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)}. */
	deviceMatcher(): HardwareDeviceMatcher
}

/** Matcher that can match a particular hardware device that is connected to the user's machine.
Sub classes of this define how the hardware is connected.
Currently only USB devices are supported. */
declare interface HardwareDeviceMatcher {

	/** Human friendly name for the kinds of hardware devices this matcher matches. */
	getName(): string
}

/** Defines a list of all the hardware devices that a controller needs. */
declare interface HardwareDeviceMatcherList {

	/** Adds information about a hardware device that is needed and how it can be matched. The hardware device
will need to match at least one of the supplied matchers.

For each entry added to this list the user will see a device chooser that lets them select an
appropriate device. The information added here is also used for auto detection purposes. */
	add(deviceMatchers: HardwareDeviceMatcher): void

	/** The number of hardware devices in the list. */
	getCount(): number
	getHardwareDeviceMatchersAt(index: number): HardwareDeviceMatcher[]
	getList(): HardwareDeviceMatcher[]
}

/** Represents some physical hardware element. Hardware elements can be {@link HardwareControl}s (e.g. buttons,
sliders etc) or {@link HardwareOutputElement}s (e.g lights, text displays etc). */
declare interface HardwareElement {

	/** The unique id associated with this element. */
	getId(): string

	/** An optional label associated with this element. */
	getLabel(): string

	/** Sets the label for this hardware control as written on the hardware. */
	setLabel(label: string): void

	/** The color of the label. */
	getLabelColor(): Color

	/** Sets the color of the label. */
	setLabelColor(color: Color): void

	/** {@link RelativePosition} that defines where the label is. */
	getLabelPosition(): RelativePosition
	setLabelPosition(position: RelativePosition): void

	/** The physical bounds of this hardware element on the controller. */
	setBounds(xInMM: number, yInMM: number, widthInMM: number, heightInMM: number): void
	getX(): number
	getY(): number
	getWidth(): number
	getHeight(): number
}

/** Defines a means of recognizing when some kind of hardware input happens.

For example, when a certain MIDI CC message happens. */
declare interface HardwareInputMatcher {
}

/** Defines a hardware light. There are 2 kinds of lights: {@link OnOffHardwareLight} and
{@link MultiStateHardwareLight}. */
declare interface HardwareLight extends HardwareOutputElement {
}

/** Defines the visual state of a hardware light so that it can be visualized in Bitwig Studio's user
interface.

This is currently only used when simulating hardware when it is not present for debugging but it may be
used for other purposes in the future. */
declare interface HardwareLightVisualState {
	defaultLabelColorForLightColor(lightColor: Color): Color
	createForColor(color: Color, labelColor: Color): HardwareLightVisualState
	createBlinking(onColor: Color, offColor: Color, labelOnColor: Color, labelOffColor: Color, onBlinkTimeInSec: number, offBlinkTimeInSec: number): HardwareLightVisualState
	isBlinking(): boolean
	getColor(): Color
	getBlinkOffColor(): Color
	getOffBlinkTime(): number
	getOnBlinkTime(): number
	getLabelColor(): Color
	getLabelBlinkOffColor(): Color
}

declare type Runnable = (...args: any[]) => any

/** Represents a physical hardware element that displays some output to the user.

    For example, a light, some text etc */
declare interface HardwareOutputElement extends HardwareElement {

	/** Sets an optional callback for this element whenever it's state needs to be sent to the hardware. This
will be called when calling {@link HardwareSurface#updateHardware()} if the state needs to be sent. */
	onUpdateHardware(sendStateRunnable: Runnable): void
}

/** Defines a physical pixel display on the controller. */
declare interface HardwarePixelDisplay extends HardwareOutputElement {

	/** The {@link Bitmap} that contains the contents of this display. */
	bitmap(): Bitmap
}

/** Represents a value that needs to be displayed somehow on the hardware.

A {@link HardwareProperty} is part of a {@link HardwareOutputElement}. */
declare interface HardwareProperty {
}

/** Represents a physical hardware button on a controller */
declare interface HardwareSlider extends AbsoluteHardwareControl{

	/** Indicates if this slider is horizontal rather than vertical. */
	setIsHorizontal(isHorizontal: boolean): void
}

/** Represents a surface that can contain {@link HardwareElement}s such as {@link HardwareButton}s,
{@link HardwareSlider}s, {@link MultiStateHardwareLight}s etc

<p>
This information allows Bitwig Studio to construct a reliable physical model of the hardware. This
information can be used to simulate hardware being present even when physical hardware is not available
(and may also be used for other purposes in the future).

<p>
To be able to simulate hardware being connected so that you can debug controllers without the real hardware
you need to do the following:

<p>
Create a file with the name "config.json" in your user settings directory. The location of this directory
is platform dependent:

<ul>
<li>On Windows: %LOCALAPPDATA%\Bitwig Studio
<li>On macOS: Library/Application Support/Bitwig/Bitwig Studio
<li>On Linux: $HOME/.BitwigStudio
</ul>

<p>
Then add the following line to the config.json file:

<pre>
extension-dev : true
</pre>

<p>
You will then need to restart Bitwig Studio. To simulate the controller being connected you can right click
on the controller in the preferences and select "Simulate device connected".

<p>
If you have also provided physical positions for various {@link HardwareElement}s using
{@link HardwareElement#setBounds(double, double, double, double)} then you can also see a GUI simulator for
your controller by selecting "Show simulated hardware GUI". */
declare interface HardwareSurface {

	/** Creates a {@link HardwareSlider} that represents a physical slider on a controller. */
	createHardwareSlider(

		/** A unique string that identifies this control.*/
		id: string): HardwareSlider

	/** Creates an {@link AbsoluteHardwareKnob} that represents a physical knob on a controller that can be used
to input an absolute value. */
	createAbsoluteHardwareKnob(

		/** A unique string that identifies this control.*/
		id: string): AbsoluteHardwareKnob

	/** Creates an {@link RelativeHardwareKnob} that represents a physical knob on a controller that can be used
to input a relative value change. */
	createRelativeHardwareKnob(

		/** A unique string that identifies this control.*/
		id: string): RelativeHardwareKnob
	createPianoKeyboard(id: string, numKeys: number, octave: number, startKeyInOctave: number): PianoKeyboard

	/** Creates a {@link HardwareButton} that represents a physical button on a controller */
	createHardwareButton(

		/** A unique string that identifies this control.*/
		id: any): HardwareButton

	/** Creates a {@link OnOffHardwareLight} that represents a physical light on a controller */
	createOnOffHardwareLight(id: string): OnOffHardwareLight

	/** Creates a {@link MultiStateHardwareLight} that represents a physical light on a controller */
	createMultiStateHardwareLight(id: string): MultiStateHardwareLight

	/** Creates a {@link HardwareTextDisplay} that represents a physical text display on a controller */
	createHardwareTextDisplay(id: string, numLines: number): HardwareTextDisplay

	/** Creates a {@link HardwarePixelDisplay} that displays the provided {@link Bitmap} that is rendered by the
controller. */
	createHardwarePixelDisplay(id: string, bitmap: Bitmap): HardwarePixelDisplay

	/** Sets the physical size of this controller in mm. */
	setPhysicalSize(widthInMM: number, heightInMM: number): void

	/** Updates the state of all {@link HardwareOutputElement}s that have changed since the last time this
method was called.

Any onUpdateHardware callbacks that have been registered on {@link HardwareOutputElement}s or
{@link HardwareProperty}s will be invoked if their state/value has changed since the last time it was
called.

This is typically called by the control script from its flush method. */
	updateHardware(): void

	/** Mark all {@link HardwareOutputElement}s as needing to resend their output state, regardless of it has
changed or not. */
	invalidateHardwareOutputState(): void

	/** A list of all the {@link HardwareControl}s that have been created on this {@link HardwareSurface}. */
	hardwareControls(): HardwareControl[]

	/** Finds the {@link HardwareElement} that has the supplied id or null if not found. */
	hardwareElementWithId(id: string): HardwareElement

	/** List of all {@link HardwareElement}s on this {@link HardwareSurface}. */
	hardwareOutputElements(): HardwareOutputElement[]
}

/** Represents a display on some hardware that shows one or more lines of text. */
declare interface HardwareTextDisplay extends HardwareOutputElement {

	/** The line at the supplied line index. */
	line(line: number): HardwareTextDisplayLine
}

/** Represents a line of text on a {@link HardwareTextDisplay}. */
declare interface HardwareTextDisplayLine {

	/** Property that defines the current text shown. */
	text(): StringHardwareProperty

	/** Property that defines the background color of this line. */
	backgroundColor(): ColorHardwareProperty

	/** Property that defines the text color of this line. */
	textColor(): ColorHardwareProperty
}

/** Defines the interface through which an extension can talk to the host application. */
declare interface Host {

	/** Returns the latest supported API version of the host application. */
	getHostApiVersion(): number

	/** Returns the vendor of the host application. */
	getHostVendor(): string

	/** Returns the product name of the host application. */
	getHostProduct(): string

	/** Returns the version number of the host application. */
	getHostVersion(): string

	/** The platform type that this host is running on. */
	getPlatformType(): PlatformType

	/** Sets an email address to use for reporting errors found in this script. */
	setErrorReportingEMail(address: string): void

	/** Gets the OpenSoundControl module. */
	getOscModule(): OscModule

	/** Allocates some memory that will be automatically freed once the extension exits. */
	allocateMemoryBlock(size: number): MemoryBlock

	/** Creates an offscreen bitmap that the extension can use to render into. The memory used by this bitmap is
guaranteed to be freed once this extension exits. */
	createBitmap(width: number, height: number, format: any): Bitmap

	/** Loads a font.
The memory used by this font is guaranteed to be freed once this extension exits. */
	loadFontFace(path: string): FontFace

	/** Creates a new FontOptions.
This object is used to configure how the GraphicOutput will display text.
The memory used by this object is guaranteed to be freed once this extension exits. */
	createFontOptions(): FontOptions

	/** Loads a PNG image.
The memory used by this image is guaranteed to be freed once this extension exits. */
	loadPNG(path: string): Image

	/** Loads a SVG image.
The memory used by this image is guaranteed to be freed once this extension exits. */
	loadSVG(path: string, scale: number): Image

	/** Restarts this controller. */
	restart(): void

	/** Loads the supplied API version into the calling script. This is only intended to be called from a
controller script. It cannot be called from a Java controller extension. */
	loadAPI(version: number): void

	/** Call this method to allow your script to use Beta APIs.

Beta APIs are still on development and might not be available in a future version of Bitwig Studio.

Turning this flag to true, will flag your extension as being a beta extension which might not work after
updating Bitwig Studio. */
	useBetaApi(): void

	/** Determines whether the calling script should fail if it calls a deprecated method based on the API
version that it requested. */
	shouldFailOnDeprecatedUse(): boolean

	/** Sets whether the calling script should fail if it calls a deprecated method based on the API version
that it requested. This is only intended to be called from a controller script. It cannot be called from
a Java controller extension. */
	setShouldFailOnDeprecatedUse(value: boolean): void

	/** Loads the script defined by the supplied path. This is only intended to be called from a controller
script. It cannot be called from a Java controller extension. */
	load(path: string): void

	/** Indicates if the host platform is Windows. */
	platformIsWindows(): boolean

	/** Indicates if the host platform is Apple Mac OS X. */
	platformIsMac(): boolean

	/** Indicates if the host platform is Linux. */
	platformIsLinux(): boolean

	/** Registers a controller script with the given parameters. This function must be called once at the global
scope of the script. */
	defineController(

		/** the name of the hardware vendor. Must not be <code>null</code>.*/
		vendor: any,

		/** the name of the controller script as listed in the user interface of Bitwig Studio. Must not
          be <code>null</code>.*/
		name: any,

		/** the version of the controller script. Must not be <code>null</code>.*/
		version: any,

		/** a universal unique identifier (UUID) string that is used to distinguish one script from
          another, for example `550e8400-e29b-11d4-a716-446655440000`. Must not be <code>null</code>.
          For generating random UUID strings several free web tools are available.*/
		uuid: any,

		/** the name of the script author*/
		author: any): void

	/** Defines the number of MIDI ports for input and output that the device uses. This method should be called
once in the global scope if the script is supposed to exchange MIDI messages with the device, or if the
script adds entries to the MIDI input/output choosers in Bitwig Studio. After calling this method the
individual port objects can be accessed using {@link #getMidiInPort(int index)} and
{@link #getMidiInPort(int index)}. */
	defineMidiPorts(

		/** the number of input ports*/
		numInports: any,

		/** the number of output ports*/
		numOutports: any): void

	/** Returns the MIDI input port with the given index. */
	getMidiInPort(

		/** the index of the MIDI input port, must be valid.*/
		index: any): MidiIn

	/** Returns the MIDI output port with the given index. */
	getMidiOutPort(

		/** the index of the MIDI output port, must be valid.*/
		index: any): MidiOut

	/** Gets the {@link HardwareDevice} at the specified index. This index corresponds to the index of the
{@link HardwareDeviceMatcher} specified in the
{@link ControllerExtensionDefinition#listHardwareDevices(java.util.List)} */
	hardwareDevice(index: number): HardwareDevice

	/** Registers patterns which are used to automatically detect hardware devices that can be used with the
script.<br/>

When the user clicks on the `detect` button in the Bitwig Studio controller preferences dialog, Bitwig
Studio searches for connected controller hardware by comparing the parameters passed into this function
are compared with the port names of the available MIDI drivers. Found controller scripts are
automatically added with their input/output ports configured.<br/>

Calling this function is optional, but can also be called multiple times in the global script scope in
order to support alternative driver names. */
	addDeviceNameBasedDiscoveryPair(

		/** the array of strings used to detect MIDI input ports, must not be `null`.*/
		inputs: any,

		/** the array of strings used to detect MIDI output ports, must not be `null`.*/
		outputs: any): void

	/** Creates a preferences object that can be used to insert settings into the Controller Preferences panel
in Bitwig Studio. */
	getPreferences(): Preferences

	/** Creates a document state object that can be used to insert settings into the Studio I/O Panel in Bitwig
Studio. */
	getDocumentState(): DocumentState

	/** Returns an object that is used to configure automatic notifications. Bitwig Studio supports automatic
visual feedback from controllers that shows up as popup notifications. For example when the selected
track or the current device preset was changed on the controller these notifications are shown,
depending on your configuration. */
	getNotificationSettings(): NotificationSettings

	/** Returns an object for controlling various aspects of the currently selected project. */
	getProject(): Project

	/** Returns an object for controlling and monitoring the elements of the `Transport` section in Bitwig
Studio. This function should be called once during initialization of the script if transport access is
desired. */
	createTransport(): Transport

	/** Returns an object for controlling and monitoring the `Groove` section in Bitwig Studio. This function
should be called once during initialization of the script if groove control is desired. */
	createGroove(): Groove

	/** Returns an object that provides access to general application functionality, including global view
settings, the list of open projects, and other global settings that are not related to a certain
document. */
	createApplication(): Application

	/** Returns an object which provides access to the `Arranger` panel inside the specified window. */
	createArranger(

		/** the index of the window where the arranger panel is shown, or -1 in case the first arranger
          panel found on any window should be taken*/
		window: any): Arranger

	/** Returns an object which provides access to the `Mixer` panel that matches the specified parameters. */
	createMixer(

		/** the name of the panel layout that contains the mixer panel, or `null` in case the selected
          panel layout in Bitwig Studio should be followed. Empty strings or invalid names are treated
          the same way as `null`. To receive the list of available panel layouts see
          {@link Application#addPanelLayoutObserver}.*/
		panelLayout: any,

		/** the index of the window where the mixer panel is shown, or -1 in case the first mixer panel
          found on any window should be taken*/
		window: any): Mixer

	/** Returns a track bank with the given number of child tracks, sends and scenes.<br/>

A track bank can be seen as a fixed-size window onto the list of tracks in the connected track group
including their sends and scenes, that can be scrolled in order to access different parts of the track
list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>

The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
The track bank returned by this function provides a convenient interface for controlling which tracks
are currently shown on the hardware.<br/>

Creating a track bank using this method will consider all tracks in the document, including effect
tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
you are only interested in tracks of a certain kind. */
	createTrackBank(

		/** the number of child tracks spanned by the track bank*/
		numTracks: any,

		/** the number of sends spanned by the track bank*/
		numSends: any,

		/** the number of scenes spanned by the track bank*/
		numScenes: any,

		/** specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.*/
		hasFlatTrackList: any): TrackBank

	/** Returns a track bank with the given number of tracks, sends and scenes. Only audio tracks, instrument
tracks and hybrid tracks are considered. For more information about track banks and the `bank pattern`
in general, see the documentation for {@link #createTrackBank}. */
	createMainTrackBank(

		/** the number of tracks spanned by the track bank*/
		numTracks: any,

		/** the number of sends spanned by the track bank*/
		numSends: any,

		/** the number of scenes spanned by the track bank*/
		numScenes: any): TrackBank

	/** Returns a track bank with the given number of effect tracks and scenes. Only effect tracks are
considered. For more information about track banks and the `bank pattern` in general, see the
documentation for {@link #createTrackBank}. */
	createEffectTrackBank(

		/** the number of tracks spanned by the track bank*/
		numTracks: any,

		/** the number of scenes spanned by the track bank*/
		numScenes: any): TrackBank

	/** Returns an object that represents the master track of the document. */
	createMasterTrack(

		/** the number of scenes for bank-wise navigation of the master tracks clip launcher slots.*/
		numScenes: any): MasterTrack
	createCursorTrack(numSends: number, numScenes: number): CursorTrack

	/** Returns a scene bank with the given number of scenes.<br/>

A scene bank can be seen as a fixed-size window onto the list of scenes in the current document, that
can be scrolled in order to access different parts of the scene list. For example a scene bank
configured for 8 scenes can show scene 1-8, 2-9, 3-10 and so on.<br/>

The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
contain a dynamic list of scenes, most likely more scenes than the hardware can control simultaneously.
The scene bank returned by this function provides a convenient interface for controlling which scenes
are currently shown on the hardware.<br/> */
	createSceneBank(

		/** the number of scenes spanned by the track bank*/
		numScenes: any): SceneBank

	/** Returns a clip object that represents the cursor of the launcher clip selection. The gridWidth and
gridHeight parameters specify the grid dimensions used to access the note content of the clip. */
	createLauncherCursorClip(

		/** the number of steps spanned by one page of the note content grid.*/
		gridWidth: any,

		/** the number of keys spanned by one page of the note content grid.*/
		gridHeight: any): Clip

	/** Returns a clip object that represents the cursor of the arranger clip selection. The gridWidth and
gridHeight parameters specify the grid dimensions used to access the note content of the clip. */
	createArrangerCursorClip(

		/** the number of steps spanned by one page of the note content grid.*/
		gridWidth: any,

		/** the number of keys spanned by one page of the note content grid.*/
		gridHeight: any): Clip

	/** Returns an object that is used to define a bank of custom user controls. These controls are available to
the user for free controller assignments and are typically used when bank-wise navigation is
inconvenient. */
	createUserControls(

		/** the number of controls that are available for free assignments*/
		numControllers: any): UserControlBank

	/** Schedules the given callback function for execution after the given delay. For timer applications call
this method once initially and then from within the callback function. */
	scheduleTask(

		/** the callback function that will be called*/
		callback: any,

		/** the duration after which the callback function will be called in milliseconds*/
		delay: any): void

	/** Requests that the driver's flush method gets called. */
	requestFlush(): void

	/** Prints the given string in the control surface console window. The console window can be opened in the
view menu of Bitwig Studio. */
	println(

		/** the string to be printed*/
		s: any): void

	/** Prints the given string in the control surface console window using a text style that highlights the
string as error. The console window can be opened in the view menu of Bitwig Studio. */
	errorln(

		/** the error string to be printed*/
		s: any): void

	/** Shows a temporary text overlay on top of the application GUI, that will fade-out after a short interval.
If the overlay is already shown, it will get updated with the given text. */
	showPopupNotification(

		/** the text to be shown*/
		text: any): void

	/** Opens a TCP (Transmission Control Protocol) host socket for allowing network connections from other
hardware and software. */
	createRemoteConnection(

		/** a meaningful name that describes the purpose of this connection.*/
		name: any,

		/** the port that should be used for the connection. If the port is already in use, then another
          port will be used. Check {@link RemoteSocket#getPort()} on the returned object to be sure.*/
		defaultPort: any): RemoteSocket

	/** Connects to a remote TCP (Transmission Control Protocol) socket. */
	connectToRemoteHost(

		/** the host name or IP address to connect to.*/
		host: any,

		/** the port to connect to*/
		port: any,

		/** the callback function that gets called when the connection gets established. A single
          {@link RemoteConnection} parameter is passed into the callback function.*/
		callback: any): void

	/** Sends a UDP (User Datagram Protocol) packet with the given data to the specified host. */
	sendDatagramPacket(

		/** the destination host name or IP address*/
		host: any,

		/** the destination port*/
		port: any,

		/** the data to be send. When creating a numeric byte array in JavaScript, the byte values must be
          signed (in the range -128..127).*/
		data: any): void

	/** Adds an observer for incoming UDP (User Datagram Protocol) packets on the selected port. */
	addDatagramPacketObserver(

		/** a meaningful name that describes the purpose of this observer.*/
		name: any,

		/** the port that should be used*/
		port: any,

		/** the callback function that gets called when data arrives. The function receives a single
          parameter that contains the data byte array.*/
		callback: any): boolean

	/** Creates a {@link PopupBrowser} that represents the pop-up browser in Bitwig Studio. */
	createPopupBrowser(): PopupBrowser

	/** {@link BeatTimeFormatter} used to format beat times by default. This will be used to format beat times
when asking for a beat time in string format without providing any formatting options. For example by
calling {@link BeatTimeStringValue#get()}. */
	defaultBeatTimeFormatter(): BeatTimeFormatter

	/** Sets the {@link BeatTimeFormatter} to use by default for formatting beat times. */
	setDefaultBeatTimeFormatter(formatter: BeatTimeFormatter): void

	/** Creates a {@link BeatTimeFormatter} that can be used to format beat times. */
	createBeatTimeFormatter(

		/** the character used to separate the segments of the formatted beat time, typically ":", "." or
          "-"*/
		separator: any,

		/** the number of digits reserved for bars*/
		barsLen: any,

		/** the number of digits reserved for beats*/
		beatsLen: any,

		/** the number of digits reserved for beat subdivisions*/
		subdivisionLen: any,

		/** the number of digits reserved for ticks*/
		ticksLen: any): BeatTimeFormatter

	/** Creates a {@link HardwareSurface} that can contain hardware controls. */
	createHardwareSurface(): HardwareSurface

	/** Creates a {@link HardwareActionMatcher} that is matched by either of the 2 supplied action matchers. */
	createOrHardwareActionMatcher(matcher1: HardwareActionMatcher, matcher2: HardwareActionMatcher): HardwareActionMatcher

	/** Creates a {@link RelativeHardwareValueMatcher} that is matched by either of the 2 supplied action
matchers. */
	createOrRelativeHardwareValueMatcher(matcher1: RelativeHardwareValueMatcher, matcher2: RelativeHardwareValueMatcher): RelativeHardwareValueMatcher

	/** Creates a {@link AbsoluteHardwareValueMatcher} that is matched by either of the 2 supplied action
matchers. */
	createOrAbsoluteHardwareValueMatcher(matcher1: AbsoluteHardwareValueMatcher, matcher2: AbsoluteHardwareValueMatcher): AbsoluteHardwareValueMatcher

	/** An object that can be used to generate useful MIDI expression strings which can be used in
{@link MidiIn#createActionMatcher(String)} and other related methods. */
	midiExpressions(): MidiExpressions

	/** Creates a {@link HardwareActionBindable} that can be bound to some {@link HardwareAction} (such as a
button press) and when that action occurs the supplied {@link Runnable} will be run */
	createAction(

		/** Consumer that will be notified of the pressure of the action*/
		actionPressureConsumer: any,

		/** Provider that can provide a description of what the runnable does (used for showing onscreen
          feedback or help to the user).*/
		descriptionProvider: any): HardwareActionBindable

	/** Creates a {@link RelativeHardwareControlBindable} that can be used to step forwards or backwards when a
{@link RelativeHardwareControl} is adjusted. A step is defined by the
{@link RelativeHardwareControl#setStepSize(double)}. */
	createRelativeHardwareControlStepTarget(

		/** The action that should happen when stepping forwards*/
		stepForwardsAction: any,

		/** The action that should happen when stepping backwards*/
		stepBackwardsAction: any): RelativeHardwareControlBindable

	/** Creates a {@link RelativeHardwareControlBindable} that can be used to adjust some value in an arbitrary
way. */
	createRelativeHardwareControlAdjustmentTarget(

		/** A consumer that will receive the relative adjustment amount when bound to a
          {@link RelativeHardwareControl}.*/
		adjustmentConsumer: any): RelativeHardwareControlBindable

	/** Creates a {@link AbsoluteHardwareControlBindable} that can be used to adjust some value in an arbitrary
way. */
	createAbsoluteHardwareControlAdjustmentTarget(

		/** A consumer that will receive the absolute adjustment amount when bound to an
          {@link AbsoluteHardwareControl}.*/
		adjustmentConsumer: any): AbsoluteHardwareControlBindable

	/** It will delete multiple object within one undo step. */
	deleteObjects(objects: DeleteableObject): void
}

/** Represents an abstract image type. */
declare interface Image {

	/** Returns the width */
	getWidth(): number

	/** Returns the height */
	getHeight(): number
}

/** A pipe that can be used to read data. */
declare interface InputPipe extends Pipe {

	/** Requests to read some data from this pipe in an asynchronous way (the caller is not blocked). Once some
data has been read the callback will be notified on the controller's thread. */
	readAsync(

		/** A {@link MemoryBlock} that can receive the data that is read.*/
		data: any,

		/** A callback that is notified on the controller's thread when the read has completed.*/
		callback: any,

		/** A timeout in milliseconds that will result in an error and termination of the controller if
          the read does not happen in this time. For inifnite timeout use 0.*/
		timeoutInMs: any): void

	/** Requests to read some data from this pipe in a synchronous way (the caller is blocked until the transfer
completes). */
	read(data: MemoryBlock, timeoutInMs: number): number
}

/** Defines an insertion point where various objects can be inserted as if the user had dragged and dropped
them to this insertion point (e.g with the mouse). Some things may not make sense to insert in which case
nothing happens. */
declare interface InsertionPoint {

	/** Copies the supplied tracks to this insertion point. If it's not possible to do so then this does
nothing. */
	copyTracks(tracks: Track): void

	/** Moves the supplied tracks to this insertion point. If it's not possible to do so then this does nothing. */
	moveTracks(tracks: Track): void

	/** Copies the supplied devices to this insertion point. If it's not possible to do so then this does
nothing. */
	copyDevices(devices: Device): void

	/** Moves the supplied devices to this insertion point. If it's not possible to do so then this does
nothing. */
	moveDevices(devices: Device): void

	/** Copies the supplied slots or scenes to this insertion point. If it's not possible to do so then this
does nothing. */
	copySlotsOrScenes(clipLauncherSlotOrScenes: ClipLauncherSlotOrScene): void

	/** Moves the supplied slots or scenes to this insertion point. If it's not possible to do so then this does
nothing. */
	moveSlotsOrScenes(clipLauncherSlotOrScenes: ClipLauncherSlotOrScene): void

	/** Inserts the supplied file at this insertion point. If it's not possible to do so then this does nothing. */
	insertFile(path: string): void

	/** Inserts a VST2 plugin device with the supplied id at this insertion point. If the plugin is unknown or
it's not possible to insert a plugin here then his does nothing. */
	insertVST2Device(

		/** The VST2 plugin id to insert*/
		id: any): void

	/** Inserts a VST3 plugin device with the supplied id at this insertion point. If the plugin is unknown or
it's not possible to insert a plugin here then his does nothing. */
	insertVST3Device(

		/** The VST2 plugin id to insert*/
		id: any): void

	/** Pastes the contents of the clipboard at this insertion point. */
	paste(): void

	/** Starts browsing using the popup browser for something to insert at this insertion point. */
	browse(): void
}

/** Represents an output value shown on some hardware. */
declare interface IntegerHardwareProperty extends HardwareProperty {

	/** Gets the current value. This is the value that should be sent to the hardware to be displayed. */
	currentValue(): number

	/** The value that was last sent to the hardware. */
	lastSentValue(): number

	/** Specifies a callback that should be called with the value that needs to be sent to the hardware. This
callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
from the flush method). */
	onUpdateHardware(sendValueConsumer: (int: number) => any): void

	/** Sets the current value. */
	setValue(value: number): void

	/** Sets the current value from a {@link BooleanSupplier} that supplies the latest value. */
	setValueSupplier(supplier: (...args: any[]) => number): void
}

declare interface IntegerValue extends Subscribable {
	/** Gets the current value. */
	get(): number
	getAsInt(): number

	/**
	 * Marks this value as being of interest to the driver. This can only be
	 * called once during the driver's init method. A value that is of interest
	 * to the driver can be obtained using the value's get method. If a value
	 * has not been marked as interested then an error will be reported if the
	 * driver attempts to get the current value. Adding an observer to a value
	 * will automatically mark this value as interested. */
	markInterested(): void

	/** Adds an observer that is notified when this value changes. This is intended to aid in backwards
compatibility for drivers written to the version 1 API. */
	addValueObserver(

		/** The callback to notify with the new value*/
		callback: IntegerValueChangedCallback,

		/** The value that the callback will be notified with if this value is not currently assigned to
          anything.*/
		valueWhenUnassigned: any
	): void
}

/** Defines the current state of a {@link MultiStateHardwareLight}. What this state means is entirely up to the
controller implementation. */
declare interface InternalHardwareLightState {

	/** The visual state of this light (used by Bitwig Studio to visualize the light when needed). */
	getVisualState(): HardwareLightVisualState
	equals(obj: Object): boolean
}

/** A special kind of track that represents the master track in Bitwig Studio. */
declare interface MasterTrack extends Track {
}

/** Defines a block of memory. The memory can be read/written using a {@link ByteBuffer} provided by
{@link #createByteBuffer()}. */
declare interface MemoryBlock {

	/** The size in bytes of this memory block. */
	size(): number

	/** Creates a {@link ByteBuffer} that can be used to read/write the data at this memory block. */
	createByteBuffer(): string[]
}

/** This represent a 2D gradient. */
declare interface MeshPattern {
	moveTo(x: number, y: number): void
	lineTo(x: number, y: number): void
	curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void
	setCornerColor(corner: number, red: number, green: number, blue: number, alpha: number): void
}

/** Creates useful MIDI expressions that can be used to match MIDI events. */
declare interface MidiExpressions {

	/** Creates an expression that recognizes a MIDI CC event. */
	createIsCCExpression(channel: number, controlNumber: number): string

	/** Creates an expression that recognizes a MIDI CC event with a specific value. This expression can be used
in {@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
example. */
	createIsCCValueExpression(channel: number, control: number, value: number): string

	/** Creates an expression that recognizes a pitch bend event. This expression can be used in
{@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
example. */
	createIsPitchBendExpression(channel: number): string

	/** Creates an expression that recognizes a note on event. This expression can be used in
{@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
example. */
	createIsNoteOnExpression(channel: number, note: number): string

	/** Creates an expression that recognizes a note off event. This expression can be used in
{@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
example. */
	createIsNoteOffExpression(channel: number, note: number): string

	/** Creates an expression that recognizes a polyphonic aftertouch event. This expression can be used in
{@link #createActionMatcher(String)} or {@link #createAbsoluteValueMatcher(String, String, int)}, for
example. */
	createIsPolyAftertouch(channel: number, note: number): string
}

/** Instances of this interface are used to setup handler functions for incoming MIDI messages from a specific
MIDI hardware.

<p>
Expressions can be used to generate matchers for various MIDI events that can then be used to update
hardware control states (see {@link MidiIn#createActionMatcher(String)} and {@link HardwareControl}).

<p>
The expression language supports these operators in the same way that C, Java, C++ do: +, -, *, /, %,
<<, >>, &&, ||, &, |, ^, <, <=, >, >=, ==, !=

<p>
The following variables are also defined for matching parts of the event:
<ul>
<li>status - Value of the status byte
<li>data1 - Value of the first data byte
<li>data2 - Value of the second data byte
<li>event - Integer value of the whole MIDI event with data2 byte in the least significant bits
</ul>

<p>
Integers can be represented in hex using same syntax as C. 'true' and 'false' keywords are also defined. */
declare interface MidiIn {

	/** Registers a callback for receiving short (normal) MIDI messages on this MIDI input port. */
	setMidiCallback(

		/** a callback function that receives three integer parameters: 1. the status byte 2. the data1
          value 2. the data2 value*/
		callback: (status: number, data1: any, data2: any) => void
	): void

	/** Registers a callback for receiving sysex MIDI messages on this MIDI input port. */
	setSysexCallback(

		/** a callback function that takes a single string argument*/
		callback: (message: string) => void
	): void

	/** Creates a note input that appears in the track input choosers in Bitwig Studio. This method must be
called within the `init()` function of the script. The messages matching the given mask parameter will
be fed directly to the application, and are not processed by the script. */
	createNoteInput(

		/** the name of the note input as it appears in the track input choosers in Bitwig Studio*/
		name: any,

		/** a filter string formatted as hexadecimal value with `?` as wildcard. For example `80????`
          would match note-off on channel 1 (0). When this parameter is {@null}, a standard filter will
          be used to forward note-related messages on channel 1 (0).

          If multiple note input match the same MIDI event then they'll all receive the MIDI event, and
          if one of them does not consume events then the events wont' be consumed.*/
		masks: any
	): NoteInput

	/** Creates a matcher that matches the absolute value of a MIDI CC message. */
	createAbsoluteCCValueMatcher(channel: number, controlNumber: number): AbsoluteHardwareValueMatcher

	/** Creates a matcher that matches the absolute value of a Poly AT message. */
	createPolyAftertouchValueMatcher(channel: number, note: number): AbsoluteHardwareValueMatcher

	/** Creates a matcher that matches the relative value of a MIDI CC message encoded using signed bit. */
	createRelativeSignedBitCCValueMatcher(channel: number, controlNumber: number, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Creates a matcher that matches the relative value of a MIDI CC message encoded using signed bit 2. */
	createRelativeSignedBit2CCValueMatcher(channel: number, controlNumber: number, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Creates a matcher that matches the relative value of a MIDI CC message encoded using bin offset. */
	createRelativeBinOffsetCCValueMatcher(channel: number, controlNumber: number, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Creates a matcher that matches the relative value of a MIDI CC message encoded using 2s complement. */
	createRelative2sComplementCCValueMatcher(channel: number, controlNumber: number, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Create a matcher that matches the absolute value of a MIDI pitch bend message. */
	createAbsolutePitchBendValueMatcher(channel: number): AbsoluteHardwareValueMatcher

	/** Creates an absolute value matcher that is defined by 2 separate MIDI events that have to occur in
sequence.

This can be used to get a much higher precision value that a single MIDI event would allow. Some
controllers for example will send 2 CC events for a single value. */
	createSequencedValueMatcher(firstValueMatcher: AbsoluteHardwareValueMatcher, secondValueMatcher: AbsoluteHardwareValueMatcher, areMostSignificantBitsInSecondEvent: boolean): AbsoluteHardwareValueMatcher

	/** Creates a matcher that matches the absolute value of a MIDI CC message by using expressions to filter
and extract a value out of the MIDI event. */
	createAbsoluteValueMatcher(

		/** Expression that must be true in order to extract the value.*/
		eventExpression: string,

		/** Expression that determines the value once an event has been matched.*/
		valueExpression: any,

		/** The number of bits that are relevant from the value extracted by the valueExpression.*/
		valueBitCount: any): AbsoluteHardwareValueMatcher

	/** Creates a matcher that applies a relative adjustment when a MIDI event occurs matching an expression. */
	createRelativeValueMatcher(

		/** Expression that must be true in order to extract the value.*/
		eventExpression: string,

		/** The amount of relative adjustment that should be applied*/
		relativeAdjustment: number
	): RelativeHardwareValueMatcher

	/** Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
value using signed bit. */
	createRelativeSignedBitValueMatcher(

		/** Value matcher that matches the value that needs to be converted to a relative value*/
		valueMatcher: any,

		/** The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.*/
		valueAmountForOneFullRotation: any): RelativeHardwareValueMatcher

	/** Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
value using signed bit 2. */
	createRelativeSignedBit2ValueMatcher(valueMatcher: AbsoluteHardwareValueMatcher, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
value using bin offset. */
	createRelativeBinOffsetValueMatcher(valueMatcher: AbsoluteHardwareValueMatcher, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
value using 2s complement. */
	createRelative2sComplementValueMatcher(valueMatcher: AbsoluteHardwareValueMatcher, valueAmountForOneFullRotation: number): RelativeHardwareValueMatcher

	/** Creates a matcher that recognizes an action when getting a MIDI CC event regardless of the value. */
	createCCActionMatcher(channel: number, controlNumber: number): HardwareActionMatcher

	/** Creates a matcher that recognizes an action when a MIDI note on event occurs. */
	createNoteOnActionMatcher(channel: number, note: number): HardwareActionMatcher

	/** Creates a matcher that recognizes a note's on velocity when a MIDI note on event occurs. */
	createNoteOnVelocityValueMatcher(channel: number, note: number): AbsoluteHardwareValueMatcher

	/** Creates a matcher that recognizes a note's off velocity when a MIDI note off event occurs. */
	createNoteOffVelocityValueMatcher(channel: number, note: number): AbsoluteHardwareValueMatcher

	/** Creates a matcher that recognizes an action when a MIDI note off event occurs. */
	createNoteOffActionMatcher(channel: number, note: number): HardwareActionMatcher

	/** Creates a matcher that can match an action from a MIDI event. For example, pressing a button based on
input of a MIDI CC event. */
	createActionMatcher(

		/** Expression returns true if the event matches*/
		expression: any): HardwareActionMatcher
}

/** Instances of this interface are used to send MIDI messages to a specific MIDI hardware. */
declare interface MidiOut {

	/** Sends a MIDI message to the hardware device. */
	sendMidi(

		/** the status byte of the MIDI message, system messages are not permitted.*/
		status: any,

		/** the data1 part of the MIDI message*/
		data1: any,

		/** the data2 part of the MIDI message*/
		data2: any): void

	/** Sends a MIDI SysEx message to the hardware device. */
	sendSysex(

		/** the sysex message formatted as hexadecimal value string*/
		hexString: any): void
}

/** An interface used to access various commands that can be performed on the Bitwig Studio mixer panel.<br/>

To get an instance of the mixer interface call {@link ControllerHost#createMixer}. */
declare interface Mixer {

	/** Gets an object that allows to show/hide the meter section of the mixer panel. Observers can be
registered on the returned object for receiving notifications when the meter section switches between
shown and hidden state. */
	isMeterSectionVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the io section of the mixer panel. Observers can be registered
on the returned object for receiving notifications when the io section switches between shown and hidden
state. */
	isIoSectionVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the sends section of the mixer panel. Observers can be
registered on the returned object for receiving notifications when the sends section switches between
shown and hidden state. */
	isSendSectionVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the clip launcher section of the mixer panel. Observers can be
registered on the returned object for receiving notifications when the clip launcher section switches
between shown and hidden state. */
	isClipLauncherSectionVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the devices section of the mixer panel. Observers can be
registered on the returned object for receiving notifications when the devices section switches between
shown and hidden state. */
	isDeviceSectionVisible(): SettableBooleanValue

	/** Gets an object that allows to show/hide the cross-fade section of the mixer panel. Observers can be
registered on the returned object for receiving notifications when the cross-fade section switches
between shown and hidden state. */
	isCrossFadeSectionVisible(): SettableBooleanValue
}

/** This interface represents a modulation source in Bitwig Studio. */
declare interface ModulationSource {

	/** Value which reports when the modulation source is in mapping mode. */
	isMapping(): BooleanValue

	/** Toggles the modulation source between mapping mode and normal control functionality. */
	toggleIsMapping(): void

	/** Value the reports the name of the modulation source. */
	name(): StringValue

	/** Value which reports if the modulation source is mapped to any destination(s). */
	isMapped(): BooleanValue
}

/** Represents a physical hardware light on a controller. The light has an on/off state and may also be
optionally colored. */
declare interface MultiStateHardwareLight extends HardwareLight {

	/** Value that represents the current state of this light as an integer. The interpretation of this value is
entirely up to the implementation. */
	state(): ObjectHardwareProperty<InternalHardwareLightState>

	/** Sets a function that can be used to convert a color to the closest possible state representing that
color. Once this function has been provided it is possible to then use the convenient
{@link #setColor(Color)} and {@link #setColorSupplier(Supplier)} methods. */
	setColorToStateFunction(fn: (color: Color) => InternalHardwareLightState): void

	/** Tries to set this light's state to be the best state to represent the supplied {@link Color}. For this
to be used you must first call {@link #setColorToStateFunction(IntFunction)}. */
	setColor(color: Color): void

	/** Tries to set this light's state to be the best state to represent the value supplied by the
{@link Supplier}. For this to be used you must first call {@link #setColorToStateFunction(IntFunction)}. */
	setColorSupplier(colorSupplier: (...args: any[]) => Color): void
	getBestLightStateForColor(color: Color): InternalHardwareLightState
}

/** Instances of this interface implement note input functionality used for recording notes in Bitwig Studio
and for playing the instruments in tracks on hardware keyboards. In Bitwig Studio the note inputs are shown
in the input choosers of Bitwig Studio tracks. */
declare interface NoteInput {

	/** Specifies if the note input should consume MIDI notes, or in other words if it should prevent forwarding
incoming notes to the MIDI callback registered in {@link MidiIn#setMidiCallback}. This setting is `true`
by default. */
	setShouldConsumeEvents(

		/** `true` if note events should be consumed, `false` of the events should be additionally sent to
          the callback registered via {@link MidiIn#setMidiCallback}*/
		shouldConsumeEvents: any): void

	/** Specifies a translation table which defines the actual key value (0-127) of notes arriving in Bitwig
Studio for each note key potentially received from the hardware. This is used for note-on/off and
polyphonic aftertouch events. Specifying a value of `-1` for a key means that notes with the key value
will be filtered out.

Typically this method is used to implement transposition or scale features in controller scripts. By
default an identity transform table is configured, which means that all incoming MIDI notes keep their
original key value when being sent into Bitwig Studio. */
	setKeyTranslationTable(

		/** an array which should contain 128 entries. Each entry should be a note value in the range
          [0..127] or -1 in case of filtering.*/
		table: any): void

	/** Specifies a translation table which defines the actual velocity value (0-127) of notes arriving in
Bitwig Studio for each note velocity potentially received from the hardware. This is used for note-on
events only.

Typically this method is used to implement velocity curves or fixed velocity mappings in controller
scripts. By default an identity transform table is configured, which means that all incoming MIDI notes
keep their original velocity when being sent into Bitwig Studio. */
	setVelocityTranslationTable(

		/** an array which should contain 128 entries. Each entry should be a note value in the range
          [0..127] or -1 in case of filtering.*/
		table: any): void

	/** Assigns polyphonic aftertouch MIDI messages to the specified note expression. Multi-dimensional control
is possible by calling this method several times with different MIDI channel parameters. If a key
translation table is configured by calling {@link #setKeyTranslationTable}, that table is used for
polyphonic aftertouch as well. */
	assignPolyphonicAftertouchToExpression(

		/** the MIDI channel to map, range [0..15]*/
		channel: any,

		/** the note-expression to map for the given MIDI channel*/
		expression: any,

		/** the pitch mapping range in semitones, values must be in the range [1..24]. This parameter is
          ignored for non-pitch expressions.*/
		pitchRange: any): void

	/** Enables use of Expressive MIDI mode. (note-per-channel) */
	setUseExpressiveMidi(

		/** enabled/disable the MPE mode for this note-input*/
		useExpressiveMidi: any,

		/** which channel (must be either 0 or 15) which is used as the base for this note-input*/
		baseChannel: any,

		/** initial pitch bend range used*/
		pitchBendRange: any): void

	/** Sends MIDI data directly to the note input. This will bypass both the event filter and translation
tables. The MIDI channel of the message will be ignored. */
	sendRawMidiEvent(

		/** the status byte of the MIDI message*/
		status: any,

		/** the data0 part of the MIDI message*/
		data0: any,

		/** the data1 part of the MIDI message*/
		data1: any): void

	/** Creates a proxy object to the NoteInput's NoteLatch component. */
	noteLatch(): NoteLatch

	/** Creates a proxy object to the NoteInput's Arpeggiator component. */
	arpeggiator(): Arpeggiator

	/** Should this note input be included in the "All Inputs" note source? */
	includeInAllInputs(): SettableBooleanValue
}

/** Instances of this interface are used to access the notes for a specific note key. */
declare interface NoteLane {

	/** Value which represents the id of this lane. is either the note pitch represented by this lane, or in
case of audio a lane index (currently always 0 in that case). */
	noteLaneId(): IntegerValue

	/** Value  that reports the name of the note lane. Typically the name of a note lane is
either equal to the title of an associated drum pad, or reflects the pitch of the note, e.g. "C#3". */
	name(): StringValue

	/** Value the color of the note lane. By default the reported color will be the
track color, or in case an associated drum pad has a custom color it will be the color of that pad */
	color(): SettableColorValue

	/** Plays a note with the key of the note lane and the provided velocity parameter. */
	play(

		/** the velocity the note should be played with*/
		velocity: any): void
}

/** Creates a proxy object to the NoteInput's NoteLatch component. */
declare interface NoteLatch extends ObjectProxy {

	/** Returns an object to enable or disable the note latch component. */
	isEnabled(): SettableBooleanValue

	/** Returns an object to configure the note latch mode.
Possible values:
 - chord
 - toggle
 - velocity */
	mode(): SettableEnumValue

	/** Only one note at a time. */
	mono(): SettableBooleanValue

	/** The velocity threshold used by the velocity latch mode. */
	velocityThreshold(): SettableIntegerValue

	/** How many notes are being latched. */
	activeNotes(): IntegerValue

	/** Release all notes being latched. */
	releaseNotes(): void
}

declare interface NotePlaybackCallback {
	notePlaybackEventOccurred(isNoteOn: boolean, key: number, velocity: number): void
}

/** Object that describes the content of a step at a given position: x for the time, and y for the key. */
declare interface NoteStep {
	x(): number
	y(): number
	channel(): number
	state(): State
	velocity(): number

	/** If there is a note started at this position, it will update the velocity of the note. */
	setVelocity(

		/** between 0 and 1*/
		velocity: number): void
	releaseVelocity(): number

	/** If there is a note started at this position, it will update the release velocity of the note. */
	setReleaseVelocity(

		/** between 0 and 1*/
		velocity: number): void
	duration(): number

	/** If there is a note started at this position, it will update the duration of the note. */
	setDuration(

		/** in beats*/
		duration: number): void
	pan(): number

	/** If there is a note started at this position, it will update the panning of the note. */
	setPan(

		/** 1 for left, +1 for right*/
		pan: number): void
	timbre(): number

	/** If there is a note started at this position, it will update the timbre of the note. */
	setTimbre(

		/** from -1 to +1*/
		timbre: number): void
	pressure(): number

	/** If there is a note started at this position, it will update the pressure of the note. */
	setPressure(

		/** from 0 to +1*/
		pressure: number): void
	gain(): number

	/** If there is a note started at this position, it will update the gain of the note. */
	setGain(

		/** in the range 0..1, a value of 0.5 results in a gain of 0dB.*/
		gain: number): void
	transpose(): number

	/** If there is a note started at this position, it will update the pitch offset of the note. */
	setTranspose(

		/** in semitones, from -24 to +24*/
		transpose: number): void
	isIsSelected(): boolean
}

declare interface NoteStepChangedCallback {
	noteStepChanged(noteStep: NoteStep): void
}

/** Bitwig Studio supports automatic visual feedback from controllers that shows up as popup notifications. For
example when the selected track or the current device preset was changed on the controller, these
notifications are shown, depending on the configuration.

It depends both on the users preference and the capabilities of the controller hardware if a certain
notification should be shown. This interface provides functions for enabling/disabling the various kinds of
automatic notifications from the hardware point of view. Typically, controllers that include an advanced
display don't need to show many notifications additionally on screen. For other controllers that do not
include a display it might be useful to show all notifications. By default all notifications are disabled.

In addition, the user can enable or disable all notifications the have been enabled using this interface in
the preferences dialog of Bitwig Studio. */
declare interface NotificationSettings {

	/** Returns an object that reports if user notifications are enabled and that allows to enable/disable user
notifications from the control surface. If user notifications are disabled, no automatic notifications
will be shown in the Bitwig Studio user interface. If user notifications are enabled, all automatic
notifications will be shown that are enabled using the methods of this interface. */
	getUserNotificationsEnabled(): SettableBooleanValue

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowSelectionNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowChannelSelectionNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowTrackSelectionNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowDeviceSelectionNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowDeviceLayerSelectionNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. */
	setShouldShowPresetNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowMappingNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void

	/** Specifies if user notification related to selection changes should be shown. Please note that this
setting only applies when user notifications are enabled in general, otherwise no notification are
shown. By default this setting is `false`. */
	setShouldShowValueNotifications(

		/** `true` in case selection notifications should be shown, `false` otherwise.*/
		shouldShowNotifications: any): void
}

declare interface ObjectArrayValue<ObjectType> extends Value<ObjectValueChangedCallback<ObjectType[]>> {
	get(index: number): ObjectType[]
	isEmpty(): boolean
}

/** Represents an output value shown on some hardware. */
declare interface ObjectHardwareProperty<T> extends HardwareProperty {

	/** Gets the current value. This is the value that should be sent to the hardware to be displayed. */
	currentValue(): T

	/** The value that was last sent to the hardware. */
	lastSentValue(): T

	/** Specifies a callback that should be called with the value that needs to be sent to the hardware. This
callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
from the flush method). */
	onUpdateHardware(sendValueConsumer: (arg: T) => any): void

	/** Sets the current value. */
	setValue(value: T): void

	/** Sets the current value from a {@link BooleanSupplier} that supplies the latest value. */
	setValueSupplier(supplier: (...args: any[]) => T): void
}

/** Interface for an object that acts as a proxy for the actual object in Bitwig Studio (for example a track, a
device etc). */
declare interface ObjectProxy extends Subscribable {

	/** Returns a value object that indicates if the object being proxied exists, or if it has content. */
	exists(): BooleanValue

	/** Creates a {@link BooleanValue} that determines this proxy is considered equal to another proxy. For this
to be the case both proxies need to be proxying the same target object. */
	createEqualsValue(other: ObjectProxy): BooleanValue
}

/** Defines a simple hardware light that only has an on and off state. */
declare interface OnOffHardwareLight extends HardwareLight {

	/** Property that determines if this light is on or not. */
	isOn(): BooleanHardwareProperty
	setOnColor(color: Color): void
	setOffColor(color: Color): void
	setOnVisualState(state: HardwareLightVisualState): void
	setOffVisualState(state: HardwareLightVisualState): void
	setStateToVisualStateFuncation(fn: (state: boolean) => HardwareLightVisualState): void
}

/** An OSC address space.

It contains the root OscContainer. */
declare interface OscAddressSpace {

	/** Register all the methods annotated with @{@link OscMethod} from object.
Also if a method is annotated with @{@link OscNode}, this method will be called and the returned object's method
will be registered. */
	registerObjectMethods(addressPrefix: string, object: Object): void

	/** Low level way to register an Osc Method. */
	registerMethod(

		/** The address to register the method at*/
		address: string,

		/** The globing pattern used to match the type tag. Pass "*" to match anything.*/
		typeTagPattern: string,

		/** The method description.*/
		desc: string,

		/** The OSC Method call handler.*/
		callback: OscMethodCallback): void

	/** This method will be called if no registered OscMethod could handle incoming OscPacket. */
	registerDefaultMethod(callback: OscMethodCallback): void

	/** Should the address spaces log the messages it dispatches?
Default is false. */
	setShouldLogMessages(shouldLogMessages: boolean): void

	/** This gives a display name for this address space.
It is useful if you have multiple address space to identify them when we generate the documentation. */
	setName(name: string): void
}

/** An OSC Bundle. */
declare interface OscBundle {
	getNanoseconds(): number
	getPackets(): OscPacket[]
}

/** This interface lets you send OscMessage through an connection which can be via Tcp, Udp, or whatever.

OscPackets are sent when all the startBundle() have a matching endBundle().
If you call sendMessage() with startBundle() before, then the message will be sent directly.

Our maximum packet size is 64K. */
declare interface OscConnection {

	/** Starts an OscBundle. */
	startBundle(): void

	/** Supported object types:
- Integer for int32
- Long for int64
- Float for float
- Double for double
- null for nil
- Boolean for true and false
- String for string
- byte[] for blob */
	sendMessage(address: string, args: Object): void

	/** Finishes the previous bundle, and if it was not inside an other bundle, it will send the message
directly. */
	endBundle(): void
}

/** An OSC message. */
declare interface OscMessage {
	getAddressPattern(): string
	getTypeTag(): string
	getArguments(): Object[]
	getString(index: number): string
	getBlob(index: number): string[]
	getInt(index: number): number
	getLong(index: number): number
	getFloat(index: number): number
	getDouble(index: number): number
	getBoolean(index: number): boolean
}

declare interface OscMethod {
	address(): string
	typeTagPattern(): string
	desc(): string
	obsoleteAddresses(): String[]
}

declare interface OscMethodCallback {
	handle(source: OscConnection, message: OscMessage): void
}

/** Interface to create Osc related object. */
declare interface OscModule {

	/** Creates a new OscAddressSpace.

In short the OscAddressSpace dispatches the incoming messages to services.
An OscAddressSpace is an OscService. */
	createAddressSpace(): OscAddressSpace

	/** Creates a new OSC Server.
This server is not started yet, you'll have to start it by calling server.start(port);
Use this method if the port is not known during the initialization (coming from a setting)
or if the port number can change at runtime. */
	createUdpServer(

		/** Use {@link #createAddressSpace()}*/
		addressSpace: OscAddressSpace): OscServer

	/** Tries to connect to an OscServer. */
	connectToUdpServer(host: string, port: number, addressSpace: OscAddressSpace): OscConnection
}

declare interface OscNode {
	prefix(): string
}

/** Base class for OscPackets. */
declare interface OscPacket {

	/** If the message was part of a bundle, get a pointer back to it.
If not, this methods returns null. */
	getParentBundle(): OscBundle
}

declare interface OscServer {

	/** Starts or restarts the server and restarts it on the given port. */
	start(port: number): void
}

/** A pipe that can be used to write data. */
declare interface OutputPipe extends Pipe {

	/** Requests to write some data to this pipe in an asynchronous way (the caller is not blocked). Once some
data has been written the callback will be notified on the controller's thread. */
	writeAsync(

		/** A {@link MemoryBlock} containing the data to be written.*/
		data: any,

		/** A callback that is notified on the controller's thread when the write has completed.*/
		callback: any,

		/** A timeout in milliseconds that will result in an error and termination of the controller if
          the write does not happen in this time. For infinite timeout use 0.*/
		timeoutInMs: any): void
	write(data: MemoryBlock, timeoutInMs: number): number
}

/** Instances of this interface represent ranged parameters that can be controlled with automation in Bitwig
Studio. */
declare interface Parameter extends SettableRangedValue, ObjectProxy {

	/** Gets the current value of this parameter. */
	value(): SettableRangedValue

	/** Gets the modulated value of this parameter. */
	modulatedValue(): RangedValue

	/** The name of the parameter. */
	name(): StringValue

	/** Resets the value to its default. */
	reset(): void

	/** Touch (or un-touch) the value for automation recording. */
	touch(
		/** `true` for touching, `false` for un-touching*/
		isBeingTouched: any
	): void

	/** Specifies if this value should be indicated as mapped in Bitwig Studio, which is visually shown as
colored dots or tinting on the parameter controls. */
	setIndication(
		/** `true` in case visual indications should be shown in Bitwig Studio, `false` otherwise*/
		shouldIndicate: any
	): void

	/** Specifies a label for the mapped hardware parameter as shown in Bitwig Studio, for example in menu items
for learning controls. */
	setLabel(

		/** the label to be shown in Bitwig Studio*/
		label: any): void

	/** Restores control of this parameter to automation playback. */
	restoreAutomationControl(): void
}

/** Defines a bank of parameters. */
declare interface ParameterBank {

	/** Gets the number of slots that these remote controls have. */
	getParameterCount(): number

	/** Returns the parameter at the given index within the bank. */
	getParameter(

		/** the parameter index within this bank. Must be in the range [0..getParameterCount()-1].*/
		indexInBank: any): Parameter

	/** Informs the application how to display the controls during the on screen notification. */
	setHardwareLayout(

		/** which kind of hardware control is used for this bank (knobs/encoders/sliders)*/
		type: HardwareControlType,

		/** How wide this section is in terms of layout (4/8/9)*/
		columns: number): void
}

declare interface Path {
}

/** Abstract class for patterns (gradient, mesh gradient, ...) */
declare interface Pattern {
}

/** Represents a physical piano keyboard on a {@link HardwareSurface}. */
declare interface PianoKeyboard extends HardwareElement {

	/** The {@link MidiIn} where this piano keyboard would send key presses. If set this allows the simulator
for the hardware to simulate the note input. */
	setMidiIn(midiIn: MidiIn): void
	setChannel(channel: number): void
	setIsVelocitySensitive(value: boolean): void
	setSupportsPolyAftertouch(value: boolean): void
}

/** Interface that defines a cursor that can be "pinned". */
declare interface PinnableCursor extends Cursor {

	/** Determines if this cursor is currently pinned or not. If the cursor is pinned then it won't follow the
selection the user makes in the application. */
	isPinned(): SettableBooleanValue
}

/** Cursor clip that can act independently from the user's clip selection if desired by being pinned in the
controller settings panel. */
declare interface PinnableCursorClip extends CursorClip, PinnableCursor {
}

/** Cursor that can be pinned to the current device or follow the selection. */
declare interface PinnableCursorDevice extends CursorDevice, PinnableCursor {
}

/** A pipe represents a communication channel with some other hardware device or network service. Pipes are
opened and closed by Bitwig Studio automatically and exist for the entire lifetime of a controller. If
communication is lost on a specific pipe (for example the user unplugs a USB device) then the controller
will exit and the user will be notified.

A controller defines which pipes it wants to establish for communication using a
{@link HardwareDeviceMatcher}. */
declare interface Pipe {
}

declare interface PlayingNote {
	pitch(): number
	velocity(): number
}

declare interface PlayingNoteArrayValue extends ObjectArrayValue<PlayingNote> {
	isNotePlaying(note: number): boolean
}

/** Object that represents the popup browser in Bitwig Studio. */
declare interface PopupBrowser extends ObjectProxy, RelativeHardwareControlBindable {

	/** The title of the popup browser. */
	title(): StringValue

	/** Value that reports the possible content types that can be inserted by the popup browser. These are
represented by the tabs in Bitwig Studio's popup browser.

(e.g "Device", "Preset", "Sample" etc.) */
	contentTypeNames(): StringArrayValue

	/** Value that represents the selected content type. */
	selectedContentTypeName(): StringValue

	/** Value that represents the index of the selected content type within the content types supported. */
	selectedContentTypeIndex(): SettableIntegerValue

	/** The smart collections column of the browser. */
	smartCollectionColumn(): BrowserFilterColumn

	/** The location column of the browser. */
	locationColumn(): BrowserFilterColumn

	/** The device column of the browser. */
	deviceColumn(): BrowserFilterColumn

	/** The category column of the browser. */
	categoryColumn(): BrowserFilterColumn

	/** The tag column of the browser. */
	tagColumn(): BrowserFilterColumn

	/** The device type column of the browser. */
	deviceTypeColumn(): BrowserFilterColumn

	/** The file type column of the browser. */
	fileTypeColumn(): BrowserFilterColumn

	/** The creator column of the browser. */
	creatorColumn(): BrowserFilterColumn

	/** Column that represents the results of the search. */
	resultsColumn(): BrowserResultsColumn

	/** Value that indicates if the browser is able to audition material in place while browsing. */
	canAudition(): BooleanValue

	/** Value that decides if the browser is currently auditioning material in place while browsing or not. */
	shouldAudition(): SettableBooleanValue

	/** Selects the next file. */
	selectNextFile(): void

	/** Selects the previous file. */
	selectPreviousFile(): void

	/** Selects the first file. */
	selectFirstFile(): void

	/** Selects the last file. */
	selectLastFile(): void

	/** Cancels the popup browser. */
	cancel(): void
	cancelAction(): HardwareActionBindable

	/** Commits the selected item in the popup browser. */
	commit(): void
	commitAction(): HardwareActionBindable
}

/** This interface is used to store custom controller settings into the Bitwig Studio preferences. The settings
are shown to the user in the controller preferences dialog of Bitwig Studio. */
declare interface Preferences extends Settings {
}

/** An interface for representing the current project. */
declare interface Project extends ObjectProxy {

	/** Returns an object that represents the root track group of the active Bitwig Studio project. */
	getRootTrackGroup(): Track

	/** Returns an object that represents the top level track group as shown in the arranger/mixer of the active
Bitwig Studio project. */
	getShownTopLevelTrackGroup(): Track

	/** Creates a new scene (using an existing empty scene if possible) from the clips that are currently
playing in the clip launcher. */
	createSceneFromPlayingLauncherClips(): void

	/** The volume used for cue output. */
	cueVolume(): Parameter

	/** Mix between cue bus and the studio bus (master). */
	cueMix(): Parameter

	/** Sets the solo state of all tracks to off. */
	unsoloAll(): void
	hasSoloedTracks(): BooleanValue

	/** Sets the mute state of all tracks to off. */
	unmuteAll(): void

	/** Value that indicates if the project has muted tracks or not. */
	hasMutedTracks(): BooleanValue

	/** Sets the arm state of all tracks to off. */
	unarmAll(): void

	/** Value that indicates if the project has armed tracks or not. */
	hasArmedTracks(): BooleanValue
}

/** Instances of this interface represent numeric values that have an upper and lower limit. */
declare interface RangedValue extends Subscribable {

	/** The current value normalized between 0..1 where 0 represents the minimum value and 1 the maximum. */
	get(): number

	/** Gets the current value. */
	getRaw(): number
	getAsDouble(): number
	/** Marks this value as being of interest to the driver. This can only be
	called once during the driver's init method. A value that is of interest to
	the driver can be obtained using the value's get method. If a value has not
	been marked as interested then an error will be reported if the driver
	attempts to get the current value. Adding an observer to a value will
	automatically mark this value as interested. */
	markInterested (): void

	/** Value that represents a formatted text representation of the value whenever the value changes. */
	displayedValue(): StringValue

	/** Adds an observer which receives the normalized value of the parameter as an integer number within the
range [0..range-1]. */
	addValueObserver(

		/** the range used to scale the value when reported to the callback*/
		range: number,

		/** a callback function that receives a single double parameter*/
		callback: IntegerValueChangedCallback
	): void

	/** Add an observer which receives the internal raw of the parameter as floating point. */
	addRawValueObserver(

		/** a callback function that receives a single numeric parameter with double precision.*/
		callback: IntegerValueChangedCallback
	): void
}

/** Something that can be bound to an {@link RelativeHardwareControl} and can respond to the user input (such
as user turning an encoder left or right) in a meaningful way. */
declare interface RelativeHardwareControlBindable extends HardwareBindable {

	/** Binds this target to the supplied hardware control so that when the user moves the hardware control this
target will respond in a meaningful way.

When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
it. */
	addBinding(hardwareControl: RelativeHardwareControl): RelativeHardwareControlBinding

	/** Binds this target to the supplied hardware control so that when the user moves the hardware control this
target will respond in a meaningful way.

When the binding is no longer needed the {@link HardwareBinding#removeBinding()} method can be called on
it. */
	addBindingWithSensitivity(hardwareControl: RelativeHardwareControl, sensitivity: number): RelativeHardwareControlBinding
}

/** Represents a hardware control that can input a relative value (for example, a relative encoder knob).

A relative adjustment is positive value when being increased and a negative when being decreased. The
relative amount represents the amount of adjustment made. In order to have relative hardware controls work
with the same level of sensitivity the relative amount should be +1.0 if the user were to rotate a knob one
full rotation (defined as roughly the same amount of rotation as that of an absolute knob to go from 0 to
1) to the right.

<p>
{@link RelativeHardwareControl}s can also be used to step through items (e.g in a list, or an enum
parameter). In this case the {@link #getStepSize()} is used to determine how far the knob has to be rotated
in order to increment by one step. For example, if a full rotation of a knob should step through 10 items
you would set the step size to 1.0 / 10 (i.e 0.1). */
declare interface RelativeHardwareControl extends ContinuousHardwareControl<RelativeHardwareControlBinding> {

	/** Sets the sensitivity of this hardware control. The default sensitivity is 1. This value is a multiplied
with the adjustment coming from the {@link RelativeHardwareValueMatcher} to determine the final
adjustment amount. */
	setSensitivity(sensitivity: number): void

	/** Sets the {@link RelativeHardwareValueMatcher} that can be used to detect when the user adjusts the
hardware control's value. */
	setAdjustValueMatcher(matcher: RelativeHardwareValueMatcher): void

	/** Adds a binding to the supplied target with the supplied sensitivity. */
	addBindingWithSensitivity(target: RelativeHardwareControlBindable, sensitivity: number): RelativeHardwareControlBinding

	/** Makes sure there is a single binding to the supplied target with the supplied sensitivity. */
	setBindingWithSensitivity(target: RelativeHardwareControlBindable, sensitivity: number): RelativeHardwareControlBinding

	/** Adds a binding to the supplied target that does not adjust the target outside of the supplied min and
max normalized range. */
	addBindingWithRange(target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number): RelativeHardwareControlBinding

	/** Makes sure there is single binding to the supplied target that does not adjust the target outside of the
supplied min and max normalized range. */
	setBindingWithRange(target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number): RelativeHardwareControlBinding

	/** Adds a binding to the supplied target that does not adjust the target outside of the supplied min and
max normalized range and is adjusted with the supplied sensitivity. */
	addBindingWithRangeAndSensitivity(target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number, sensitivity: number): RelativeHardwareControlBinding

	/** Makes sure there is a single binding to the supplied target that does not adjust the target outside of
the supplied min and max normalized range and is adjusted with the supplied sensitivity. */
	setBindingWithRangeAndSensitivity(target: SettableRangedValue, minNormalizedValue: number, maxNormalizedValue: number, sensitivity: number): RelativeHardwareControlBinding

	/** The current steps size (amount of relative rotation) necessary to step through an item in a list. */
	getStepSize(): number

	/** Sets the step size of this relative hardware control. The step size is used when using this control to
step through items in a list, or values in an enum parameter, for example. For each step forwards a
certain action can be invoked and for each step backwards a different action. */
	setStepSize(stepSize: number): void
}

/** Represents a binding from a {@link RelativeHardwareControl} to some target. */
declare interface RelativeHardwareControlBinding extends HardwareBindingWithSensitivity {
}

/** Represents a binding from an {@link RelativeHardwareControl} to a {@link SettableRangedValue} */
declare interface RelativeHardwareControlToRangedValueBinding extends HardwareBindingWithRange, RelativeHardwareControlBinding {
}

/** Represents a physical hardware knob that inputs a relative value. */
declare interface RelativeHardwareKnob extends RelativeHardwareControl {
}

/** Defines a means of recognizing when a relative value is input by the user (for example, when moving a
slider or turning a knob).

For example, when a certain MIDI CC message happens. */
declare interface RelativeHardwareValueMatcher extends ContinuousHardwareValueMatcher {
}

/** Instances of this interface are reported to the supplied script callback when connecting to a remote TCP
socket via {@link ControllerHost#connectToRemoteHost}. */
declare interface RemoteConnection {

	/** Disconnects from the remote host. */
	disconnect(): void

	/** Registers a callback function that gets called when the connection gets lost or disconnected. */
	setDisconnectCallback(

		/** a callback function that doesn't receive any parameters*/
		callback: any): void

	/** Sets the callback used for receiving data.

The remote connection needs a header for each message sent to it containing a 32-bit big-endian integer
saying how big the rest of the message is. The data delivered to the script will not include this
header. */
	setReceiveCallback(

		/** a callback function with the signature `(byte[] data)`*/
		callback: any): void

	/** Sends data to the remote host. */
	send(

		/** the byte array containing the data to be sent. When creating a numeric byte array in
          JavaScript, the byte values must be signed (in the range -128..127).*/
		data: any): void
}

/** Represents a remote control in Bitwig Studio. */
declare interface RemoteControl extends Parameter {
	name(): SettableStringValue
}

/** Represents a page of remote controls in a device. */
declare interface RemoteControlsPage extends ParameterBank {
	getParameter(indexInBank: number): RemoteControl
	getName(): StringValue
}

/** Instances of this interface represent a TCP socket that other network clients can connect to, typically
created by calling {@link ControllerHost#createRemoteConnection}. */
declare interface RemoteSocket {

	/** Sets a callback which receives a remote connection object for each incoming connection. */
	setClientConnectCallback(

		/** a callback function which receives a single {@link RemoteConnection} argument*/
		callback: any): void

	/** Gets the actual port used for the remote socket, which might differ from the originally requested port
when calling {@link ControllerHost#createRemoteConnection(String name, int port)} in case the requested port was
already used. */
	getPort(): number
}

/** This class is a renderer.
The render method will be called by the Host with a provided GraphicsOutput context. */
declare interface Renderer {
	render(gc: GraphicsOutput): void
}

/** Instances of this interface represent scenes in Bitwig Studio. */
declare interface Scene extends ClipLauncherSlotOrScene {

	/** Returns an object that provides access to the name of the scene. */
	name(): SettableStringValue

	/** Value that reports the number of clips in the scene. */
	clipCount(): IntegerValue

	/** Registers an observer that reports if the scene is selected in Bitwig Studio. */
	addIsSelectedInEditorObserver(

		/** a callback function that takes a single boolean parameter.*/
		callback: any): void

	/** Selects the scene in Bitwig Studio. */
	selectInEditor(): void

	/** Makes the scene visible in the Bitwig Studio user interface. */
	showInEditor(): void
}

/** A scene bank provides access to a range of scenes in Bitwig Studio. Instances of scene bank are configured
with a fixed number of scenes and represent an excerpt of a larger list of scenes. Various methods are
provided for scrolling to different sections of the scene list. It basically acts like a window moving over
the list of underlying scenes.

To receive an instance of scene bank call
{@link ControllerHost#createSceneBank}. */
declare interface SceneBank extends ClipLauncherSlotOrSceneBank<Scene> {

	/** Returns the scene at the given index within the bank. */
	getScene(

		/** the scene index within this bank, not the index within the list of all Bitwig Studio scenes.
          Must be in the range [0..sizeOfBank-1].*/
		indexInBank: any): Scene

	/** Launches the scene with the given bank index. */
	launchScene(

		/** the scene index within the bank, not the position of the scene withing the underlying full
          list of scenes.*/
		indexInWindow: any): void

	/** Specifies if the Bitwig Studio clip launcher should indicate which scenes are part of the window. By
default indications are disabled. */
	setIndication(

		/** `true` if visual indications should be enabled, `false` otherwise*/
		shouldIndicate: any): void
}

/** Interface for something that can be scrolled. */
declare interface Scrollable extends RelativeHardwareControlBindable {

	/** Value that reports the current scroll position. */
	scrollPosition(): SettableIntegerValue

	/** Scrolls the supplied position into view if it isn't already. */
	scrollIntoView(position: number): void

	/** Scrolls by a number of steps. */
	scrollBy(

		/** The number of steps to scroll by (positive is forwards and negative is backwards).*/
		amount: any): void

	/** Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with 1 */
	scrollForwards(): void
	scrollForwardsAction(): HardwareActionBindable

	/** Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with -1 */
	scrollBackwards(): void
	scrollBackwardsAction(): HardwareActionBindable

	/** Scrolls by a number of pages. */
	scrollByPages(

		/** The number of pages to scroll by (positive is forwards and negative is backwards).*/
		amount: any): void

	/** Scrolls forwards by one page. */
	scrollPageForwards(): void
	scrollPageForwardsAction(): HardwareActionBindable

	/** Scrolls backwards by one page. */
	scrollPageBackwards(): void
	scrollPageBackwardsAction(): HardwareActionBindable

	/** Value that reports if it is possible to scroll the bank backwards or not. */
	canScrollBackwards(): BooleanValue

	/** Value that reports if it is possible to scroll the bank forwards or not. */
	canScrollForwards(): BooleanValue
}

declare interface Send extends Parameter {

	/** Value that reports the color of the channel that this send sends to. */
	sendChannelColor(): SettableColorValue

	/** Value that reports if the send happens before or after the fader. */
	isPreFader(): BooleanValue

	/** Define how the send will happen.
Possible values: AUTO, PRE, POST. */
	sendMode(): SettableEnumValue
}

declare interface SettableBeatTimeValue extends BeatTimeValue, SettableDoubleValue, RelativeHardwareControlBindable {

	/** Stepper that steps through beat values. This can be used as a target for a
{@link RelativeHardwareControl}. */
	beatStepper(): RelativeHardwareControlBindable
}

/** Instances of this interface represent boolean values. */
declare interface SettableBooleanValue extends BooleanValue, HardwareActionBindable {

	/** Sets the internal value. */
	set(
		/** the new boolean value.*/
		value: boolean): void

	/** Toggles the current state. In case the current value is `false`, the new value will be `true` and the
other way round. */
	toggle(): void
	toggleAction(): HardwareActionBindable
	setToTrueAction(): HardwareActionBindable
	setToFalseAction(): HardwareActionBindable
}

declare interface SettableColorValue extends ColorValue {

	/** Sets the internal value. */
	set(red: number, green: number, blue: number, alpha: number): void
}

declare interface SettableDoubleValue extends DoubleValue {

	/** Sets the internal value. */
	set(

		/** the new integer value.*/
		value: number): void

	/** Increases/decrease the internal value by the given amount. */
	inc(

		/** the integer amount to increase*/
		amount: number): void
}

/** Instances of this interface represent enumeration values. Enum values work similar to string values, but
are limited to a fixed set of value options. */
declare interface SettableEnumValue extends EnumValue {

	/** Sets the value to the enumeration item with the given name. */
	set(

		/** the name of the new enum item*/
		name: string): void
}

/** Instances of this interface represent integer values. */
declare interface SettableIntegerValue extends IntegerValue, RelativeHardwareControlBindable {

	/** Sets the internal value. */
	set(

		/** the new integer value.*/
		value: number): void

	/** Increases/decrease the internal value by the given amount. */
	inc(

		/** the integer amount to increase*/
		amount: number): void
}

/** Instances of this interface represent numeric values that have an upper and lower limit. */
declare interface SettableRangedValue extends RangedValue, HardwareControl {

	/** Sets the value in an absolute fashion. The value will be scaled according to the given resolution.

Typically the resolution would be specified as the amount of steps the hardware control provides (for
example 128) and just pass the integer value as it comes from the MIDI device. The host application will
take care of scaling it. */
	set(

		/** integer number in the range [0 .. resolution-1]*/
		value: number,

		/** the resolution used for scaling @ if passed-in parameters are null*/
		resolution: any): void

	/** Sets the value in an absolute fashion as a value between 0 .. 1 where 0 represents the minimum value and
1 the maximum. The value change is applied immediately and does not care about what take over mode the
user has selected. This is useful if the value does not need take over (e.g. a motorized slider). */
	setImmediately(

		/** absolute value [0 .. 1]*/
		value: number): void

	/** Increments or decrements the value according to the given increment and resolution parameters.

Typically the resolution would be specified as the amount of steps the hardware control provides (for
example 128) and just pass the integer value as it comes from the MIDI device. The host application will
take care of scaling it. */
	inc(

		/** the amount that the current value is increased by*/
		increment: number,

		/** the resolution used for scaling*/
		resolution: number): void

	/** Set the internal (raw) value. */
	setRaw(

		/** the new value with double precision. Range is undefined.*/
		value: number): void

	/** Increments / decrements the internal (raw) value. */
	incRaw(

		/** the amount that the current internal value get increased by.*/
		delta: number): void
	addBinding(hardwareControl: RelativeHardwareControl): RelativeHardwareControlToRangedValueBinding
	addBindingWithRange(hardwareControl: RelativeHardwareControl, minNormalizedValue: number, maxNormalizedValue: number): RelativeHardwareControlBinding
	addBindingWithRangeAndSensitivity(hardwareControl: RelativeHardwareControl, minNormalizedValue: number, maxNormalizedValue: number, sensitivity: number): RelativeHardwareControlToRangedValueBinding
	addBindingWithSensitivity(hardwareControl: RelativeHardwareControl, sensitivity: number): RelativeHardwareControlToRangedValueBinding
}

declare interface SettableStringArrayValue extends StringArrayValue {

	/** Sets the internal value. */
	set(

		/** the new value.*/
		value: string[]): void
}

/** Instances of this interface implement the {@link Value} interface for string values. */
declare interface SettableStringValue extends StringValue {

	/** Sets the value object to the given string. */
	set(

		/** the new value string*/
		value: string): void
}

/** A common base interface for labeled and categorized settings. */
declare interface Setting {

	/** Returns the category name of the setting. */
	getCategory(): string

	/** Returns the label text of the setting. */
	getLabel(): string

	/** Marks the settings as enabled in Bitwig Studio. By default the setting is enabled. */
	enable(): void

	/** Marks the settings as disabled in Bitwig Studio. By default the setting is enabled. */
	disable(): void

	/** Shows the setting in Bitwig Studio. By default the setting is shown. */
	show(): void

	/** Hides the setting in Bitwig Studio. By default the setting is shown. */
	hide(): void
}

/** This interface builds the foundation for storing custom settings in Bitwig Studio documents or in the
Bitwig Studio preferences. */
declare interface Settings {

	/** Returns a signal setting object, which is shown a push button with the given label in Bitwig Studio. */
	getSignalSetting(

		/** the name of the setting, must not be `null`*/
		label: any,

		/** the name of the category, may not be `null`*/
		category: any,

		/** the action string as displayed on the related Bitwig Studio button, must not be `null`*/
		action: any): Signal

	/** Returns a numeric setting that is shown a number field in Bitwig Studio. */
	getNumberSetting(

		/** the name of the setting, must not be `null`*/
		label: any,

		/** the name of the category, may not be `null`*/
		category: any,

		/** the minimum value that the user is allowed to enter*/
		minValue: any,

		/** the minimum value that the user is allowed to enter*/
		maxValue: any,

		/** the step resolution used for the number field*/
		stepResolution: any,

		/** the string that should be used to display the unit of the number*/
		unit: any,

		/** the initial numeric value of the setting*/
		initialValue: any): SettableRangedValue

	/** Returns an enumeration setting that is shown either as a chooser or as a button group in Bitwig Studio,
depending on the number of provided options. */
	getEnumSetting(

		/** the name of the setting, must not be `null`*/
		label: any,

		/** the name of the category, may not be `null`*/
		category: any,

		/** the string array that defines the allowed options for the button group or chooser*/
		options: any,

		/** the initial string value, must be one of the items specified with the option argument*/
		initialValue: string): SettableEnumValue

	/** Returns a textual setting that is shown as a text field in the Bitwig Studio user interface. */
	getStringSetting(

		/** the name of the setting, must not be `null`*/
		label: any,

		/** the name of the category, may not be `null`*/
		category: any,

		/** the maximum number of character used for the text value*/
		numChars: any,

		/** the initial text value of the setting*/
		initialText: any): SettableStringValue

	/** Returns a color setting that is shown in the Bitwig Studio user interface. */
	getColorSetting(

		/** the name of the setting, must not be `null`*/
		label: any,

		/** the name of the category, may not be `null`*/
		category: any,

		/** the initial color value of the setting*/
		initialColor: any): SettableColorValue

	/** Returns a boolean setting. */
	getBooleanSetting(

		/** the name of the setting, must not be `null`*/
		label: any,

		/** the name of the category, may not be `null`*/
		category: any,

		/** the initial color value of the setting*/
		initialValue: any): SettableBooleanValue
}

declare interface ShortMidiDataReceivedCallback {

	/** Registers a callback for receiving short (normal) MIDI messages on this MIDI input port. */
	midiReceived(statusByte: number, data1: number, data2: number): void
}

declare interface ShortMidiMessage {
	getStatusByte(): number
	getData1(): number
	getData2(): number
	getChannel(): number
	getStatusMessage(): number
	isNoteOff(): boolean
	isNoteOn(): boolean
	isPitchBend(): boolean
	isPolyPressure(): boolean
	isControlChange(): boolean
	isProgramChange(): boolean
	isChannelPressure(): boolean
	toString(): string
}

declare interface ShortMidiMessageReceivedCallback {
	midiReceived(statusByte: number, data1: number, data2: number): void
}

/** A generic interface used to implement actions or events that are not associated with a value. */
declare interface Signal {

	/** Registers an observer that gets notified when the signal gets fired. */
	addSignalObserver(

		/** a callback function that does not receive any argument.*/
		callback: () => any): void

	/** Fires the action or event represented by the signal object. */
	fire(): void
}

/** Instances of this interface represent the state of a solo button. */
declare interface SoloValue extends SettableBooleanValue {

	// /** Toggles the current solo state. */
	// toggle(

	// 	/** specifies if solo on other channels should be disabled automatically ('true') or not
     //      ('false').*/
	// 	exclusive: boolean): void
}

/** Instance of this class represent sources selectors in Bitwig Studio, which are shown as choosers in the
user interface and contain entries for either note inputs or audio inputs or both.

The most prominent source selector in Bitwig Studio is the one shown in the track IO section, which can be
accessed via the API by calling {@link Track#getSourceSelector()}. */
declare interface SourceSelector extends ObjectProxy {

	/** Returns an object that indicates if the source selector has note inputs enabled. */
	hasNoteInputSelected(): BooleanValue

	/** Returns an object that indicates if the source selector has audio inputs enabled. */
	hasAudioInputSelected(): BooleanValue
}

declare interface StepDataChangedCallback {

	/** A callback function that receives three parameters: 1. the x (step) coordinate within the note grid
(integer), 2. the y (key) coordinate within the note grid (integer), and 3. an integer value that
indicates if the step is empty (`0`) or if a note continues playing (`1`) or starts playing (`2`). */
	stepStateChanged(x: number, y: number, state: number): void
}

declare interface StringArrayValue extends ObjectArrayValue<string> {
	/** Gets the current value. */
	get(): string[]
}

/** Represents an output value shown on some hardware (for example, the title of a track). */
declare interface StringHardwareProperty extends HardwareProperty {
	/** Gets the current value. This is the value that should be sent to the hardware to be displayed. */
	currentValue(): string

	/** The value that was last sent to the hardware. */
	lastSentValue(): string

	/** Specifies a callback that should be called with the value that needs to be sent to the hardware. This
callback is called as a result of calling the {@link HardwareSurface#updateHardware()} method (typically
from the flush method). */
	onUpdateHardware(sendValueConsumer: (value: string) => any): void

	/** Sets the current value. */
	setValue(value: string): void

	/** Sets the current value from a {@link Supplier} that supplies the latest value. */
	setValueSupplier(supplier: (...args: any[]) => string): void

	/** The maximum number of characters that can be output or -1 if not specified and there is no limit. */
	getMaxChars(): number
	setMaxChars(maxChars: number): void
}

declare interface StringValue extends Value<StringValueChangedCallback> {

	/** Gets the current value. */
	get(): string

	/** Gets the current value and tries to intelligently limit it to the supplied length in the best way
possible. */
	getLimited(maxLength: number): string
}

/** Interface for an object that can be 'subscribed' or not. A subscribed object will notify any observers when
changes occur to it. When it is unsubscribed the observers will no longer be notified. A driver can use
this to say which objects it is interested in and which ones it is not (for example in one mode the driver
may not be interested in track meters) at runtime. This allows the driver to improve efficiency by only
getting notified about changes that are really relevant to it. By default a driver is subscribed to
everything.

Subscription is counter based. */
declare interface Subscribable {

	/** Determines if this object is currently 'subscribed'. In the subscribed state it will notify any
observers registered on it. */
	isSubscribed(): boolean

	/** Subscribes the driver to this object. */
	subscribe(): void

	/** Unsubscribes the driver from this object. */
	unsubscribe(): void
}

declare interface SysexBuilder {
	fromHex(hexString: string): SysexBuilder
	addByte(value: number): SysexBuilder
	addString(string: string, length: number): SysexBuilder
	add(bytes: number[]): SysexBuilder
	addHex(hex: string): SysexBuilder
	terminate(): string[]
	array(): string[]
}

declare interface SysexMidiDataReceivedCallback {
	sysexDataReceived(

		/** The data encoded as a hex string*/
		data: string): void
}

declare interface TextExtents {

	/** Returns the horizontal distance from the origin to the leftmost part of the glyphs as drawn.
Positive if the glyphs lie entirely to the right of the origin. */
	getBearingX(): number

	/** Returns the vertical distance from the origin to the topmost part of the glyphs as drawn.
Positive only if the glyphs lie completely below the origin; will usually be negative. */
	getBearingY(): number

	/** Returns the width of the glyphs as drawn. */
	getWidth(): number

	/** Returns the height of the glyphs as drawn. */
	getHeight(): number

	/** Returns the distance to advance in the X direction after drawing these glyphs. */
	getAdvanceX(): number

	/** Returns the distance to advance in the Y direction after drawing these glyphs. Will typically
be zero except for vertical text layout as found in East-Asian languages. */
	getAdvanceY(): number
}

/** Instances of this interface represent time signature values. */
declare interface TimeSignatureValue extends Value<StringValueChangedCallback> {

	/** Gets the current value. */
	get(): string

	/** Updates the time signature according to the given string. */
	set(

		/** a textual representation of the new time signature value, formatted as
          `numerator/denominator[, ticks]`*/
		name: string): void

	/** Returns an object that provides access to the time signature numerator. */
	numerator(): SettableIntegerValue

	/** Returns an object that provides access to the time signature denominator. */
	denominator(): SettableIntegerValue

	/** Returns an object that provides access to the time signature tick subdivisions. */
	ticks(): SettableIntegerValue
}

/** Instances of this interface represent tracks in Bitwig Studio. */
declare interface Track extends Channel {

	/** Value that reports the position of the track within the list of Bitwig Studio tracks. */
	position(): IntegerValue

	/** Returns an object that can be used to access the clip launcher slots of the track. */
	clipLauncherSlotBank(): ClipLauncherSlotBank

	/** Returns an object that provides access to the arm state of the track. */
	arm(): SettableBooleanValue

	/** Returns an object that provides access to the monitoring state of the track. */
	monitor(): SettableBooleanValue

	/** Returns an object that provides access to the auto-monitoring state of the track. */
	autoMonitor(): SettableBooleanValue

	/** Returns an object that provides access to the cross-fade mode of the track. */
	crossFadeMode(): SettableEnumValue

	/** Value that reports if this track is currently stopped. When a track is stopped it is not playing content
from the arranger or clip launcher. */
	isStopped(): BooleanValue

	/** Value that reports if the clip launcher slots are queued for stop. */
	isQueuedForStop(): BooleanValue

	/** Returns the source selector for the track, which is shown in the IO section of the track in Bitwig
Studio and lists either note or audio sources or both depending on the track type. */
	sourceSelector(): SourceSelector

	/** Stops playback of the track. */
	stop(): void

	/** Action to call {@link #stop()}. */
	stopAction(): HardwareActionBindable

	/** Calling this method causes the arrangement sequencer to take over playback. */
	returnToArrangement(): void

	/** Updates the name of the track. */
	setName(
		/** the new track name*/
		name: any
	): void

	/** Registers an observer that reports names for note key values on this track. The track might provide
special names for certain keys if it contains instruments that support that features, such as the Bitwig
Drum Machine. */
	addPitchNamesObserver(
		/** a callback function that receives two arguments: 1. the key value in the range [0..127], and
          2. the name string*/
		callback: any
	): void

	/** Plays a note on the track with a default duration and the given key and velocity. */
	playNote(
		/** the key value of the played note*/
		key: number,

		/** the velocity of the played note*/
		velocity: number
	): void

	/** Starts playing a note on the track with the given key and velocity. */
	startNote(

		/** the key value of the played note*/
		key: number,

		/** the velocity of the played note*/
		velocity: number
	): void

	/** Stops playing a currently played note. */
	stopNote(

		/** the key value of the playing note*/
		key: number,

		/** the note-off velocity*/
		velocity: number): void

	/** Sends a MIDI message to the hardware device. */
	sendMidi(

		/** the status byte of the MIDI message*/
		status: number,

		/** the data1 part of the MIDI message*/
		data1: number,

		/** the data2 part of the MIDI message*/
		data2: number): void

	/** Value that reports the track type. Possible reported track types are `Group`, `Instrument`, `Audio`,
`Hybrid`, `Effect` or `Master`. */
	trackType(): StringValue

	/** Value that reports if the track may contain child tracks, which is the case for group tracks. */
	isGroup(): BooleanValue

	/** If the track is an effect track, returns an object that indicates if the effect track is configured
as pre-fader. */
	getIsPreFader(): SettableBooleanValue

	/** Returns an object that indicates if the track may contain notes. */
	canHoldNoteData(): SettableBooleanValue

	/** Returns an object that indicates if the track may contain audio events. */
	canHoldAudioData(): SettableBooleanValue

	createCursorDevice(): CursorDevice

	createCursorDevice(
		id: string,
		/** the name of the custom device selection cursor, for example "Primary", or `null` to refer to
          the device selection cursor in the arranger cursor track as shown in the Bitwig Studio user
          interface.*/
		name: string|null,

		/** the number of sends that are simultaneously accessible in nested channels.*/
		numSends: number,
		/** Mode that defines how this cursor should follow devices. */
		followMode: CursorDeviceFollowMode
	): CursorDevice
	/** Creates a named device selection cursor that is independent from the device selection in the Bitwig
Studio user interface, assuming the name parameter is not null. When `name` is `null` the result is
equal to calling {@link Track#createCursorDevice}. */
	createCursorDevice(

		/** the name of the custom device selection cursor, for example "Primary", or `null` to refer to
          the device selection cursor in the arranger cursor track as shown in the Bitwig Studio user
          interface.*/
		name: string|null,

		/** the number of sends that are simultaneously accessible in nested channels.*/
		numSends: number): CursorDevice

	/** Returns a track bank with the given number of child tracks, sends and scenes. The track bank will only
have content if the connected track is a group track.<br/>

A track bank can be seen as a fixed-size window onto the list of tracks in the connected track group
including their sends and scenes, that can be scrolled in order to access different parts of the track
list. For example a track bank configured for 8 tracks can show track 1-8, 2-9, 3-10 and so on.<br/>

The idea behind the `bank pattern` is that hardware typically is equipped with a fixed amount of channel
strips or controls, for example consider a mixing console with 8 channels, but Bitwig Studio documents
contain a dynamic list of tracks, most likely more tracks than the hardware can control simultaneously.
The track bank returned by this function provides a convenient interface for controlling which tracks
are currently shown on the hardware.<br/>

Creating a track bank using this method will consider all tracks in the document, including effect
tracks and the master track. Use {@link #createMainTrackBank} or {@link #createEffectTrackBank} in case
you are only interested in tracks of a certain kind. */
	createTrackBank(

		/** the number of child tracks spanned by the track bank*/
		numTracks: number,

		/** the number of sends spanned by the track bank*/
		numSends: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number,

		/** specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.*/
		hasFlatTrackList: boolean
	): TrackBank

	/** Returns a track bank with the given number of child tracks, sends and scenes. Only audio tracks,
instrument tracks and hybrid tracks are considered. The track bank will only have content if the
connected track is a group track. For more information about track banks and the `bank pattern` in
general, see the documentation for {@link #createTrackBank}. */
	createMainTrackBank(

		/** the number of child tracks spanned by the track bank*/
		numTracks: number,

		/** the number of sends spanned by the track bank*/
		numSends: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number,

		/** specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.*/
		hasFlatTrackList: boolean
	): TrackBank

	/** Returns a track bank with the given number of child effect tracks and scenes. Only effect tracks are
considered. The track bank will only have content if the connected track is a group track. For more
information about track banks and the `bank pattern` in general, see the documentation for
{@link #createTrackBank}. */
	createEffectTrackBank(

		/** the number of child tracks spanned by the track bank*/
		numTracks: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number,

		/** specifies whether the track bank should operate on a flat list of all nested child tracks or
          only on the direct child tracks of the connected group track.*/
		hasFlatTrackList: boolean): TrackBank

	/** Returns an object that represents the master track of the connected track group. The returned object
will only have content if the connected track is a group track. */
	createMasterTrack(
		/** the number of scenes for bank-wise navigation of the master tracks clip launcher slots.*/
		numScenes: number
	): MasterTrack

	/** Returns a bank of sibling tracks with the given number of tracks, sends and scenes. For more information
about track banks and the `bank pattern` in general, see the documentation for {@link #createTrackBank}. */
	createSiblingsTrackBank(

		/** the number of child tracks spanned by the track bank*/
		numTracks: number,

		/** the number of sends spanned by the track bank*/
		numSends: number,

		/** the number of scenes spanned by the track bank*/
		numScenes: number,

		/** specifies whether effect tracks should be included*/
		shouldIncludeEffectTracks: boolean,

		/** specifies whether the master should be included*/
		shouldIncludeMasterTrack: boolean): TrackBank

	/** {@link InsertionPoint} that can be used to insert after this track. */
	afterTrackInsertionPoint(): InsertionPoint

	/** {@link InsertionPoint} that can be used to insert after this track. */
	beforeTrackInsertionPoint(): InsertionPoint

	/** Creates an object that represent the parent track. */
	createParentTrack(numSends: number, numScenes: number): Track

	/** Routes the given noteInput directly to the track regardless of monitoring. */
	addNoteSource(noteInput: NoteInput): void

	/** Removes a routing operated by {@link #addNoteSource(NoteInput)} */
	removeNoteSource(noteInput: NoteInput): void

	/** Will create a new empty clip at or after slot index.
It will use the default clip length.
If necessary, a new scene will be created.
The new clip will be selected. */
	createNewLauncherClip(slotIndex: number): void

	/** Will start recording a new clip at or after slot index.
If necessary, a new scene will be created.
The new clip will be selected. */
	recordNewLauncherClip(slotIndex: number): void

	/** Selects the slot at the given index. */
	selectSlot(slotIndex: number): void
}

/** A track bank provides access to a range of tracks and their scenes (clip launcher slots) in Bitwig Studio.
Instances of track bank are configured with a fixed number of tracks and scenes and represent an excerpt of
a larger list of tracks and scenes. Various methods are provided for scrolling to different sections of the
track/scene list. It basically acts like a 2-dimensional window moving over the grid of tracks and scenes.

To receive an instance of track bank that supports all kinds of tracks call {@link ControllerHost#createTrackBank}.
Additional methods are provided in the {@link ControllerHost} interface to create track banks that include only main
tracks ({@link ControllerHost#createMainTrackBank}) or only effect tracks ({@link ControllerHost#createEffectTrackBank}). */
declare interface TrackBank extends ChannelBank<Track> {

	/** {@link SceneBank} that represents a view on the scenes in this {@link TrackBank}. */
	sceneBank(): SceneBank

	/** Scrolls the scenes one step up. */
	scrollScenesUp(): void

	/** Scrolls the scenes one step down. */
	scrollScenesDown(): void

	/** Makes the scene with the given position visible in the track bank. */
	scrollToScene(

		/** the position of the scene within the underlying full list of scenes*/
		position: any): void

	/** Causes this bank to follow the supplied cursor. When the cursor moves to a new item the bank will be
scrolled so that the cursor is within the bank, if possible. */
	followCursorTrack(

		/** The {@link CursorTrack} that this bank should follow.*/
		cursorTrack: CursorTrack): void
}

/** An interface representing the transport section in Bitwig Studio. */
declare interface Transport extends ObjectProxy {

	/** Starts playback in the Bitwig Studio transport. */
	play(): void

	/** Continues the playback in the Bitwig Studio transport. */
	continuePlayback(): void

	/** Action that can be used to play the transport. */
	playAction(): HardwareActionBindable

	/** Action that can be used to continue the transport. */
	continuePlaybackAction(): HardwareActionBindable

	/** Stops playback in the Bitwig Studio transport. */
	stop(): void

	/** Action that can be used to stop the transport. */
	stopAction(): HardwareActionBindable

	/** Toggles the transport playback state between playing and stopped. */
	togglePlay(): void

	/** When the transport is stopped, calling this function starts transport playback, otherwise the transport
is first stopped and the playback is restarted from the last play-start position. */
	restart(): void

	/** Action that can be used to restart the transport. */
	restartAction(): HardwareActionBindable

	/** Starts recording in the Bitwig Studio transport. */
	record(): void

	/** Action that can be used to start recording */
	recordAction(): HardwareActionBindable

	/** Rewinds the Bitwig Studio transport to the beginning of the arrangement. */
	rewind(): void

	/** Action that can be used to rewind the transport. */
	rewindAction(): HardwareActionBindable

	/** Calling this function is equivalent to pressing the fast forward button in the Bitwig Studio transport. */
	fastForward(): void

	/** Action that can be used to fast forward the transport. */
	fastForwardAction(): HardwareActionBindable

	/** When calling this function multiple times, the timing of those calls gets evaluated and causes
adjustments to the project tempo. */
	tapTempo(): void

	/** Action that can be used to tap the tempo. */
	tapTempoAction(): HardwareActionBindable

	/** Value that reports if the Bitwig Studio transport is playing. */
	isPlaying(): SettableBooleanValue

	/** Value that reports if the Bitwig Studio transport is recording. */
	isArrangerRecordEnabled(): SettableBooleanValue

	/** Value that reports if overdubbing is enabled in Bitwig Studio. */
	isArrangerOverdubEnabled(): SettableBooleanValue

	/** Value reports if clip launcher overdubbing is enabled in Bitwig Studio. */
	isClipLauncherOverdubEnabled(): SettableBooleanValue

	/** Value that reports the current automation write mode. Possible values are `"latch"`, `"touch"` or
`"write"`. */
	automationWriteMode(): SettableEnumValue

	/** Value that reports if automation write is currently enabled for the arranger. */
	isArrangerAutomationWriteEnabled(): SettableBooleanValue

	/** Value that reports if automation write is currently enabled on the clip launcher. */
	isClipLauncherAutomationWriteEnabled(): SettableBooleanValue

	/** Value that indicates if automation override is currently on. */
	isAutomationOverrideActive(): BooleanValue

	/** Value that indicates if the loop is currently active or not. */
	isArrangerLoopEnabled(): SettableBooleanValue

	/** Value that reports if punch-in is enabled in the Bitwig Studio transport. */
	isPunchInEnabled(): SettableBooleanValue

	/** Value that reports if punch-in is enabled in the Bitwig Studio transport. */
	isPunchOutEnabled(): SettableBooleanValue

	/** Value that reports if the metronome is enabled in Bitwig Studio. */
	isMetronomeEnabled(): SettableBooleanValue

	/** Value that reports if the metronome has tick playback enabled. */
	isMetronomeTickPlaybackEnabled(): SettableBooleanValue

	/** Value that reports the metronome volume. */
	metronomeVolume(): SettableRangedValue

	/** Value that reports if the metronome is audible during pre-roll. */
	isMetronomeAudibleDuringPreRoll(): SettableBooleanValue

	/** Value that reports the current pre-roll setting. Possible values are `"none"`, `"one_bar"`,
`"two_bars"`, or `"four_bars"`. */
	preRoll(): SettableEnumValue

	/** Toggles the latch automation write mode in the Bitwig Studio transport. */
	toggleLatchAutomationWriteMode(): void

	/** Toggles the arranger automation write enabled state of the Bitwig Studio transport. */
	toggleWriteArrangerAutomation(): void

	/** Toggles the clip launcher automation write enabled state of the Bitwig Studio transport. */
	toggleWriteClipLauncherAutomation(): void

	/** Resets any automation overrides in Bitwig Studio. */
	resetAutomationOverrides(): void

	/** Switches playback to the arrangement sequencer on all tracks. */
	returnToArrangement(): void

	/** Returns an object that provides access to the project tempo. */
	tempo(): Parameter

	/** Increases the project tempo value by the given amount, which is specified relative to the given range. */
	increaseTempo(

		/** the new tempo value relative to the specified range. Values should be in the range
          [0..range-1].*/
		amount: number,

		/** the range of the provided amount value*/
		range: number): void

	/** Returns an object that provides access to the transport position in Bitwig Studio. */
	getPosition(): SettableBeatTimeValue

	/** Returns an object that provides access to the current transport position. */
	playPosition(): BeatTimeValue

	/** Returns an object that provides access to the current transport position in seconds. */
	playPositionInSeconds(): DoubleValue

	/** Returns an object that provides access to the transport's play-start position. (blue triangle) */
	playStartPosition(): SettableBeatTimeValue

	/** Returns an object that provides access to the transport's play-start position in seconds. (blue triangle) */
	playStartPositionInSeconds(): SettableDoubleValue

	/** Make the transport jump to the play-start position. */
	launchFromPlayStartPosition(): void
	launchFromPlayStartPositionAction(): HardwareActionBindable

	/** Make the transport jump to the play-start position. */
	jumpToPlayStartPosition(): void
	jumpToPlayStartPositionAction(): HardwareActionBindable

	/** Make the transport jump to the previous cue marker. */
	jumpToPreviousCueMarker(): void
	jumpToPreviousCueMarkerAction(): HardwareActionBindable

	/** Make the transport jump to the previous cue marker. */
	jumpToNextCueMarker(): void
	jumpToNextCueMarkerAction(): HardwareActionBindable

	/** Sets the transport playback position to the given beat time value. */
	setPosition(

		/** the new playback position in beats*/
		beats: number): void

	/** Increases the transport position value by the given number of beats, which is specified relative to the
given range. */
	incPosition(

		/** the beat time value that gets added to the current transport position. Values have double
          precision and can be positive or negative.*/
		beats: number,

		/** when `true` the actual new transport position will be quantized to the beat grid, when `false`
          the position will be increased exactly by the specified beat time*/
		snap: boolean): void

	/** Returns an object that provides access to the punch-in position in the Bitwig Studio transport. */
	getInPosition(): SettableBeatTimeValue

	/** Returns an object that provides access to the punch-out position in the Bitwig Studio transport. */
	getOutPosition(): SettableBeatTimeValue

	/** Returns an object that provides access to the cross-fader, used for mixing between A/B-channels as
specified on the Bitwig Studio tracks. */
	crossfade(): Parameter

	/** Returns an object that provides access to the transport time signature. */
	timeSignature(): TimeSignatureValue

	/** Value that reports the current clip launcher post recording action. Possible values are `"off"`,
`"play_recorded"`, `"record_next_free_slot"`, `"stop"`, `"return_to_arrangement"`,
`"return_to_previous_clip"` or `"play_random"`. */
	clipLauncherPostRecordingAction(): SettableEnumValue

	/** Returns an object that provides access to the clip launcher post recording time offset. */
	getClipLauncherPostRecordingTimeOffset(): SettableBeatTimeValue

	/** Setting for the default launch quantization.

Possible values are `"none"`, `"8"`, `"4"`, `"2"`, `"1"`, `"1/2"`, `"1/4"`, `"1/8"`, `"1/16"`. */
	defaultLaunchQuantization(): SettableEnumValue
}

declare interface UsbConfigurationMatcher {
	getInterfaceMatchers(): UsbInterfaceMatcher[]
}

/** Defines a USB device that is available for communication. */
declare interface UsbDevice extends HardwareDevice {

	/** The {@link UsbDeviceMatcher} that was provided by the controller for identifying this device. */
	deviceMatcher(): UsbDeviceMatcher

	/** The list of {@link UsbInterface}s that have been opened for this device. */
	ifaces(): UsbInterface[]

	/** The {@link UsbInterface} that was claimed using the {@link UsbInterfaceMatcher} defined at the
corresponding index in the {@link UsbDeviceMatcher}. */
	iface(index: number): UsbInterface
}

/** Defines information needed to identify suitable USB devices for use by an extension. */
declare interface UsbDeviceMatcher extends HardwareDeviceMatcher {

	/** An expression that can be used on the USB device descriptor to decide if the device matches.
          Variables in the expression can refer to the following fields of the device descriptor:

          - bDeviceClass - bDeviceSubClass - bDeviceProtocol - idVendor - idProduct

          For example to match a device that has vendor id 0x10 product id 0x20 the expression would be:

          "idVendor == 0x10 && idProduct == 0x20" */
	getExpression(): string

	/** Object that tries to match a configuration on the device that it can use. */
	getConfigurationMatcher(): UsbConfigurationMatcher
}

declare interface UsbEndpointMatcher {
	getDirection(): UsbTransferDirection
	getTransferType(): UsbTransferType
}

declare interface UsbInterface {

	/** The {@link UsbInterfaceMatcher} that was provided by the controller for identifying this device. */
	interfaceMatcher(): UsbInterfaceMatcher

	/** The list of pipes that have been opened for this interface. */
	pipes(): UsbPipe[]
	pipe(index: number): UsbPipe
	pipeCount(): number
}

declare interface UsbInterfaceMatcher {
	getEndpointMatchers(): UsbEndpointMatcher[]
}

declare interface UsbMatcher {
	getExpression(): string
	getMatchOccurrence(): number
}

/** Defines a pipe for talking to an endpoint on a USB device. */
declare interface UsbPipe extends Pipe {

	/** The device this endpoint is on. */
	device(): UsbDevice

	/** The {@link UsbEndpointMatcher} that was provided by the controller for identifying the endpoint to use
for communication. */
	endpointMatcher(): UsbEndpointMatcher

	/** The endpoint address on the device that this endpoint is for. */
	endpointAddress(): string

	/** {@link UsbTransferDirection} for this pipe. */
	direction(): UsbTransferDirection

	/** The {@link UsbTransferType} type that this pipe uses for communicating with the USB device. */
	transferType(): UsbTransferType
}

/** Instances of this interface represent a bank of custom controls that can be manually learned to device
parameters by the user. */
declare interface UserControlBank {

	/** Gets the user control at the given bank index. */
	getControl(
		/** the index of the control within the bank*/
		index: number
	): Parameter
}

/** The common interface that is shared by all value objects in the controller API. */
declare interface Value<ObserverType> {

	/** Marks this value as being of interest to the driver. This can only be called once during the driver's
init method. A value that is of interest to the driver can be obtained using the value's get method. If
a value has not been marked as interested then an error will be reported if the driver attempts to get
the current value. Adding an observer to a value will automatically mark this value as interested. */
	markInterested(): void

	/** Registers an observer that reports the current value. */
	addValueObserver(

		/** a callback function that receives a single parameter*/
		callback: ObserverType): void
}

declare enum CursorDeviceFollowMode {
	FOLLOW_SELECTION,
	FIRST_DEVICE,
	FIRST_INSTRUMENT,
	FIRST_AUDIO_EFFECT,
	FIRST_INSTRUMENT_OR_DEVICE,
	LAST_DEVICE,
}

declare enum CursorNavigationMode {
	NESTED,
	FLAT,
	GUI,
}

declare enum NoteExpression {
	NONE,
	PITCH_DOWN,
	PITCH_UP,
	GAIN_DOWN,
	GAIN_UP,
	PAN_LEFT,
	PAN_RIGHT,
	TIMBRE_DOWN,
	TIMBRE_UP,
}

declare enum State {
	Empty,
	NoteOn,
	NoteSustain,
}

declare enum RelativePosition {
	ABOVE,
	BELOW,
	LEFT,
	RIGHT,
	INSIDE,
}

declare enum UsbTransferStatus {
	Completed,
	Error,
	TimedOut,
	Cancelled,
	Stall,
	NoDevice,
	Overflow,
}

declare enum UsbTransferType {
	BULK
}

declare enum UsbTransferDirection {
	IN
}

declare enum HardwareControlType {
	KNOB,
 	SLIDER,
 	ENCODER
}

declare enum PlatformType {
	WINDOWS,
 	LINUX,
 	MAC
}

declare var host: ControllerHost

declare type BooleanValueChangedCallback = (value: boolean) => void
declare type StringValueChangedCallback = (value: string) => void
declare type EnumValueChangedCallback = (value: string) => void
declare type IntegerValueChangedCallback = (value: number) => void
declare type StringArrayValueChangedCallback = (value: string[]) => void
declare type RangedValueChangedCallback = (value: number) => void
declare type ObjectValueChangedCallback<ValueType> = (value: ValueType) => void
declare type ColorValueChangedCallback = (red: number, green: number, blue: number) => void
declare type DoubleValueChangedCallback = (value: number) => void
declare type FloatValueChangedCallback = (value: number) => void
declare type IndexedBooleanValueChangedCallback = (index: number, value: boolean) => void
declare type IndexedColorValueChangedCallback = (index: number, red: number, green: number, blue: number) => void
declare type IndexedStringValueChangedCallback = (index: number, value: string) => void

declare interface DirectParameterDisplayedValueChangedCallback {
	directParameterDisplayedValueChanged(id: string, value: string): void
}

declare interface DirectParameterNameChangedCallback {
	directParameterNameChanged(id: string, name: string): void
}

declare interface DirectParameterNormalizedValueChangedCallback {
	directParameterNormalizedValueChanged(id: string, normalizedValue: number): void
}
