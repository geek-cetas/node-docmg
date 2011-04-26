var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Permission = require('./permissions').Permission;

var Group = new Schema({
    name : String,
    Permissions : [Permission]
});
