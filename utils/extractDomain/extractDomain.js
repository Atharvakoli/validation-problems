function extractDomain(email) {
  const emailRages = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRages.test(email)) return 'Invalid email';
  return email.split('@')[1];
}

module.exports = extractDomain;
