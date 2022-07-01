import { ISongManagement } from "./i-song-management";
import { Song } from "../../model/song";

export class SongManagement implements ISongManagement {
  private static id = 0;
  private static songs: Song[] = [];

  findById(id: number): number {
    let index = -1;
    for (let i = 0; i < SongManagement.songs.length; i++) {
      if (SongManagement.songs[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getAll(): Song[] {
    return SongManagement.songs;
  }

  addNew(song: Song): void {
    SongManagement.id++;
    song.id = SongManagement.id;
    SongManagement.songs.push(song);
  }

  updateById(id: number, song: Song): void {
    let index = this.findById(id);
    if (index !== -1) {
      SongManagement.songs[index] = song;
      SongManagement.songs[index].id = id;
    }
  }

  removeById(id: number): void {
    let index = this.findById(id);
    if (index !== -1) {
      SongManagement.songs.splice(index, 1);
    }
  }

  resetAlbumById(id: number): void {
    let index = this.findById(id);
    if (index !== -1) {
      SongManagement.songs[index].album = null;
    }
  }
}
