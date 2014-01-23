var mysqlConfig = require('../com/mysqlConfig');
var _ = require('underscore');
var util = require('util');
var mysql = require('mysql')
    , TABLE = 'members'
    , client = mysql.createConnection(mysqlConfig);

client.query('USE ' + mysqlConfig.database);

var mysqlUtil = module.exports = {
    insertUser: function(user, callback) {
        client.query(
            'INSERT INTO ' + TABLE + ' SET name = ?, email = ?'
            , [user.name, user.email]
            , function(err) {
                if ( err ) {
                    throw err;
                }
                client.query(
                    'SELECT * FROM ' + TABLE + ' WHERE name = ?'
                    , [user.name]
                    , function(err, results, fields) {
                        if ( err ) {
                            throw err;
                        }
                        if (_.isFunction(callback)) {
                            callback(err, results, fields);
                        }
                    }
                );
            }
        );
    }
    , hasNameAndEmail: function(user, callback) {
        client.query(
            'SELECT * FROM ' + TABLE + ' WHERE name = ? OR email = ? '
            , [user.name, user.email]
            , function(err, results, fields) {
                if ( err ) {
                    throw err;
                }

                if (_.isFunction(callback)) {
                    callback(err, results, fields);
                }
            }
        );
    }
};