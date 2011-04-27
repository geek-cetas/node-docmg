var ev = require('events'),
    inherits = require('sys').inherits,
    ex = require('../../../webcetas.node/ex').ex,
    permission = require('../models/permissions').Permission();

function Operations() {
}

inherits( Operations, ev.EventEmitter );

Operations.prototype.create = function( alias, name ) {
    var $ = this;
    var perm = new permission({ 'name' : name, 'code' : alias });
    perm.save( function( error ) {
        ex( $, error, function() { 
            $.emit( 'create', perm );
        });
    });
}

Operations.prototype.search = function( name ) { 
    var $ = this;
    permission.find({ 'name' : name }, function( err, docs ) {
        ex( $, err, function() {
            $.emit( 'search', docs );
        });
    });
}

module.exports = {PermissionsManager : function() { 
                    return new Operations();
                    }
                 }
