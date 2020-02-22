/* API Version - 3.1.2 */

/**
 * A special kind of track that represents the master track in Bitwig Studio.
 *
 * @since API version 1
 */
function MasterTrack() {}

MasterTrack.prototype = new Track();
MasterTrack.prototype.constructor = MasterTrack;
