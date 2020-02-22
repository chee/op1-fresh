/* API Version - 3.1.2 */

// BitmapFormat = {
// 	/**
// 	 * Each pixel is a 32-bit quantity, with alpha in the upper 8 bits, then red, then green, then
//  * blue. The 32-bit quantities are stored native-endian. Pre-multiplied alpha is used. (That is,
//  * 50% transparent red is 0x80800000, not 0x80ff0000.)
// 	 */
// 	ARGB32( 4 ): 0,
// 	/**
// 	 * Each pixel is a 32-bit quantity, with the upper 8 bits unused. Red, Green, and Blue are stored
//  * in the remaining 24 bits in that order.
// 	 */
// 	RGB24_32( 4 ): 1,
// 	int mBytesPerPixel
// 	/**
// 	 * @return {int}
// 	 */
// 	BitmapFormat.prototype.bytesPerPixel = function() {};

// };
