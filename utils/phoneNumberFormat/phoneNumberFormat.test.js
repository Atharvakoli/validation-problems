const formatPhoneNumber = require('./phoneNumberFormat'); // Import the function from valid.js

// Test cases for formatPhoneNumber
test('formats standard 10-digit phone number correctly', () => {
  expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
});

test('formats another valid 10-digit phone number', () => {
  expect(formatPhoneNumber('0987654321')).toBe('(098) 765-4321');
});

test('returns "Invalid phone number" for less than 10 digits', () => {
  expect(formatPhoneNumber('1234567')).toBe('Invalid phone number');
});

test('returns "Invalid phone number" for more than 10 digits', () => {
  expect(formatPhoneNumber('123456789012')).toBe('Invalid phone number');
});

test('returns "Invalid phone number" for non-numeric characters', () => {
  expect(formatPhoneNumber('abcdefghij')).toBe('Invalid phone number');
});

test('formats all-zero 10-digit phone number', () => {
  expect(formatPhoneNumber('0000000000')).toBe('(000) 000-0000');
});

test('formats random valid 10-digit number', () => {
  expect(formatPhoneNumber('9998887777')).toBe('(999) 888-7777');
});

test('returns "Invalid phone number" for number with whitespace', () => {
  expect(formatPhoneNumber('123 456 7890')).toBe('Invalid phone number');
});

test('returns "Invalid phone number" for empty string', () => {
  expect(formatPhoneNumber('')).toBe('Invalid phone number');
});

test('returns "Invalid phone number" for null input', () => {
  expect(formatPhoneNumber(null)).toBe('Invalid phone number');
});

test('returns "Invalid phone number" for undefined input', () => {
  expect(formatPhoneNumber(undefined)).toBe('Invalid phone number');
});
