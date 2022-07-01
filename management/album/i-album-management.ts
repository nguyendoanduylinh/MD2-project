import { IManagement } from "../i-management";
import { Album } from "../../model/album";

export interface IAlbumManagement extends IManagement<Album> {
  findByName(name: string): Album | null;
}
