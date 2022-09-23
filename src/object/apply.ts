import { HydraObject } from '../types/hydraReturns';
import hydra from '../hydra/hydra';
import constants from '../constants';
import create from './create';
import unfreeze from './unfreeze';

function apply(): HydraObject
{
    const wrappedObj: Record<string, unknown> | null = constants.wrappedObj;
    const object: Record<string, unknown> | null = constants._obj;

    if(!object || !wrappedObj)
    {
        console.error('No object was found, creating one.');
        return create();
    }
    constants._obj = unfreeze(constants._obj!);
    constants._obj = constants.wrappedObj;

    return hydra<true>(object);
}


export default apply;