"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongManagement = void 0;
class SongManagement {
    findById(id) {
        let index = -1;
        for (let i = 0; i < SongManagement.songs.length; i++) {
            if (SongManagement.songs[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    getAll() {
        return SongManagement.songs;
    }
    addNew(song) {
        SongManagement.id++;
        song.id = SongManagement.id;
        SongManagement.songs.push(song);
    }
    updateById(id, song) {
        let index = this.findById(id);
        if (index !== -1) {
            SongManagement.songs[index] = song;
            SongManagement.songs[index].id = id;
        }
    }
    removeById(id) {
        let index = this.findById(id);
        if (index !== -1) {
            SongManagement.songs.splice(index, 1);
        }
    }
    resetAlbumById(id) {
        let index = this.findById(id);
        if (index !== -1) {
            SongManagement.songs[index].album = null;
        }
    }
}
exports.SongManagement = SongManagement;
SongManagement.id = 0;
SongManagement.songs = [];
