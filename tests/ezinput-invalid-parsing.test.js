const inputLib = require('../src/ezinput');

describe('EzInput invalid JSON cases', () => {
  let input;

  beforeEach(() => {
    input = inputLib.reset('./tests/fixtures/invalid-parsing.test.txt');
  });

  it('should throw for malformed object (missing colon)', () => {
    input.index = 0;
    expect(() => input.object()).toThrow(/Failed to parse/);
  });

  it('should throw for array with trailing comma', () => {
    input.index = 3;
    expect(() => input.array()).toThrow(/Failed to parse/);
  });

  it('should throw for object with missing value', () => {
    input.index = 5;
    expect(() => input.object()).toThrow(/Failed to parse/);
  });

  it('should throw for array missing commas', () => {
    input.index = 10;
    expect(() => input.array()).toThrow(/Failed to parse/);
  });

  it('should throw for incomplete nested object', () => {
    input.index = 17;
    expect(() => input.object()).toThrow(/Failed to parse/);
  });

  it('should throw for unterminated string', () => {
    input.index = 19;
    expect(() => input.json()).toThrow(/Failed to parse/);
  });

  it('should throw for unclosed array', () => {
    input.index = 21;
    expect(() => input.json()).toThrow(/Failed to parse/);
  });

  it('should throw for plain string', () => {
    input.index = 22;
    expect(() => input.json()).toThrow(/Failed to parse/);
  });
});