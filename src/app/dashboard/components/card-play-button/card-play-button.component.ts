import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from '../../interfaces';
import { PlayerService } from '../../services/player/player.service';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-card-play-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './card-play-button.component.html',
  styleUrl: './card-play-button.component.scss'
})
export class CardPlayButtonComponent {
  private spotifyService = inject(SpotifyService);
  private playerService = inject(PlayerService);
  @Input() playlistId: string = '';
  get Icons() {
    return Icons; 
  }

  get currentSong() {
    return this.spotifyService.currentSong;
  }

  get currentPlaying() {
    return this.spotifyService.currentPlaying;
  }

  setSongById(id: string, byList: boolean = false) {
    if (+id == this.spotifyService.currentSong()?.albumId) {
      //this.spotifyService.setSongById(0, byList);
    }else{
      //this.spotifyService.setSongById(+id, byList);
    }
    this.spotifyService.setSongById(+id, byList);
  }
  get isPlaying() {
    return this.playerService.isPlaying;
  }
}