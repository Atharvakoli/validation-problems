// trimWhitespace.test.js
const trimWhitespace = require('./whiteSpaceValidation');

test('trims leading and trailing whitespace', () => {
  expect(trimWhitespace('  Hello World  ')).toBe('Hello World');
});

test('returns empty string if input is not a string', () => {
  expect(trimWhitespace(123)).toBe('Given test is not a string');
});

test('trims tabs and newlines along with spaces', () => {
  expect(trimWhitespace('\t  Hello World \n')).toBe('Hello World');
});

test('returns empty string for empty input', () => {
  expect(trimWhitespace('')).toBe('');
});

test('returns empty string for non-string input (number)', () => {
  expect(trimWhitespace(12345)).toBe('Given test is not a string');
});

test('returns empty string for non-string input (null)', () => {
  expect(trimWhitespace(null)).toBe('Given test is not a string');
});

test('returns empty string for non-string input (undefined)', () => {
  expect(trimWhitespace(undefined)).toBe('Given test is not a string');
});
