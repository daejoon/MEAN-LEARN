
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