const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(arg) {
  if (arg == null) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(arg) != "[object Date]") 
    throw new Error('Error');
  let date = new Date(arg);
  let seasons = ['winter', 'spring', 'summer', 'autumn']
  let m = date.getMonth();
  let n = 0
  if (m >= 2 && m <= 4) n = 1;
  if (m >= 5 && m <= 7) n = 2;
  if (m >= 8 && m <= 10) n = 3;
  return seasons[n];
};
