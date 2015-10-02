/**
 * Created by seven on 2015/10/2.
 */

var path = require('path')
,pkg=require('./package.json')
,version = pkg.version
,Cop = require('./lib/cop')
,opts = require('optimist')
.usage('Usage: $0')
.options({
            debug:{
                demand:false,
                alias:'d',
                description:'debug',
                default:false
            }

        }).argv;


Cop(opts, function() {
    console.log(
        'Server Started!'
    );
});