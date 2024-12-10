const extractDomain = require('./extractDomain');

test('extracts domain from valid email', () => {
  expect(extractDomain('user@example.com')).toBe('example.com');
});

test('returns "Invalid email" for email without @', () => {
  expect(extractDomain('userexample.com')).toBe('Invalid email');
});

test('returns "Invalid email" for email with multiple @', () => {
  expect(extractDomain('user@name@domain.com')).toBe('Invalid email');
});

test('extracts domain from email with subdomain', () => {
  expect(extractDomain('user@mail.example.com')).toBe('mail.example.com');
});

test('returns "Invalid email" for empty string', () => {
  expect(extractDomain('')).toBe('Invalid email');
});
