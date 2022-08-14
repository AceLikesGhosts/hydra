import type { IExport, IExportOBJ } from '../util/export.interface';
import exportObject from '../util/export';
import constants from '../util/constants';

function hydra(obj?: Object): IExport  | IExportOBJ
{
    if(obj)
    {
        constants._OBJ = obj;
        constants.OBJECT = new Object(obj);
        
        return exportObject(obj);
    }

    return exportObject();
}



export default hydra;