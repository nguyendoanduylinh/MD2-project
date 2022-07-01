"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
const song_1 = require("./model/song");
const album_1 = require("./model/album");
const song_management_1 = require("./management/song/song-management");
const album_management_1 = require("./management/album/album-management");
class Demo {
    constructor() {
        let songManagement = new song_management_1.SongManagement();
        let albumManagement = new album_management_1.AlbumManagement();
        let album1 = new album_1.Album("Encore");
        let song1 = new song_1.Song("Like Toy Soldiers", "Eminem");
        song1.album = album1;
        let song2 = new song_1.Song("Mockingbird", "Eminem");
        song2.album = album1;
        albumManagement.addNew(album1);
        songManagement.addNew(song1);
        songManagement.addNew(song2);
    }
}
exports.Demo = Demo;
