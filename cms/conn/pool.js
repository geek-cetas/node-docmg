var db = require('./db'),
    mongoose = require('mongoose');

var connection = function() {
   return new db.connection( 'cms', '127.0.0.1', 27017 );
}

var init = function() {
    mongoose.connect('mongodb://localhost/cms');
}

module.exports = {get : connection,
                  init : init};
