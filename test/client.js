/**
 * Created by seven on 2015/10/2.
 */

var io = require('socket.io-client');

var socket = io('localhost:17001');

socket.on('an event', function (data) {
    console.log(data);
    socket.emit('my other event', {my: 'data'});
});