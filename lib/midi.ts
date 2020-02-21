import type {NoteInput} from "./note-input"

/** Called when a short MIDI message is received on MIDI input port. */
export type ShortMidiDataReceivedCallback = (statusByte: number, data1: number, data2: number) => void;
/** Called when a MIDI sysex message is received on MIDI input port */
export type SysexMidiDataReceivedCallback = (data: string) => void;


/**
   Instances of this interface are used to setup handler functions for incoming
   MIDI messages from a specific MIDI hardware.

   Expressions can be used to generate matchers for various MIDI events that can
   then be used to update hardware control states (see
   `MidiIn#createActionMatcher(String)` and `HardwareControl`).

   The expression language supports these operators in the same way that C,
   Java, C++ do: +, -, *, /, %, <<, >>, &&, ||, &, |, ^, <, <=, >, >=, ==, !=

   The following variables are also defined for matching parts of the event:

   * status :: Value of the status byte data1 :: Value of the first data byte
   * data2 :: Value of the second data byte event :: Integer value of the whole
   * MIDI event with data2 byte in the least significant bits

   Integers can be represented in hex using same syntax as C. `true` and `false`
   keywords are also defined
*/
export interface MidiIn {
	setMidiCallback(callback: ShortMidiDataReceivedCallback): void
	setSysexCallback(callback: SysexMidiDataReceivedCallback): void
	createNoteInput(name: string, ...masks: string[]): NoteInput
	// AbsoluteHardwareValueMatcher 	createAbsoluteCCValueMatcher (int channel, int controlNumber)
	// AbsoluteHardwareValueMatcher 	createPolyAftertouchValueMatcher (int channel, int note)
	// RelativeHardwareValueMatcher 	createRelativeSignedBitCCValueMatcher (int channel, int controlNumber, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeSignedBit2CCValueMatcher (int channel, int controlNumber, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeBinOffsetCCValueMatcher (int channel, int controlNumber, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelative2sComplementCCValueMatcher (int channel, int controlNumber, int valueAmountForOneFullRotation)
	// AbsoluteHardwareValueMatcher 	createAbsolutePitchBendValueMatcher (int channel)
	// AbsoluteHardwareValueMatcher 	createSequencedValueMatcher (AbsoluteHardwareValueMatcher firstValueMatcher, AbsoluteHardwareValueMatcher secondValueMatcher, boolean areMostSignificantBitsInSecondEvent)
	// AbsoluteHardwareValueMatcher 	createAbsoluteValueMatcher (String eventExpression, String valueExpression, int valueBitCount)
	// RelativeHardwareValueMatcher 	createRelativeValueMatcher (String eventExpression, double relativeAdjustment)
	// RelativeHardwareValueMatcher 	createRelativeSignedBitValueMatcher (String eventExpression, String valueExpression, int valueBitCount, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeSignedBitValueMatcher (AbsoluteHardwareValueMatcher valueMatcher, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeSignedBit2ValueMatcher (String eventExpression, String valueExpression, int valueBitCount, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeSignedBit2ValueMatcher (AbsoluteHardwareValueMatcher valueMatcher, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeBinOffsetValueMatcher (String eventExpression, String valueExpression, int valueBitCount, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelativeBinOffsetValueMatcher (AbsoluteHardwareValueMatcher valueMatcher, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelative2sComplementValueMatcher (String eventExpression, String valueExpression, int valueBitCount, int valueAmountForOneFullRotation)
	// RelativeHardwareValueMatcher 	createRelative2sComplementValueMatcher (AbsoluteHardwareValueMatcher valueMatcher, int valueAmountForOneFullRotation)
	// HardwareActionMatcher 	createCCActionMatcher (int channel, int controlNumber, int value)
	// HardwareActionMatcher 	createCCActionMatcher (int channel, int controlNumber)
	// HardwareActionMatcher 	createNoteOnActionMatcher (int channel, int note)
	// AbsoluteHardwareValueMatcher 	createNoteOnVelocityValueMatcher (int channel, int note)
	// AbsoluteHardwareValueMatcher 	createNoteOffVelocityValueMatcher (int channel, int note)
	// HardwareActionMatcher 	createNoteOffActionMatcher (int channel, int note)
	// HardwareActionMatcher 	createActionMatcher (String expression)
}

/**
   Instances of this interface are used to send MIDI messages to a specific MIDI hardware.
*/
export interface MidiOut {
	// void 	sendMidi (int status, int data1, int data2)
	// void 	sendSysex (String hexString)
	// void 	sendSysex (byte[] data)
	// void 	setShouldSendMidiBeatClock (boolean shouldSendClock)
}
