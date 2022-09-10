const removeFromArray = function(array, ...args) {
    let result = [];
    array.forEach(val => {
        if (!args.includes(val)) result.push(val);
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
