import { Album } from "./album";

export class Song {
  private _id = 0;
  private _album: Album | null = null;
  constructor(private _name: string, private _singer: string) {}
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get singer(): string {
    return this._singer;
  }
  set singer(value: string) {
    this._singer = value;
  }
  get album(): Album | null {
    return this._album;
  }
  set album(value: Album | null) {
    this._album = value;
  }
}
