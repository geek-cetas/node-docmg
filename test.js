var user = require('./cms/models/user'); 

var model = user.User();
var u = new (user.User()); 
u.name = "kailash";
u.pwd = "dummy";

u.save(function(err) { console.log(err);});
