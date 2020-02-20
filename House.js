'use strict';

function House(name) {
    Device.call(this, name);
}

House.prototype._devices = [];

House.prototype.getName = function() {
    return this._name;
};

House.prototype.setName = function(name) {
    if (typeof name === 'string') this._name = name;
};

House.prototype.addDevice = function(device) {
    this._devices.push(device);
};

House.prototype.delDevice = function(device) {
    var index = this._devices.indexOf(device);
    if (index !== -1) this._devices.splice(index, 1);
};

House.prototype.getDevice = function(device) {
    var index = this._devices.indexOf(device);
    if (index !== -1) return this._devices[index];
};

House.prototype.getAllDevices = function() {
    return this._devices;
};

var house = new House('my house');
