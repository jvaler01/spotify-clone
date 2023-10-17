import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
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
export class PlayerComponent implements OnInit{
  @ViewChild('audio') audioPlayerRef: ElementRef<HTMLAudioElement> | undefined;
  @ViewChild('audioBar') audioBarRef: ElementRef<HTMLInputElement> | undefined;
  isPlaying: boolean = false;
  isVolumeSilenced: boolean = false;
  songTimer = signal('0:00');
  audioPlayerTimer = signal(1);
  audioPlayerSlideValue = signal('0');

  audioUrl: string = '/assets/music/1/01.mp3';
  songDuration = '2:57';
  ngOnInit(): void {
    const [minutes, seconds] = this.songDuration.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    this.audioPlayerTimer.update( current => totalSeconds );
  }
  
  get Icons() {
    return Icons; 
  }

  togglePlayback() {
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    if (this.isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }
  getValue(value: number) {
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.currentTime = value;
  }
  convertSecondsToMinutes(time: number): string {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
  ngAfterViewInit() {
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.addEventListener('timeupdate', () => {
      this.audioPlayerSlideValue.update( current => audioPlayer.currentTime.toString());
      this.songTimer.update( current => this.convertSecondsToMinutes(audioPlayer.currentTime));
    });
    audioPlayer.addEventListener('ended', () => {
      this.audioPlayerSlideValue.update( current => '0');
      this.songTimer.update( current => '0:00');
      this.isPlaying = false;
    });
  }
}
