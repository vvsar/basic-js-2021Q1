const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let n = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') n = n + 1;
    }
  }
  return n;
}
