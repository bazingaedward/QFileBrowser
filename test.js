var net = require('net');

var server = net.createServer(function(socket){
  socket.on('data', function(socket){
    socket.write('hello');
  });

  socket.on('end', function(socket){
    console.log('connection break');
  });

  socket.write('welcome');
});

server.listen('/tmp/echo.sock', function(){
  console.log('tcp bind');
})
