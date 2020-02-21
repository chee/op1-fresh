/* API Version - 3.1.2 */

function SysexBuilder() {}

/**
 * @param {string} hexString
 * @return {com.bitwig.extension.api.util.midi.SysexBuilder}
 */
SysexBuilder.prototype.fromHex = function(hexString) {};

/**
 * @param {int} value
 * @return {com.bitwig.extension.api.util.midi.SysexBuilder}
 */
SysexBuilder.prototype.addByte = function(value) {};

/**
 * @param {string} string
 * @param {int} length
 * @return {com.bitwig.extension.api.util.midi.SysexBuilder}
 */
SysexBuilder.prototype.addString = function(string, length) {};

/**
 * @param {byte[]} bytes
 * @return {com.bitwig.extension.api.util.midi.SysexBuilder}
 */
SysexBuilder.prototype.add = function(bytes) {};

/**
 * @param {string} hex
 * @return {com.bitwig.extension.api.util.midi.SysexBuilder}
 */
SysexBuilder.prototype.addHex = function(hex) {};

/**
 * @return {byte[]}
 */
SysexBuilder.prototype.terminate = function() {};

/**
 * @return {byte[]}
 */
SysexBuilder.prototype.array = function() {};
