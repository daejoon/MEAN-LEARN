var mysqlConfig = require('../lib/db/mysqlConfig');
var mysql = require('mysql')
    , TABLE = 'members'
    , client = mysql.createConnection(mysqlConfig);

client.query('USE ' + mysqlConfig.database);

var mysqlUtil = module.exports = {
    insertUser: function(user, res) {
        client.query(
            'INSERT INTO ' + TABLE + ' SET name = ?, email = ?'
            , [user.name, user.email]
            , function(err) {
                client.query(
                    'SELECT * FROM ' + TABLE + ' WHERE name = ?'
                    , [user.name]
                    , function(err, results, fields) {
                        if ( err ) {
                            throw err;
                        }
                        res.render('join-result', {
                            username: results[0].name
                            , useremail: results[0].email
                            , title: 'Express'
                            , joinSuccess: true
                        })
                    }
                );
            }
        );
    }
};