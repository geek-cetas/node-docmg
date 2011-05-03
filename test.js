var uo = require('./cms/views/users'),
    um = uo.UserManager,
    go = require('./cms/views/groups'),
    gm = go.GroupManager,
    po = require('./cms/views/permissions'),
    pm = po.PermissionsManager;

var newuser = new um;
var newpm = new pm;

newpm.on( 'create', function( perm ) {
        newgrp.create('dummy', new Array(perm));
        console.log( newuser );
        newuser.add_permission( perm, function() { console.log("Added"); } );
    }).on( 'error', function( err ) {
    console.log("ERROR : " + err);
});

newuser.create('kailash', 'kailash',
    function( obj ) {
        newpm.create('bla', 'bla');         
    });

var newgrp = (new gm).on( 'create', function( group ) {
});


