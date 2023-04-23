const sumAll = function(firstInt, lastInt) {
    let sum = 0
    if (firstInt < 0 || lastInt < 0) {
        sum = "ERROR";
    } else if (
    typeof(firstInt) !== "number" || 
    typeof(lastInt) !== "number") {
        sum = "ERROR";    
    } else if (firstInt < lastInt) {
        for (i = firstInt; i <= lastInt; i++) {
        sum += i;
        }
    } else if (firstInt > lastInt) {
        for (i = lastInt; i <= firstInt; i++) {
        sum += i;
        }
    } else {sum = "ERROR"}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
