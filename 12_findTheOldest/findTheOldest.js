const findTheOldest = function(array) {
    return array.reduce((p, c) => {
        const oldest = getAge(p.yearOfDeath, p.yearOfBirth);
        const current = getAge(c.yearOfDeath, c.yearOfBirth);
        return oldest < current ? c : p;
    });
};
const getAge = function(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
