function maskEmail(email) {
  if (!email || !email.includes('@')) {
    return 'Invalid email';
  }
  const [username, domain] = email.split('@');

  if (username.length <= 2) {
    return email;
  }
  const maskedUsername =
    username[0] +
    '*'.repeat(username.length - 2) +
    username[username.length - 1];

  return maskedUsername + '@' + domain;
}
module.exports = maskEmail;
