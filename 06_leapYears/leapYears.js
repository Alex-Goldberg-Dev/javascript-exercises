const leapYears = function(year) {
    // leap years are divisible by 4 except years that divisible by 100 unless also divisible by 400
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
