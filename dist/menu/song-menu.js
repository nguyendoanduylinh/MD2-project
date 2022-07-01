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
exports.SongMenu = void 0;
const rl = __importStar(require("readline-sync"));
const album_management_1 = require("../management/album/album-management");
const song_management_1 = require("../management/song/song-management");
const song_1 = require("../model/song");
class SongMenu {
    constructor() {
        this.songManagement = new song_management_1.SongManagement();
        this.albumManagement = new album_management_1.AlbumManagement();
    }
    showAllSongs() {
        console.log(`\n---Song list---`);
        let songs = this.songManagement.getAll();
        for (let song of songs) {
            console.log(`Id: ${song.id} _ Name: ${song.name} _ Singer: ${song.singer}`);
        }
    }
    inputSong() {
        let name = rl.question("Input song name: ");
        let singer = rl.question("Input singer name: ");
        return new song_1.Song(name, singer);
    }
    addNewSong() {
        console.log(`\n---Add new song---`);
        let song = this.inputSong();
        this.songManagement.addNew(song);
    }
    removeSong() {
        console.log(`\n---Remove song---`);
        this.showAllSongs();
        let id = +rl.question("Input song Id: ");
        let confirmQuestion = rl.question("ARE YOU F*KING SURE? (y/n)");
        switch (confirmQuestion) {
            case "y": {
                this.songManagement.removeById(id);
                console.log("SONG REMOVED");
                break;
            }
            default: {
                console.log("SONG NOT REMOVED");
                break;
            }
        }
    }
    updateSong() {
        console.log(`\n---Update song---`);
        this.showAllSongs();
        let id = +rl.question("Input song Id: ");
        let song = this.inputSong();
        this.songManagement.updateById(id, song);
        console.log(`SONG UPDATED`);
    }
    run() {
        let choice = -1;
        let SongChoice;
        (function (SongChoice) {
            SongChoice[SongChoice["SHOW_ALL_SONG"] = 1] = "SHOW_ALL_SONG";
            SongChoice[SongChoice["ADD_SONG"] = 2] = "ADD_SONG";
            SongChoice[SongChoice["UPDATE_SONG"] = 3] = "UPDATE_SONG";
            SongChoice[SongChoice["REMOVE_SONG"] = 4] = "REMOVE_SONG";
            SongChoice[SongChoice["ADD_SONG_TO_ALBUM"] = 5] = "ADD_SONG_TO_ALBUM";
        })(SongChoice || (SongChoice = {}));
        do {
            console.log(`\n---Song management---`);
            console.log("1. Show all song");
            console.log("2. Add new song");
            console.log("3. Update song");
            console.log("4. Remove song");
            console.log("5. Add song to category");
            console.log("0. Back");
            choice = +rl.question("Input choice: ");
            switch (choice) {
                case SongChoice.SHOW_ALL_SONG: {
                    this.showAllSongs();
                    break;
                }
                case SongChoice.ADD_SONG: {
                    this.addNewSong();
                    break;
                }
                case SongChoice.REMOVE_SONG: {
                    this.removeSong();
                    break;
                }
                case SongChoice.UPDATE_SONG: {
                    this.updateSong();
                    break;
                }
                case SongChoice.ADD_SONG_TO_ALBUM: {
                    console.log(`\n---Add song to album---`);
                    let albums = this.albumManagement.getAll();
                    let songs = this.songManagement.getAll();
                    console.log(`\nList of Albums: `);
                    for (let album of albums) {
                        console.log(`Id: ${album.id} _ Name: ${album.name}`);
                    }
                    console.log(`\nList of Song: `);
                    for (let song of songs) {
                        console.log(`Id: ${song.id} _ Song: ${song.name} _ Singer: ${song.singer} _ Album: ${song.album}`);
                    }
                    let id = +rl.question("Input song id: ");
                    let songIndex = this.songManagement.findById(id);
                    if (songIndex === -1) {
                        console.log("SONG ID NOT FOUND");
                        break;
                    }
                    else {
                        let albumName = rl.question("Input album name: ");
                        let album = this.albumManagement.findByName(albumName);
                        if (album) {
                            songs[songIndex].album = album;
                            album.songs.push(songs[songIndex]);
                        }
                        else {
                            console.log("ALBUM NAME NOT FOUND");
                        }
                        break;
                    }
                }
            }
        } while (choice !== 0);
    }
}
exports.SongMenu = SongMenu;
