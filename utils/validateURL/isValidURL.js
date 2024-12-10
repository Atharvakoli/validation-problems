function isValidURL(url) {
  const cleanedUrl = url.replace(/^<|>$/g, '');
  const urlRange = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
  return urlRange.test(cleanedUrl);
}

module.exports = isValidURL;
