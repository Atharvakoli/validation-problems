const reverseString = require('./reverseString');

test('reverses a regular string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('returns empty string for empty input', () => {
  expect(reverseString('')).toBe('');
});

test('handles single character string', () => {
  expect(reverseString('a')).toBe('a');
});

test('reverses a numeric string', () => {
  expect(reverseString('12345')).toBe('54321');
});
