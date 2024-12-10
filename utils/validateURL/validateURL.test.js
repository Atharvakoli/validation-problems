const isValidURL = require('./validateURL');

test('validates a correct http URL', () => {
  expect(isValidURL('http://example.com')).toBe(true);
});

test('validates a correct https URL', () => {
  expect(isValidURL('https://example.com')).toBe(true);
});

test('returns false for URLs without http or https', () => {
  expect(isValidURL('ftp://example.com')).toBe(false);
});

test('returns false for an empty string', () => {
  expect(isValidURL('')).toBe(false);
});

test('returns false for URLs without protocol', () => {
  expect(isValidURL('example.com')).toBe(false);
});
