const reverseString = function(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
