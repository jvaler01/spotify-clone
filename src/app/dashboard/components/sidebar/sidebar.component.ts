import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Icons, Playlist } from '../../interfaces';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { SideCardComponent } from '../side-card/side-card.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgIconComponent, SideCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private spotifyService = inject(SpotifyService);
  get Icons() {
    return Icons; 
  }
  get playlists(): Playlist[] {
    return this.spotifyService.playlists;
  }
}
