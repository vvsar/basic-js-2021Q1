
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let depthCalc = 0;
            if (Array.isArray(arr)) {
                for (let i = 0; i < arr.length; i++) {
                    //depthCalc = 1;
                    depthCalc = Math.max(depthCalc, this.calculateDepth(arr[i]));
                }
                depthCalc++;        
            }
        return depthCalc;
    }
};

