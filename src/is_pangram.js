const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = function(text) {
  
  const textLowerCase = text.toLowerCase()
  
  const letterCount = {};

  for (const letter of textLowerCase) {
    letterCount[letter] = true;
  }

  for (const letter of ALPHABET) {
    if (!letterCount[letter]) {
      return false;
    }
  }

  return true;
};

module.exports = isPangram;
