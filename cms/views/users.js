var ev = require('events'),
    inherits = require('sys').inherits,
    ex = require('../../../webcetas.node/ex').ex,
    user = require('../models/user').User();

var Operations = function() {
}

inherits( Operations, ev.EventEmitter );

Operations.prototype.create = function( name, pwd ) {
    var $ = this;
    var usr = new user;
    usr.name = name;
    usr.pwd = pwd;
    usr.is_active = 1;
    usr.save( function( err ) {
        ex( $, err, function() {
            $.emit( 'create', usr );
        });
    });
}

Operations.prototype.search = function( name ) {
    var $ = this;
    user.find({'name' : name}, function( err, docs ) {
        ex( $, err, function() {
            $.emit( 'search', docs.length );
        });
    });
}

module.exports = {UserManager : function() {
        return new Operations();
    }
}
