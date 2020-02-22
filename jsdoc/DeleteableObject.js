/* API Version - 3.1.2 */

/**
 * Interface implemented by objects that can be deleted from the project.
 *
 * @since API version 10
 */
function DeleteableObject() {}

/**
 * Deletes this object from the document.
 * 
 * If you want to delete multiple objects at once, see Host.deleteObjects().
 *
 * @since API version 10
 */
DeleteableObject.prototype.deleteObject = function() {};
