"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const user_1 = require("../../model/user");
class UserManagement {
    constructor() {
        let user = new user_1.User("linh", "1234");
        user.id = UserManagement.id;
        UserManagement.users.push(user);
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    getAll() {
        return UserManagement.users;
    }
    addNew(user) {
        UserManagement.id++;
        user.id = UserManagement.id;
        UserManagement.users.push(user);
    }
    updateById(id, user) {
        let index = this.findById(id);
        if (index !== -1) {
            UserManagement.users[index] = user;
        }
        else {
            console.log("User not found");
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index !== -1) {
            UserManagement.users.splice(index, 1);
        }
        else {
            console.log("User not found");
        }
    }
    findByUsername(username) {
        for (let user of UserManagement.users) {
            if (user.username === username) {
                return user;
            }
        }
        return null;
    }
    login(username, password) {
        for (let user of UserManagement.users) {
            if (username === user.username && password === user.password) {
                return user;
            }
        }
        return null;
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 0;
