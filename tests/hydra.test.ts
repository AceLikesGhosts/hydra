import hydra, { HydraObject } from '../src/';

describe('hydra tests', () =>
{
    test('set func', () =>
    {
        const val: Record<string, unknown> = hydra<false>()
            .create()
            .set<string, string>('test', 'test1')
            .value();

        expect(val.test).toBe('test1');
    });

    test('get func', () =>
    {
        const val: [string, HydraObject] = hydra<false>()
            .create()
            .set<string, string>('test', 'test1')
            .get<string, string>('test');

        expect(val[0]).toBe('test1');
    });

    test('create func', () =>
    {
        const val: Record<string, unknown> = hydra<false>()
            .create()
            .value();

        expect(val).toEqual({});
    });

    test('callback func', () =>
    {
        function base(): [boolean, () => void]
        {
            return [
                true,
                () => { return; }
            ];
        }

        hydra<false>()
            .callback(base, (bool: boolean, func: () => void) => 
            {
                expect(bool).toBe(true);
                expect(func).toBeDefined();
            });
    });
});