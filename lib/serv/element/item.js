/**
 * Created by seven on 2015/10/2.
 */
var util = require('../../util');
var EventEmitter = require('eventemitter3');
function Item() {
    if (!(this instanceof Item)) return new Item();
    EventEmitter.call(this);

    var id = -1
        , name = undefined;
};

util.inherits(Item, EventEmitter);

exports = module.exports = Item;