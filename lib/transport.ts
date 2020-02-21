import type {
	BooleanValueChangedCallback,
	SettableBooleanValue,
	BooleanValue
} from "./value"

import type {
	HardwareActionBindable
} from "./hardware"

/**
   An interface representing the transport section in Bitwig Studio.
*/
export interface Transport {
	play(): void
	stop(): void
	togglePlay(): void
	restart(): void
	record(): void
	rewind(): void
	fastForward(): void
	tapTempo(): void
	continuePlayback(): void
	playAction(): HardwareActionBindable
	continuePlaybackAction(): HardwareActionBindable
	stopAction(): HardwareActionBindable
	restartAction(): HardwareActionBindable
	recordAction(): HardwareActionBindable
	rewindAction(): HardwareActionBindable
	fastForwardAction(): HardwareActionBindable
	tapTempoAction(): HardwareActionBindable
	isPlaying(): SettableBooleanValue
	addIsPlayingObserver(callback: BooleanValueChangedCallback): void
	isArrangerRecordEnabled(): SettableBooleanValue
	addIsRecordingObserver(callback: BooleanValueChangedCallback): void
	isArrangerOverdubEnabled(): SettableBooleanValue
	addOverdubObserver(callback: BooleanValueChangedCallback): void
	isClipLauncherOverdubEnabled(): SettableBooleanValue
	addLauncherOverdubObserver(callback: BooleanValueChangedCallback): void
	// automationWriteMode(): SettableEnumValue
	// addAutomationWriteModeObserver(EnumValueChangedCallback callback): void
	isArrangerAutomationWriteEnabled(): SettableBooleanValue
	addIsWritingArrangerAutomationObserver(callback: BooleanValueChangedCallback): void
	isClipLauncherAutomationWriteEnabled(): SettableBooleanValue
	addIsWritingClipLauncherAutomationObserver(callback: BooleanValueChangedCallback): void
	isAutomationOverrideActive(): BooleanValue
	addAutomationOverrideObserver(callback: BooleanValueChangedCallback): void
	isArrangerLoopEnabled(): SettableBooleanValue
	addIsLoopActiveObserver(callback: BooleanValueChangedCallback): void
	isPunchInEnabled(): SettableBooleanValue
	addPunchInObserver(callback: BooleanValueChangedCallback): void
	isPunchOutEnabled(): SettableBooleanValue
	addPunchOutObserver(callback: BooleanValueChangedCallback): void
	isMetronomeEnabled(): SettableBooleanValue
	addClickObserver(callback: BooleanValueChangedCallback): void
	isMetronomeTickPlaybackEnabled(): SettableBooleanValue
	addMetronomeTicksObserver(callback: BooleanValueChangedCallback): void
	// metronomeVolume(): SettableRangedValue
	// addMetronomeVolumeObserver(DoubleValueChangedCallback callback): void
	isMetronomeAudibleDuringPreRoll(): SettableBooleanValue
	addPreRollClickObserver(callback: BooleanValueChangedCallback): void
	toggleLoop(): void
	setLoop(isEnabled: boolean): void
	togglePunchIn(): void
	togglePunchOut(): void
	toggleClick(): void
	setClick(isEnabled: boolean): void
	toggleMetronomeTicks(): void
	toggleMetronomeDuringPreRoll(): void
	setPreRoll(value: string): void
	setMetronomeValue(amount: number, range: number): void
	toggleOverdub(): void
	setOverdub(isEnabled: boolean): void
	toggleLauncherOverdub(): void
	setLauncherOverdub(isEnabled: boolean): void
	setAutomationWriteMode(mode: string): void
	toggleLatchAutomationWriteMode(): void
	toggleWriteArrangerAutomation(): void
	toggleWriteClipLauncherAutomation(): void
	resetAutomationOverrides(): void
	returnToArrangement(): void
	increaseTempo(amount: number, range: number): void
	launchFromPlayStartPositionAction(): HardwareActionBindable
	jumpToPlayStartPosition(): void
	jumpToPlayStartPositionAction(): HardwareActionBindable
	jumpToPreviousCueMarker(): void
	jumpToPreviousCueMarkerAction(): HardwareActionBindable
	jumpToNextCueMarker(): void
	jumpToNextCueMarkerAction(): HardwareActionBindable
	launchFromPlayStartPosition(): void
	setPosition(beats: number): void
	incPosition(beats: number, snap: boolean): void
	setClipLauncherPostRecordingAction(action: string): void
	// preRoll(): SettableEnumValue
	// addPreRollObserver(callback: EnumValueChangedCallback): void
	// getTempo(): Parameter
	// tempo(): Parameter
	// getPosition(): SettableBeatTimeValue
	// playPosition(): BeatTimeValue
	// playPositionInSeconds(): DoubleValue
	// playStartPosition(): SettableBeatTimeValue
	// playStartPositionInSeconds(): SettableDoubleValue
	// getInPosition(): SettableBeatTimeValue
	// getOutPosition(): SettableBeatTimeValue
	// getCrossfade(): Parameter
	// crossfade(): Parameter
	// getTimeSignature(): TimeSignatureValue
	// timeSignature(): TimeSignatureValue
	// clipLauncherPostRecordingAction(): SettableEnumValue
	// addClipLauncherPostRecordingActionObserver(callback: EnumValueChangedCallback): void
	// getClipLauncherPostRecordingTimeOffset(): SettableBeatTimeValue
	// defaultLaunchQuantization(): SettableEnumValue
}
