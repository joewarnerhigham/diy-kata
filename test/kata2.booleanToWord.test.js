const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  test('returns yes if true', () => {
    expect(booleanToWord(1)).toEqual('yes');
  });

  test('return no if false or undefined', () => {
    expect(booleanToWord(0)).toEqual('no');
  });
});