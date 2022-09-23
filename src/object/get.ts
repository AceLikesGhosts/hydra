import { HydraObject } from '../types/hydraReturns';
import constants from '../constants';
import hydra from '../hydra/hydra';
import create from './create';

function get<T>(key: T): [unknown, HydraObject];
function get<T, K>(key: T): [K, HydraObject];
function get(key: any): [unknown, HydraObject]
{
    const obj: Record<string, unknown> | null = constants.wrappedObj || null;

    if(!obj)
        create();

    const data = obj![key];
    return [data, hydra<true>(obj!)];
}

export default get;