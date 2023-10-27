import { Component, Input, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../interfaces';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CardPlayButtonComponent],
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
})
export class PlaylistCardComponent {
  @Input() playlist: Playlist = {} as Playlist;
  private spotifyService = inject(SpotifyService);

  setSongById(id: string, byList: boolean = false) {
    /* if (+id == this.spotifyService.currentSong()?.albumId) {
      this.spotifyService.setSongById(0, byList);
    }else{
      this.spotifyService.setSongById(+id, byList);
    } */
  }
}
