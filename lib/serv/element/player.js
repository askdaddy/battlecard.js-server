/**
 * Created by seven on 2015/10/3.
 */

var util = require('../../util');
var Item = require('./item');

function Player(options) {
    if (!(this instanceof Player)) return new Player( options);
}

util.inherits(Player, Item);


exports = module.exports = Player