import * as rl from "readline-sync";
import { AlbumManagement } from "../management/album/album-management";
import { SubAlbumMenu } from "./subAlbum-menu";
import { Album } from "../model/album";

export class AlbumMenu {
  private albumManagement = new AlbumManagement();
  private subAlbumMenu = new SubAlbumMenu();

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
    this.albumManagement.addNew(new Album(name));
  }

  updateAlbum() {
    console.log(`\n---Update album---`);
    this.showAllAlbum();
    let id = +rl.question("Input old album id: ");
    let name = rl.question("Input new album name: ");
    this.albumManagement.updateById(id, new Album(name));
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
    enum AlbumMenuChoice {
      SHOW_ALL_ALBUMS = 1,
      ADD_NEW_ALBUMS = 2,
      UPDATE_ALBUM = 3,
      REMOVE_ALBUM = 4,
      SHOW_SONGS_BY_ALBUM = 5,
    }

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
