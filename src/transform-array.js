const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //if (Object.prototype.toString.call(arr) != "[object Array]") {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  if (arr == []) return arr;
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != "--discard-next" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--double-prev") {
    newArr.push(arr[i]);
    continue;
    } switch (arr[i]) {
        case "--discard-next":
          if (i == arr.length - 1) break;
          i++;
          if (arr[i + 1] == "--double-prev" || arr[i + 1] == "--discard-prev") i++;
          break;
        case "--double-next":
          if (i == arr.length - 1) break;
          newArr.push(arr[i + 1]);
          newArr.push(arr[i + 1]);
          i++;
          break;
        case "--discard-prev":
          if (i == 0) break;
          newArr.pop();
          break;
        case "--double-prev":
          if (i == 0) break;
          newArr.push(arr[i - 1]);
          //break;    
      }
  }
  return newArr;
};
