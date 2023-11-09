import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { Playlist } from '../../interfaces';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { PlaylistCardComponent } from '../../components/playlist-card/playlist-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PlaylistCardComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private spotifyService = inject(SpotifyService);

  get playlists(): Playlist[] {
    return this.spotifyService.playlists;
  }
}
