const isValidPassword = (password) => {
  if (typeof password != 'string') {
    return false;
  }
  //   (?=.*[a-z]): At least one lowercase letter.
  // (?=.*[A-Z]): At least one uppercase letter.
  // (?=.*\d): At least one digit.
  // (?=.*[@$!%*?&]): At least one special character (@$!%*?& can be adjusted to include other characters).
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(password);
};
module.exports = isValidPassword;
