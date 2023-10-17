import { Injectable, computed, signal } from '@angular/core';
import { Playlist, Song } from 'src/app/dashboard/interfaces/index';
import { playlists, songs } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _currentSong = signal<Song|null>(null);
  //! Al mundo exterior
  public currentSong = computed( () => this._currentSong() );

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

  setSongById(id: number, byList: boolean = false) {
    if (byList) {
      this._currentSong.set(songs.find(song => song.albumId === id) ?? null);
    } else {
      this._currentSong.set(songs.find(song => song.id === id) ?? null);
    }
  }
}
