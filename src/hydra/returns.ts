import create from '../object/create'; 
import get from '../object/get';
import value from '../object/value'; 
import set from '../object/set';
import callback from '../object/callback';
import type { HydraReturn } from '../types/hydraReturns';

function handleReturns<T extends boolean>(obj?: Record<string, unknown>): HydraReturn<T>
{
    if(!obj)
        return {
            callback: callback,
            create: create
        } as HydraReturn<T>;

    return {
        callback: callback,
        set: set,
        get: get,
        value: value
    } as HydraReturn<T>;
}

export default handleReturns;