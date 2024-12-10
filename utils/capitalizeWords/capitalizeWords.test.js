const capitalizeWords = require('./capitalizeWords');

test('capitalizes the first letter of each word', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('handles multiple spaces between words', () => {
  expect(capitalizeWords('hello   world')).toBe('Hello   World');
});

test('returns empty string when input is empty', () => {
  expect(capitalizeWords('')).toBe('');
});

test('capitalizes first letter in a single word', () => {
  expect(capitalizeWords('word')).toBe('Word');
});

test('does not alter already capitalized words', () => {
  expect(capitalizeWords('Hello World')).toBe('Hello World');
});
