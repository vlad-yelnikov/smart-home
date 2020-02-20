'use strict';

function PowerRegulator(power) {
    this._power = power;
}

PowerRegulator.prototype = Object.create(PowerRegulator.prototype);
PowerRegulator.prototype.constructor = PowerRegulator;

PowerRegulator.prototype.getPower = function() {
    return this._power;
};

PowerRegulator.prototype.setPower = function(value) {
    this._power = value;
};

PowerRegulator.prototype.increasePower = function(value) {
    this._power += value;
};

PowerRegulator.prototype.decreasePower = function(value) {
    this._power -= value;
};

var powerRegulator = new PowerRegulator(100);
