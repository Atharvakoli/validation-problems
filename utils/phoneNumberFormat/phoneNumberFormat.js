function formatPhoneNumber(str) {
  if (typeof str !== 'string' || str.length != 10 || !/^\d+$/.test(str))
    return 'Invalid phone number';
  const firstThree = str.slice(0, 3);
  const nextThree = str.slice(3, 6);
  const lastFour = str.slice(6);

  return `(${firstThree}) ${nextThree}-${lastFour}`;
}
module.exports = formatPhoneNumber;
