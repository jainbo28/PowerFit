const router = require('express').Router();
const { app } = require('apico/server.js');

/** Declare routes for Router */


/// http://localhost:3000/customers/all
router.post('/all', function( req, res ){

    res.json({"message":"OK"});
});


/// http://localhost:3000/customers/create
router.post('/create', function( req, res ){

    res.json({"message":"OK"});
});


/// http://localhost:3000/customers/update
router.post('/update', function( req, res ){

    res.json({"message":"OK"});
});


/// http://localhost:3000/customers/delete
router.post('/delete', function( req, res ){

    res.json({"message":"OK"});
});



app.use( '/users', router );