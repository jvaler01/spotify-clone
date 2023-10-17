import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() size: string = 'w-[150px]';
  @Input() min: number=0;
  @Input() value = signal('0');
  @Input() max = signal(0);

  @Output() emitSlideValueEvent = new EventEmitter<number>();
  getValue(event: any) {
    console.log(event.target!.value)
    this.emitSlideValueEvent.emit(event.target!.value);
  }
}
