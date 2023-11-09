import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons, Song } from '../../interfaces';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-music-table',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.scss'
})
export class MusicTableComponent {
  @Input() songs: Song[] = [];
  
  get Icons() {
    return Icons; 
  }
}
