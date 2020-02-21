'use strict';

function Microwave(name, power) {
    Device.call(this, name);
    this._power = power;
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

Microwave.prototype.getPower = function() {
    return this._power.getPower();
};

Microwave.prototype.setPower = function(value) {
    return this._power.setPower(value);
};

Microwave.prototype.increasePower = function(value) {
    return this._power.increasePower(value);
};

Microwave.prototype.decreasePower = function(value) {
    return this._power.decreasePower(value);
};
