/* API Version - 3.1.2 */

/**
 * Base class for defining any kind of extension for Bitwig Studio.
 */
function ExtensionDefinition() {}

/**
 * The name of the extension.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getName = function() {};

/**
 * The author of the extension.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getAuthor = function() {};

/**
 * The version of the extension.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getVersion = function() {};

/**
 * A unique id that identifies this extension.
 *
 * @return {java.util.UUID}
 */
ExtensionDefinition.prototype.getId = function() {};

/**
 * The minimum API version number that this extensions requires.
 *
 * @return {int}
 */
ExtensionDefinition.prototype.getRequiredAPIVersion = function() {};

/**
 * Is this extension is using Beta APIs?
 * 
 * Beta APIs are still on development and might not be available in a future version of Bitwig Studio.
 * 
 * Turning this flag to true, will flag your extension as being a beta extension which might not work after
 * updating Bitwig Studio.
 *
 * @return {boolean} true if the extension wants to use Beta APIs.
 */
ExtensionDefinition.prototype.isUsingBetaAPI = function() {};

/**
 * Gets a remote URI or a path within the extension's jar file where documentation for this extension can
 * be found or null if there is none. If the path is not a URI then it is assumed to be a path below the directory
 * "Documentation" within the extension's jar file.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getHelpFilePath = function() {};

/**
 * If true then this extension should fail when it calls a deprecated method in the API. This is useful
 * during development.
 *
 * @return {boolean}
 */
ExtensionDefinition.prototype.shouldFailOnDeprecatedUse = function() {};

/**
 * An e-mail address that can be used to contact the author of this extension if a problem is detected with
 * it or null if none.
 *
 * @return {string}
 */
ExtensionDefinition.prototype.getErrorReportingEMail = function() {};

/**
 * @return {string}
 */
ExtensionDefinition.prototype.toString = function() {};
