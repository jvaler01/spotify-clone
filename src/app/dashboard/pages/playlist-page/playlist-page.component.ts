import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayButtonComponent } from '../../components/card-play-button/card-play-button.component';
import { MusicTableComponent } from '../../components/music-table/music-table.component';
import { Playlist, Song } from '../../interfaces';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [CommonModule, CardPlayButtonComponent, MusicTableComponent],
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent{
  @Input() id: string = '';
  private spotifyService = inject(SpotifyService);

  get songs(): Song[] {
    return this.spotifyService.getSongsById(+this.id);
  }
  
  get playlist(): Playlist {
    return this.spotifyService.getPlaylistsById(this.id);
  }
  
  setSongById(id: string, byList: boolean = false) {
    /* if (+id == this.spotifyService.currentSong()?.albumId) {
      this.spotifyService.setSongById(0, byList);
    }else{
      this.spotifyService.setSongById(+id, byList);
    } */
  }
}
