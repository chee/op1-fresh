var global = this
var println = host.println

host.loadAPI(10)

host.load("./polyfill.io.js")

function objectIncludes (target: object, targetValue: string | number) {
	for (let key in target) {
		let value = targetValue[key]
		if (value != null) {
			return true
		}
	}
	return false
}

type ValueOf<T> = T[keyof T]

enum Sequence {
	Id = "f0 7e 7f 06 01 f7",
	Enable = "f0 00 20 76 00 01 02 f7",
	Disable = "f0 00 20 76 00 01 00 f7",
	TextStart = "f0 00 20 76 00 03",
	TextEnd = "f7",
	ColorStart = "f0 00 20 76 00 04"
}

enum Encoder {
	Blue = 1,
	Green = 2,
	White = 3,
	Orange = 4
}

enum Key {
	Blue = 64,
	Green = 65,
	White = 66,
	Orange = 67,

	Help = 5,
	Metronome = 6,

	Lift = 15,
	Drop = 16,
	Scissor = 17,

	Synth = 7,
	Drum = 8,
	Tape = 9,
	Mixer = 10,

	T1 = 11,
	T2 = 12,
	T3 = 13,
	T4 = 14,

	Up = 15,
	Down = 16,
	Left = 41,
	Right = 42,

	Sound1 = 50,
	Sound2 = 51,
	Sound3 = 52,
	Sound4 = 21,
	Sound5 = 22,
	Sound6 = 23,
	Sound7 = 24,
	Sound8 = 25,

	In = 50,
	Out = 51,
	Loop = 52,
	Break = 21,
	Reverse = 22,
	Chop = 23,
	M1 = 24,
	M2 = 25,
	Sequence = 26,

	Record = 38,
	Play = 39,
	Stop = 40,
	Microphone = 49,
	Com = 49,

	Shift = 43
}

/** These are the modes available via the synth, drum, tape and mixer keys */
enum Mode {
	Perform = Key.Synth,
	// Scene = Key.Drum,
	Arrange = Key.Tape,
	Mix = Key.Mixer
}

/** These are the modes that appear as boxes at the bottom. availabe via T1-T4 */
enum UserMode {
	Mix = Key.T1,
	U01 = Key.T2,
	U02 = Key.T3,
	U03 = Key.T4
}

function getControlEnumNames (controlEnum: object): string[] {
	let vals = []
	for (let key in controlEnum) {
		if (typeof controlEnum[key] == "string") {
			vals.push(controlEnum[key])
		}
	}
	return vals
}

function getControlEnumValues (controlEnum: object): number[] {
	let vals = []
	for (let key in controlEnum) {
		if (typeof controlEnum[key] == "number") {
			vals.push(controlEnum[key])
		}
	}
	return vals
}

type Control = Key | Encoder
type BindingCallback = (data: number) => void | (() => void)

class Binding {
	private isModeKey: boolean
	private mode: Mode | "global"
	private control: Control
	private callback: BindingCallback
	private op1: OperatorOne

	constructor (op1: OperatorOne, control: Control, callback: BindingCallback, mode?: Mode) {
		this.isModeKey = getControlEnumValues(UserMode).includes(control) || getControlEnumValues(Mode).includes(control)
		if (this.isModeKey && mode) {
			throw new Error("Refusing to bind mode key to anything mode-specific")
		}
		this.mode = mode || "global"
		this.control = control
		this.callback = callback
		this.op1 = op1
		return this
	}

	call (data: number) {
		if (this.isModeKey) {
			host.println(`calling ${this.control} ${this.callback.name} as mode-key`)

			this.callback(data)
		// else if because it's a modeKey we don't want to run it twice
		} else if (this.mode == "global") {
			if (this.op1.userMode != UserMode.Mix) {
				host.errorln(`ignoring ${this.control} in user mode`)
				return
			}
			host.println(`calling ${this.control} ${this.callback.name} as global`)

			this.callback(data)
		} else {
			if (this.op1.mode != this.mode) {
				host.errorln(`ignoring ${this.control} in ${this.op1.mode} mode`)
				return
			}
			host.println(`calling ${this.control} ${this.callback.name} as ${this.op1.mode} mode control`)

			this.callback(data)
		}
	}
}

