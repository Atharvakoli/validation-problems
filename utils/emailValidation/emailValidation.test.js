// emailValidation.test.js
const isValidEmail = require('./emailValidation');

test('valid email returns true', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});

test('missing "@" returns false', () => {
  expect(isValidEmail('testexample.com')).toBe(false);
});

test('missing "." returns false', () => {
  expect(isValidEmail('test@examplecom')).toBe(false);
});

test('missing both "@" and "." returns false', () => {
  expect(isValidEmail('testexamplecom')).toBe(false);
});

test('non-string input returns false', () => {
  expect(isValidEmail(12345)).toBe(false);
});
