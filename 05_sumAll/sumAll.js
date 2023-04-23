const sumAll = function(firstInt, lastInt) {
    let sum = 0
    if (firstInt < lastInt) {
        for (i = firstInt; i <= lastInt; i++) {
        sum += i;
        }
    } else if (firstInt > lastInt) {
        for (i = lastInt; i <= firstInt; i++) {
        sum += i;
        }
    } else {sum = firstInt}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
