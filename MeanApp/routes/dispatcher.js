exports.dispatcher = function (req, res) {
    console.log(req.path);
    var localPath = req.path;
    if ( localPath === '/' ) {
        localPath = "./index";
    }
    var router = require(localPath);
    res.render(localPath, router.data || {});
};