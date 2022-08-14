import constants from '../util/constants';

/**
 * @description Sets the value of the object.
 * @param {String} key The key to set. 
 * @param {any} value The value to set.
 */
function set(key: string, value: any): void
{
    let obj: Object | null = constants.OBJECT || null;

    if(!obj)
    {
        constants.OBJECT = {};
        obj = constants.OBJECT;
    }

    const newObj = Object.assign({}, obj, {
        [key]: value
    });

    constants.OBJECT = newObj;
}

export default set;