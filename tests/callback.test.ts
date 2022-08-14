import hydra from '../src/hydra/hydra';

test('hydra callback test wo/ obj', () =>
{
    const hydraObj = hydra();

    function callback(): any[]
    {
        return [null, 0];
    }

    function callback2(): any[]
    {
        return [null, 1, 2, 3];
    }

    hydraObj.callback(callback, (err: any, first: number) =>
    {
        expect(err).toBeNull();
        expect(first).toBe(0);
    });

    hydraObj.callback(callback2, (err: any, first: number, second: number, third: number) =>
    {
        expect(err).toBeNull();
        expect(first).toBe(1);
        expect(second).toBe(2);
        expect(third).toBe(3);
    });
});

test('hydra callback test w/ obj', () =>
{
    const hydraObj = hydra({ obj: 'nothing' });

    function callback(): any[]
    {
        return [null, 0];
    }

    function callback2(): any[]
    {
        return [null, 1, 2, 3];
    }

    hydraObj.callback(callback, (err: any, first: number) =>
    {
        expect(err).toBeNull();
        expect(first).toBe(0);
    });

    hydraObj.callback(callback2, (err: any, first: number, second: number, third: number) =>
    {
        expect(err).toBeNull();
        expect(first).toBe(1);
        expect(second).toBe(2);
        expect(third).toBe(3);
    });
});