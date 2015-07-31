var random = require('./randomNumber');


function scrumpoints (min, max){
    //var randomscrum = random(min, max);
    var randomNum = random(1,9);

    return randomNum;
}
//console.log(scrumpoints());

module.exports = scrumpoints;