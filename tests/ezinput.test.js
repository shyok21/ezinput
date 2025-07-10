const inputLib = require('../src/ezinput'); // import singleton wrapper

describe('EzInput with file-based input', () => {
  let input;

  beforeEach(() => {
    // reset singleton before every test — using test file as input
    input = inputLib.reset('./tests/fixtures/input.test.txt');
  });

  it('should correctly parse a line of whole numbers in different formats', () => {
    input.int(); input.ints(); input.ints(); // first 4 lines
    expect(input.ints()).toEqual([25, 30]);

    input.index = 3;
    expect(input.line()).toBe('25 30');

    input.index = 3;
    expect(input.strings()).toEqual(['25', '30']);

    input.index = 3;
    expect(input.numbers(1)).toEqual([[25, 30]]);
  });

  it('should correctly parse a line of decimal numbers in different formats', () => {
    input.index = 4;
    input.float();
    expect(input.strings()).toEqual(['10.1', '5.6', '22.7']);

    input.index = 5;
    expect(input.line()).toBe('10.1 5.6 22.7');

    input.index = 5;
    expect(input.numbers(1)).toEqual([[10.1, 5.6, 22.7]]);
  });

  it('should parse single and multi-word strings correctly', () => {
    input.index = 6;
    expect(input.line()).toBe('hello');

    expect(input.strings()).toEqual(['welcome', 'to', 'ezinput']);
  });

  it('should throw descriptive error when input is exhausted', () => {
    input.index = 12; // last line is index 11, so index 12 is overflow
    expect(() => input.line()).toThrow('No more input available at line 12');
  });
});
