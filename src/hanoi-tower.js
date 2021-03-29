const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let OBJ = { turns: 0, seconds: 0 };
  let t = 2 ** disksNumber - 1;
  let s = Math.floor(t / turnsSpeed * 3600);
  OBJ.turns = t;
  OBJ.seconds = s;
  return OBJ;
};
