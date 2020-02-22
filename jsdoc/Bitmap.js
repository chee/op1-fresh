/* API Version - 3.1.2 */

/**
 * Represents a bitmap image which can be painted via {@link #render(Renderer)}.
 *
 * @since API version 7
 */
function Bitmap() {}

Bitmap.prototype = new Image();
Bitmap.prototype.constructor = Bitmap;

/**
 * @return {int}
 */
Bitmap.prototype.getWidth = function() {};

/**
 * @return {int}
 */
Bitmap.prototype.getHeight = function() {};

/**
 * @return {BitmapFormat}
 */
Bitmap.prototype.getFormat = function() {};

/**
 * @return {MemoryBlock}
 */
Bitmap.prototype.getMemoryBlock = function() {};

/**
 * Call this method to start painting the bitmap.
 * This method will take care of disposing allocated patterns during the rendering.
 *
 * @param {Renderer} renderer
 * @since API version 7
 */
Bitmap.prototype.render = function(renderer) {};

/**
 * Call this method to show a window which displays the bitmap.
 * You should see this as a debug utility rather than a Control Surface API feature.
 *
 * @since API version 7
 */
Bitmap.prototype.showDisplayWindow = function() {};

/**
 * Updates the display window title.
 *
 * @param {string} title
 * @since API version 7
 */
Bitmap.prototype.setDisplayWindowTitle = function(title) {};

/**
 * Saves the image as a PPM file.
 *
 * @param {string} path the location of the target file.
 * @since API version 7
 */
Bitmap.prototype.saveToDiskAsPPM = function(path) {};
