'use strict';

function Microwave(name) {
    Device.call(this, name);
    this._time = 0;
    this._mode = '';
}

Microwave.prototype = Object.create(Device.prototype);
Microwave.prototype.constructor = Microwave;

Microwave.prototype.getTime = function() {
    return this._time;
};

Microwave.prototype.setTime = function(time) {
    this._time = time;
};

Microwave.prototype.getMode = function() {
    return this._mode;
};

Microwave.prototype.heat = function() {
    this._mode = 'heat';
};

Microwave.prototype.defrost = function() {
    this._mode = 'defrost';
};

Microwave.prototype.grill = function() {
    this._mode = 'grill';
};

var microwave = new Microwave('LG');
