
const router = require('express').Router();
const { app } = require('apico/server.js');
const mysql = require('mysql2');
/** Declare routes for Router */

// http://localhost:3000/client/add
router.post('/add', function( req, res ){
    let { firstName, lastName, age, gender, email } = req.body;
    // Create a pool
    const pool = mysql.createPool({
        host: 'localhost',
        user:'root',
        password:'yeb123456',
        database:'client_mngmt'
    });

    // insert into tasks using body object. Use callbacks to handle errors
    pool.query('INSERT INTO client (firstName, lastName, age, gender, email) VALUES(?,?,?,?,?)'
    , [firstName, lastName, age, gender, email], (err, result)=>{

        // Close the pool
        pool.end();


        if( err ) res.json( err );

        res.json( result );

        
    });
});

// Create a prefix for tasks routes
app.use( '/client', router );