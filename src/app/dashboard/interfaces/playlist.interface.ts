import { Colors } from "./color.interface";


export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: keyof Colors;
    cover: string;
    artists: string[];
  }