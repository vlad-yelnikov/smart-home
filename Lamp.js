'use strict';

function Lamp(name, color, power) {
    Device.call(this, name);
    this._color = color;
    this._power = power;
}

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.getColor = function() {
    return this._color;
};

Lamp.prototype.setColor = function(color) {
    this._color = color;
};

Lamp.prototype.getPower = function() {
    return this._power.getPower();
};

Lamp.prototype.setPower = function(value) {
    return this._power.setPower(value);
};

Lamp.prototype.increasePower = function(value) {
    return this._power.increasePower(value);
};

Lamp.prototype.decreasePower = function(value) {
    return this._power.decreasePower(value);
};
