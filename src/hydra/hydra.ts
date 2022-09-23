import type { HydraReturn } from '../types/hydraReturns';
import constants from '../constants';
import unfreeze from '../object/unfreeze';
import handleReturns from './returns';


function hydra<T extends boolean>(obj?: Record<string, unknown>): HydraReturn<T>
{
    constants._obj = obj || null;
    constants.wrappedObj = obj ? new Object(obj) as Record<string, unknown> : null;

    if(obj)
    {
        Object.freeze(constants._obj);
        constants.wrappedObj = unfreeze(constants.wrappedObj!);
    }

    return handleReturns(obj);
}



export default hydra;