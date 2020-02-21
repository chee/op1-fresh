"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// declare var errorln: ControllerHost["errorln"]
loadAPI(10);
// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);
host.defineController("teenage engineering", "op-1 [fresh]", "0.1", "92ea135d-5de7-4e1c-b364-40196d723320", "chee");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["OP-1 Midi Device"], ["OP-1 Midi Device"]);
var op1 = {
    sequences: {
        id: "f0 7e 7f 06 01 f7",
        enable: "f0 00 20 76 00 01 02 f7",
        disable: "f0 00 20 76 00 01 00 f7",
        text: {
            start: "f0 0 20 76 00 03",
            end: "f7",
        },
        color: {
            start: "f0 0 20 76 00 04",
        },
    },
    mode: 0,
    cc: {
        perform: 0,
        clip: 1,
        transport: 2,
        mixer: 3,
        help: 5,
        metronome: 6,
        mode1: 7,
        mode2: 8,
        mode3: 9,
        mode4: 10,
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
    input: function () {
        return host.getMidiInPort(0);
    },
    output: function () {
        return host.getMidiOutPort(0);
    },
    send: function (data) {
        this.output().sendSysex(data);
    },
    enable: function () {
        this.send(this.sequences.enable);
    },
    disable: function () {
        this.send(this.sequences.disable);
    },
    print: function (text) {
        text = text.trim();
        // @ts-ignore
        var chars = Array.prototype.slice(text);
        var hext = chars.map(function (c) { return c.charCodeAt(0).toString(16).padStart(2, "0"); }).join("");
        // not sure if this space should be here
        // this.send(`${this.sequences.text.start}${text.length}${hext}${this.sequences.text.end}`)
        this.send(this.sequences.text.start + " " + text.length + hext + this.sequences.text.end);
    }
};
host.defineSysexIdentityReply(op1.sequences.id);
function createStore(initialState) {
    var subs = new Set();
    var state = {};
    var store = {};
    var _loop_1 = function (key) {
        state[key] = initialState[key];
        Object.defineProperty(store, key, {
            enumerable: true,
            get: function () {
                return state[key];
            },
            set: function (value) {
                state[key] = value;
                subs.forEach(function (fn) { return fn(); });
            }
        });
    };
    for (var key in initialState) {
        _loop_1(key);
    }
    Object.defineProperty(store, "subscribe", {
        enumerable: false,
        value: function (fn) {
            subs.add(fn);
            return function () { return subs.remove(fn); };
        }
    });
    return store;
}
var state = createStore({
    shift: false,
    metronome: false,
    playing: false
});
init; // shutup typescript
function init() {
    transport = host.createTransport();
    keyboard = op1.input().createNoteInput("op-1 fresh keyboard", "??????");
    keyboard.setShouldConsumeEvents(false);
    op1.input().setMidiCallback(onMidi);
    op1.input().setSysexCallback(onSysex);
    op1.enable();
    op1.print("yeet");
    application = host.createApplication();
    masterTrack_0 = host.createMasterTrack(0);
    cursorTrack = host.createCursorTrack(4, 5);
    trackBank = host.createTrackBank(8, 4, 0);
    cursorDevice = cursorTrack.createCursorDevice();
    userControls = host.createUserControls(42);
    transport.isMetronomeEnabled().markInterested();
    transport.isMetronomeAudibleDuringPreRoll().markInterested();
    // figure this out:
    // transport.getPosition().addTimeObserver(".", 1, 2, 2, 0, onTimeUpdate)
    println("op-1 (fresh) initialized!");
}
function onTimeUpdate() {
}
var midiHandlers = (_a = {},
    _a[op1.cc.play] = function () {
        if (state.shift) {
            cursorTrack.getArm().toggle();
        }
        else {
            transport.play();
        }
    },
    _a[op1.cc.record] = function () {
        if (state.shift) {
            cursorTrack.getSolo().toggle();
        }
        else {
            transport.record();
        }
    },
    _a[op1.cc.stop] = function () {
        if (state.shift) {
            cursorTrack.getMute().toggle();
        }
        else if (state.playing) {
            transport.stop();
        }
        else {
            transport.setPosition(0);
        }
    },
    _a[op1.cc.metronome] = function () {
        if (state.shift) {
            transport.isMetronomeAudibleDuringPreRoll().toggle();
        }
        else {
            transport.isMetronomeEnabled().toggle();
        }
    },
    _a);
// Called when a short MIDI message is received on MIDI input port 0.
function onMidi(status, data1, data2) {
    if (data1 == op1.cc.shift) {
        if (data2 > 0) {
            state.shift = true;
        }
        else {
            state.shift = false;
        }
    }
    // TODO investigate why this is `data2 > 0`
    if (data2 > 0) {
        var handler = midiHandlers[data1];
        handler && handler( /* status, data1, data2 */);
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
flush;
function flush() {
    // TODO: Flush any output to your controller here.
}
exit;
function exit() {
    op1.disable();
}
