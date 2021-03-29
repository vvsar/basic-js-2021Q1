const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == []) return "";
  if (typeof members !== "object" || members === null) return false;
  let arr = [];
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === "string")
    arr.push(members[i]);
  }
  let letters = [];
  for (j = 0; j < arr.length; j++) {
    for (k = 0; k < arr[j].length; k++) {
      let str = arr[j];
      if (str[k] == " ") continue;
      letters.push(str[k])
      break;
    }
  }
  for (m = 0; m < letters.length; m++) {   
    letters[m] = letters[m].toUpperCase();
  }  
  letters.sort();
  let teamname = letters.join("")
  return teamname;
};
