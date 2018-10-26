"use strict";

class Devices {
    constructor(brand, model, color) {
       this._brand = brand;
       this._model = model;
       this._color = color;
       this._state = "off";
       this._currentMod = 0;
    }
    set brand (brand) {
        this._brand = brand;
    }
    set model (model) {
        this._model = model;
    }
    set color (color) {
        this._color = color;
    }
    get brand () {
        return this._brand;
    }
    get model () {
        return this._model;
    }
    get color () {
        return this._color;
    }
    get state () {
        return this._state;
    }
    get currentMod () {
        return this._currentMod;
    }
    on () {
        return this._state = "on";
    }
    off () {
        return this._state = "off";
    }
}

class ClimateControl extends Devices {
    set temperatureAir (number) {
        this._temperatureAir = number;
    }
    get temperatureAir () {
        return this._temperatureAir  + " °С";
    }
    set temperatureFloor (number) {
        this._temperatureFloor = number;
    }
    get temperatureFloor () {
        return this._temperatureFloor + " °С";
    }
    set humidity (number) {
        this._humidity = number;
    }
    get humidity () {
        return this._humidity + " %";
    }
    nextMod () {
        this._currentMod += 1;
        console.log ("current mod: " + this._currentMod);
    }
    previousMod () {
        this._currentMod -= 1;
        console.log ("current mod: " + this._currentMod);
    }
    set mod (number) {
        this._currentMod = number;
        console.log ("current mod: " + this._currentMod);
    }
}

class Microwave extends Devices {
    set power (number) {
        this._power = number;
    }
    get power () {
        return this._power + " watt";
    }
    set time (number) {
        this._time = number;
    }
    get time () {
        return this._time + " min";
    }
    defrosting () {
        this._currentMod = "defrosting";
        console.log ("defrosting start");
    }
    grill () {
        this._currentMod = "grill";
        console.log ("grill start");
    }
    combiMod () {
        this._currentMod = "combiMod";
        console.log ("combiMod start");
    }
}

class Home {
    constructor(city, street, number) {
       this._city = city;
       this._street = street;
       this._number = number;
       this._devices = [];
    }
    get city() {
       return this._city;
    }
    get street() {
       return this._street;
    }
    get number() {
        return this._number;
     }
    addDevice (device) {
       this._devices.push (device);
    }
    deleteDevices (device) {
       let index = this._devices.indexOf (device);
       this._devices.splice(index - 1, 1);
    }
    get Devices() {
       return this._devices;
    }
 }


let home = new Home ("Kharkiv","Pushkinska", 26);
let bosh = new ClimateControl ("Bosh", "b43", "white");
home.addDevice (bosh);
let lg = new Microwave ("LG", "p7", "grey");
home.addDevice (lg);