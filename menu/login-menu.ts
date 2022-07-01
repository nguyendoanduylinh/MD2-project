import * as rl from "readline-sync";
import { UserManagement } from "../management/user/user-management";
import { AlbumMenu } from "./album-menu";
import { SongMenu } from "./song-menu";

export class LoginMenu {
  private userManagement = new UserManagement();
  private albumMenu = new AlbumMenu();
  private songMenu = new SongMenu();

  login(): boolean {
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
      } else {
        isloggedin = false;
        console.log(`INCORRECT USERNAME OR PASSWORD`);
      }
    } while (!isloggedin);
    return isloggedin;
  }

  management(): void {
    let loginChoice = -1;
    enum LoginChoice {
      ALBUM = 1,
      SONG = 2,
    }
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
