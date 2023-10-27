import { Injectable, computed, inject, signal } from '@angular/core';
import { Playlist, Song } from 'src/app/dashboard/interfaces/index';
import { playlists, songs } from '../../data/data';
import { PlayerService } from '../player/player.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private playerService = inject(PlayerService);
  // # for private properties private only in dev mode (ts) # dev, compilation, runtime
  #currentSong = signal<Song|null>(null);
  #currentPlaying = signal<boolean>(false);
  //! Al mundo exterior
  public currentSong = computed( () => this.#currentSong() );
  public currentPlaying = computed( () => this.#currentPlaying() );

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
    const currentAlbumId = this.#currentSong()?.albumId;
    if (byList) {
      this.#currentSong.set(songs.find(song => song.albumId === id) ?? null);
    } else {
      this.#currentSong.set(songs.find(song => song.id === id) ?? null);
    }
    if (currentAlbumId && this.#currentSong() && currentAlbumId === this.#currentSong()?.albumId) {
      this.setCurrentPlaying();
    }else if (this.#currentSong()) {
      this.#currentPlaying.set(true);
    } else {
      this.#currentPlaying.set(false);
    }
  }

  setCurrentPlaying() {
    this.#currentPlaying.set(!this.#currentPlaying());
  }
}
