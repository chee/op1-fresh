/* API Version - 3.1.2 */

/**
 * Represents a surface that can contain {@link HardwareElement}s such as {@link HardwareButton}s,
 * {@link HardwareSlider}s, {@link MultiStateHardwareLight}s etc
 * 
 * <p>
 * This information allows Bitwig Studio to construct a reliable physical model of the hardware. This
 * information can be used to simulate hardware being present even when physical hardware is not available
 * (and may also be used for other purposes in the future).
 * 
 * <p>
 * To be able to simulate hardware being connected so that you can debug controllers without the real hardware
 * you need to do the following:
 * 
 * <p>
 * Create a file with the name "config.json" in your user settings directory. The location of this directory
 * is platform dependent:
 * 
 * <ul>
 * <li>On Windows: %LOCALAPPDATA%\Bitwig Studio
 * <li>On macOS: Library/Application Support/Bitwig/Bitwig Studio
 * <li>On Linux: $HOME/.BitwigStudio
 * </ul>
 * 
 * <p>
 * Then add the following line to the config.json file:
 * 
 * <pre>
 * extension-dev : true
 * </pre>
 * 
 * <p>
 * You will then need to restart Bitwig Studio. To simulate the controller being connected you can right click
 * on the controller in the preferences and select "Simulate device connected".
 * 
 * <p>
 * If you have also provided physical positions for various {@link HardwareElement}s using
 * {@link HardwareElement#setBounds(double, double, double, double)} then you can also see a GUI simulator for
 * your controller by selecting "Show simulated hardware GUI".
 *
 * @since API version 10
 */
function HardwareSurface() {}

/**
 * Creates a {@link HardwareSlider} that represents a physical slider on a controller.
 *
 * @param id
          A unique string that identifies this control.
 * @return {HardwareSlider}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwareSlider = function(id) {};

/**
 * Creates an {@link AbsoluteHardwareKnob} that represents a physical knob on a controller that can be used
 * to input an absolute value.
 *
 * @param id
          A unique string that identifies this control.
 * @return {AbsoluteHardwareKnob}
 * @since API version 10
 */
HardwareSurface.prototype.createAbsoluteHardwareKnob = function(id) {};

/**
 * Creates an {@link RelativeHardwareKnob} that represents a physical knob on a controller that can be used
 * to input a relative value change.
 *
 * @param id
          A unique string that identifies this control.
 * @return {RelativeHardwareKnob}
 * @since API version 10
 */
HardwareSurface.prototype.createRelativeHardwareKnob = function(id) {};

/**
 * @param {string} id
 * @param {int} numKeys
 * @param {int} octave
 * @param {int} startKeyInOctave
 * @return {PianoKeyboard}
 */
HardwareSurface.prototype.createPianoKeyboard = function(id, numKeys, octave, startKeyInOctave) {};

/**
 * Creates a {@link HardwareButton} that represents a physical button on a controller
 *
 * @param id
          A unique string that identifies this control.
 * @return {HardwareButton}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwareButton = function(id) {};

/**
 * Creates a {@link OnOffHardwareLight} that represents a physical light on a controller
 *
 * @param {string} id
 * @return {OnOffHardwareLight}
 * @since API version 10
 */
HardwareSurface.prototype.createOnOffHardwareLight = function(id) {};

/**
 * Creates a {@link MultiStateHardwareLight} that represents a physical light on a controller
 *
 * @param {string} id
 * @return {MultiStateHardwareLight}
 * @since API version 10
 */
HardwareSurface.prototype.createMultiStateHardwareLight = function(id) {};

/**
 * Creates a {@link HardwareTextDisplay} that represents a physical text display on a controller
 *
 * @param {string} id
 * @param {int} numLines
 * @return {HardwareTextDisplay}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwareTextDisplay = function(id, numLines) {};

/**
 * Creates a {@link HardwarePixelDisplay} that displays the provided {@link Bitmap} that is rendered by the
 * controller.
 *
 * @param {string} id
 * @param {Bitmap} bitmap
 * @return {HardwarePixelDisplay}
 * @since API version 10
 */
HardwareSurface.prototype.createHardwarePixelDisplay = function(id, bitmap) {};

/**
 * Sets the physical size of this controller in mm.
 *
 * @param {double} widthInMM
 * @param {double} heightInMM
 * @since API version 10
 */
HardwareSurface.prototype.setPhysicalSize = function(widthInMM, heightInMM) {};

/**
 * Updates the state of all {@link HardwareOutputElement}s that have changed since the last time this
 * method was called.
 * 
 * Any onUpdateHardware callbacks that have been registered on {@link HardwareOutputElement}s or
 * {@link HardwareProperty}s will be invoked if their state/value has changed since the last time it was
 * called.
 * 
 * This is typically called by the control script from its flush method.
 *
 * @since API version 10
 */
HardwareSurface.prototype.updateHardware = function() {};

/**
 * Mark all {@link HardwareOutputElement}s as needing to resend their output state, regardless of it has
 * changed or not.
 */
HardwareSurface.prototype.invalidateHardwareOutputState = function() {};

/**
 * A list of all the {@link HardwareControl}s that have been created on this {@link HardwareSurface}.
 *
 * @return {HardwareControl[]}
 */
HardwareSurface.prototype.hardwareControls = function() {};

/**
 * Finds the {@link HardwareElement} that has the supplied id or null if not found.
 *
 * @param {string} id
 * @return {HardwareElement}
 */
HardwareSurface.prototype.hardwareElementWithId = function(id) {};

/**
 * List of all {@link HardwareElement}s on this {@link HardwareSurface}.
 *
 * @return {HardwareOutputElement[]}
 */
HardwareSurface.prototype.hardwareOutputElements = function() {};
