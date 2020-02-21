/* API Version - 3.1.2 */

/**
 * Represents a physical piano keyboard on a {@link HardwareSurface}.
 */
function PianoKeyboard() {}

PianoKeyboard.prototype = new HardwareElement();
PianoKeyboard.prototype.constructor = PianoKeyboard;

/**
 * The {@link MidiIn} where this piano keyboard would send key presses. If set this allows the simulator
 * for the hardware to simulate the note input.
 *
 * @param {com.bitwig.extension.controller.api.MidiIn} midiIn
 */
PianoKeyboard.prototype.setMidiIn = function(midiIn) {};

/**
 * @param {int} channel
 */
PianoKeyboard.prototype.setChannel = function(channel) {};

/**
 * @param {boolean} value
 */
PianoKeyboard.prototype.setIsVelocitySensitive = function(value) {};

/**
 * @param {boolean} value
 */
PianoKeyboard.prototype.setSupportsPolyAftertouch = function(value) {};
