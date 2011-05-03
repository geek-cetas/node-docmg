var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Permission = require('./permissions').Permission_model;

var Group = new Schema({
    name : String,
    permissions : [Schema.ObjectId]
});

mongoose.model( 'Group', Group );

module.exports = {Group : function() {
                     return mongoose.model('Group'); },
                  Group_model : Group,
                    };
