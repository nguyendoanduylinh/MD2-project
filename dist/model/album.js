"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
class Album {
    constructor(_name) {
        this._name = _name;
        this._id = 0;
        this._songs = [];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get songs() {
        return this._songs;
    }
    set songs(value) {
        this._songs = value;
    }
}
exports.Album = Album;
