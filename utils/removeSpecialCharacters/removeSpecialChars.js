function removeSpecialChars(str) {
  return str.replace(/[~!#@$%^&*\-_|'/?]/g, '');
}
module.exports = removeSpecialChars;
