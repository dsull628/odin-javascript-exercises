const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
        const valueToRemove = args[i];
        
        for (let j = arr.length; j >= 0; j--) {
            if (arr[j] === valueToRemove) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
