/* API Version - 3.1.2 */

/**
 * Defines a block of memory. The memory can be read/written using a {@link ByteBuffer} provided by
 * {@link #createByteBuffer()}.
 *
 * @since API version 7
 */
function MemoryBlock() {}

/**
 * The size in bytes of this memory block.
 *
 * @return {int}
 */
MemoryBlock.prototype.size = function() {};

/**
 * Creates a {@link ByteBuffer} that can be used to read/write the data at this memory block.
 *
 * @return {java.nio.ByteBuffer}
 */
MemoryBlock.prototype.createByteBuffer = function() {};
