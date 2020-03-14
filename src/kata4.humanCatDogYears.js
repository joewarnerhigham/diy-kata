const humanCatDogYears = number => {
    let catAge;
    let dogAge;

    if (number <=0 || typeof number != 'number') {
        return [0, 0, 0];
    }

    if (number === 1) {
        dogAge = 15;
        catAge = 15;
    }

    if (number ===2) {
        dogAge = 24;
        catAge = 24;
    }

    if (number > 2) {
        dogAge = number * 5 + 14;
        catAge = number * 4 + 16;
    };

    return [number, catAge, dogAge];
};
module.exports = humanCatDogYears;