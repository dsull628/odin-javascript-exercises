const findTheOldest = function(arr) {
    const sorted = arr.toSorted((a, b) => { 
        const today = new Date();
        const thisYear = today.getFullYear();

        const bDeath = b.yearOfDeath ?? thisYear;
        const aDeath = a.yearOfDeath ?? thisYear;
        
        const bAge = bDeath - b.yearOfBirth;
        const aAge = aDeath - a.yearOfBirth;
        
        return bAge - aAge
    });
    
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
