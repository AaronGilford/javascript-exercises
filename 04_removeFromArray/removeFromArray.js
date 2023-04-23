const removeFromArray = function(array, arg) {
    const argIndex = array.indexOf(arg);
    const removedArg = array.splice(argIndex, 1);
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));



// Do not edit below this line
module.exports = removeFromArray;
