import constants from '../util/constants';

/**
 * @description Returns the value of the object at the given key.
 * @param {any} key Any key. 
 * @returns {any} The value of the object at the given key.
 */
function get(key: any): any
{
    let obj: Object | null = constants.OBJECT || null;

    if(!obj)
    {
        constants.OBJECT = {};
        obj = constants.OBJECT;
    }

    // @ts-ignore
    return obj[key];
}

export default get;