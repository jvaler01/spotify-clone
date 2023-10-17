import { Injectable } from '@angular/core';
import { Playlist, Song } from 'src/app/dashboard/interfaces/index';
import { playlists, songs } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  get playlists(): Playlist[] {
    return playlists;
  }

  get songs(): Song[] {
    return songs;
  }

  getPlaylistsById(id: string): Playlist {
    return playlists.find(playlist => playlist.id === id) ?? {} as Playlist;   
  }

  getSongsById(id: number): Song[] {
    return songs.filter(song => song.albumId === id);   
  }
}
