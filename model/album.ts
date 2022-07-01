import { Song } from "./song";

export class Album {
  private _id = 0;
  private _songs: Song[] = [];
  constructor(private _name: string) {}
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
  get songs(): Song[] {
    return this._songs;
  }
  set songs(value: Song[]) {
    this._songs = value;
  }
}
