
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
    res.render('join-result', {
        username: req.body.name
        , useremail: req.body.email
        , title: 'Express'
    })
};