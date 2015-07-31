function randomNumber (min, max) {
    return Math.floor(Math.random() *  (max - min + 1)) + min;
};

//console.log (randomNumber());
module.exports = randomNumber;