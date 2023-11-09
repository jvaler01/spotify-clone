import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Playlist } from '../../interfaces';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { RouterLink } from '@angular/router';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CardPlayButtonComponent],
  templateUrl: './playlist-card.component.html',
  styleUrl: './playlist-card.component.scss'
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
