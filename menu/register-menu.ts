import * as rl from "readline-sync";
import { UserManagement } from "../management/user/user-management";
import { User } from "../model/user";

export class RegisterMenu {
  private userManagement = new UserManagement();

  inputUsername(): string {
    let username = "";
    let isValidUsername = true;
    do {
      username = rl.question("Input username: ");
      let currentUser = this.userManagement.findByUsername(username);
      if (currentUser) {
        isValidUsername = false;
        console.log("Username existed");
      } else {
        isValidUsername = true;
      }
    } while (!isValidUsername);
    return username;
  }

  inputPassword(): string {
    let password = "";
    let isValidPassword = true;
    let regexForPassword: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-z0-9!@#$%^&*?]{8,10}$/g;
    do {
      password = rl.question("Input password: ");
      if (!regexForPassword.test(password)) {
        isValidPassword = false;
        console.log("Invalid password");
      } else {
        isValidPassword = true;
      }
    } while (!isValidPassword);
    return password;
  }

  inputConfirmPassword(password: string): void {
    let confirmPassword = "";
    let isValidPassword = true;
    do {
      confirmPassword = rl.question("Reinput password: ");
      if (confirmPassword !== password) {
        isValidPassword = false;
        console.log("Password not match");
      } else {
        isValidPassword = true;
      }
    } while (!isValidPassword);
  }

  inputUser(): void {
    let username = this.inputUsername();
    let password = this.inputPassword();
    this.inputConfirmPassword(password);
    let user = new User(username, password);
    this.userManagement.addNew(user);
    console.log("Registered successfully");
  }
}
