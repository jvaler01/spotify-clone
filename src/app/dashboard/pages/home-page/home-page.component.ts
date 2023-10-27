import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { Playlist } from '../../interfaces';
import { PlaylistCardComponent } from '../../components/playlist-card/playlist-card.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PlaylistCardComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  private spotifyService = inject(SpotifyService);

  get playlists(): Playlist[] {
    return this.spotifyService.playlists;
  }
}
