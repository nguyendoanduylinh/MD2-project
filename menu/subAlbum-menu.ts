import * as rl from "readline-sync";
import { AlbumManagement } from "../management/album/album-management";
import { SongManagement } from "../management/song/song-management";
import { Song } from "../model/song";
import { Album } from "../model/album";

let albumManagement = new AlbumManagement();
let songManagement = new SongManagement();

export class SubAlbumMenu {
  showSongByAlbum(): Album | null {
    console.log(`\n---Show songs by album---`);
    let name = rl.question("Input album name: ");
    let album = albumManagement.findByName(name);
    if (album) {
      console.log(`\nALBUM: ${name}`);
      console.log(`\nList of songs: `);
      for (let song of album.songs) {
        console.log(
          `Id: ${song.id}. Name: ${song.name}. Singer: ${song.singer}`
        );
      }
      return album;
    } else {
      console.log("ALBUM NOT FOUND");
      return null;
    }
  }

  removeFromAlbum(id: number, album: Album) {
    for (let i = 0; i < album.songs.length; i++) {
      if (album.songs[i].id === id) {
        album.songs.splice(i, 1);
        console.log("SONG DELETED");
        break;
      }
    }
  }

  updateInAlbum(id: number, album: Album) {
    let songName = rl.question("Reinput song name: ");
    let singer = rl.question("Reinput singer name: ");
    for (let i = 0; i < album.songs.length; i++) {
      if (album.songs[i].id === id) {
        album.songs[i] = new Song(songName, singer);
      }
    }
  }

  run() {
    let album = this.showSongByAlbum();
    if (album) {
      let choice = -1;
      enum SubAlbumChoice {
        REMOVE_FROM_ALBUM = 1,
        UPDATE_IN_ALBUM = 2,
      }
      do {
        console.log("\n---Sub-album Menu---");
        console.log("1. Remove song from album");
        console.log("2. Update song in album");
        console.log("0. Exit");
        choice = +rl.question("Input choice: ");
        switch (choice) {
          case SubAlbumChoice.REMOVE_FROM_ALBUM: {
            console.log(`\n---Remove song from album---`);
            let songId = +rl.question("Input song Id: ");
            this.removeFromAlbum(songId, album);
            break;
          }
          case SubAlbumChoice.UPDATE_IN_ALBUM: {
            console.log(`\n---Update song in album---`);
            let songId = +rl.question("Input song Id: ");
            this.updateInAlbum(songId, album);
            break;
          }
        }
      } while (choice !== 0);
    } else {
      console.log("ALBUM NOT FOUND");
    }
  }
}
