/* API Version - 3.1.2 */

/**
 * Defines the interface through which an extension can talk to the host application.
 */
function Host() {}

/**
 * An interface representing the host application to the script.
 * @global
 * @type {Host}
 */
var host = new Host();
/**
 * Returns the latest supported API version of the host application.
 *
 * @return {int} the latest supported API version of the host application
 * @since API version 1
 */
Host.prototype.getHostApiVersion = function() {};

/**
 * Returns the vendor of the host application.
 *
 * @return {string} the vendor of the host application
 * @since API version 1
 */
Host.prototype.getHostVendor = function() {};

/**
 * Returns the product name of the host application.
 *
 * @return {string} the product name of the host application
 * @since API version 1
 */
Host.prototype.getHostProduct = function() {};

/**
 * Returns the version number of the host application.
 *
 * @return {string} the version number of the host application
 * @since API version 1
 */
Host.prototype.getHostVersion = function() {};

/**
 * The platform type that this host is running on.
 *
 * @return {PlatformType}
 */
Host.prototype.getPlatformType = function() {};

/**
 * Sets an email address to use for reporting errors found in this script.
 *
 * @param {string} address
 * @since API version 2
 */
Host.prototype.setErrorReportingEMail = function(address) {};

/**
 * Gets the OpenSoundControl module.
 *
 * @return {OscModule}
 * @since API version 5
 */
Host.prototype.getOscModule = function() {};

/**
 * Allocates some memory that will be automatically freed once the extension exits.
 *
 * @param {int} size
 * @return {MemoryBlock}
 * @since API version 7
 */
Host.prototype.allocateMemoryBlock = function(size) {};

/**
 * Creates an offscreen bitmap that the extension can use to render into. The memory used by this bitmap is
 * guaranteed to be freed once this extension exits.
 *
 * @param {int} width
 * @param {int} height
 * @param {BitmapFormat} format
 * @return {Bitmap}
 * @since API version 7
 */
Host.prototype.createBitmap = function(width, height, format) {};

/**
 * Loads a font.
 * The memory used by this font is guaranteed to be freed once this extension exits.
 *
 * @param {string} path
 * @return {FontFace}
 * @since API version 7
 */
Host.prototype.loadFontFace = function(path) {};

/**
 * Creates a new FontOptions.
 * This object is used to configure how the GraphicOutput will display text.
 * The memory used by this object is guaranteed to be freed once this extension exits.
 *
 * @return {FontOptions}
 * @since API version 7
 */
Host.prototype.createFontOptions = function() {};

/**
 * Loads a PNG image.
 * The memory used by this image is guaranteed to be freed once this extension exits.
 *
 * @param {string} path
 * @return {Image}
 * @since API version 7
 */
Host.prototype.loadPNG = function(path) {};

/**
 * Loads a SVG image.
 * The memory used by this image is guaranteed to be freed once this extension exits.
 *
 * @param {string} path
 * @param {double} scale
 * @return {Image}
 * @since API version 7
 */
Host.prototype.loadSVG = function(path, scale) {};
