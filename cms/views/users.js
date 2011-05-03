var ev = require('events'),
    inherits = require('sys').inherits,
    safe = require('../../../webcetas.node/safe');
    user = require('../models/user').User();

var Operations = function( uname ) {
    if( !uname ) return;

    var $ = this;
    $.search( uname, function( user ) { 
        if( user.__proto__ == Array.prototype && user.length > 1 )
            throw new Error("Invalid username. Duplicate entries");
        else
            $.user = user;
    } );
    
}

Operations.prototype.create = function( name, pwd, callback ) {
    var $ = this;
    var usr = new user;
    usr.name = name;
    usr.pwd = pwd;
    usr.is_active = 1;
    usr.save( function( err ) {
        $.user = usr;
        safe.ex( err, callback, usr );
    });
}

Operations.prototype.add_permission = function( permission, callback ) {
    var $ = this;
    if( this.user == null )
    {
        throw new Error("Invalid user");
        return false;
    }
    this.user.permissions.push( permission );
    this.user.save( function( err ) {
        safe.ex( err, callback, $.user );
    });
}

Operations.prototype.search = function( name, callback ) {
    var $ = this;
    user.find( {'name' : name}, function( err, docs ) {
        safe.ex( err, callback, docs );
    });
}

var has_perm = function( user, perm ) {
    if( user.permissions )
        for( var index = 0; index < user.permissions.length; index ++ )
            if( permissions[index] == perm.code )
                return true;
    return false;
}

module.exports = {UserManager : function() {
        return new Operations();
    },
    has_permission : has_perm,
}
