const router = require('express').Router();
const { app } = require('apico/server.js');

/** Declare routes for Router */


/// http://localhost:3000/customers/all
router.post('/all', function( req, res ){

    res.json({"message":"OK"});
})



app.use( '/customers', router );