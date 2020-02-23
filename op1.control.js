var global = this;
var println = host.println;
host.loadAPI(10);
host.load("./polyfill.io.js");
function objectIncludes(target, targetValue) {
    for (var key in target) {
        var value = targetValue[key];
        if (value != null) {
            return true;
        }
    }
    return false;
}
var Sequence;
(function (Sequence) {
    Sequence["Id"] = "f0 7e 7f 06 01 f7";
    Sequence["Enable"] = "f0 00 20 76 00 01 02 f7";
    Sequence["Disable"] = "f0 00 20 76 00 01 00 f7";
    Sequence["TextStart"] = "f0 00 20 76 00 03";
    Sequence["TextEnd"] = "f7";
    Sequence["ColorStart"] = "f0 00 20 76 00 04";
})(Sequence || (Sequence = {}));
var Encoder;
(function (Encoder) {
    Encoder[Encoder["Blue"] = 1] = "Blue";
    Encoder[Encoder["Green"] = 2] = "Green";
    Encoder[Encoder["White"] = 3] = "White";
    Encoder[Encoder["Orange"] = 4] = "Orange";
})(Encoder || (Encoder = {}));
var Key;
(function (Key) {
    Key[Key["Blue"] = 64] = "Blue";
    Key[Key["Green"] = 65] = "Green";
    Key[Key["White"] = 66] = "White";
    Key[Key["Orange"] = 67] = "Orange";
    Key[Key["Help"] = 5] = "Help";
    Key[Key["Metronome"] = 6] = "Metronome";
    Key[Key["Lift"] = 15] = "Lift";
    Key[Key["Drop"] = 16] = "Drop";
    Key[Key["Scissor"] = 17] = "Scissor";
    Key[Key["Synth"] = 7] = "Synth";
    Key[Key["Drum"] = 8] = "Drum";
    Key[Key["Tape"] = 9] = "Tape";
    Key[Key["Mixer"] = 10] = "Mixer";
    Key[Key["T1"] = 11] = "T1";
    Key[Key["T2"] = 12] = "T2";
    Key[Key["T3"] = 13] = "T3";
    Key[Key["T4"] = 14] = "T4";
    Key[Key["Up"] = 15] = "Up";
    Key[Key["Down"] = 16] = "Down";
    Key[Key["Left"] = 41] = "Left";
    Key[Key["Right"] = 42] = "Right";
    Key[Key["Sound1"] = 50] = "Sound1";
    Key[Key["Sound2"] = 51] = "Sound2";
    Key[Key["Sound3"] = 52] = "Sound3";
    Key[Key["Sound4"] = 21] = "Sound4";
    Key[Key["Sound5"] = 22] = "Sound5";
    Key[Key["Sound6"] = 23] = "Sound6";
    Key[Key["Sound7"] = 24] = "Sound7";
    Key[Key["Sound8"] = 25] = "Sound8";
    Key[Key["In"] = 50] = "In";
    Key[Key["Out"] = 51] = "Out";
    Key[Key["Loop"] = 52] = "Loop";
    Key[Key["Break"] = 21] = "Break";
    Key[Key["Reverse"] = 22] = "Reverse";
    Key[Key["Chop"] = 23] = "Chop";
    Key[Key["M1"] = 24] = "M1";
    Key[Key["M2"] = 25] = "M2";
    Key[Key["Sequence"] = 26] = "Sequence";
    Key[Key["Record"] = 38] = "Record";
    Key[Key["Play"] = 39] = "Play";
    Key[Key["Stop"] = 40] = "Stop";
    Key[Key["Microphone"] = 49] = "Microphone";
    Key[Key["Com"] = 49] = "Com";
    Key[Key["Shift"] = 43] = "Shift";
})(Key || (Key = {}));
/** These are the modes available via the synth, drum, tape and mixer keys */
var Mode;
(function (Mode) {
    Mode[Mode["Perform"] = 7] = "Perform";
    // Scene = Key.Drum,
    Mode[Mode["Arrange"] = 9] = "Arrange";
    Mode[Mode["Mix"] = 10] = "Mix";
})(Mode || (Mode = {}));
/** These are the modes that appear as boxes at the bottom. availabe via T1-T4 */
var UserMode;
(function (UserMode) {
    UserMode[UserMode["Mix"] = 11] = "Mix";
    UserMode[UserMode["U01"] = 12] = "U01";
    UserMode[UserMode["U02"] = 13] = "U02";
    UserMode[UserMode["U03"] = 14] = "U03";
})(UserMode || (UserMode = {}));
function getControlEnumNames(controlEnum) {
    var vals = [];
    for (var key in controlEnum) {
        if (typeof controlEnum[key] == "string") {
            vals.push(controlEnum[key]);
        }
    }
    return vals;
}
function getControlEnumValues(controlEnum) {
    var vals = [];
    for (var key in controlEnum) {
        if (typeof controlEnum[key] == "number") {
            vals.push(controlEnum[key]);
        }
    }
    return vals;
}
var Binding = /** @class */ (function () {
    function Binding(op1, control, callback, mode) {
        this.isModeKey = getControlEnumValues(UserMode).includes(control) || getControlEnumValues(Mode).includes(control);
        if (this.isModeKey && mode) {
            throw new Error("Refusing to bind mode key to anything mode-specific");
        }
        this.mode = mode || "global";
        this.control = control;
        this.callback = callback;
        this.op1 = op1;
        return this;
    }
    Binding.prototype.call = function (data) {
        if (this.isModeKey) {
            host.println("calling " + this.control + " " + this.callback.name + " as mode-key");
            this.callback(data);
            // else if because it's a modeKey we don't want to run it twice
        }
        else if (this.mode == "global") {
            if (this.op1.userMode != UserMode.Mix) {
                host.errorln("ignoring " + this.control + " in user mode");
                return;
            }
            host.println("calling " + this.control + " " + this.callback.name + " as global");
            this.callback(data);
        }
        else {
            if (this.op1.mode != this.mode) {
                host.errorln("ignoring " + this.control + " in " + this.op1.mode + " mode");
                return;
            }
            host.println("calling " + this.control + " " + this.callback.name + " as " + this.op1.mode + " mode control");
            this.callback(data);
        }
    };
    return Binding;
}());
var Bindings = /** @class */ (function () {
    function Bindings(op1) {
        this.op1 = op1;
        this.bindings = {};
        return this;
    }
    Bindings.prototype.add = function (control, callback, mode) {
        var controlBindings = this.bindings[control] = this.bindings[control] || [];
        var binding = new Binding(this.op1, control, callback, mode);
        controlBindings.push(binding);
    };
    Bindings.prototype.call = function (control, data) {
        // this is inefficient as fuck lol
        var controlBindings = this.bindings[control];
        /*
         * I can make this more efficient by making controlBindings a
         * hashmap. controlBindings[control][this.op1.mode].call(data). In Bindings.add I'd
         * set the same binding as the binding for every listed mode, or all
         * of them if it's global. Also: emit warning if rebinding a key in a mode
         */
        controlBindings && controlBindings.forEach(function (binding) {
            binding.call(data);
        });
    };
    return Bindings;
}());
var PanelLayout;
(function (PanelLayout) {
    PanelLayout["Arrange"] = "ARRANGE";
    PanelLayout["Edit"] = "EDIT";
    PanelLayout["Mix"] = "MIX";
})(PanelLayout || (PanelLayout = {}));
var OperatorOne = /** @class */ (function () {
    function OperatorOne() {
        this.input = host.getMidiInPort(0);
        this.output = host.getMidiOutPort(0);
        this._shift = false;
        this._mode = Mode.Perform;
        this._userMode = UserMode.Mix;
        this.input.setMidiCallback(this.receiveMidi.bind(this));
        this.input.setSysexCallback(this.receiveSysex.bind(this));
        this.bindings = new Bindings(this);
        return this;
    }
    /** Send some sysex data to the op-1 */
    OperatorOne.prototype.send = function (data) {
        this.output.sendSysex(data);
    };
    /** Send a sequence to the op-1 */
    OperatorOne.prototype.sendSequence = function (sequence) {
        this.send(sequence);
    };
    OperatorOne.prototype.colorize = function () {
        var message = Sequence.ColorStart + " 03 ff 00 00 00 ff 00 00 ff ff ff ff ff " + Sequence.TextEnd;
        this.send(message);
    };
    /**
     * Send the init sequence to the OP-1
     */
    OperatorOne.prototype.enable = function () {
        this.sendSequence(Sequence.Enable);
        this.colorize();
    };
    /**
     * Send the shutdown sequence to the OP-1
     */
    OperatorOne.prototype.shutdown = function () {
        this.sendSequence(Sequence.Disable);
    };
    /**
     * Print a message to the OP-1
     * @param {string} text The message to print
     */
    OperatorOne.prototype.print = function (text) {
        var hexify = function (n) { return n.toString(16).padStart(2, "0"); };
        text = text.trim();
        var chars = Array.from(text);
        var hext = chars.map(function (c) { return hexify(c.charCodeAt(0)); }).join(" ");
        // maybe?
        // this.sendSequence(Sequence.TextStart)
        // this.send(hexify(text.length))
        // this.send(hext)
        // this.sendSequence(Sequence.TextEnd)
        this._message = Sequence.TextStart + " " + hexify(text.length) + " " + hext + " " + Sequence.TextEnd;
        println(this._message);
        this.send(this._message);
    };
    OperatorOne.prototype.printEverywhere = function (text) {
        text = text.toString();
        var computer = text.replace(/\r/g, ': ');
        println(computer);
        host.showPopupNotification(computer);
        this.print(text);
    };
    Object.defineProperty(OperatorOne.prototype, "shift", {
        get: function () {
            return this._shift;
        },
        set: function (value) {
            this._shift = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperatorOne.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            // FIXME ugly
            if (this.shift) {
                switch (mode) {
                    case Mode.Mix: {
                        application.setPanelLayout(PanelLayout.Mix);
                        break;
                    }
                    case Mode.Arrange: {
                        application.setPanelLayout(PanelLayout.Arrange);
                        break;
                    }
                }
            }
            this._mode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperatorOne.prototype, "userMode", {
        get: function () {
            return this._userMode;
        },
        set: function (userMode) {
            this._userMode = userMode;
        },
        enumerable: true,
        configurable: true
    });
    OperatorOne.prototype.bind = function (control, callback, mode) {
        this.bindings.add(control, callback, mode);
    };
    OperatorOne.prototype.receiveMidi = function (status, cc, value) {
        println("received: midi(" + status + ", " + cc + ", " + value + ")");
        this.bindings && this.bindings.call(cc, value);
    };
    OperatorOne.prototype.receiveSysex = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        println("sysex alert!!!!");
        println(args.join(""));
    };
    return OperatorOne;
}());
// @ts-ignore this is a deprecated thing, but i'm not sure how to replcae it yet
host.defineSysexIdentityReply(Sequence.Id);
host.setShouldFailOnDeprecatedUse(true);
host.defineController("teenage engineering", "op-1", "0.1", "92ea135d-5de7-4e1c-b364-40196d723320", "chee rabbits");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["OP-1 Midi Device"], ["OP-1 Midi Device"]);
var keyboard;
var transport;
var application;
var masterTrack;
var cursorTrack;
var trackBank;
var cursorDevice;
var userControls;
var op1;
function init() {
    println("beginning initiation sequence");
    op1 = new OperatorOne();
    op1.print("hello");
    transport = host.createTransport();
    // TODO: idea, have a key in perform mode for keyboard.noteLatch
    // TODO: idea, sequence key toggles through arpegiator modes
    keyboard = op1.input.createNoteInput("op-1 fresh keyboard", "??????");
    keyboard.setShouldConsumeEvents(false);
    op1.shutdown();
    op1.enable();
    application = host.createApplication();
    masterTrack = host.createMasterTrack(0);
    cursorTrack = host.createCursorTrack(4, 8);
    trackBank = host.createMainTrackBank(8, 4, 1);
    cursorDevice = cursorTrack.createCursorDevice();
    userControls = host.createUserControls(42);
    trackBank.followCursorTrack(cursorTrack);
    cursorTrack.playNote(10, 128);
    cursorTrack.name().markInterested();
    println(cursorTrack.name().get());
    host.println("op-1 (fresh) initialized!");
    setupBindings(op1);
    setupObservers(op1);
}
function setupObservers(op1) {
    var position = transport.getPosition();
    position.addValueObserver(function (_) {
        var time = position.getFormatted();
        if (op1.mode == Mode.Arrange) {
            op1.print("song position\r" + time);
        }
    });
}
function withShift(fn) {
    return function () { return fn({
        shift: function (fn) {
            if (op1.shift)
                fn();
        },
        default: function (fn) {
            if (!op1.shift)
                fn();
        }
    }); };
}
function withEncoder(fn) {
    return function (data) { return fn({
        left: function (fn) {
            if (data > 64)
                fn();
        },
        right: function (fn) {
            if (data < 64)
                fn();
        }
    }); };
}
function withKey(fn) {
    return function (data) { return fn({
        up: function (fn) {
            if (data == 0)
                fn();
        },
        down: function (fn) {
            if (data == 127)
                fn();
        }
    }); };
}
function setupBindings(op1) {
    var _loop_1 = function (mode) {
        op1.bind(mode, withKey(function (on) {
            on.down(function () {
                op1.mode = mode;
            });
        }));
    };
    for (var _i = 0, _a = getControlEnumValues(Mode); _i < _a.length; _i++) {
        var mode = _a[_i];
        _loop_1(mode);
    }
    var _loop_2 = function (mode) {
        op1.bind(mode, withKey(function (on) {
            on.down(function () { return op1.userMode = mode; });
        }));
    };
    for (var _b = 0, _c = getControlEnumValues(UserMode); _b < _c.length; _b++) {
        var mode = _c[_b];
        _loop_2(mode);
    }
    // shifty
    op1.bind(Key.Shift, withKey(function (on) {
        on.down(function () { return op1.shift = true; });
        on.up(function () { return op1.shift = false; });
    }));
    bindGlobal(op1);
    bindArrange(op1);
    bindPerform(op1);
    bindMix(op1);
}
function bindGlobal(op1) {
    // *
    // * GLOBALS
    // *
    op1.bind(Key.Play, withKey(function (on) {
        on.up(withShift(function (on) {
            on.shift(function () { return cursorTrack.solo().toggle(); });
            on.default(function () { return transport.play(); });
        }));
    }));
    op1.bind(Key.Record, withKey(function (on) {
        on.up(withShift(function (on) {
            on.shift(function () { return cursorTrack.arm().toggle(); });
            on.default(function () { return transport.record(); });
        }));
    }));
    op1.bind(Key.Stop, withKey(function (on) {
        on.up(withShift(function (on) {
            on.shift(function () { return cursorTrack.mute().toggle(); });
            on.default(function () {
                if (transport.isPlaying()) {
                    transport.stop();
                }
                else {
                    transport.setPosition(0);
                }
            });
        }));
    }));
    transport.isMetronomeEnabled().markInterested();
    transport.isMetronomeAudibleDuringPreRoll().markInterested();
    op1.bind(Key.Metronome, withKey(function (on) {
        on.up(withShift(function (on) {
            on.shift(function () { return transport.isMetronomeAudibleDuringPreRoll().toggle(); });
            on.default(function () { return transport.isMetronomeEnabled().toggle(); });
        }));
    }));
    transport.isArrangerLoopEnabled().markInterested();
    op1.bind(Key.Loop, withKey(function (on) {
        on.up(function () { return transport.isArrangerLoopEnabled().toggle(); });
    }));
    op1.bind(Key.Help, withKey(function (on) {
        on.down(function () { return op1.print("yeet"); });
        on.up(function () { return op1.printEverywhere("no one is coming to save you"); });
    }));
}
function bindArrange(op1) {
    /*
     * Mode-specific
     */
    transport.timeSignature().markInterested();
    function getBarInBeats() {
        return transport.timeSignature().denominator().get();
    }
    op1.bind(Key.Left, withKey(function (on) {
        on.up(function () {
            var bar = getBarInBeats();
            var beat = 1;
            transport.incPosition(op1.shift ? -bar : -beat, true);
        });
    }), Mode.Arrange);
    op1.bind(Key.Right, withKey(function (on) {
        on.up(function () {
            var bar = getBarInBeats();
            var beat = 1;
            transport.incPosition(op1.shift ? bar : beat, true);
        });
    }), Mode.Arrange);
    transport.isPunchInEnabled().markInterested();
    op1.bind(Key.In, withKey(function (on) {
        on.up(withShift(function (on) {
            on.shift(function () { return transport.isPunchInEnabled().toggle(); });
            // TODO default case of moving loop in-point
        }));
    }), Mode.Arrange);
    transport.isPunchOutEnabled().markInterested();
    op1.bind(Key.Out, withKey(function (on) {
        on.up(withShift(function (on) {
            on.shift(function () { return transport.isPunchOutEnabled().toggle(); });
            // TODO default case of moving loop out-point
        }));
    }), Mode.Arrange);
    var encoderAmount = 0.1;
    var encoderResolutions = {
        shift: 2,
        default: 10
    };
    // TODO test if i need to pass a function like getParameter or if
    // cursorTrack takes care of the live binding for me (if the selected track
    // changes, does the passed cursorTrack.volume effect the correct track?
    /* maybeArgs: amount: number, resolution: number, shiftedResolution: number */
    function bindEncoderParameterIncrementer(encoder, getParameter, mode) {
        op1.bind(encoder, withEncoder(function (on) {
            on.left(withShift(function (on) {
                on.shift(function () { return getParameter().inc(-encoderAmount, encoderResolutions.shift); });
                on.default(function () { return getParameter().inc(-encoderAmount, encoderResolutions.default); });
            }));
            on.right(withShift(function (on) {
                on.shift(function () { return getParameter().inc(encoderAmount, encoderResolutions.shift); });
                on.default(function () { return getParameter().inc(encoderAmount, encoderResolutions.default); });
            }));
        }), mode);
    }
    bindEncoderParameterIncrementer(Encoder.Blue, function () { return cursorTrack.volume(); }, Mode.Arrange);
    bindEncoderParameterIncrementer(Encoder.Green, function () { return cursorTrack.pan(); }, Mode.Arrange);
}
var ArpeggiatorModes;
(function (ArpeggiatorModes) {
    ArpeggiatorModes["All"] = "all";
    ArpeggiatorModes["Up"] = "up";
    ArpeggiatorModes["UpDown"] = "up-down";
    ArpeggiatorModes["UpThenDown"] = "up-then-down";
    ArpeggiatorModes["Down"] = "down";
    ArpeggiatorModes["DownUp"] = "down-up";
    ArpeggiatorModes["DownThenUp"] = "down-then-up";
    ArpeggiatorModes["Flow"] = "flow";
    ArpeggiatorModes["Random"] = "random";
    ArpeggiatorModes["ConvergeUp"] = "converge-up";
    ArpeggiatorModes["ConvergeDown"] = "converge-down";
    ArpeggiatorModes["DivergeUp"] = "diverge-up";
    ArpeggiatorModes["DivergeDown"] = "diverge-down";
    ArpeggiatorModes["ThumbUp"] = "thumb-up";
    ArpeggiatorModes["ThumbDown"] = "thumb-down";
    ArpeggiatorModes["PinkyUp"] = "pinky-up";
    ArpeggiatorModes["PinkyDown"] = "pinky-down";
})(ArpeggiatorModes || (ArpeggiatorModes = {}));
var arpeggiatorModes = [
    "all",
    "up",
    "up-down",
    "up-then-down",
    "down",
    "down-up",
    "down-then-up",
    "flow",
    "random",
    "converge-up",
    "converge-down",
    "diverge-up",
    "diverge-down",
    "thumb-up",
    "thumb-down",
    "pinky-up",
    "pinky-down",
];
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
function bindPerform(op1) {
    keyboard.arpeggiator().isEnabled().markInterested();
    op1.bind(Encoder.Blue, withEncoder(function (on) {
        on.left(withShift(function (on) {
            cursorTrack.playNote(128, 128);
        }));
        on.right(withShift(function (on) {
        }));
    }));
    op1.bind(Key.Sequence, withKey(function (on) {
        on.up(withShift(function (on) {
            var arpMode = arpeggiatorModes.random();
            op1.printEverywhere(arpMode);
            on.shift(function () {
                keyboard.arpeggiator().isEnabled().set(false);
                op1.printEverywhere("arpeggiator off");
            });
            on.default(function () {
                keyboard.arpeggiator().isEnabled().set(true);
                keyboard.arpeggiator().mode().set(arpMode);
            });
        }));
    }), Mode.Perform);
    op1.bind(Key.Left, withKey(function (on) {
        on.up(function () {
            keyboard;
        });
    }), Mode.Perform);
    op1.bind(Key.Left, withKey(function (on) {
        on.up(function () {
        });
    }), Mode.Perform);
}
function bindMix(op1) { }
function flush() {
}
function exit() {
    op1.shutdown();
}
