/* API Version - 3.1.2 */

/**
 * An OSC Bundle.
 *
 * @since API version 5
 */
function OscBundle() {}

OscBundle.prototype = new OscPacket();
OscBundle.prototype.constructor = OscBundle;

/**
 * @return {long}
 */
OscBundle.prototype.getNanoseconds = function() {};

/**
 * @return {OscPacket[]}
 */
OscBundle.prototype.getPackets = function() {};
