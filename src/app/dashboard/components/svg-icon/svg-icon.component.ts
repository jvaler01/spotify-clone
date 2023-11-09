import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from '../../interfaces';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.svg',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  @Input() icon: Icons = Icons.Home;
  @Input() size: number = 24;
  get Icons() {
    return Icons; 
  }
}
