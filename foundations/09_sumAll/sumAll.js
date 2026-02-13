const sumAll = function(num1, num2) {
    let sum = 0;

    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    const minNum = Math.min(num1, num2);
    const maxNum = Math.max(num1, num2);
    const range = maxNum - minNum;

    for (let i = 0; i <= range; i++) {
        sum = sum + minNum + i;
        console.log(sum);
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
