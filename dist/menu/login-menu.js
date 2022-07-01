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
exports.LoginMenu = void 0;
const rl = __importStar(require("readline-sync"));
const user_management_1 = require("../management/user/user-management");
const album_menu_1 = require("./album-menu");
const song_menu_1 = require("./song-menu");
class LoginMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
        this.albumMenu = new album_menu_1.AlbumMenu();
        this.songMenu = new song_menu_1.SongMenu();
    }
    login() {
        let username = "";
        let password = "";
        let isloggedin = true;
        do {
            username = rl.question("Input username: ");
            password = rl.question("Input password: ");
            let currentUser = this.userManagement.login(username, password);
            if (currentUser) {
                isloggedin = true;
                console.log(`LOGIN SUCCESSFULLY\n`);
            }
            else {
                isloggedin = false;
                console.log(`INCORRECT USERNAME OR PASSWORD`);
            }
        } while (!isloggedin);
        return isloggedin;
    }
    management() {
        let loginChoice = -1;
        let LoginChoice;
        (function (LoginChoice) {
            LoginChoice[LoginChoice["ALBUM"] = 1] = "ALBUM";
            LoginChoice[LoginChoice["SONG"] = 2] = "SONG";
        })(LoginChoice || (LoginChoice = {}));
        do {
            console.log("\n1. Album management");
            console.log("2. Song management");
            console.log("0. Back");
            loginChoice = +rl.question("Input choice: ");
            switch (loginChoice) {
                case LoginChoice.ALBUM: {
                    console.log(`\n---Album management---`);
                    this.albumMenu.run();
                    break;
                }
                case LoginChoice.SONG: {
                    console.log(`\n---Song management---`);
                    this.songMenu.run();
                    break;
                }
            }
        } while (loginChoice !== 0);
    }
}
exports.LoginMenu = LoginMenu;
