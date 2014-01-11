var net = require('net');
var sockets = [];



net.createServer(function(sock) {
    sockets.push(sock);

    sock.on('data', function(data) {
       for (var idx = 0; idx < sockets.length; idx++) {
           if ( sockets[idx] !== sock ) {
               console.log(sock.remoteAddress + '님의 말:' + data);
               sockets[idx].write(sock.remoteAddress + '님의 말:' + data);
           }
       }
    });

    sock.on('end', function() {
        var i = sockets.indexOf(sock);
        sockets.splice(i, 1);
        console.log(sock.remoteAddress + '님이 종료되었습니다.');
    });

}).listen(3000, function() {
        console.log("Tcp 채팅 서버가 시작되었습니다.");
});

