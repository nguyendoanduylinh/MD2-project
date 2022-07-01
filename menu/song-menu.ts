import * as rl from "readline-sync";
import { AlbumManagement } from "../management/album/album-management";
import { SongManagement } from "../management/song/song-management";
import { Song } from "../model/song";

export class SongMenu {
  private songManagement = new SongManagement();
  private albumManagement = new AlbumManagement();

  showAllSongs() {
    console.log(`\n---Song list---`);
    let songs = this.songManagement.getAll();
    for (let song of songs) {
      console.log(
        `Id: ${song.id} _ Name: ${song.name} _ Singer: ${song.singer}`
      );
    }
  }

  inputSong(): Song {
    let name = rl.question("Input song name: ");
    let singer = rl.question("Input singer name: ");
    return new Song(name, singer);
  }

  addNewSong() {
    console.log(`\n---Add new song---`);
    let song = this.inputSong();
    this.songManagement.addNew(song);
  }

  removeSong() {
    console.log(`\n---Remove song---`);
    this.showAllSongs();
    let id = +rl.question("Input song Id: ");
    let confirmQuestion = rl.question("ARE YOU F*KING SURE? (y/n)");
    switch (confirmQuestion) {
      case "y": {
        this.songManagement.removeById(id);
        console.log("SONG REMOVED");
        break;
      }
      default: {
        console.log("SONG NOT REMOVED");
        break;
      }
    }
  }

  updateSong() {
    console.log(`\n---Update song---`);
    this.showAllSongs();
    let id = +rl.question("Input song Id: ");
    let song = this.inputSong();
    this.songManagement.updateById(id, song);
    console.log(`SONG UPDATED`);
  }

  run() {
    let choice = -1;
    enum SongChoice {
      SHOW_ALL_SONG = 1,
      ADD_SONG = 2,
      UPDATE_SONG = 3,
      REMOVE_SONG = 4,
      ADD_SONG_TO_ALBUM = 5,
    }
    do {
      console.log(`\n---Song management---`);
      console.log("1. Show all song");
      console.log("2. Add new song");
      console.log("3. Update song");
      console.log("4. Remove song");
      console.log("5. Add song to category");
      console.log("0. Back");
      choice = +rl.question("Input choice: ");
      switch (choice) {
        case SongChoice.SHOW_ALL_SONG: {
          this.showAllSongs();
          break;
        }
        case SongChoice.ADD_SONG: {
          this.addNewSong();
          break;
        }

        case SongChoice.REMOVE_SONG: {
          this.removeSong();
          break;
        }

        case SongChoice.UPDATE_SONG: {
          this.updateSong();
          break;
        }

        case SongChoice.ADD_SONG_TO_ALBUM: {
          console.log(`\n---Add song to album---`);
          let albums = this.albumManagement.getAll();
          let songs = this.songManagement.getAll();

          console.log(`\nList of Albums: `);
          for (let album of albums) {
            console.log(`Id: ${album.id} _ Name: ${album.name}`);
          }
          console.log(`\nList of Song: `);
          for (let song of songs) {
            console.log(
              `Id: ${song.id} _ Song: ${song.name} _ Singer: ${song.singer} _ Album: ${song.album}`
            );
          }

          let id = +rl.question("Input song id: ");
          let songIndex = this.songManagement.findById(id);
          if (songIndex === -1) {
            console.log("SONG ID NOT FOUND");
            break;
          } else {
            let albumName = rl.question("Input album name: ");
            let album = this.albumManagement.findByName(albumName);
            if (album) {
              songs[songIndex].album = album;
              album.songs.push(songs[songIndex]);
            } else {
              console.log("ALBUM NAME NOT FOUND");
            }
            break;
          }
        }
      }
    } while (choice !== 0);
  }
}
