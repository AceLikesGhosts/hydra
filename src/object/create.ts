import exportObject from '../util/export';
import constants from '../util/constants';
import { IExportOBJ } from '../util/export.interface';

/**
 * @description Creates a new object, and makes hydra run on it.
 * @returns {IExportOBJ} Export Object
 */
function create(): IExportOBJ
{
    // if constants.OBJECT is not null, then throw an error
    if (constants.OBJECT !== null || constants._OBJ !== null)
        throw new Error('Cannot create a new object, because an object already exists.');

    const obj: Object = new Object();
    constants._OBJ = obj;
    constants.OBJECT = new Object(obj);

    // we're passing an object, so it has to be an IExportOBJ.
    return exportObject(obj) as IExportOBJ;
}

export default create;