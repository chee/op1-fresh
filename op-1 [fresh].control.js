var global = this;
var println = host.println;
host.load("./util.js");
host.loadAPI(10);
// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);
host.defineController("teenage engineering", "op-1 (fresh)", "0.1", "92ea135d-5de7-4e1c-b364-40196d723320", "chee");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["OP-1 Midi Device"], ["OP-1 Midi Device"]);
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
        blue: 1,
        green: 2,
        white: 3,
        orange: 4,
        bluepush: 64,
        greenpush: 65,
        whitepush: 66,
        orangepush: 67,
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
        inn: 50,
        out: 51,
        loop: 52,
        flange: 21,
        reverse: 22,
        dots: 23,
        m1: 24,
        m2: 25,
        record: 38,
        play: 39,
        stop: 40,
        shift: 43,
        micro: 48,
        com: 49
    },
    /**
     * Get the OP-1's midi-in
     */
    input() {
        return host.getMidiInPort(0);
    },
    /**
     * Get the OP-1's midi-out
     */
    output() {
        return host.getMidiOutPort(0);
    },
    /**
     * Send some sysex data to the OP-1
     * @param {string} data The sequence to send
     */
    send(data) {
        this.output().sendSysex(data);
    },
    /**
     * Send the init sequence to the OP-1
     */
    enable() {
        this.send(this.sequences.enable);
    },
    /**
     * Send the disable sequence to the OP-1
     */
    disable() {
        this.send(this.sequences.disable);
    },
    /**
     * Print a message to the OP-1
     * @param {string} text The message to print
     */
    print(text) {
        text = text.trim();
        let chars = Array.prototype.slice.call(text);
        let hext = chars.map((c) => hexify(c.charCodeAt(0))).join(" ");
        println(hext);
        this.send(`${this.sequences.text.start} ${hexify(text.length)} ${hext} ${this.sequences.text.end}`);
    },
    printEverywhere(text) {
        text = text.toString();
        let computer = text.replace(/\r/g, ': ');
        println(computer);
        host.showPopupNotification(computer);
        op1.print(text);
    }
};
let modes = {
    perform: op1.cc.synth,
    clip: op1.cc.drum,
    transport: op1.cc.tape,
    mixer: op1.cc.mixer
};
let tmodes = {
    mix: op1.cc.t1,
    u01: op1.cc.t2,
    u02: op1.cc.t3,
    u03: op1.cc.t4
};
// @ts-ignore this is a deprecated thing, but i'm not sure how to replcae it yet
host.defineSysexIdentityReply(op1.sequences.id);
function createStore(initialState) {
    let subs = new Set();
    let state = {};
    let store = Object.defineProperty({}, "sub", {
        enumerable: false,
        value(fn) {
            if (typeof fn == "function") {
                subs.add(fn);
                return () => subs.delete(fn);
            }
        }
    });
    for (let key in initialState) {
        state[key] = initialState[key];
        Object.defineProperty(store, key, {
            enumerable: true,
            get() {
                return state[key];
            },
            set(value) {
                state[key] = value;
                subs.forEach(fn => fn(state, key, value));
            }
        });
    }
    return store;
}
// @ts-ignore
let state = createStore({
    mode: modes.perform,
    shift: false,
    metronome: false,
    playing: false,
    tmode: tmodes.mix
});
let performanceEncouragement = [
    "beep boop",
    "and now,",
    "make music",
    "operate",
    "modulate me",
    "beepboop",
    "fantasy",
    "limitations: bigfeature",
    "pulse // wave",
    "play",
];
state.sub(function (_state, key, value) {
    if (key == "mode") {
        let mode = value;
        if (mode == modes.perform) {
            let message = performanceEncouragement[Math.floor(Math.random() * performanceEncouragement.length)];
            host.showPopupNotification(message);
            op1.print(message);
        }
        else {
            for (let key in modes) {
                if (modes[key] == mode)
                    return op1.printEverywhere(key);
            }
        }
    }
});
function init() {
    println("beginning initiation sequence");
    transport = host.createTransport();
    keyboard = op1.input().createNoteInput("op-1 fresh keyboard", "??????");
    keyboard.setShouldConsumeEvents(false);
    op1.input().setMidiCallback(onMidi);
    op1.input().setSysexCallback(onSysex);
    op1.enable();
    application = host.createApplication();
    masterTrack = host.createMasterTrack(0);
    cursorTrack = host.createCursorTrack(4, 8);
    trackBank = host.createMainTrackBank(8, 4, 1);
    cursorDevice = cursorTrack.createCursorDevice();
    userControls = host.createUserControls(42);
    trackBank.followCursorTrack(cursorTrack);
    transport.isMetronomeEnabled().markInterested();
    transport.isMetronomeAudibleDuringPreRoll().markInterested();
    transport.isArrangerLoopEnabled().markInterested();
    transport.timeSignature().markInterested();
    let position = transport.getPosition();
    position.addValueObserver(function (_) {
        let time = position.getFormatted();
        if (state.mode == modes.transport) {
            op1.printEverywhere(`song position\r${time}`);
            op1.print("yeet");
        }
    });
    println("op-1 (fresh) initialized!");
    op1.print("yeet");
    let message = performanceEncouragement[Math.floor(Math.random() * performanceEncouragement.length)];
    op1.printEverywhere(message);
    op1.print("yeet");
}
let midiHandlers = {
    [op1.cc.play]() {
        if (state.shift) {
            cursorTrack.solo().toggle();
            state.playing = true;
        }
        else {
            transport.play();
        }
    },
    [op1.cc.record]() {
        if (state.shift) {
            cursorTrack.arm().toggle();
        }
        else {
            transport.record();
        }
    },
    [op1.cc.stop]() {
        if (state.shift) {
            cursorTrack.mute().toggle();
        }
        else if (transport.isPlaying()) {
            transport.stop();
        }
        else {
            transport.setPosition(0);
        }
    },
    [op1.cc.metronome]() {
        if (state.shift) {
            transport.isMetronomeAudibleDuringPreRoll().toggle();
        }
        else {
            transport.isMetronomeEnabled().toggle();
        }
    },
    [op1.cc.loop]() {
        transport.isArrangerLoopEnabled().toggle();
    },
    [op1.cc.left]() {
        let amount = state.shift ? -transport.timeSignature().denominator().get() : -1;
        transport.incPosition(amount, true);
    },
    [op1.cc.right]() {
        let amount = state.shift ? transport.timeSignature().denominator().get() : 1;
        transport.incPosition(amount, true);
    },
    [modes.perform]() {
        state.mode = modes.perform;
    },
    [modes.clip]() {
        state.mode = modes.clip;
    },
    [modes.transport]() {
        state.mode = modes.transport;
    },
    [modes.mixer]() {
        state.mode = modes.mixer;
    },
    [tmodes.mix]() {
        state.tmode = tmodes.mix;
    },
    [tmodes.u01]() {
        state.tmode = tmodes.u01;
    },
    [tmodes.u02]() {
        state.tmode = tmodes.u02;
    },
    [tmodes.u03]() {
        state.tmode = tmodes.u03;
    },
    [op1.cc.help]() {
        op1.printEverywhere("no one is coming to save you");
    }
};
var KeyPress;
(function (KeyPress) {
    KeyPress[KeyPress["Up"] = 0] = "Up";
    KeyPress[KeyPress["Down"] = 127] = "Down";
})(KeyPress || (KeyPress = {}));
function getKnobIncArgs(data) {
    return {
        amount: data > 65 ? -0.1 : 0.1,
        resolution: state.shift ? 2 : 10
    };
}
let fancyHandlers = {
    [op1.cc.blue](data) {
        let args = getKnobIncArgs(data);
        cursorTrack.volume().inc(args.amount, args.resolution);
    },
    [op1.cc.green](data) {
        let args = getKnobIncArgs(data);
        cursorTrack.pan().inc(args.amount, args.resolution);
    },
    [op1.cc.white](data) {
        let args = getKnobIncArgs(data);
        cursorTrack;
        cursorTrack.pan().inc(args.amount, args.resolution);
    },
    [op1.cc.orange](data) {
        let args = getKnobIncArgs(data);
        cursorTrack.pan().inc(args.amount, args.resolution);
    }
};
// Called when a short MIDI message is received on MIDI input port 0.
function onMidi(_status, data1, data2) {
    println(data1.toString());
    if (data1 == op1.cc.shift) {
        if (data2 == KeyPress.Down) {
            state.shift = true;
        }
        else {
            state.shift = false;
        }
    }
    if (data2 == KeyPress.Down) {
        if (state.tmode != tmodes.mix && data1 != tmodes.mix && data1 != tmodes.u01 && data1 != tmodes.u02 && data1 != tmodes.u03) {
            return;
        }
        let handler = midiHandlers[data1];
        handler && handler(data2);
    }
    else {
        let handler = fancyHandlers[data1];
        handler && handler(data2);
    }
}
// Called when a MIDI sysex message is received on MIDI input port 0.
function onSysex(data) {
    println("SYSEX ALERT");
    println(data);
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
    op1.disable();
}
