'use strict';

function Device(name) {
    this._name = name;
}

Device.prototype._state = false;

Device.prototype.getName = function() {
    return this._name;
};

Device.prototype.setName = function(name) {
    if (typeof name === 'string') this._name = name;
};

Device.prototype.getState = function() {
    return this._state;
};

Device.prototype.on = function() {
    this._state = true;
};

Device.prototype.off = function() {
    this._state = false;
};
