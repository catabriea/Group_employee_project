var express = require('express');
var app = express();
var path = require('path');
var Employee =require('./public/assets/scripts/employee');

app.set('port',(process.env.PORT || 5000));

app.get('/employee-request', function(req, res){
    res.json(new Employee());
});

app.get('/*', function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

//app.post('/*', express bodyParser(), function(req, res){
//    req.body(new employee());
// //[{id:134123, url:'www.qwer.com'},{id:131211,url:'www.asdf.com'}]
//});

app.listen(app.get('port'), function(){
    console.log("Hey! Listening on Port: " + app.get('port'));
});
