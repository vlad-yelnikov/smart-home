'use strict';

function Lamp(name, color) {
    Device.call(this, name);
    this._color = color;
}

Lamp.prototype = Object.create(Device.prototype);

Lamp.prototype.getColor = function() {
    return this._color;
};

Lamp.prototype.setColor = function(color) {
    if (typeof color === 'string') this._color = color;
};

var lamp = new Lamp('xiaomi', 'yellow');
