"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
class Song {
    constructor(_name, _singer) {
        this._name = _name;
        this._singer = _singer;
        this._id = 0;
        this._album = null;
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
    get singer() {
        return this._singer;
    }
    set singer(value) {
        this._singer = value;
    }
    get album() {
        return this._album;
    }
    set album(value) {
        this._album = value;
    }
}
exports.Song = Song;
