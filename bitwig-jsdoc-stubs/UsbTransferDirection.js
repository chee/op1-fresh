/* API Version - 3.1.2 */

UsbTransferDirection = {
	IN: 0,
	OUT: 1,
	/**
	 * @param {byte} bEndpointAddress
	 * @return {UsbTransferDirection}
	 */
	UsbTransferDirection.prototype.getForEndpointAddress = function(bEndpointAddress) {};

};