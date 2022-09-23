import constants from '../constants';
import hydra from '../hydra/hydra';
import { HydraObject } from '../types/hydraReturns';
import create from './create';

function set<T>(key: T, value: any): HydraObject
function set<T, K>(key: T, value: K): HydraObject
function set(key: any, value: any): HydraObject
{
    const object: Record<string, unknown> | null = constants.wrappedObj; 

    if(!object)
    {
        console.error('No object was found, creating one.');
        return create();
    }

    object[key] = value;
    return hydra<true>(object);
}

export default set;