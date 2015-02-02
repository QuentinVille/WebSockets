
var rl    = require("readline").createInterface(process.stdin, process.stdout);
var io    = require('socket.io-client');
var color = require("ansi-color").set;

var socket = io.connect('http://localhost:8080');

rl.on('line', function (msg) {
    socket.emit('chat message', msg);
    rl.prompt(true);
});

socket.on('chat message', function (msg) {
    console.log( color(msg, 'yellow') );
    rl.prompt(true);
});