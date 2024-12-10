function isValidUsername(username) {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;
  return usernameRegex.test(username);
}

module.exports = isValidUsername;
