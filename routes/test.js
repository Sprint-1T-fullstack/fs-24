var express = require('express');
var router = express.Router();

/* Root test. */
router.get('/', function(req, res, next) {
  res.send('Rout for some tests. Sometime work with errors.');
});

// MySQL connection by mysql2
router.get('/mysql2conn', function(req, res, next){
    const mysql = require('mysql2');

    // create the connection to database
    const connection = mysql.createConnection({
    host: 'schoolyz.beget.tech',
    user: 'schoolyz_events',
    database: 'schoolyz_events',
    password: 'Sa*geW0D'
    });

    // simple query
    connection.query(
    'SELECT `name` FROM `event_type` WHERE 1',
    function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
    }
    );

    res.send('Connection to database with MySQL2 lib');
});

// MySQL connection by Sequelize
router.get('/mysql2sequelize', function(req, res, next){
    const { Sequelize } = require('sequelize');

    const sequelize = new Sequelize('schoolyz_events', 'schoolyz_events', 'Sa*geW0D', {
      host: 'schoolyz.beget.tech',
      dialect: 'mysql'
    });

    ;(async ()=>{
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    })();

    res.send('Connection to database with Sequielize lib');
    
})

module.exports = router;