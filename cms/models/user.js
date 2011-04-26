var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({
    name : String,
    pwd  : String
});

mongoose.model('User', User);
module.exports = {User : function() { return mongoose.model('User');}}
