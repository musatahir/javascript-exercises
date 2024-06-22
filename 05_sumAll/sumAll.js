const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    minNum = Math.min(num1, num2)
    maxNum = Math.max(num1, num2)
    let res = 0;
    for (let i = minNum; i <= maxNum; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
