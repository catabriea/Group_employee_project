var random = require('./randomNumber');

function skillset (min, max) {
    //switch (random(1, 3)) {
    //    case "1":
    //        var skill = "Front End"
    //        break;
    //    case "2":
    //        var skill = "Client side"
    //        break;
    //    case "3":
    //        var skill = "Server side"
    //        break;
    var skill = ["Front End", "Client side", "Server side"];

    var randomNum = random(1, 3);

    var empskill = skill[randomNum];

    return empskill;
}
//
//console.log(skillset());

module.exports = skillset;

//var num = Math.....* skills.length (option*****)