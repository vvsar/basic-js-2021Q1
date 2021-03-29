const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str != "string") str = String(str);
  const { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  let repeat = "";
  let addon = addition;
  for (i = 1; i < additionRepeatTimes; i++) {
    addon += `${additionSeparator}${addition}`;
  }
  for (j = 1; j < repeatTimes; j++) {
    repeat += `${separator}${str}${addon}`;
  }
  return `${str}${addon}${repeat}`
};
  