class Bindings {
	private op1: OperatorOne

	private bindings: {
		//weak that i can't make this a Control
		[control: number]: Binding[]
	}

	constructor (op1: OperatorOne) {
		this.op1 = op1
		this.bindings = {}
		return this
	}

	add(control: Control, callback: BindingCallback, mode?: Mode) {
		let controlBindings = this.bindings[control] = this.bindings[control] || []
		let binding = new Binding(this.op1, control, callback, mode)

		controlBindings.push(binding)
	}

	call(control: Control, data: number) {
		// this is inefficient as fuck lol
		let controlBindings = this.bindings[control]

		/*
		 * I can make this more efficient by making controlBindings a
		 * hashmap. controlBindings[control][this.op1.mode].call(data). In Bindings.add I'd
		 * set the same binding as the binding for every listed mode, or all
		 * of them if it's global. Also: emit warning if rebinding a key in a mode
		 */
		controlBindings && controlBindings.forEach(binding => {
			binding.call(data)
		})
	}
}

enum PanelLayout {
	Arrange = "ARRANGE",
	Edit = "EDIT",
	Mix = "MIX"
}

class OperatorOne {
	/** op-1 in */
	input: MidiIn
	/** op-1 out */
	output: MidiOut
	private _mode: Mode
	private _userMode: UserMode
	private _message: string
	private _shift: boolean
	private bindings: Bindings

	constructor () {
		this.input = host.getMidiInPort(0)
		this.output = host.getMidiOutPort(0)
		this._shift = false
		this._mode = Mode.Perform
		this._userMode = UserMode.Mix
		this.input.setMidiCallback(this.receiveMidi.bind(this))
		this.input.setSysexCallback(this.receiveSysex.bind(this))
		this.bindings = new Bindings(this)
		return this
	}

	/** Send some sysex data to the op-1 */
	send(data: string) {
		this.output.sendSysex(data)
	}

	/** Send a sequence to the op-1 */
	sendSequence(sequence: Sequence) {
		this.send(sequence)
	}

	colorize() {
		let message = `${Sequence.ColorStart} 03 ff 00 00 00 ff 00 00 ff ff ff ff ff ${Sequence.TextEnd}`
		this.send(message)
	}

	/**
	 * Send the init sequence to the OP-1
	 */
	enable() {
		this.sendSequence(Sequence.Enable)
		this.colorize()
	}

	/**
	 * Send the shutdown sequence to the OP-1
	 */
	shutdown() {
		this.sendSequence(Sequence.Disable)
	}

	/**
	 * Print a message to the OP-1
	 * @param {string} text The message to print
	 */
	print(text: string) {
		let hexify = (n: number) => n.toString(16).padStart(2, "0")
		text = text.trim()
		let chars = Array.from(text)
		let hext = chars.map((c: string) => hexify(c.charCodeAt(0))).join(" ")
		// maybe?
		// this.sendSequence(Sequence.TextStart)
		// this.send(hexify(text.length))
		// this.send(hext)
		// this.sendSequence(Sequence.TextEnd)
		this._message = `${Sequence.TextStart} ${hexify(text.length)} ${hext} ${Sequence.TextEnd}`
		println(this._message)
		this.send(this._message)
	}

	printEverywhere(text: string) {
		text = text.toString()
		let computer = text.replace(/\r/g, ': ')
		println(computer)
		host.showPopupNotification(computer)
		this.print(text)
	}

	set shift(value: boolean) {
		this._shift = value
	}

	get shift() {
		return this._shift
	}

	get mode() {
		return this._mode
	}

