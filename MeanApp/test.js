var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {
    var debug = process.execArgv[0].indexOf('--debug') !== -1;
    cluster.setupMaster({
        execArgv: process.execArgv.filter(function(s) { return s !== '--debug' })
    });
    for (var i = 0; i < 2; ++i) {
        if (debug) cluster.settings.execArgv.push('--debug=' + (52927 + i));
        cluster.fork();
        if (debug) cluster.settings.execArgv.pop();
    }
}
else {
    var server = http.createServer(function(req, res) {
        res.end('OK');
    });
    server.listen(8000);
}