import { IAlbumManagement } from "./i-album-management";
import { Album } from "../../model/album";

export class AlbumManagement implements IAlbumManagement {
  private static id = 0;
  private static albums: Album[] = [];

  findById(id: number): number {
    let index = -1;
    for (let i = 0; i < AlbumManagement.albums.length; i++) {
      if (id === AlbumManagement.albums[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getAll(): Album[] {
    return AlbumManagement.albums;
  }

  addNew(album: Album): void {
    AlbumManagement.id++;
    album.id = AlbumManagement.id;
    AlbumManagement.albums.push(album);
  }

  updateById(id: number, album: Album): void {
    let index = this.findById(id);
    if (index !== -1) {
      AlbumManagement.albums[index] = album;
      AlbumManagement.albums[index].id = id;
    }
  }

  removeById(id: number): void {
    let index = this.findById(id);
    if (index !== -1) {
      AlbumManagement.albums.splice(index, 1);
    }
  }

  findByName(name: string): Album | null {
    for (let i = 0; i < AlbumManagement.albums.length; i++) {
      if (name === AlbumManagement.albums[i].name) {
        return AlbumManagement.albums[i];
      }
    }
    return null;
  }
}