	get userMode() {
		return this._userMode
	}

	set mode(mode: Mode) {
		// FIXME ugly
		if (this.shift) {
			switch (mode) {
				case Mode.Mix: {
					application.setPanelLayout(PanelLayout.Mix)
					break
				}
				case Mode.Arrange: {
					application.setPanelLayout(PanelLayout.Arrange)
					break
				}
			}
		}
		this._mode = mode
	}

	set userMode(userMode: UserMode) {
		this._userMode = userMode
	}

	bind (control: Control, callback: BindingCallback, mode?: Mode) {
		this.bindings.add(control, callback, mode)
	}

	receiveMidi(_status: number, cc: number, value: number) {
		this.bindings.call(cc, value)
	}

	receiveSysex(...args: any[]) {
		println("sysex alert!!!!")
		println(args.join(""))
	}
}

// @ts-ignore this is a deprecated thing, but i'm not sure how to replcae it yet
host.defineSysexIdentityReply(Sequence.Id)

host.setShouldFailOnDeprecatedUse(true)
host.defineController(
	"teenage engineering",
	"op-1 (fresh)",
	"0.1",
	"92ea135d-5de7-4e1c-b364-40196d723320",
	"chee"
)
host.defineMidiPorts(1, 1)
host.addDeviceNameBasedDiscoveryPair(
	["OP-1 Midi Device"],
	["OP-1 Midi Device"]
)

let keyboard: NoteInput
let transport: Transport
let application: Application
let masterTrack: Track
let cursorTrack: CursorTrack
let trackBank: TrackBank
let cursorDevice: CursorDevice
let userControls: UserControlBank
let op1: OperatorOne

function init() {
	println("beginning initiation sequence")

	op1 = new OperatorOne()

	op1.print("hello")

	transport = host.createTransport()
	keyboard = op1.input.createNoteInput("op-1 fresh keyboard", "??????")
	keyboard.setShouldConsumeEvents(false)

	op1.enable()

	application = host.createApplication()
	masterTrack = host.createMasterTrack(0)
	cursorTrack = host.createCursorTrack(4, 8)
	trackBank = host.createMainTrackBank(8, 4, 1)
	cursorDevice = cursorTrack.createCursorDevice()
	userControls = host.createUserControls(42)
	trackBank.followCursorTrack(cursorTrack)
	transport.isMetronomeEnabled().markInterested()
	transport.isMetronomeAudibleDuringPreRoll().markInterested()
	transport.isArrangerLoopEnabled().markInterested()
	transport.timeSignature().markInterested()

	let position = transport.getPosition()

	position.addValueObserver(function (_: number) {
		let time = position.getFormatted()
		if (op1.mode == Mode.Arrange) {
			op1.printEverywhere(`song position\r${time}`)
			op1.print("yeet")
		}
	})

	host.println("op-1 (fresh) initialized!")
	op1.print("yeet")

	setupBindings(op1)
}

type HelperCallback = () => void

interface ShiftHelperObject {
	shift(fn: HelperCallback): void,
	default(fn: HelperCallback): void
}

interface EncoderHelperObject {
	left(fn: HelperCallback): void,
	right(fn: HelperCallback): void
}

interface KeyHelperObject {
	down(fn: HelperCallback): void,
	up(fn: HelperCallback): void
}

function withShift (fn: (on: ShiftHelperObject) => void): () => void {
	return () => fn({
		shift (fn: HelperCallback) {
			if (op1.shift) fn()
		},
		default (fn: HelperCallback) {
			if (!op1.shift) fn()
		}
	})
}

function withEncoder(fn: (on: EncoderHelperObject) => void): BindingCallback {
	return data => fn({
		left(fn: HelperCallback) {
			if (data > 64) fn()
		},
		right(fn: HelperCallback) {
			if (data < 64) fn()
		}
	})
}

