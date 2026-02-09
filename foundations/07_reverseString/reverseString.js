const reverseString = function(string) {
    let reversed = [];

    for (let i = 0; i < string.length; i++) {
        let stringIndex = string.length - 1 - i;
        reversed[i] = string[stringIndex];
    }

    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
