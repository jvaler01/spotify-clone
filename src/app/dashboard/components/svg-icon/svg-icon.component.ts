import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from 'src/app/dashboard/interfaces/index';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.svg',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input() icon: Icons = Icons.Home;
  get Icons() {
    return Icons; 
  }
}
