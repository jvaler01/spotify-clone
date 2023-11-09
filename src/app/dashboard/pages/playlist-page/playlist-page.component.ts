import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song, Playlist } from '../../interfaces';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { CardPlayButtonComponent } from '../../components/card-play-button/card-play-button.component';
import { MusicTableComponent } from '../../components/music-table/music-table.component';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [CommonModule, CardPlayButtonComponent, MusicTableComponent],
  templateUrl: './playlist-page.component.html',
  styleUrl: './playlist-page.component.scss'
})
export class PlaylistPageComponent {
  @Input() id: string = '';
  private spotifyService = inject(SpotifyService);

  get songs(): Song[] {
    return this.spotifyService.getSongsById(+this.id);
  }
  
  get playlist(): Playlist {
    return this.spotifyService.getPlaylistsById(this.id);
  }
}
