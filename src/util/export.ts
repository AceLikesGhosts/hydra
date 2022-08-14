import callback from './callback';
import apply from '../object/apply';
import set from '../object/set';
import value from '../object/value';
import get from '../object/get';
import create from '../object/create';
import constants from './constants';
import type { IExportOBJ, IExport } from './export.interface';

function exportObject(obj?: Object): IExportOBJ | IExport 
{
    if(obj)
    {
        const exportObj = constants.OBJECT;

        if(exportObj)
            return {
                value: value,
                set: set,
                get: get,
                apply: apply,
                callback: callback
            };
    }

    return {
        callback: callback,
        create: create
    };
}

export default exportObject;