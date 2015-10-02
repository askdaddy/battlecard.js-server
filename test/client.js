/**
 * Created by seven on 2015/10/2.
 */

var io = require('socket.io-client');

var socket = io('http://192.168.7.123:17001');

socket.on('connect', function(){
    console.log('on connection!!');
});
socket.on('an event', function (data) {
    console.log(data);
    socket.emit('my other event', {my: 'data'});
});