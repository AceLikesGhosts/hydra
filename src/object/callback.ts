
import constants from '../constants';
import { HydraObject } from '../types/hydraReturns';
import hydra from '../hydra/hydra';

/**
 * @description Basic callback utility.
 * @param {Function} func Conditional function that will be called, the return value will be passed to the returnFunc function.
 * @param {Function} returnFunc Function that will be called with the return value of the conditional function. 
 * @returns {void}
 */

// eslint-disable-next-line @typescript-eslint/ban-types
function callback(func: Function, returnFunc: Function): HydraObject
{
    const result: any = func();

    // deconstruct our result if it is an array
    if(Array.isArray(result))
    {
        returnFunc(...result);
        return hydra<true>(constants._obj as any);
    }

    if(returnFunc !== null && result !== undefined)
        returnFunc(result);

    return hydra<true>(constants._obj as any);
}

export default callback;