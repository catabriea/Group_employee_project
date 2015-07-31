var random = require('./randomNumber');

function name () {
    var first = ["Corina", "Cena", "Maria", "Matt", "Huck", "Cat", "Paul", "Bob", "Sam", "Luke", "Sarah", "Suren", "Tara", "Josh", "Jim", "Ryan", "Lisa", "Brandon", "Skyler", "Eric", "Mikel", "James"];
    var last = ["Mayo", "Doire", "White", "Keck", "Newberry", "Daniels", "De Grote", "Bankston", "Brunt", "Negen", "Brock", "Stommes", "Severson", "Vijayakumar", "Johnson", "Larson", "Coury", "Fix", "Bernstein",  "Stafki", "Sunders", "Peters"];

    var randomNum = random(1, 22);

    var firstName = first[randomNum];
    var lastName = last[randomNum];

    return firstName + ' ' + lastName;
}

//console.log(name());

module.exports = name;