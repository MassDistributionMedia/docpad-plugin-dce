/* Config info - 
 * collectionsAvailableForEdit:
 * An array of collections you'd like to expose for editing. For help in creating collections
 * see the "collections" section of the yui-purecss skeleton here - https://github.com/MDM-Brazil/website/blob/master/docpad.coffee#L78
 * "Posts" would be an example usage.
 *
 
*/

// You can enable simple http-auth to help protect who can edit collections. 
// useHttpAuth:

var config = {
    useHttpAuth: false, //true or false
    collectionsAvailableForEdit: [ /* @docpad.collections.collection[i], */ ] //(e.g.) collectionsAvailableForEdit: ["posts", "pages"]
};

module.exports = config;