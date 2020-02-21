import type {
	StringValueChangedCallback,
	SettableStringValue,
	BooleanValueChangedCallback,
	SettableBooleanValue,
	IntegerValue,
	IntegerValueChangedCallback,
	StringValue,
	BooleanValue,
	StringArrayValueChangedCallback,
	StringArrayValue
} from "./value"

import type {
	ObjectProxy,
	DeleteableObject
} from "./object"

import type {Browser} from "./browser"

export interface Device extends ObjectProxy, DeleteableObject {
	getDeviceChain(): DeviceChain
	deviceChain(): DeviceChain
	position(): IntegerValue
	addPositionObserver (callback: IntegerValueChangedCallback): void
	isWindowOpen(): SettableBooleanValue
	isExpanded(): SettableBooleanValue
	isMacroSectionVisible(): SettableBooleanValue
	isRemoteControlsSectionVisible(): SettableBooleanValue
	isParameterPageSectionVisible(): SettableBooleanValue
	getParameter (indexInPage: number): Parameter
	createCursorRemoteControlsPage (parameterCount: number): CursorRemoteControlsPage
	createCursorRemoteControlsPage (name: string, parameterCount: number, filterExpression: string): CursorRemoteControlsPage
	getEnvelopeParameter (index: number): Parameter
	getCommonParameter (index: number): Parameter
	getModulationSource (index: number): ModulationSource
	getMacro (index: number): Macro
	addHasSelectedDeviceObserver (callback: BooleanValueChangedCallback): void
	selectInEditor(): void
	isPlugin(): BooleanValue
	addIsPluginObserver (callback: BooleanValueChangedCallback): void
	previousParameterPage(): void
	nextParameterPage(): void
	addPreviousParameterPageEnabledObserver (callback: BooleanValueChangedCallback): void
	addNextParameterPageEnabledObserver (callback: BooleanValueChangedCallback): void
	setParameterPage (page: number): void
	switchToPreviousPreset(): void
	switchToNextPreset(): void
	switchToPreviousPresetCategory(): void
	switchToNextPresetCategory(): void
	switchToPreviousPresetCreator(): void
	switchToNextPresetCreator(): void
	createDeviceBrowser (numFilterColumnEntries: number, numResultsColumnEntries: number): Browser
	name(): StringValue
	addNameObserver (len: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	presetName(): StringValue
	addPresetNameObserver (len: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	presetCategory(): StringValue
	addPresetCategoryObserver (len: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	presetCreator(): StringValue
	addPresetCreatorObserver (len: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	addSelectedPageObserver (valueWhenUnassigned: number, callback: IntegerValueChangedCallback): void
	addActiveModulationSourceObserver (len: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	addPageNamesObserver (callback: StringArrayValueChangedCallback): void
	addPresetNamesObserver (callback: StringArrayValueChangedCallback): void
	loadPreset (index: number): void
	addPresetCategoriesObserver (callback: StringArrayValueChangedCallback): void
	setPresetCategory (index: number): void
	addPresetCreatorsObserver (callback: StringArrayValueChangedCallback): void
	setPresetCreator (index: number): void
	toggleEnabledState(): void
	isEnabled(): SettableBooleanValue
	addIsEnabledObserver (callback: BooleanValueChangedCallback): void
	hasSlots(): BooleanValue
	slotNames(): StringArrayValue
	addSlotsObserver (callback: StringArrayValueChangedCallback): void
	getCursorSlot(): DeviceSlot
	isNested(): BooleanValue
	hasLayers(): BooleanValue
	hasDrumPads(): BooleanValue
	createLayerBank (numChannels: number): DeviceLayerBank
	createDrumPadBank (numPads: number): DrumPadBank
	createCursorLayer(): CursorDeviceLayer
	createChainSelector(): ChainSelector
	addDirectParameterIdObserver (callback: StringArrayValueChangedCallback): void
	addDirectParameterNameObserver (maxChars: number, callback: DirectParameterNameChangedCallback): void
	addDirectParameterValueDisplayObserver (maxChars: number, callback: DirectParameterDisplayedValueChangedCallback): DirectParameterValueDisplayObserver
	addDirectParameterNormalizedValueObserver (callback: DirectParameterNormalizedValueChangedCallback): void
	setDirectParameterValueNormalized (id: string, value: number, resolution: number): void
	incDirectParameterValueNormalized (id: string, increment: number, resolution: number): void
	sampleName(): StringValue
	addSampleNameObserver (maxChars: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	createSiblingsDeviceBank (numDevices: number): DeviceBank
	browseToInsertBeforeDevice(): void
	browseToInsertAfterDevice(): void
	browseToReplaceDevice(): void
	afterDeviceInsertionPoint(): InsertionPoint
	beforeDeviceInsertionPoint(): InsertionPoint
	replaceDeviceInsertionPoint(): InsertionPoint
}

export interface InsertionPoint {
	copyTracks (...tracks: Track[]): void
	moveTracks (...tracks: Track[]): void
	copyDevices (...devices: Device[]): void
	moveDevices (...devices: Device[]): void
	// copySlotsOrScenes (...clipLauncherSlotOrScenes: ClipLauncherSlotOrScene[]): void
	// moveSlotsOrScenes (...clipLauncherSlotOrScenes: ClipLauncherSlotOrScene[]): void
	insertFile (path: string): void
	insertVST2Device (id: number): void
	insertVST3Device (id: string): void
	paste(): void
	browse(): void
}

export interface DeviceBank {

}

export interface DeviceChain extends ObjectProxy {
	selectInEditor(): void
	name(): SettableStringValue
	addNameObserver (numChars: number, textWhenUnassigned: string, callback: StringValueChangedCallback): void
	addIsSelectedInEditorObserver (callback: BooleanValueChangedCallback): void
	addIsSelectedObserver (callback: BooleanValueChangedCallback): void
	createDeviceBank (numDevices: number): DeviceBank
	createDeviceBrowser (numFilterColumnEntries: number, numResultsColumnEntries: number): Browser
	select(): void
	browseToInsertAtStartOfChain(): void
	browseToInsertAtEndOfChain(): void
	startOfDeviceChainInsertionPoint(): InsertionPoint
	endOfDeviceChainInsertionPoint(): InsertionPoint
}
