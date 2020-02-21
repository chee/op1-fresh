/* API Version - 3.1.2 */

/**
 * Instances of this interface are used to setup handler functions for incoming MIDI messages from a specific
 * MIDI hardware.
 * 
 * <p>
 * Expressions can be used to generate matchers for various MIDI events that can then be used to update
 * hardware control states (see {@link MidiIn#createActionMatcher(String)} and {@link HardwareControl}).
 * 
 * <p>
 * The expression language supports these operators in the same way that C, Java, C++ do: +, -, *, /, %,
 * <<, >>, &&, ||, &, |, ^, <, <=, >, >=, ==, !=
 * 
 * <p>
 * The following variables are also defined for matching parts of the event:
 * <ul>
 * <li>status - Value of the status byte
 * <li>data1 - Value of the first data byte
 * <li>data2 - Value of the second data byte
 * <li>event - Integer value of the whole MIDI event with data2 byte in the least significant bits
 * </ul>
 * 
 * <p>
 * Integers can be represented in hex using same syntax as C. 'true' and 'false' keywords are also defined.
 *
 * @since API version 1
 */
function MidiIn() {}

/**
 * Registers a callback for receiving short (normal) MIDI messages on this MIDI input port.
 *
 * @param callback
          a callback function that receives three integer parameters: 1. the status byte 2. the data1
          value 2. the data2 value
@since API version 1
 */
MidiIn.prototype.setMidiCallback = function(callback) {};

/**
 * Registers a callback for receiving sysex MIDI messages on this MIDI input port.
 *
 * @param callback
          a callback function that takes a single string argument
@since API version 1
 */
MidiIn.prototype.setSysexCallback = function(callback) {};

/**
 * Creates a note input that appears in the track input choosers in Bitwig Studio. This method must be
 * called within the `init()` function of the script. The messages matching the given mask parameter will
 * be fed directly to the application, and are not processed by the script.
 *
 * @param name
          the name of the note input as it appears in the track input choosers in Bitwig Studio
 * @param masks
          a filter string formatted as hexadecimal value with `?` as wildcard. For example `80????`
          would match note-off on channel 1 (0). When this parameter is {@null}, a standard filter will
          be used to forward note-related messages on channel 1 (0).

          If multiple note input match the same MIDI event then they'll all receive the MIDI event, and
          if one of them does not consume events then the events wont' be consumed.
 * @return {NoteInput} the object representing the requested note input
 * @since API version 1
 */
MidiIn.prototype.createNoteInput = function(name, /*...*/masks) {};

