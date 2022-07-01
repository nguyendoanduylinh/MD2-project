import * as rl from "readline-sync";
import { RegisterMenu } from "./register-menu";
import { LoginMenu } from "./login-menu";

export class GuestMenu {
  private registerMenu = new RegisterMenu();
  private loginMenu = new LoginMenu();

  run() {
    let choice = -1;
    enum GuestChoice {
      LOGIN = 1,
      REGISTER = 2,
    }
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
