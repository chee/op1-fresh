var println = host.println

host.load("./polyfill.js")

host.loadAPI(10)

// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
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

let global = this

let op1 = {
	sequences: {
		id: "f0 7e 7f 06 01 f7",
		enable: "f0 00 20 76 00 01 02 f7",
		disable: "f0 00 20 76 00 01 00 f7",
		text: {
			start: "f0 00 20 76 00 03",
			end: "f7",
		},
		color: {
			start: "f0 00 20 76 00 04",
		},
	},
	cc: {
		help: 5,
		metronome: 6,
		synth: 7,
		drum: 8,
		tape: 9,
		mixer: 10,
		t1: 11,
		t2: 12,
		t3: 13,
		t4: 14,
		up: 15,
		down: 16,
		left: 41,
		right: 42,
		scissor: 17,
		ss1: 50,
		ss2: 51,
		ss3: 52,
		ss4: 21,
		ss5: 22,
		ss6: 23,
		ss7: 24,
		ss8: 25,
		record: 38,
		play: 39,
		stop: 40,
		shift: 43,
		micro: 48,
		com: 49
	},
	/**
	 * Get the OP-1's midi-in
	 * @returns {MidiIn}
	 */
	input() {
		return host.getMidiInPort(0)
	},
	/**
	 * Get the OP-1's midi-out
	 * @returns {MidiOut}
	 */
	output() {
		return host.getMidiOutPort(0)
	},
	/**
	 * Send some sysex data to the OP-1
	 * @param {String} data - The sequence to send
	 */
	send(data) {
		this.output().sendSysex(data)
	},
	/**
	 * Send the init sequence to the OP-1
	 */
	enable() {
		this.send(this.sequences.enable)
	},
	/**
	 * Send the disable sequence to the OP-1
	 */
	disable() {
		this.send(this.sequences.disable)
	},
	/**
	 * Print a message to the OP-1
	 * @param {String} text - The message to print
	 */
	print(text) {
		text = text.trim()
		let chars = Array.prototype.slice.call(text)
		let hext = chars.map(c => c.charCodeAt(0).toHex()).join(" ")
		this.send(`${this.sequences.text.start} ${text.length.toHex()} ${hext} ${this.sequences.text.end}`)
	},
	printEverywhere(text) {
		println(text)
		host.showPopupNotification(text)
		op1.print(text)
	}
}

let modes = {
	perform: op1.cc.synth,
	clip: op1.cc.drum,
	transport: op1.cc.tape,
	mixer: op1.cc.mixer
}

host.defineSysexIdentityReply(op1.sequences.id)

function createStore (initialState) {
	let subs = new Set()
	let state = {}
	let store = {}

	for (let key in initialState) {
		state[key] = initialState[key]
		Object.defineProperty(store, key, {
			enumerable: true,
			get () {
				return state[key]
			},
			set (value) {
				state = Object.assign({}, state, {
					[key]: value
				})
				subs.forEach(fn => fn(state, key, value))
			}
		})
	}

	Object.defineProperty(store, "sub", {
		enumerable: false,
		value (fn) {
			subs.add(fn)
			return () => subs.remove(fn)
		}
	})

	return store
}

let state = createStore({
	mode: modes.transport,
	shift: false,
	metronome: false,
	playing: false
})

let performanceEncouragement = [
	 "beep boop",
	"and now,",
	"make music",
	"operate",
	"modulate me",
	"beep\nboop",
	"fantasy",
	"limitations: \rbig\rfeature",
	"pulse // wave",
	"play",
]

state.sub(function (state, key, value) {
	if (key == "mode") {
		let mode = value
		if (mode == modes.clip) {
			op1.printEverywhere("clips")
		}
		if (mode == modes.perform) {
			let message = performanceEncouragement[Math.floor(Math.random() * performanceEncouragement.length)]
			host.showPopupNotification(message)
			op1.print(message)
		} else {
			op1.printEverywhere(mode)
		}
	}
})

global = this

function init() {
	println("beginning initiation sequence")

	/** @type {Transport} */
	let transport = host.createTransport()
	let keyboard = op1.input().createNoteInput("op-1 fresh keyboard", "??????")
	keyboard.setShouldConsumeEvents(false)

	op1.input().setMidiCallback(onMidi)
	op1.input().setSysexCallback(onSysex)
	op1.enable()

	op1.print("yeet")

	let application = host.createApplication()
	let masterTrack = host.createMasterTrack(0)
	let cursorTrack = host.createCursorTrack(4, 5)
	let trackBank = host.createTrackBank(8, 4, 0)
	let cursorDevice = cursorTrack.createCursorDevice()
	let userControls = host.createUserControls(42)

	transport.isMetronomeEnabled().markInterested()
	transport.isMetronomeAudibleDuringPreRoll().markInterested()

	let position = transport.getPosition()

	position.addValueObserver(function () {
		let time = position.getFormatted()
		if (state.mode == modes.transport) {
			`song position\r${time}`
		}
	})

	println("op-1 (fresh) initialized!")


	global.keyboard = keyboard
	global.transport = transport
	global.position = position
	global.application = application
	global.masterTrack = masterTrack
	global.cursorTrack = cursorTrack
	global.trackBank = trackBank
	global.cursorDevice = cursorDevice
	global.userControls = userControls

	let message = performanceEncouragement[Math.floor(Math.random() * performanceEncouragement.length)]
	println(message)
	op1.printEverywhere(message)
}

let midiHandlers = {
	[op1.cc.play] () {
		if (state.shift) {
			cursorTrack.getArm().toggle()
		} else {
			transport.play()
		}
	},
	[op1.cc.record] () {
		if (state.shift) {
			cursorTrack.getSolo().toggle()
		} else {
			transport.record()
		}
	},
	[op1.cc.stop] () {
		if (state.shift) {
			cursorTrack.getMute().toggle()
		} else if (state.playing) {
			transport.stop()
		} else {
			transport.setPosition(0)
		}
	},
	[op1.cc.metronome] () {
		if (state.shift) {
			transport.isMetronomeAudibleDuringPreRoll().toggle()
		} else {
			transport.isMetronomeEnabled().toggle()
		}
	}
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi(status, data1, data2) {
	if (data1 == op1.cc.shift) {
		if (data2 > 0) {
			state.shift = true
		} else {
			state.shift = false
		}
	}
	// TODO investigate why this is `data2 > 0`
	if (data2 > 0) {
		let handler = midiHandlers[data1]
		handler && handler(/* status, data1, data2 */)
	}
}

// Called when a MIDI sysex message is received on MIDI input port 0.
function onSysex(data) {
	// MMC Transport Controls
	// switch (data) {
	// 	case "f07f7f0605f7":
	// 		transport.rewind()
	// 		break
	// 	case "f07f7f0604f7":
	// 		transport.fastForward()
	// 		break
	// 	case "f07f7f0601f7":
	// 		transport.stop()
	// 		break
	// 	case "f07f7f0602f7":
	// 		transport.play()
	// 		break
	// 	case "f07f7f0606f7":
	// 		transport.record()
	// 		break
	// }
}

function flush() {
	// TODO: Flush any output to your controller here.
}

function exit() {
	op1.disable()
}
