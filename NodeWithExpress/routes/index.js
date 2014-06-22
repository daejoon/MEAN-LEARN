var repo = require('../lib/db/dao/repository');

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.user = function(req, res){
    res.send("respond with a resource");
};

exports.form = function(req, res) {
    res.render('join-form', {title: 'Express'});
};

exports.join = function (req, res) {
    var user = req.body;

    repo.hasNameAndEmail(user, function(err, results, fields) {
        if ( results.length > 0 ) {
            res.render('join-fail', {
                title: 'Express'
            });
        } else {
            repo.insertUser(user, function(err, results, fields) {
                res.render('join-result', {
                    username: results[0].name
                    , useremail: results[0].email
                    , title: 'Express'
                    , joinSuccess: true
                })
            });
        }
    });
};
