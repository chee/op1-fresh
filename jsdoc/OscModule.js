/* API Version - 3.1.2 */

/**
 * Interface to create Osc related object.
 *
 * @since API version 5
 */
function OscModule() {}

/**
 * Creates a new OscAddressSpace.
 * 
 * In short the OscAddressSpace dispatches the incoming messages to services.
 * An OscAddressSpace is an OscService.
 *
 * @return {OscAddressSpace}
 * @since API version 5
 */
OscModule.prototype.createAddressSpace = function() {};

/**
 * Creates a new OSC Server.
 *
 * @param {int} port
 * @param {OscAddressSpace} addressSpace
 * @since API version 5
 */
OscModule.prototype.createUdpServer = function(port, addressSpace) {};

/**
 * Creates a new OSC Server.
 * This server is not started yet, you'll have to start it by calling server.start(port);
 * Use this method if the port is not known during the initialization (coming from a setting)
 * or if the port number can change at runtime.
 *
 * @param {OscAddressSpace} addressSpace Use {@link #createAddressSpace()}
 * @return {OscServer} a new OscServer
 * @since API version 10
 */
OscModule.prototype.createUdpServer = function(addressSpace) {};

/**
 * Tries to connect to an OscServer.
 *
 * @param {string} host
 * @param {int} port
 * @param {OscAddressSpace} addressSpace
 * @return {OscConnection} a new OscConnection
 * @since API version 5
 */
OscModule.prototype.connectToUdpServer = function(host, port, addressSpace) {};
