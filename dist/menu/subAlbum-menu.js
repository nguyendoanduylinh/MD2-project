"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAlbumMenu = void 0;
const rl = __importStar(require("readline-sync"));
const album_management_1 = require("../management/album/album-management");
const song_management_1 = require("../management/song/song-management");
const song_1 = require("../model/song");
let albumManagement = new album_management_1.AlbumManagement();
let songManagement = new song_management_1.SongManagement();
class SubAlbumMenu {
    showSongByAlbum() {
        console.log(`\n---Show songs by album---`);
        let name = rl.question("Input album name: ");
        let album = albumManagement.findByName(name);
        if (album) {
            console.log(`\nALBUM: ${name}`);
            console.log(`\nList of songs: `);
            for (let song of album.songs) {
                console.log(`Id: ${song.id}. Name: ${song.name}. Singer: ${song.singer}`);
            }
            return album;
        }
        else {
            console.log("ALBUM NOT FOUND");
            return null;
        }
    }
    removeFromAlbum(id, album) {
        for (let i = 0; i < album.songs.length; i++) {
            if (album.songs[i].id === id) {
                album.songs.splice(i, 1);
                console.log("SONG DELETED");
                break;
            }
        }
    }
    updateInAlbum(id, album) {
        let songName = rl.question("Reinput song name: ");
        let singer = rl.question("Reinput singer name: ");
        for (let i = 0; i < album.songs.length; i++) {
            if (album.songs[i].id === id) {
                album.songs[i] = new song_1.Song(songName, singer);
            }
        }
    }
    run() {
        let album = this.showSongByAlbum();
        if (album) {
            let choice = -1;
            let SubAlbumChoice;
            (function (SubAlbumChoice) {
                SubAlbumChoice[SubAlbumChoice["REMOVE_FROM_ALBUM"] = 1] = "REMOVE_FROM_ALBUM";
                SubAlbumChoice[SubAlbumChoice["UPDATE_IN_ALBUM"] = 2] = "UPDATE_IN_ALBUM";
            })(SubAlbumChoice || (SubAlbumChoice = {}));
            do {
                console.log("\n---Sub-album Menu---");
                console.log("1. Remove song from album");
                console.log("2. Update song in album");
                console.log("0. Exit");
                choice = +rl.question("Input choice: ");
                switch (choice) {
                    case SubAlbumChoice.REMOVE_FROM_ALBUM: {
                        console.log(`\n---Remove song from album---`);
                        let songId = +rl.question("Input song Id: ");
                        this.removeFromAlbum(songId, album);
                        break;
                    }
                    case SubAlbumChoice.UPDATE_IN_ALBUM: {
                        console.log(`\n---Update song in album---`);
                        let songId = +rl.question("Input song Id: ");
                        this.updateInAlbum(songId, album);
                        break;
                    }
                }
            } while (choice !== 0);
        }
        else {
            console.log("ALBUM NOT FOUND");
        }
    }
}
exports.SubAlbumMenu = SubAlbumMenu;
