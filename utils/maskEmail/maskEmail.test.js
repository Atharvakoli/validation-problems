const maskEmail = require('./maskEmail');

test('masks email correctly', () => {
  expect(maskEmail('user@example.com')).toBe('u**r@example.com');
});

test('handles short usernames', () => {
  expect(maskEmail('ab@example.com')).toBe('a*@example.com');
});

test('returns "Invalid email" for invalid email format', () => {
  expect(maskEmail('userexample.com')).toBe('Invalid email');
});

test('returns "Invalid email" for empty input', () => {
  expect(maskEmail('')).toBe('Invalid email');
});

test('handles usernames with only one character', () => {
  expect(maskEmail('a@example.com')).toBe('a@example.com');
});
