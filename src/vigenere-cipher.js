const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(dirMach = true) {
    this.dirMach = dirMach;
  };
  
  encrypt(str, key) {
    if (arguments.length < 2) {
      throw new Error('error');
    }
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let arr = [];
    let j = 0;
    for (i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) == -1) {
        arr.push(str[i]);
        continue;
      }
      let k = abc[((abc.indexOf(str[i]) + abc.indexOf(key[j])) % 26)];
      j++;
      if (j == key.length) {
        j = 0;
      }
      arr.push(k);
    }
    if (!this.dirMach) arr.reverse();
    let newStr = arr.join('');
    return newStr;
  }    

  decrypt(encryptedStr, key) {
    if (arguments.length < 2) {
      throw new Error('error');
    };
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedStr = encryptedStr.toUpperCase();
    key = key.toUpperCase();
    let arr = [];
    let j = 0;
    for (i = 0; i < encryptedStr.length; i++) {
      if (abc.indexOf(encryptedStr[i]) == -1) {
        arr.push(encryptedStr[i]);
        continue;
      }
      let k = abc[(abc.indexOf(encryptedStr[i]) - abc.indexOf(key[j]) + 26) % 26]; 
      j++;
      if (j == key.length) {
        j = 0;
      }
      arr.push(k);
    }
    if (!this.dirMach) arr.reverse();
    let newStr = arr.join('');
    return newStr;
  }
}

module.exports = VigenereCipheringMachine;
