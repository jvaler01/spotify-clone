import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from 'src/app/dashboard/interfaces/index';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-card-play-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './card-play-button.component.html',
  styleUrls: ['./card-play-button.component.scss']
})
export class CardPlayButtonComponent {
  private spotifyService = inject(SpotifyService);
  @Input() playlistId: string = '';
  isPlaying: boolean = false;
  get Icons() {
    return Icons; 
  }

  get currentSong() {
    return this.spotifyService.currentSong;
  }

  setSongById(id: string, byList: boolean) {
    this.spotifyService.setSongById(+id, byList);
    console.log(this.spotifyService.currentSong())
  }
}
