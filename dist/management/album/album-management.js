"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumManagement = void 0;
class AlbumManagement {
    findById(id) {
        let index = -1;
        for (let i = 0; i < AlbumManagement.albums.length; i++) {
            if (id === AlbumManagement.albums[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
    getAll() {
        return AlbumManagement.albums;
    }
    addNew(album) {
        AlbumManagement.id++;
        album.id = AlbumManagement.id;
        AlbumManagement.albums.push(album);
    }
    updateById(id, album) {
        let index = this.findById(id);
        if (index !== -1) {
            AlbumManagement.albums[index] = album;
            AlbumManagement.albums[index].id = id;
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index !== -1) {
            AlbumManagement.albums.splice(index, 1);
        }
    }
    findByName(name) {
        for (let i = 0; i < AlbumManagement.albums.length; i++) {
            if (name === AlbumManagement.albums[i].name) {
                return AlbumManagement.albums[i];
            }
        }
        return null;
    }
}
exports.AlbumManagement = AlbumManagement;
AlbumManagement.id = 0;
AlbumManagement.albums = [];
