var net = require('net');
var fs = require('fs');

var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        console.log('Received: ' + data);
        r = data.toString();
        console.log(r.substring(0, 3));
        if (r.substring(0, 3) == "GET") {
            socket.write("HTTP/1.1 200 OK\n");
            fs.readFile('hw2.html', 'utf8', function (err,
                contents) {
                console.log(contents);
                socket.write("Content-Length:" + contents.length);
                socket.write("\n\n");
                socket.write(contents);
            })
        }
        else if(r.substring(0,4)=="POST") {
            socket.write('HTTP/1.1 200 OK\n');
            socket.write("Content-Length:" + 0);
            socket.write("\n\n");
        };
    });

    socket.on('close', function () {
        console.log('Connection closed');
    });
    socket.on('end', function () {
        console.log('client disconnected');
    });
    socket.on('error', function () {
        console.log('client disconnected');
    });
});
server.listen(8080, function () {
    console.log('server is listening on port 8080');
});