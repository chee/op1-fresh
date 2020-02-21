import type {
	ObjectProxy
} from "./object"

import type {
	SettableBooleanValue,
	BooleanValueChangedCallback
} from "./value"

export interface Browser extends ObjectProxy {
	addIsBrowsingObserver (callback: BooleanValueChangedCallback): void
	startBrowsing(): void
	cancelBrowsing(): void
	commitSelectedResult(): void
	// activateSession (session: BrowsingSession): void
	isWindowMinimized(): SettableBooleanValue
	shouldAudition(): SettableBooleanValue
	// createSessionBank (size: number): BrowsingSessionBank
	// createCursorSession(): CursorBrowsingSession
	// getDeviceSession(): DeviceBrowsingSession
	// getPresetSession(): PresetBrowsingSession
	// getSampleSession(): SampleBrowsingSession
	// getMultiSampleSession(): MultiSampleBrowsingSession
	// getClipSession(): ClipBrowsingSession
	// getMusicSession(): MusicBrowsingSession
}
