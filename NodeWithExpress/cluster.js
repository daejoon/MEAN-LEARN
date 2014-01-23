//
// 클러스터는 Debug로 실행하면은 안된다. 현재는 Release로 실행하자
//
var express = require('express');
var routes  = require('./routes');
var http    = require('http');
var path    = require('path');
var util    = require('util');
var cluster = require('cluster');
var os      = require('os');

var numOfCpu = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numOfCpu; ++i) {
        cluster.fork();
    }
}
else {
    var app = express();

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    app.get('/', routes.index);

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
}