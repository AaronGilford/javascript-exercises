const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    let oldNumber = 0;
    let difference;
    let newNumber = 1;
    for(i = 0; i < a; i++) {
        if (i < 2) {
            newNumber = 1;
        } else {
            difference = newNumber - oldNumber;
            oldNumber = difference;
            newNumber = +newNumber + difference;
        }
    }
    return newNumber;
    
};

// Do not edit below this line
module.exports = fibonacci;
