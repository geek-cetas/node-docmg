var dbobj = require('mongodb'),
    ev = require('events').EventEmitter,
    ex = require('../../../webcetas.node/ex').ex,
    inherits = require('sys').inherits;

var ex_msg = {ERROR_CONNECTION : 'Invalid connection'};

var conn = function( name, host, port, options ) {
    this.name = name; this.host = host;
    this.port = port; this.options = options;
}

inherits( conn, ex );
conn.prototype.open = function() {
    var $ = this;
    var db = new dbobj.Db( this.name,
                            new dbobj.Server( this.host,  
                                              this.port,
                                              this.options ));
    db.open( function( err, client ) {
                ex( $, err, function() {
                        $.db = db;
                        $.emit( 'connect', client );
                    });
            });
}

conn.prototype.close = function() {
    var $ = this;
    this.db.close();
    $.emit( 'close' );
}

conn.prototype.table = function( name, callback ) {
    var $ = this;

    if( !$.db )
        ex( this, new Error( ex_msg.ERROR_CONNECTION ));

    db.collection( name, function( err, coll ) {
        ex( $, err, function() {
               callback( coll ); 
           });
    });
}

module.exports = {connection : conn};
