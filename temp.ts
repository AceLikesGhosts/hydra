import hydra from './src/hydra/hydra';
import type { IExport, IExportOBJ } from './src/util/export.interface';

const obj = {
    a: 1,
    b: 2,
};

const hydraObj: IExportOBJ = hydra(obj) as IExportOBJ;

hydraObj.set('c', 3);

console.log(hydraObj.value());
console.log(obj);

console.log('---');
hydraObj.apply();
console.log(hydraObj.value());
console.log(obj);

console.log('---');

const hydraNoObj: IExport = hydra() as IExport;

function returnVal(): any[]
{
    return [null, 1];
}

hydraNoObj.callback(returnVal, (err: any, val: number) =>
{
    console.log(err);
    console.log(val);
});

console.log('---');

function returnVal2(): any[]
{
    return [null, 1, 2];
}

hydraNoObj.callback(returnVal2, (err: any, val: number, val2: number) =>
{
    console.log(err);
    console.log(val);
    console.log(val2);
});