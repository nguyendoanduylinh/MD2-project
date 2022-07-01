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
exports.RegisterMenu = void 0;
const rl = __importStar(require("readline-sync"));
const user_management_1 = require("../management/user/user-management");
const user_1 = require("../model/user");
class RegisterMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
    }
    inputUsername() {
        let username = "";
        let isValidUsername = true;
        do {
            username = rl.question("Input username: ");
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isValidUsername = false;
                console.log("Username existed");
            }
            else {
                isValidUsername = true;
            }
        } while (!isValidUsername);
        return username;
    }
    inputPassword() {
        let password = "";
        let isValidPassword = true;
        let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-z0-9!@#$%^&*?]{8,10}$/g;
        do {
            password = rl.question("Input password: ");
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log("Invalid password");
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    inputConfirmPassword(password) {
        let confirmPassword = "";
        let isValidPassword = true;
        do {
            confirmPassword = rl.question("Reinput password: ");
            if (confirmPassword !== password) {
                isValidPassword = false;
                console.log("Password not match");
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
    }
    inputUser() {
        let username = this.inputUsername();
        let password = this.inputPassword();
        this.inputConfirmPassword(password);
        let user = new user_1.User(username, password);
        this.userManagement.addNew(user);
        console.log("Registered successfully");
    }
}
exports.RegisterMenu = RegisterMenu;
