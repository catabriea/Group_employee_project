var name = require('./name');
var skillset = require('./skillset');
var scrumpoints = require('./scrumpoints');

//var randomscrumpoints = function (){
//    var scrum = scrumpoints(1,9);
//    return scrum;
//};
//
//randomscrumpoints();
//
//var randomname = function (){
//    var employeename = name(1, 435);
//    return employeename;
//};
//
//randomname();
//
//var randomskill = function (){
//    var skill = skillset(1, 3);
//    return skill;
//};
//
//randomskill();


function Employee (){
    this.employeename = name( );
    this.skill = skillset(1, 3);
    this.scrum = scrumpoints(1, 9);

    //return scrum + employeename + skill;

}
//
//console.log (name(), skill, scrumpoints());

//    return randomname();
//    return randomscrumpoints();
//    return randomskill();
//};

module.exports = Employee;