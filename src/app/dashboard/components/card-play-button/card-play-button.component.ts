import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from 'src/app/dashboard/interfaces/index';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-card-play-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './card-play-button.component.html',
  styleUrls: ['./card-play-button.component.scss']
})
export class CardPlayButtonComponent {
  @Input() playlistId: string = '';
  isPlaying: boolean = false;
  get Icons() {
    return Icons; 
  }
}
