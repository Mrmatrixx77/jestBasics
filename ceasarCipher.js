// basic Ceasar's Cipher implementation with key of 3

// It will take char between ASCII

let cipheredString = "";
function CeasarCipher(string) {
  for (let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
    let newString = String.fromCharCode(ascii + 3);
    cipheredString += newString;
  }
  return cipheredString;
}

module.exports = CeasarCipher;
