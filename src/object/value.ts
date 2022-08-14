import constants from '../util/constants';

/**
 * @description Returns the value of the object.
 * @param {Function} callback Optional callback that will be called with the object, or an empty object if the object is not found. 
 * @returns {Object} The object, or an empty object if the object is not found.
 */
function value(callback?: Function): Object
{
    if(callback)
        callback(constants.OBJECT || {});

    return constants.OBJECT || {};
}

export default value;