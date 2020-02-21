/* API Version - 3.1.2 */

/**
 * Status of an USB transfer.
 *
 * @newSince API version 7
 */
com.bitwig.extension.controller.api.UsbTransferStatus = {
	Completed: 0,
	Error: 1,
	TimedOut: 2,
	Cancelled: 3,
	Stall: 4,
	NoDevice: 5,
	Overflow: 6,
};