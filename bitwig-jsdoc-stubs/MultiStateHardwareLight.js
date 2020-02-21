/* API Version - 3.1.2 */

/**
 * Represents a physical hardware light on a controller. The light has an on/off state and may also be
 * optionally colored.
 *
 * @since API version 10
 */
function MultiStateHardwareLight() {}

MultiStateHardwareLight.prototype = new HardwareLight();
MultiStateHardwareLight.prototype.constructor = MultiStateHardwareLight;

/**
 * Value that represents the current state of this light as an integer. The interpretation of this value is
 * entirely up to the implementation.
 *
 * @return {com.bitwig.extension.controller.api.ObjectHardwareProperty<com.bitwig.extension.controller.api.InternalHardwareLightState>}
 */
MultiStateHardwareLight.prototype.state = function() {};

/**
 * Sets a function that can be used to convert a color to the closest possible state representing that
 * color. Once this function has been provided it is possible to then use the convenient
 * {@link #setColor(Color)} and {@link #setColorSupplier(Supplier)} methods.
 *
 * @param {java.util.function.Function<com.bitwig.extension.api.Color,com.bitwig.extension.controller.api.InternalHardwareLightState>} function
 */
MultiStateHardwareLight.prototype.setColorToStateFunction = function(function) {};

/**
 * Tries to set this light's state to be the best state to represent the supplied {@link Color}. For this
 * to be used you must first call {@link #setColorToStateFunction(IntFunction)}.
 *
 * @param {com.bitwig.extension.api.Color} color
 */
MultiStateHardwareLight.prototype.setColor = function(color) {};

/**
 * Tries to set this light's state to be the best state to represent the value supplied by the
 * {@link Supplier}. For this to be used you must first call {@link #setColorToStateFunction(IntFunction)}.
 *
 * @param {java.util.function.Supplier<com.bitwig.extension.api.Color>} colorSupplier
 */
MultiStateHardwareLight.prototype.setColorSupplier = function(colorSupplier) {};

/**
 * @param {com.bitwig.extension.api.Color} color
 * @return {com.bitwig.extension.controller.api.InternalHardwareLightState}
 */
MultiStateHardwareLight.prototype.getBestLightStateForColor = function(color) {};