/**
 * Creates a matcher that matches the absolute value of a MIDI CC message.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createAbsoluteCCValueMatcher = function(channel, controlNumber) {};

/**
 * Creates a matcher that matches the absolute value of a Poly AT message.
 *
 * @param {int} channel
 * @param {int} note
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createPolyAftertouchValueMatcher = function(channel, note) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using signed bit.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBitCCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using signed bit 2.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBit2CCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using bin offset.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeBinOffsetCCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value of a MIDI CC message encoded using 2s complement.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelative2sComplementCCValueMatcher = function(channel, controlNumber, valueAmountForOneFullRotation) {};

/**
 * Create a matcher that matches the absolute value of a MIDI pitch bend message.
 *
 * @param {int} channel
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createAbsolutePitchBendValueMatcher = function(channel) {};

/**
 * Creates an absolute value matcher that is defined by 2 separate MIDI events that have to occur in
 * sequence.
 * 
 * This can be used to get a much higher precision value that a single MIDI event would allow. Some
 * controllers for example will send 2 CC events for a single value.
 *
 * @param {AbsoluteHardwareValueMatcher} firstValueMatcher
 * @param {AbsoluteHardwareValueMatcher} secondValueMatcher
 * @param {boolean} areMostSignificantBitsInSecondEvent
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createSequencedValueMatcher = function(firstValueMatcher, secondValueMatcher, areMostSignificantBitsInSecondEvent) {};

/**
 * Creates a matcher that matches the absolute value of a MIDI CC message by using expressions to filter
 * and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createAbsoluteValueMatcher = function(eventExpression, valueExpression, valueBitCount) {};

/**
 * Creates a matcher that applies a relative adjustment when a MIDI event occurs matching an expression.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param relativeAdjustment
          The amount of relative adjustment that should be applied
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeValueMatcher = function(eventExpression, relativeAdjustment) {};

/**
 * Creates a matcher that matches the relative value (encoded as signed bit) of a MIDI CC message by using
 * expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBitValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using signed bit.
 *
 * @param valueMatcher
          Value matcher that matches the value that needs to be converted to a relative value
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBitValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value (encoded as signed bit 2) of a MIDI CC message by
 * using expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBit2ValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using signed bit 2.
 *
 * @param {AbsoluteHardwareValueMatcher} valueMatcher
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeSignedBit2ValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value (encoded as bin offset) of a MIDI CC message by using
 * expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeBinOffsetValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using bin offset.
 *
 * @param {AbsoluteHardwareValueMatcher} valueMatcher
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelativeBinOffsetValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that matches the relative value (encoded as 2s complement) of a MIDI CC message by
 * using expressions to filter and extract a value out of the MIDI event.
 *
 * @param eventExpression
          Expression that must be true in order to extract the value.
 * @param valueExpression
          Expression that determines the value once an event has been matched.
 * @param valueBitCount
          The number of bits that are relevant from the value extracted by the valueExpression.
 * @param valueAmountForOneFullRotation
          The value that would represent one full rotation to the right (should be very similar to the
          amount of rotation needed to take an absolute knob from 0 to 1). For example, if a value of
          127 meant it had been rotated to the right by a full rotation then you would pass 127 here.
          This ensures that {@link RelativeHardwareControl}s have similar sensitivity to each other and
          can be mapped and behave in a very similar way to {@link AbsoluteHardwareControl}s.
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelative2sComplementValueMatcher = function(eventExpression, valueExpression, valueBitCount, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that converts a value matched by an {@link AbsoluteHardwareValueMatcher} to a relative
 * value using 2s complement.
 *
 * @param {AbsoluteHardwareValueMatcher} valueMatcher
 * @param {int} valueAmountForOneFullRotation
 * @return {RelativeHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createRelative2sComplementValueMatcher = function(valueMatcher, valueAmountForOneFullRotation) {};

/**
 * Creates a matcher that recognizes an action when getting a MIDI CC event with a specific value.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @param {int} value
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createCCActionMatcher = function(channel, controlNumber, value) {};

/**
 * Creates a matcher that recognizes an action when getting a MIDI CC event regardless of the value.
 *
 * @param {int} channel
 * @param {int} controlNumber
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createCCActionMatcher = function(channel, controlNumber) {};

/**
 * Creates a matcher that recognizes an action when a MIDI note on event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOnActionMatcher = function(channel, note) {};

/**
 * Creates a matcher that recognizes a note's on velocity when a MIDI note on event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOnVelocityValueMatcher = function(channel, note) {};

/**
 * Creates a matcher that recognizes a note's off velocity when a MIDI note off event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {AbsoluteHardwareValueMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOffVelocityValueMatcher = function(channel, note) {};

/**
 * Creates a matcher that recognizes an action when a MIDI note off event occurs.
 *
 * @param {int} channel
 * @param {int} note
 * @return {HardwareActionMatcher}
 * @since API version 10
 */
MidiIn.prototype.createNoteOffActionMatcher = function(channel, note) {};

/**
 * Creates a matcher that can match an action from a MIDI event. For example, pressing a button based on
 * input of a MIDI CC event.
 *
 * @param expression
          Expression returns true if the event matches
 * @return {HardwareActionMatcher}
 */
MidiIn.prototype.createActionMatcher = function(expression) {};
