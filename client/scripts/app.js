var randomProject = function (min, max) {
    return Math.floor(Math.random() *  (max - min + 1)) + min;
};

$(document).ready(function(){
   $(".projectButton").on("click", function(){
       $("#project").empty("#project");
       $('#project').append("<h2>Company Name: " + randomProject(1, 5000) + "</h2>");
        $("#project").append("<div id ='frontend' class='col-md-4'>Front End Scrum Points: " + randomProject(10, 60) + "</div>");
        $("#project").append("<div id ='clientside' class='col-md-4'>Client Side Scrum Points: " + randomProject(10, 60) + "</div>");
        $("#project").append("<div id ='serverside' class='col-md-4'>Server Side Scrum Points: " + randomProject(10, 60) + "</div>");
        $("#project").append("<button id ='assignstaff' class='btn btn-primary'>Assign Staff</button>");
       //append new project (
       //alert("I work!");
   });
    $("body").on('click', '#assignstaff', function () {
        //$("#staff").empty("#staff");
        //$('#staff').append("<div id ='frontend' class='col-md-4'>Front End Scrum Points: " + skillpoints + "</div>");
        $.ajax({
            url: '/employee-request',
            success: function (data) {
                console.log(data);
            }
        });
    });
});
