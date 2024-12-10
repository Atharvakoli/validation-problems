const extractNumbers = require('./extractNumbers');

test('extracts numbers from a string', () => {
  expect(extractNumbers('abc123def')).toBe('123');
});

test('returns empty string when no numbers are present', () => {
  expect(extractNumbers('abcdef')).toBe('');
});

test('handles multiple number sequences', () => {
  expect(extractNumbers('1a2b3c')).toBe('123');
});

test('handles numbers at the start of the string', () => {
  expect(extractNumbers('123abc')).toBe('123');
});

test('returns empty string for empty input', () => {
  expect(extractNumbers('')).toBe('');
});
