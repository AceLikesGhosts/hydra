import hydra from '../src/hydra/hydra';
import { IExport, IExportOBJ } from '../src/util/export.interface';
import IExampleObject from './obj.interface';

test('can create hydra instance w/ object', () =>
{
    const obj: IExampleObject = {
        a: 1,
        b: 2,
    };

    const hydraObj: IExport | IExportOBJ = hydra(obj);

    // check that hydraObj is an object with the correct properties
    expect(hydraObj).toBeInstanceOf(Object);

    expect(hydraObj).toHaveProperty('set');
    expect(hydraObj).toHaveProperty('get');
    expect(hydraObj).toHaveProperty('callback');
    expect(hydraObj).toHaveProperty('apply');
    expect(hydraObj).toHaveProperty('value');
});

test('can create hydra instance wo/ object', () =>
{
    const hydraObj: IExport | IExportOBJ = hydra();

    // check that hydraObj is an object with the correct properties
    expect(hydraObj).toBeInstanceOf(Object);

    expect(hydraObj).toHaveProperty('callback');
});