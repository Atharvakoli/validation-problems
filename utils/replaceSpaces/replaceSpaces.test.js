const replaceSpaces = require('./replaceSpaces');

test('replaces spaces with underscores', () => {
  expect(replaceSpaces('hello world')).toBe('hello_world');
});

test('does nothing for a string without spaces', () => {
  expect(replaceSpaces('helloworld')).toBe('helloworld');
});

test('handles multiple spaces correctly', () => {
  expect(replaceSpaces('hello    world')).toBe('hello____world');
});

test('returns empty string for empty input', () => {
  expect(replaceSpaces('')).toBe('');
});

test('handles leading and trailing spaces', () => {
  expect(replaceSpaces('  hello world  ')).toBe('__hello_world__');
});
