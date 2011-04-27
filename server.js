var http = require('http'),
    controller = require('../webcetas.node/controller'),
    cms = require('./cms/conn/pool');
require('./test');
var args = process.argv;
var port = args[2];

function startServer()
{
    http.createServer( function( req, res ) {
        res_handle = res;
        controller( req, res );
       }).listen( port );
}

cms.init();
startServer();

console.log( 'Server started successfully' );

