import { IUserManagement } from "./i-user-management";
import { User } from "../../model/user";

export class UserManagement implements IUserManagement {
  private static users: User[] = [];
  private static id = 0;
  constructor() {
    let user = new User("linh", "1234");
    user.id = UserManagement.id;
    UserManagement.users.push(user);
  }

  findById(id: number): number {
    let index = -1;
    for (let i = 0; i < UserManagement.users.length; i++) {
      if (UserManagement.users[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getAll(): User[] {
    return UserManagement.users;
  }

  addNew(user: User): void {
    UserManagement.id++;
    user.id = UserManagement.id;
    UserManagement.users.push(user);
  }

  updateById(id: number, user: User): void {
    let index = this.findById(id);
    if (index !== -1) {
      UserManagement.users[index] = user;
    } else {
      console.log("User not found");
    }
  }

  removeById(id: number): void {
    let index = this.findById(id);
    if (index !== -1) {
      UserManagement.users.splice(index, 1);
    } else {
      console.log("User not found");
    }
  }

  findByUsername(username: string): User | null {
    for (let user of UserManagement.users) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }

  login(username: string, password: string): User | null {
    for (let user of UserManagement.users) {
      if (username === user.username && password === user.password) {
        return user;
      }
    }
    return null;
  }
}
