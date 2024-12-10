const capitalizeWords = require('./utils/capitalizeWords/capitalizeWords');
const isValidEmail = require('./utils/emailValidation/emailValidation');
const extractDomain = require('./utils/extractDomain/extractDomain');
const extractNumbers = require('./utils/extractNumbers/extractNumbers');
const maskEmail = require('./utils/maskEmail/maskEmail');
const isPalindrome = require('./utils/palindromeValidation/palindromeValidation');
const isValidPassword = require('./utils/passwordValidation/passwordValidation');
const formatPhoneNumber = require('./utils/phoneNumberFormat/phoneNumberFormat');
const removeSpecialChars = require('./utils/removeSpecialCharacters/removeSpecialChars');
const replaceSpaces = require('./utils/replaceSpaces/replaceSpaces');
const reverseString = require('./utils/reverseString/reverseString');
const isValidURL = require('./utils/validateURL/isValidURL');
const isValidUsername = require('./utils/validUserName/validUserName');
const trimWhitespace = require('./utils/whiteSpaceValidation/whiteSpaceValidation');

// test cases
console.log('------- Email Validations -------');
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('testexample.com')); // false
console.log(isValidEmail('test@examplecom')); // false
console.log(isValidEmail(1234)); // false

console.log('------- White Space Validation -------');
console.log(trimWhitespace('  Hello World  '));
console.log(trimWhitespace(123));
console.log(trimWhitespace('\t  Hello World \n'));
console.log(trimWhitespace(12345));
console.log(trimWhitespace(''));
console.log(trimWhitespace(null));
console.log(trimWhitespace(undefined));

console.log('------- Password Validation -------');
console.log(isValidPassword('!Password123'));
console.log(isValidPassword('Pass1'));
console.log(isValidPassword('password123'));
console.log(isValidPassword('PASSWORD123'));
console.log(isValidPassword('Password'));
console.log(isValidPassword('Password!'));
console.log(isValidPassword('P@ssw0rd!'));
console.log(isValidPassword(''));
console.log(isValidPassword(null));
console.log(isValidPassword(undefined));
console.log(isValidPassword('12345678'));
console.log(isValidPassword('abcdefgh'));

console.log('------- Remove Special Characters -------');
console.log(removeSpecialChars('Hello@World!')); // 'HelloWorld'
console.log(removeSpecialChars('User@ name123#')); //'User name123'
console.log(removeSpecialChars('#$%^&*()')); //'' (all special characters removed)
console.log(removeSpecialChars('Username123')); //'Username123' (no special characters to remove)
console.log(removeSpecialChars('John Doe')); //'John Doe' (spaces should remain)
console.log(removeSpecialChars('user-name_123')); //'username123' (removes dashes and underscores)
console.log(removeSpecialChars('Spaces   and $pec!al Chars!')); //'Spaces   and pecal Chars' (removes special characters but keeps spaces)
console.log(removeSpecialChars('!!!123ABCxyz!!!')); //'123ABCxyz' (removes exclamation marks)
console.log(removeSpecialChars('')); //'' (empty string should remain empty)

console.log('------- Phone Number Format -------');
console.log(formatPhoneNumber('1234567890')); //'(123) 456-7890' (standard 10-digit phone number)
console.log(formatPhoneNumber('0987654321')); //'(098) 765-4321' (valid 10-digit phone number)
console.log(formatPhoneNumber('1234567')); //'Invalid phone number' (not enough digits)
console.log(formatPhoneNumber('123456789012')); //'Invalid phone number' (too many digits)
console.log(formatPhoneNumber('abcdefghij')); //'Invalid phone number' (non-numeric characters)
console.log(formatPhoneNumber('0000000000')); //'(000) 000-0000' (valid number, all zeros)
console.log(formatPhoneNumber('9998887777')); //'(999) 888-7777' (valid random 10-digit number)
console.log(formatPhoneNumber('123 456 7890')); //'Invalid phone number' (contains spaces)
console.log(formatPhoneNumber('(123)4567890')); //'Invalid phone number' (contains parentheses)
console.log(formatPhoneNumber('123-456-7890')); //'Invalid phone number' (contains dashes)
console.log(formatPhoneNumber('')); //'Invalid phone number' (empty string)
console.log(formatPhoneNumber(null)); //'Invalid phone number' (null input)
console.log(formatPhoneNumber(undefined)); //'Invalid phone number' (undefined input)

console.log('------- Valid User Name -------');
console.log(isValidUsername('user_123')); // true
console.log(isValidUsername('validUsername')); // true
console.log(isValidUsername('user')); // false (too short)
console.log(isValidUsername('this_is_a_valid_username')); // false (too long)
console.log(isValidUsername('invalid@username')); // false (contains invalid character)

console.log('------- Capitalized First Latter -------');
console.log(capitalizeWords('hello world')); // Hello World
console.log(capitalizeWords('this is a test')); // This Is A Test
console.log(capitalizeWords('   leading spaces')); // Leading Spaces
console.log(capitalizeWords('trailing spaces   ')); // Trailing Spaces
console.log(capitalizeWords('123 numbers and words')); // 123 Numbers And Words

console.log('------- Extract Domain From Email -------');
console.log(extractDomain('user@example.com')); // example.com
console.log(extractDomain('admin@mail.domain.com')); // mail.domain.com
console.log(extractDomain('user@subdomain.example.com')); // subdomain.example.com
console.log(extractDomain('invalid-email')); // Invalid email
console.log(extractDomain('user@company.org')); // company.org

console.log('------- Reverse String -------');
console.log(reverseString('hello')); // olleh
console.log(reverseString('world')); // dlrow
console.log(reverseString('12345')); // 54321
console.log(reverseString('racecar')); // racecar (palindrome)
console.log(reverseString('JavaScript')); // tpircSavaJ

console.log('------- Palindrome String -------');
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('12321')); // true
console.log(isPalindrome('Was it a car or a cat I saw?')); // true

console.log('------- Replace Spaces -------');
console.log(replaceSpaces('hello world')); // hello_world
console.log(replaceSpaces('this has    multiple spaces')); // this_has____multiple_spaces
console.log(replaceSpaces('leading and trailing spaces  ')); // leading_and_trailing_spaces__
console.log(replaceSpaces('no_spaces_here')); // no_spaces_here
console.log(replaceSpaces('')); // (empty string)

console.log('------- Exctract Numbers -------');
console.log(extractNumbers('abc123def')); // 123
console.log(extractNumbers('my phone number is 1234567890')); // 1234567890
console.log(extractNumbers('no numbers here!')); // (empty string)
console.log(extractNumbers('the cost is $30.50')); // 3050
console.log(extractNumbers('room 101')); // 101

console.log('------- Validate URL -------');
console.log(isValidURL('<http://example.com>')); // true
console.log(isValidURL('<https://example.com>')); // true
console.log(isValidURL('<ftp://example.com>')); // false
console.log(isValidURL('example.com')); // false
console.log(isValidURL('http://')); // false

console.log('------- Masked Email -------');
console.log(maskEmail('user@example.com')); // u**r@example.com
console.log(maskEmail('a@domain.com')); // a@domain.com
console.log(maskEmail('ab@domain.com')); // a*@domain.com
console.log(maskEmail('username@domain.com')); // u******e@domain.com
console.log(maskEmail('')); // Invalid email
