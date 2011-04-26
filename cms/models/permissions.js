var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Permission = new Schema({
    name : String,
    code : String
});

mongoose.model( 'Permission', Permission );

module.exports = {Permission : function() { 
                    return mongoose.model('Permission');
                    }
                 }
