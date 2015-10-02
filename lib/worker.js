/**
 * Created by seven on 2015/10/2.
 */
var opts = require('optimist')
    .usage('Usage: $0 $1 $2 $3 $4')
    .options({
        config: {
            demand: false,
            alias: 'c',
            description: 'config file',
            default: ''
        },
        port: {
            demand: true,
            alias: 'p',
            description: 'port',
            default: 17000
        },
        num: {
            demand: true,
            alias: 'n',
            description: 'num',
            default: 0
        }

    }).argv;
function Worker(opts) {


    var currPort = opts.port + opts.num;
    console.log('worker listen on:%d',currPort);
    var io = require('socket.io')(currPort);

    io.on('connection', function(socket){
        socket.emit('an event', { some: 'data' });
    });

};

Worker(opts);