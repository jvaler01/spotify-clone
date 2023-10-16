import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SideCardComponent } from '../side-card/side-card.component';
import { Icons, Playlist } from 'src/app/dashboard/interfaces/index';
import { playlists } from '../../data/data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgIconComponent, SideCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  get Icons() {
    return Icons; 
  }
  get playlists(): Playlist[] {
    return playlists;
  }
}
