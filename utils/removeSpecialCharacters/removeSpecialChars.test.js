const removeSpecialChars = require('./removeSpecialChars');

// Existing test cases
test('removes special characters from string', () => {
  expect(removeSpecialChars('Hello@World!')).toBe('HelloWorld');
});

test('removes special characters but keeps spaces', () => {
  expect(removeSpecialChars('User@ name123#')).toBe('User name123');
});

// Additional test cases
test('removes all special characters from a string with symbols', () => {
  expect(removeSpecialChars('#$%^&*()')).toBe(''); // only special characters
});

test('returns the same string when no special characters are present', () => {
  expect(removeSpecialChars('Username123')).toBe('Username123'); // no special characters
});

test('handles strings with spaces correctly', () => {
  expect(removeSpecialChars('John Doe')).toBe('John Doe'); // spaces allowed
});

test('removes special characters from alphanumeric string with dashes and underscores', () => {
  expect(removeSpecialChars('user-name_123')).toBe('username123'); // removes dashes and underscores
});

test('removes special characters from a string with numbers', () => {
  expect(removeSpecialChars('hello@123')).toBe('hello123'); // keeps numbers, removes special chars
});

test('returns empty string for input with only special characters', () => {
  expect(removeSpecialChars('@#$%^&*')).toBe(''); // only special characters
});

test('returns an empty string for an empty input', () => {
  expect(removeSpecialChars('')).toBe(''); // empty input
});

test('returns empty string for null input', () => {
  expect(removeSpecialChars(null)).toBe(''); // null input
});

test('returns empty string for undefined input', () => {
  expect(removeSpecialChars(undefined)).toBe(''); // undefined input
});
