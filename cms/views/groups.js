var ev = require('events'),
    inherits = require('sys').inherits,
    ex = require('../../../webcetas.node/ex').ex,
    group = require('../models/group').Group();

var Operations = function() {
}

inherits( Operations, ev.EventEmitter );

Operations.prototype.create = function( name, permissions ) {
    var $ = this;
    var grp = new group();
    grp.name = name;
    if( permissions )
        for( var index = 0; index < permissions.length; index++ )
            grp.permissions.push( permissions[index]._id );

    grp.save( function( err ) {
        ex( $, err, function() {
                $.emit( 'create', grp );
            });
    });
}

Operations.prototype.search = function( name ) {
    var $ = this;
    group.find( {'name' : name}, function( err, docs ) {
        ex( $, err, function() {
            $.emit( 'search', docs );
        });
    });
}

module.exports = {GroupManager : function() {
        return new Operations();
    }
}
