/* API Version - 3.1.2 */

/**
 * Interface for something that can be scrolled.
 *
 * @since API version 2
 */
function Scrollable() {}

Scrollable.prototype = new RelativeHardwarControlBindable();
Scrollable.prototype.constructor = Scrollable;

/**
 * Value that reports the current scroll position.
 *
 * @return {SettableIntegerValue}
 * @since API version 2
 */
Scrollable.prototype.scrollPosition = function() {};

/**
 * Scrolls the supplied position into view if it isn't already.
 *
 * @param {int} position
 * @since API version 7
 */
Scrollable.prototype.scrollIntoView = function(position) {};

/**
 * Scrolls by a number of steps.
 *
 * @param amount
          The number of steps to scroll by (positive is forwards and negative is backwards).
 */
Scrollable.prototype.scrollBy = function(amount) {};

/**
 * Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with 1
 *
 * @since API version 2
 */
Scrollable.prototype.scrollForwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollForwardsAction = function() {};

/**
 * Scrolls forwards by one step. This is the same as calling {@link #scrollBy(int)} with -1
 *
 * @since API version 2
 */
Scrollable.prototype.scrollBackwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollBackwardsAction = function() {};

/**
 * Scrolls by a number of pages.
 *
 * @param amount
          The number of pages to scroll by (positive is forwards and negative is backwards).
 */
Scrollable.prototype.scrollByPages = function(amount) {};

/**
 * Scrolls forwards by one page.
 *
 * @since API version 2
 */
Scrollable.prototype.scrollPageForwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollPageForwardsAction = function() {};

/**
 * Scrolls backwards by one page.
 *
 * @since API version 2
 */
Scrollable.prototype.scrollPageBackwards = function() {};

/**
 * @return {HardwareActionBindable}
 */
Scrollable.prototype.scrollPageBackwardsAction = function() {};

/**
 * Value that reports if it is possible to scroll the bank backwards or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Scrollable.prototype.canScrollBackwards = function() {};

/**
 * Value that reports if it is possible to scroll the bank forwards or not.
 *
 * @return {BooleanValue}
 * @since API version 2
 */
Scrollable.prototype.canScrollForwards = function() {};
