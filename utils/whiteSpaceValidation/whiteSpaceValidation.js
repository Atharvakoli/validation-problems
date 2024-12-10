const trimWhitespace = (str) => {
  if (typeof str !== 'string') {
    return `Given test is not a string`;
  } else if (str === '') {
    return '';
  } else {
    return str.trim(' ');
  }
};

module.exports = trimWhitespace;
