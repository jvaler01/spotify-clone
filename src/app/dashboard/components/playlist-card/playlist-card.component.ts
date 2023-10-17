import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../interfaces';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CardPlayButtonComponent],
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  @Input() playlist: Playlist = {} as Playlist;
}
