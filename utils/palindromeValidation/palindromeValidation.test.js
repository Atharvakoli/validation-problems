const isPalindrome = require('./palindromeValidation');

test('checks a simple palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('returns false for a non-palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('ignores spaces and punctuation', () => {
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});

test('returns true for single character', () => {
  expect(isPalindrome('a')).toBe(true);
});

test('returns true for empty string', () => {
  expect(isPalindrome('')).toBe(true);
});
