/* API Version - 3.1.2 */

/**
 * Drum pads are features of special Bitwig Studio devices (currently only the Bitwig Drum Machine
 * instrument), and are also shown as sub-channels in the mixer panel.
 * 
 * Instances of drum pad bank are configured with a fixed number of pads/channels and represent an excerpt of
 * underlying complete list of channels. Various methods are provided for scrolling to different sections of
 * the underlying list. It basically acts like a one-dimensional window moving over the drum pad channels.
 * 
 * To receive an instance of drum pad bank call {@link Device#createDrumPadBank(int numChannels)}.
 *
 * @see {@link Device#createDrumPadBank}
 * @since API version 1
 */
function DrumPadBank() {}

DrumPadBank.prototype = new ChannelBank();
DrumPadBank.prototype.constructor = DrumPadBank;

/**
 * Specifies if the Drum Machine should visualize which pads are part of the window. By default indications
 * are enabled.
 *
 * @param shouldIndicate
          `true` if visual indications should be enabled, `false` otherwise
 * @since API version 1
 */
DrumPadBank.prototype.setIndication = function(shouldIndicate) {};

/**
 * Clears mute on all drum pads.
 *
 * @since API version 10
 */
DrumPadBank.prototype.clearMutedPads = function() {};

/**
 * Clears solo on all drum pads.
 *
 * @since API version 10
 */
DrumPadBank.prototype.clearSoloedPads = function() {};

/**
 * True if there is one or many muted pads.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
DrumPadBank.prototype.hasMutedPads = function() {};

/**
 * True if there is one or many soloed pads.
 *
 * @return {BooleanValue}
 * @since API version 10
 */
DrumPadBank.prototype.hasSoloedPads = function() {};
