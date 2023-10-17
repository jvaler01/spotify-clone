import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { Song, Icons } from '../../interfaces/index';

@Component({
  selector: 'app-music-table',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.scss']
})
export class MusicTableComponent {
  @Input() songs: Song[] = [];
  
  get Icons() {
    return Icons; 
  }
}
