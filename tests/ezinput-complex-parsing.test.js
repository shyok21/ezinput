const inputLib = require('../src/ezinput');

describe('EzInput advanced parsing: array(), object(), json()', () => {
    let input;

    it('should parse JSON inputs sequentially', () => {
        input = inputLib.reset('./tests/fixtures/complex-parsing.test.txt');

        expect(input.array()).toEqual([1, 2, 3, 4]);
        expect(input.array()).toEqual([10, 20, 30]);
        expect(input.object()).toEqual({ name: 'Abc', age: 26 });
        expect(input.object()).toEqual({
            lang: 'JavaScript',
            features: ['ES6', 'Modules'],
        });
        expect(input.json()).toEqual([100, 200]);
        expect(input.json()).toEqual({ ok: true });
    });
});
