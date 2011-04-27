var um = require('./cms/views/users').UserManager;
var gm = require('./cms/views/groups').GroupManager;
var pm = require('./cms/views/permissions').PermissionsManager;

var newuser = (new um).on( 'create',
    function( obj ) {
         var v = obj.is_active;
         console.log(v + 1)
    }).on( 'search', function( docs ) {
         console.log(typeof( docs ));
    });

var newgrp = (new gm).on( 'create', function( group ) {
    });

var newpm = (new pm).on( 'create', function( perm ) {
        newgrp.create('dummy', perm);
    }).on( 'error', function( err ) {
    console.log("ERROR : " + err);
    });

newuser.create('kailash', 'kals');
newuser.search('kailash');
newpm.create('hello', "Hello");
newgrp.search('dummy');
