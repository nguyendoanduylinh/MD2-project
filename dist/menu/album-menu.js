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
exports.AlbumMenu = void 0;
const rl = __importStar(require("readline-sync"));
const album_management_1 = require("../management/album/album-management");
const subAlbum_menu_1 = require("./subAlbum-menu");
const album_1 = require("../model/album");
class AlbumMenu {
    constructor() {
        this.albumManagement = new album_management_1.AlbumManagement();
        this.subAlbumMenu = new subAlbum_menu_1.SubAlbumMenu();
    }
    showAllAlbum() {
        console.log(`\n---Album list---`);
        let albums = this.albumManagement.getAll();
        for (let album of albums) {
            console.log(`Id: ${album.id} _ Name: ${album.name}`);
        }
    }
    addNewAlbum() {
        console.log(`\n---Add new album---`);
        let name = rl.question("Input album name: ");
        this.albumManagement.addNew(new album_1.Album(name));
    }
    updateAlbum() {
        console.log(`\n---Update album---`);
        this.showAllAlbum();
        let id = +rl.question("Input old album id: ");
        let name = rl.question("Input new album name: ");
        this.albumManagement.updateById(id, new album_1.Album(name));
    }
    removeAlbum() {
        console.log(`\n---Remove album---`);
        this.showAllAlbum();
        let id = +rl.question("Input album id: ");
        let confirmQuestion = rl.question(`ARE YOU F*KING SURE? (y/n)`);
        switch (confirmQuestion) {
            case "y": {
                this.albumManagement.removeById(id);
                console.log(`ALBUM REMOVED`);
                break;
            }
            default: {
                console.log(`ALBUM NOT REMOVED`);
                break;
            }
        }
    }
    run() {
        let choice = -1;
        let AlbumMenuChoice;
        (function (AlbumMenuChoice) {
            AlbumMenuChoice[AlbumMenuChoice["SHOW_ALL_ALBUMS"] = 1] = "SHOW_ALL_ALBUMS";
            AlbumMenuChoice[AlbumMenuChoice["ADD_NEW_ALBUMS"] = 2] = "ADD_NEW_ALBUMS";
            AlbumMenuChoice[AlbumMenuChoice["UPDATE_ALBUM"] = 3] = "UPDATE_ALBUM";
            AlbumMenuChoice[AlbumMenuChoice["REMOVE_ALBUM"] = 4] = "REMOVE_ALBUM";
            AlbumMenuChoice[AlbumMenuChoice["SHOW_SONGS_BY_ALBUM"] = 5] = "SHOW_SONGS_BY_ALBUM";
        })(AlbumMenuChoice || (AlbumMenuChoice = {}));
        do {
            console.log(`\n---Album menu---`);
            console.log("1. Show all albums");
            console.log("2. Add new album");
            console.log("3. Update album");
            console.log("4. Remove album");
            console.log("5. Show songs by album");
            console.log("0. Exit");
            choice = +rl.question("Input choice: ");
            switch (choice) {
                case AlbumMenuChoice.SHOW_ALL_ALBUMS: {
                    this.showAllAlbum();
                    break;
                }
                case AlbumMenuChoice.ADD_NEW_ALBUMS: {
                    this.addNewAlbum();
                    break;
                }
                case AlbumMenuChoice.UPDATE_ALBUM: {
                    this.updateAlbum();
                    break;
                }
                case AlbumMenuChoice.REMOVE_ALBUM: {
                    this.removeAlbum();
                    break;
                }
                case AlbumMenuChoice.SHOW_SONGS_BY_ALBUM: {
                    this.subAlbumMenu.run();
                    break;
                }
            }
        } while (choice !== 0);
    }
}
exports.AlbumMenu = AlbumMenu;
