const fibonacci = function(num) {
    
    let int = Number(num);

    if (int === 0) {
        return 0;
    }

    if (int < 0 || !int) {
        return "OOPS";
    }

    const sequence = [1, 1];

    for (let i = 2; i < num; i++) {
        let nextNum = sequence[i - 2] + sequence [i - 1];
        sequence.push(nextNum);
    }
    
    return sequence[num - 1];
    
};

// Do not edit below this line
module.exports = fibonacci;
