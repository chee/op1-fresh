import type {Transport} from "./transport"
import type {MidiIn, MidiOut} from "./midi"
import type {Application} from "./application"

/** Defines the interface through which an extension can talk to the host application. */
export interface Host {
	/** Returns the latest supported API version of the host application. */
	getHostApiVersion(): number
	/** Returns the product name of the host application */
	getHostVendor(): string
	getHostProduct(): string
	getHostVersion(): string
	// getPlatformType(): PlatformType
	setErrorReportingEMail (address: string): void
	// getOscModule(): OscModule
	/**
	   Allocates some memory that will be automatically freed once the
	   extension exits.
	*/
	// allocateMemoryBlock (size: number): MemoryBlock
	// createBitmap (width: number, height: number, format: BitmapFormat): Bitmap
	// loadFontFace (path: string): FontFace
	// createFontOptions(): FontOptions
	// loadPNG (path: string): Image
	// loadSVG (path: string, scale: number): Image
}

/**
   An interface representing the host application to the script. A singleton
   instance of this interface is available in the global scope of each script.

   The methods provided by this interface can be divided in different
   categories:

   1. functions for registering the script in Bitwig Studio, so that it can
   be listed, detected and configured in the controller preferences. The
   methods that belong to this group are `defineController`, `defineMidiPorts`,
   `defineSysexIdentityReply` and `addDeviceNameBasedDiscoveryPair`.

   2. functions for creating objects that provide access to the various
   areas of Bitwig Studio to the script. The name of those methods
   typically start with create...

   3. functions for printing to the Control Surface Console, which can be
   opened from the View menu of Bitwig Studio.

   4. functions for determining the name of the host application, API
   version, the host operating system and such.

   The first group of methods should be called on the global scope of the
   script.

   The function in the second and third group are typically called from the init
   method of the script or other handler functions.

   The last group is probably only required in rare cases and can be called any
   time.
*/
export interface ControllerHost extends Host {
	/** Restarts this controller. */
	restart(): void
	/** Loads the supplied API version into the calling script. */
	loadAPI(version: number): void
	useBetaApi(): void
	shouldFailOnDeprecatedUse(): boolean
	setShouldFailOnDeprecatedUse(value: boolean): void
	load(path: string): void
	platformIsWindows(): boolean
	platformIsMac(): boolean
	platformIsLinux(): boolean
	defineMidiPorts(inPorts: number, outPorts: number): void
	defineController(vendor: string, name: string, version: string, uuid: string, author: string): void
	addDeviceNameBasedDiscoveryPair(inputs: string[], outputs: string[]): void
	createTransport(): Transport
	getMidiInPort(index: number): MidiIn
	getMidiOutPort(index: number): MidiOut
	defineSysexIdentityReply(reply: string): void
	println(s: string): void
	errorln(s: string): void
	createApplication(): Application
	// HardwareDevice 	hardwareDevice (int index)
	// Preferences 	getPreferences ()
	// DocumentState 	getDocumentState ()
	// NotificationSettings 	getNotificationSettings ()
	// Project 	getProject ()
	// Groove 	createGroove ()
	// Application 	createApplication ()
	// Arranger 	createArranger ()
	// Arranger 	createArranger (final int window)
	// Mixer 	createMixer ()
	// Mixer 	createMixer (final String panelLayout)
	// Mixer 	createMixer (final int window)
	// Mixer 	createMixer (final String panelLayout, final int window)
	// TrackBank 	createTrackBank (final int numTracks, final int numSends, final int numScenes)
	// TrackBank 	createTrackBank (final int numTracks, final int numSends, final int numScenes, final boolean hasFlatTrackList)
	// TrackBank 	createMainTrackBank (final int numTracks, final int numSends, final int numScenes)
	// TrackBank 	createEffectTrackBank (final int numTracks, final int numScenes)
	// MasterTrack 	createMasterTrack (final int numScenes)
	// CursorTrack 	createArrangerCursorTrack (final int numSends, final int numScenes)
	// CursorTrack 	createCursorTrack (final String name, final int numSends, final int numScenes)
	// CursorTrack 	createCursorTrack (final String id, String name, final int numSends, final int numScenes, boolean shouldFollowSelection)
	// SceneBank 	createSceneBank (final int numScenes)
	// CursorDevice 	createEditorCursorDevice ()
	// CursorDevice 	createEditorCursorDevice (int numSends)
	// Clip 	createCursorClip (final int gridWidth, final int gridHeight)
	// Clip 	createLauncherCursorClip (final int gridWidth, final int gridHeight)
	// Clip 	createArrangerCursorClip (final int gridWidth, final int gridHeight)
	// UserControlBank 	createUserControls (final int numControllers)
	// void 	scheduleTask (JSObject callback, Object[] args, long delay)
	// void 	scheduleTask (Runnable callback, long delay)
	// void 	requestFlush ()
	// void 	showPopupNotification (String text)
	// RemoteSocket 	createRemoteConnection (String name, int defaultPort)
	// void 	connectToRemoteHost (String host, int port, ConnectionEstablishedCallback callback)
	// void 	sendDatagramPacket (String host, int port, byte[] data)
	// boolean 	addDatagramPacketObserver (String name, int port, DataReceivedCallback callback)
	// void 	defineController (String vendor, String name, String version, String uuid)
	// Transport 	createTransportSection ()
	// CursorTrack 	createCursorTrack (final int numSends, final int numScenes)
	// Groove 	createGrooveSection ()
	// Application 	createApplicationSection ()
	// Arranger 	createArrangerSection (final int screenIndex)
	// Mixer 	createMixerSection (final String perspective, final int screenIndex)
	// TrackBank 	createTrackBankSection (final int numTracks, final int numSends, final int numScenes)
	// TrackBank 	createMainTrackBankSection (final int numTracks, final int numSends, final int numScenes)
	// TrackBank 	createEffectTrackBankSection (final int numTracks, final int numScenes)
	// CursorTrack 	createCursorTrackSection (final int numSends, final int numScenes)
	// Track 	createMasterTrackSection (final int numScenes)
	// Clip 	createCursorClipSection (final int gridWidth, final int gridHeight)
	// CursorDevice 	createCursorDeviceSection (final int numControllers)
	// CursorDevice 	createCursorDevice ()
	// UserControlBank 	createUserControlsSection (final int numControllers)
	// void 	defineSysexDiscovery (String request, String reply)
	// PopupBrowser 	createPopupBrowser ()
	// BeatTimeFormatter 	defaultBeatTimeFormatter ()
	// void 	setDefaultBeatTimeFormatter (BeatTimeFormatter formatter)
	// BeatTimeFormatter 	createBeatTimeFormatter (final String separator, final int barsLen, final int beatsLen, final int subdivisionLen, final int ticksLen)
	// HardwareSurface 	createHardwareSurface ()
	// HardwareActionMatcher 	createOrHardwareActionMatcher (HardwareActionMatcher matcher1, HardwareActionMatcher matcher2)
	// RelativeHardwareValueMatcher 	createOrRelativeHardwareValueMatcher (RelativeHardwareValueMatcher matcher1, RelativeHardwareValueMatcher matcher2)
	// AbsoluteHardwareValueMatcher 	createOrAbsoluteHardwareValueMatcher (AbsoluteHardwareValueMatcher matcher1, AbsoluteHardwareValueMatcher matcher2)
	// MidiExpressions 	midiExpressions ()
	// HardwareActionBindable 	createAction (Runnable runnable, Supplier< String > descriptionProvider)
	// HardwareActionBindable 	createAction (DoubleConsumer actionPressureConsumer, Supplier< String > descriptionProvider)
	// RelativeHardwareControlBindable 	createRelativeHardwareControlStepTarget (HardwareActionBindable stepForwardsAction, HardwareActionBindable stepBackwardsAction)
	// RelativeHardwareControlBindable 	createRelativeHardwareControlAdjustmentTarget (DoubleConsumer adjustmentConsumer)
	// AbsoluteHardwareControlBindable 	createAbsoluteHardwareControlAdjustmentTarget (DoubleConsumer adjustmentConsumer)
	// void 	deleteObjects (String undoName, DeleteableObject...objects)
	// void 	deleteObjects (DeleteableObject...objects)
}
