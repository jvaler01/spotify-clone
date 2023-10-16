import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Playlist } from 'src/app/dashboard/interfaces/index';

@Component({
  selector: 'app-side-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.scss']
})
export class SideCardComponent {
  @Input() playlist: Playlist = {} as Playlist;
}
