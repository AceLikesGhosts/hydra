import hydra from '../hydra/hydra';
import type { HydraObject } from '../types/hydraReturns';

/**
 * @description Creates a new object.
 * @returns {HydraObject}
 */
function create(): HydraObject
{
    return hydra<true>({});
}

export default create;