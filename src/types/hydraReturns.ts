declare function get<T>(key: T): [T, HydraObject];
declare function get<T, K>(key: T): [K, HydraObject];

declare function set<T>(key: T, value: any): HydraObject;
declare function set<T, K>(key: T, value: K): HydraObject;

interface HydraObject
{
    set: typeof set;
    get: typeof get;
    apply: () => boolean;
    value: () => Record<string, unknown>;
    // We just want the raw Function type, because we don't know what
    // data will be passed to the func!
    // eslint-disable-next-line @typescript-eslint/ban-types
    callback: (func: Function, returnFunc: Function) => HydraObject;
}

interface NoObject
{
    create: () => HydraObject;
    // We just want the raw Function type, because we don't know what
    // data will be passed to the func!
    // eslint-disable-next-line @typescript-eslint/ban-types
    callback: (func: Function, returnFunc: Function) => HydraObject;
}

type HydraReturn<T extends boolean> =
    T extends true ? HydraObject : NoObject;

export type {
    HydraReturn,
    HydraObject,
    NoObject
};