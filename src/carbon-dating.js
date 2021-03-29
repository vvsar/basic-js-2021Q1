const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SAMPLE_ACTIVITY) { 
  if (typeof(SAMPLE_ACTIVITY) !== "string") return false;
  let sa = Number(SAMPLE_ACTIVITY);
  if (sa && (sa > 0 && sa < MODERN_ACTIVITY)) {
  let d = Math.ceil(Math.log(MODERN_ACTIVITY / sa)/(0.693 / HALF_LIFE_PERIOD));
  return d;
  };
  return false;
};
