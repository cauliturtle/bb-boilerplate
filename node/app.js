var util = require('util'),
    connect = require('connect'),
    port = 1337;

connect.createServer(connect.static('../www/')).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');