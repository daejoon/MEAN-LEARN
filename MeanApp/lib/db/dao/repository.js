var mysqlConfig = require('../com/mysqlConfig');
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
    , hasNameAndEmail: function(user, res) {
        client.query(
            'SELECT * FROM ' + TABLE + ' WHERE name = ? OR email = ? '
            , [user.name, user.email]
            , function(err, results, fields) {
                if ( err ) {
                    throw err;
                }
                if ( results.length > 0 ) {
                    res.render('join-fail', {
                        title: 'Express'
                    });
                } else {
                    mysqlUtil.insertUser(user, res);
                }
            }
        );
    }
};