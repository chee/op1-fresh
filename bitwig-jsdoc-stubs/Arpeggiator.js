/* API Version - 3.1.2 */

/**
 * Proxy to an arpeggiator component.
 *
 * @since API version 10
 */
function Arpeggiator() {}

Arpeggiator.prototype = new ObjectProxy();
Arpeggiator.prototype.constructor = Arpeggiator;

/**
 * Returns an object to configure the arpeggiator mode.
 * Possible values:
 *  - all
 *  - up
 *  - up-down
 *  - up-then-down
 *  - down
 *  - down-up
 *  - down-then-up
 *  - flow
 *  - random
 *  - converge-up
 *  - converge-down
 *  - diverge-up
 *  - diverge-down
 *  - thumb-up
 *  - thumb-down
 *  - pinky-up
 *  - pinky-down
 *
 * @return {com.bitwig.extension.controller.api.SettableEnumValue}
 * @since API version 10
 */
Arpeggiator.prototype.mode = function() {};

/**
 * Returns an object to configure the range in octaves.
 * The range is between 0 and 8.
 *
 * @return {com.bitwig.extension.controller.api.SettableIntegerValue}
 * @since API version 10
 */
Arpeggiator.prototype.octaves = function() {};

/**
 * Returns an object to enable or disable the note repeat component.
 *
 * @return {com.bitwig.extension.controller.api.SettableBooleanValue}
 * @since API version 10
 */
Arpeggiator.prototype.isEnabled = function() {};

/**
 * If true the arpeggiator will not try to sync to the transport.
 *
 * @return {com.bitwig.extension.controller.api.SettableBooleanValue}
 * @since API version  10
 */
Arpeggiator.prototype.isFreeRunning = function() {};

/**
 * Return an object to configure the note repeat to use shuffle or not.
 *
 * @return {com.bitwig.extension.controller.api.SettableBooleanValue}
 * @since API version 10
 */
Arpeggiator.prototype.shuffle = function() {};

/**
 * Returns an object to configure the note repeat rate in beats.
 *
 * @return {com.bitwig.extension.controller.api.SettableDoubleValue}
 * @since API version 10
 */
Arpeggiator.prototype.rate = function() {};

/**
 * Returns an object to configure the note length, expressed as a ratio of the period.
 * Must be between 1/32 and 1.
 *
 * @return {com.bitwig.extension.controller.api.SettableDoubleValue}
 * @since API version 10
 */
Arpeggiator.prototype.gateLength = function() {};

/**
 * Will use the note pressure to determine the velocity of arpeggiated notes.
 *
 * @return {com.bitwig.extension.controller.api.SettableBooleanValue}
 * @since API version 10
 */
Arpeggiator.prototype.usePressureToVelocity = function() {};

/**
 * Release all notes being played.
 *
 * @since API version 10
 */
Arpeggiator.prototype.releaseNotes = function() {};
