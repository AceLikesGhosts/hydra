import hydra from '../src/hydra/hydra';
import { IExport, IExportOBJ } from '../src/util/export.interface';

test('create an object w/ hydra wo/ an object passed', () =>
{
    const hydraObj: IExport = hydra() as IExport;
    expect(hydraObj).toBeInstanceOf(Object);
    expect(hydraObj).toHaveProperty('create');

    const obj: IExportOBJ = hydraObj.create();

    expect(obj).toBeInstanceOf(Object);
    expect(obj).toHaveProperty('set');
    expect(obj).toHaveProperty('get');
    expect(obj).toHaveProperty('callback');
    expect(obj).toHaveProperty('apply');
    expect(obj).toHaveProperty('value');

    expect(obj).not.toHaveProperty('create');

    obj.set('a', 1);
    obj.set('b', 2);

    expect(obj.get('a')).toBe(1);
    expect(obj.get('b')).toBe(2);
});

test('cant create an object w/ hydra w/ an object passed', () =>
{
    const obj: IExport = hydra({}) as IExport;
    expect(obj).toBeInstanceOf(Object);
    expect(obj).not.toHaveProperty('create');

    // try to run create, if it throws, it's good.
    try
    {
        obj.create();

        // if it doesn't throw, it's bad.
        expect(true).toBe(false);
    }
    catch(e: unknown)
    {
        expect(e).toBeInstanceOf(Error);
    }
});