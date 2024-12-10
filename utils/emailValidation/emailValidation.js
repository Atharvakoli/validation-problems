function isValidEmail(email) {
  return (
    typeof email === 'string' && email.includes('@') && email.includes('.')
  );
}

module.exports = isValidEmail;
