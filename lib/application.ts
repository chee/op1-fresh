import type {
	BooleanValue,
	BooleanValueChangedCallback,
	StringValue,
	StringValueChangedCallback,
	SettableBooleanValue,
	SettableEnumValue
} from "./value"

import type {
	HardwareActionBindable
} from "./hardware"

import type {
	Action,
	ActionCategory
} from "./action"

export interface Application {
	createAudioTrack (position: number): void
	createInstrumentTrack (position: number): void
	createEffectTrack (position: number): void
	activateEngine(): void
	deactivateEngine(): void
	getActions(): Action[]
	getAction (id: string): Action
	getActionCategories(): ActionCategory[]
	getActionCategory (id: string): ActionCategory
	hasActiveEngine(): BooleanValue
	addHasActiveEngineObserver (callable: BooleanValueChangedCallback): void
	projectName(): StringValue
	addProjectNameObserver (callback: StringValueChangedCallback, maxChars: number): void
	nextProject(): void
	previousProject(): void
	navigateIntoTrackGroup (track: Track): void
	navigateToParentTrackGroup(): void
	undo(): void
	undoAction(): HardwareActionBindable
	redo(): void
	redoAction(): HardwareActionBindable
	setPanelLayout (panelLayout: string): void
	nextPanelLayout(): void
	previousPanelLayout(): void
	panelLayout(): StringValue
	addPanelLayoutObserver (callable: StringValueChangedCallback, maxChars: number): void
	displayProfile(): StringValue
	addDisplayProfileObserver (callable: StringValueChangedCallback, maxChars: number): void
	toggleInspector(): void
	toggleDevices(): void
	toggleMixer(): void
	toggleNoteEditor(): void
	toggleAutomationEditor(): void
	toggleBrowserVisibility(): void
	previousSubPanel(): void
	nextSubPanel(): void
	arrowKeyLeft(): void
	arrowKeyRight(): void
	arrowKeyUp(): void
	arrowKeyDown(): void
	enter(): void
	escape(): void
	selectAll(): void
	selectAllAction(): HardwareActionBindable
	selectNone(): void
	selectNoneAction(): HardwareActionBindable
	selectPrevious(): void
	selectPreviousAction(): HardwareActionBindable
	selectNext(): void
	selectNextAction(): HardwareActionBindable
	selectFirst(): void
	selectFirstAction(): HardwareActionBindable
	selectLast(): void
	selectLastAction(): HardwareActionBindable
	cut(): void
	cutAction(): HardwareActionBindable
	copy(): void
	copyAction(): HardwareActionBindable
	paste(): void
	pasteAction(): HardwareActionBindable
	duplicate(): void
	duplicateAction(): HardwareActionBindable
	remove(): void
	removeAction(): HardwareActionBindable
	rename(): void
	zoomIn(): void
	zoomInAction(): HardwareActionBindable
	zoomOut(): void
	zoomOutAction(): HardwareActionBindable
	zoomToSelection(): void
	zoomToSelectionAction(): HardwareActionBindable
	zoomToSelectionOrAll(): void
	zoomToSelectionOrAllAction(): HardwareActionBindable
	zoomToSelectionOrPrevious(): void
	zoomToSelectionOrPreviousAction(): HardwareActionBindable
	zoomToFit(): void
	zoomToFitAction(): HardwareActionBindable
	focusPanelToLeft(): void
	focusPanelToRight(): void
	focusPanelAbove(): void
	focusPanelBelow(): void
	toggleFullScreen(): void
	setPerspective (perspective: string): void
	nextPerspective(): void
	previousPerspective(): void
	addSelectedModeObserver (callable: StringValueChangedCallback, maxChars: number, fallbackText: string): void
	recordQuantizationGrid(): SettableEnumValue
	recordQuantizeNoteLength(): SettableBooleanValue

	PANEL_LAYOUT_ARRANGE: "ARRANGE"
	PANEL_LAYOUT_MIX: "MIX"
	PPANEL_LAYOUT_EDIT: "EDIT"
}
