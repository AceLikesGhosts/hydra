interface IExportOBJ {
    set: (key: string, value: any) => void;
    get: (key: string) => any;
    callback: (func: Function, returnFunc: Function) => void;
    apply: () => void;
    value: () => Object;
}
interface IExport {
    callback: (func: Function, returnFunc: Function) => void;
    create: () => IExportOBJ;
}
export type { IExportOBJ, IExport };
