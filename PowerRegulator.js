'use strict';

function PowerRegulator(power) {
    this._power = power;
}

PowerRegulator.prototype.getPower = function() {
    return this._power;
};

PowerRegulator.prototype.setPower = function(value) {
    if (value >= 0 && value <= 100) this._power = value;
};

PowerRegulator.prototype.increasePower = function(value) {
    if (this._power + value <= 100) this._power += value;
};

PowerRegulator.prototype.decreasePower = function(value) {
    if (this._power - value >= 0) this._power -= value;
};
