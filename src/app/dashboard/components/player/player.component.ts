import { Component, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
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
export class PlayerComponent{
  @ViewChild('audio') audioPlayerRef: ElementRef<HTMLAudioElement> | undefined;
  @ViewChild('audioBar') audioBarRef: ElementRef<HTMLInputElement> | undefined;
  private spotifyService = inject(SpotifyService);
  isPlaying: boolean = false;
  isVolumeSilenced: boolean = false;
  songTimer = signal('0:00');
  audioPlayerTimer = signal(1);
  audioPlayerSlideValue = signal('0');
  songDuration = signal('0:00');
  audioUrl = signal('');

  private songDurationEffect = effect(() => {
    if (this.spotifyService.currentSong()) {
      this.isPlaying = false;
      const [minutes, seconds] = this.spotifyService.currentSong()!.duration.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds;
      this.audioPlayerTimer.update( current => totalSeconds );
      this.songDuration.update( current => this.convertSecondsToMinutes(totalSeconds));
      this.audioUrl.update( current => `/assets/music/${this.spotifyService.currentSong()!.albumId}/0${this.spotifyService.currentSong()!.id}.mp3`);
      setTimeout(() => {
        this.togglePlayback();
      }, 1000)
    }else{
      this.togglePlayback();
    }
  }, {allowSignalWrites: true});
  
  get Icons() {
    return Icons; 
  }

  togglePlayback() {
    const audioPlayer = this.audioPlayerRef?.nativeElement;
    if (audioPlayer) {
      if (this.isPlaying) {
        audioPlayer!.pause();
      } else {
        audioPlayer!.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
  getValueSliderSong(value: number) {
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.currentTime = value;
  }
  getValueSliderVolume(value: number) {
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    if (value === 0) {
      this.isVolumeSilenced = true;
    } else {
      this.isVolumeSilenced = false;
      
    }
    audioPlayer.volume = value/100;
  }
  setVolume(){
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.volume = this.isVolumeSilenced ? 0 : 1;
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

  get currentSong() {
    return this.spotifyService.currentSong;
  }
}
