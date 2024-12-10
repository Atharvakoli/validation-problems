function extractNumbers(str) {
  const numbers = str.match(/\d+/g);
  return numbers ? numbers.join('') : '';
}
module.exports = extractNumbers;