function withKey(fn: (on: KeyHelperObject) => void): BindingCallback {
	return data => fn({
		up(fn: HelperCallback) {
			if (data == 0) fn()
		},
		down(fn: HelperCallback) {
			if (data == 127) fn()
		}
	})
}

function setupBindings(op1: OperatorOne) {
	for (let mode of getControlEnumValues(Mode)) {
		op1.bind(mode, withKey(on => {
			on.down(() => {
				op1.mode = mode
			})
		}))
	}

	for (let mode of getControlEnumValues(UserMode)) {
		op1.bind(mode, withKey(on => {
			on.down(() => op1.userMode = mode)
		}))
	}

	// shifty
	op1.bind(Key.Shift, withKey(on => {
		on.down(() => op1.shift = true)
		on.up(() => op1.shift = false)
	}))

	// *
	// * GLOBALS
	// *
	op1.bind(Key.Play, withKey(on => {
		on.up(withShift(on => {
			on.shift(() => cursorTrack.solo().toggle())
			on.default(() => transport.play())
		}))
	}))

	op1.bind(Key.Record, withKey(on => {
		on.up(withShift(on => {
			on.shift(() => cursorTrack.arm().toggle())
			on.default(() => transport.record())
		}))
	}))

	op1.bind(Key.Stop, withKey(on => {
		on.up(withShift(on => {
			on.shift(() => cursorTrack.mute().toggle())
			on.default(() => {
				if (transport.isPlaying()) {
					transport.stop()
				} else {
					transport.setPosition(0)
				}
			})
		}))
	}))

	op1.bind(Key.Metronome, withKey(on => {
		on.up(withShift(on => {
			on.shift(() => transport.isMetronomeAudibleDuringPreRoll().toggle())
			on.default(() => transport.isMetronomeEnabled().toggle())
		}))
	}))

	op1.bind(Key.Loop, withKey(on => {
		on.up(() => transport.isArrangerLoopEnabled().toggle())
	}))

	op1.bind(Key.Help, withKey(on => {
		on.up(() => op1.printEverywhere("no one is coming to save you"))
	}))

	/*
	 * Mode-specific
	 */
	function getBarInBeats () {
		return transport.timeSignature().denominator().get()
	}
	op1.bind(Key.Left, withKey(on => {
		on.up(() => {
			let bar = getBarInBeats()
			let beat = 1
			transport.incPosition(op1.shift ? -bar : -beat, true)
		})
	}), Mode.Arrange)

	op1.bind(Key.Right, withKey(on => {
		on.up(() => {
			let bar = getBarInBeats()
			let beat = 1
			transport.incPosition(op1.shift ? bar : beat, true)
		})
	}), Mode.Arrange)

	let encoderAmount = 0.1
	let encoderResolutions = {
		shift: 2,
		default: 10
	}

	// TODO test if i need to pass a function like getParameter or if
	// cursorTrack takes care of the live binding for me (if the selected track
	// changes, does the passed cursorTrack.volume effect the correct track?
	/* maybeArgs: amount: number, resolution: number, shiftedResolution: number */
	function bindEncoderIncrementer(encoder: Encoder, getParameter: () => Parameter): void {
		op1.bind(encoder, withEncoder(on => {
			on.left(withShift(on => {
				on.shift(() => getParameter().inc(-encoderAmount, encoderResolutions.shift))
				on.default(() => getParameter().inc(-encoderAmount, encoderResolutions.default))
			}))
			on.right(withShift(on => {
				on.shift(() => getParameter().inc(encoderAmount, encoderResolutions.shift))
				on.default(() => getParameter().inc(encoderAmount, encoderResolutions.default))
			}))
		}))
	}

	bindEncoderIncrementer(Encoder.Blue, () => cursorTrack.volume())
	bindEncoderIncrementer(Encoder.Green, () => cursorTrack.pan())
}

function flush() {
}

function exit() {
	op1.shutdown()
}
