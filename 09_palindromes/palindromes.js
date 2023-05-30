const palindromes = function (str) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let array = str
        .toLowerCase()
        .split("")
        .filter(function(a){
            return punctuation.indexOf(a) === -1;
        });
    let inverseArray = array.slice().reverse();
    for (let i = 0; i < (array.length + 1) / 2; i++) {
        if (array[i] !== inverseArray[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
