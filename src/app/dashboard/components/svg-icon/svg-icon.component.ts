import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.svg',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input() icon: string = '';
}
