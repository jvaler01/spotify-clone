import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SliderComponent } from '../slider/slider.component';
import { Icons } from '../../interfaces/index';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, SliderComponent],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  isPlaying: boolean = false;
  isVolumeSilenced: boolean = false;
  audioRef: string = '';
  get Icons() {
    return Icons; 
  }
}
