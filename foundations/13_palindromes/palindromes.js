const palindromes = function (string) {
    
    const punctuationLess = string.replace(/[\p{P}\p{S}]/gu, '');
    const spaceLess = punctuationLess.replace(/\s/g, '');

    const reversed = [...spaceLess].reverse().join('')

    console.log(punctuationLess);
    console.log(spaceLess)
    console.log(reversed);
    

    if (reversed.toLowerCase() === spaceLess.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
