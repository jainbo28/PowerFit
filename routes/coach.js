
const router = require('express').Router();
const { app } = require('apico/server.js');
const mysql = require('mysql2');
/** Declare routes for Router */

// http://localhost:3000/coach/add
router.post('/add', function( req, res ){
    let { firstName, lastName, email, typeTrening } = req.body;
    // Create a pool
    const pool = mysql.createPool({
        host: 'localhost',
        user:'root',
        password:'yeb123456',
        database:'powerfit'
    });

    // insert into coach using body object. Use callbacks to handle errors
    pool.query('INSERT INTO coach (firstName, lastName, age, gender, email) VALUES(?,?,?,?,?)'
    , [firstName, lastName, email, typeTrening], (err, result)=>{

        // Close the pool
        pool.end();


        if( err ) res.json( err );

        res.json( result );

        
    });
});

// Create a prefix for tasks routes
app.use( '/coach', router );