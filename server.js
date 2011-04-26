var http = require('http');
var controller = require('../webcetas.node/controller');
var cms = require('./cms/conn/pool');
require('./test');

function startServer()
{
    http.createServer( function( req, res ) {
        res_handle = res;
        controller( req, res );
       }).listen( 8090 );
}

cms.init();
startServer();

console.log( 'Server started successfully' );

