var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Permission = require('./permissions').Permission;

var Group = new Schema({
    name : String,
    Permissions : [Permission]
});

mongoose.model( 'Group', Group );

module.exports = {Group : function() {
                     return mongoose.model('Group'); }
                    };
