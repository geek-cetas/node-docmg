var inherits = require('sys').inherits,
    mongoose = require('mongoose'),
    Group = require('./group').Group,
    Permission = require('./permissions').Permission,
    Schema = mongoose.Schema;

var UserSchema = function(obj) {
}

var User = new Schema({
    name : String,
    pwd  : String,
    is_staff : {type : Number, min : 0, max : 1, Default : 0},
    is_active : {type : Number, min : 0, max : 1, Default : 1},
    is_superuser : {type : Number, min : 0, max : 1, Default : 0},
    groups : [Schema.ObjectId],
    permissions : [Schema.ObjectId]
});

mongoose.model( 'User', User );
module.exports = {User : function() { 
                    return mongoose.model('User');
                    },
                  User_model : User
                 }
