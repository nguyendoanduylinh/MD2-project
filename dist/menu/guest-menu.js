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
exports.GuestMenu = void 0;
const rl = __importStar(require("readline-sync"));
const register_menu_1 = require("./register-menu");
const login_menu_1 = require("./login-menu");
class GuestMenu {
    constructor() {
        this.registerMenu = new register_menu_1.RegisterMenu();
        this.loginMenu = new login_menu_1.LoginMenu();
    }
    run() {
        let choice = -1;
        let GuestChoice;
        (function (GuestChoice) {
            GuestChoice[GuestChoice["LOGIN"] = 1] = "LOGIN";
            GuestChoice[GuestChoice["REGISTER"] = 2] = "REGISTER";
        })(GuestChoice || (GuestChoice = {}));
        do {
            console.log(`\n---Guest Menu---`);
            console.log("1. Login");
            console.log("2. Register");
            console.log("0. Exit program");
            choice = +rl.question("Input guest choice: ");
            switch (choice) {
                case GuestChoice.LOGIN: {
                    console.log(`\n---Login menu---`);
                    this.loginMenu.login();
                    this.loginMenu.management();
                    break;
                }
                case GuestChoice.REGISTER: {
                    console.log(`\n---Register menu---`);
                    this.registerMenu.inputUser();
                    break;
                }
            }
        } while (choice !== 0);
    }
}
exports.GuestMenu = GuestMenu;
