const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
    let result = 0;
    let lowNum;
    let highNum;
    if (num1 - num2 > 0) {
        highNum = num1;
        lowNum = num2;
    } else {
        highNum = num2;
        lowNum = num1;
    }
    for (let i = lowNum; i <= highNum; i++) result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
