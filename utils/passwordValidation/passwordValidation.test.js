// isValidPassword.test.js
const isValidPassword = require('./passwordValidation');

test('validates strong password with uppercase, lowercase, and number', () => {
  expect(isValidPassword('!Password123')).toBe(true); // valid password
});

test('fails password that is too short', () => {
  expect(isValidPassword('Pass1')).toBe(false); // too short
});

test('fails password without uppercase letter', () => {
  expect(isValidPassword('password123')).toBe(false); // no uppercase
});

test('fails password without lowercase letter', () => {
  expect(isValidPassword('PASSWORD123')).toBe(false); // no lowercase
});

test('fails password without a number', () => {
  expect(isValidPassword('Password')).toBe(false); // no number
});

test('fails password with special characters but missing a required component', () => {
  expect(isValidPassword('Password!')).toBe(false); // no number
});

test('validates password with special characters as long as it meets all requirements', () => {
  expect(isValidPassword('P@ssw0rd!')).toBe(true); // strong password with special characters
});

test('fails empty string as password', () => {
  expect(isValidPassword('')).toBe(false); // empty string
});

test('fails null password', () => {
  expect(isValidPassword(null)).toBe(false); // null password
});

test('fails undefined password', () => {
  expect(isValidPassword(undefined)).toBe(false); // undefined password
});

test('fails password with only numbers', () => {
  expect(isValidPassword('12345678')).toBe(false); // only numbers
});

test('fails password with only letters', () => {
  expect(isValidPassword('abcdefgh')).toBe(false); // only letters
});
