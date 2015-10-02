/**
 * Created by seven on 2015/10/2.
 */

var fork = require('child_process').fork;
var cpus = require('os').cpus();

var workers = {};
function Cop(options, callback) {
    if (!(this instanceof Cop)) return new Cop(options, callback);

    var self = this;
    var n_cpus = cpus.length;
    var _i;
    for (_i = 0; _i < n_cpus; ++_i) {
        self.createWorker('./lib/worker.js', _i+1);
    }

    process.on('exit', self.killall);

    if (typeof callback == 'function') {
        callback();
    }
}

Cop.prototype.createWorker = function (modulePath, num) {
    var worker = fork(modulePath, ['-n' , num]);

    worker.on('exit', function () {
        console.log('worker[%d]:%s', worker.pid, 'exit')
    });

    workers[worker.pid] = worker;
    console.log('Create worker:%d', worker.pid);
};

Cop.prototype.killall = function () {
    for (var pid in workers) {
        workers[pid].kill();
    }
};


exports = module.exports = Cop;