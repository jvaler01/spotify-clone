import { Component, ElementRef, ViewChild, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from '../../interfaces';
import { PlayerService } from '../../services/player/player.service';
import { SpotifyService } from '../../services/spotify/spotify.service';
import { SliderComponent } from '../slider/slider.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, SliderComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent{
  @ViewChild('audio') audioPlayerRef: ElementRef<HTMLAudioElement> | undefined;
  @ViewChild('audioBar') audioBarRef: ElementRef<HTMLInputElement> | undefined;
  private spotifyService = inject(SpotifyService);
  private playerService = inject(PlayerService);

  private songDurationEffect = effect(() => {
    if (this.spotifyService.currentSong()) {
      this.playerService.setIsPlaying(false);
      const [minutes, seconds] = this.spotifyService.currentSong()!.duration.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds;
      this.playerService.setAudioPlayerTimer(totalSeconds);
      this.playerService.setSongDuration(totalSeconds);
      this.playerService.setAudioUrl(this.spotifyService.currentSong()!.albumId, this.spotifyService.currentSong()!.id);
      setTimeout(() => {
        this.togglePlayback();
      }, 1000)
    }else{
      //this.togglePlayback();
    }
  }, {allowSignalWrites: true});
  
  get Icons() {
    return Icons; 
  }

  togglePlayback() {
    const audioPlayer = this.audioPlayerRef?.nativeElement;
    if (audioPlayer) {
      if (this.playerService.isPlaying()) {
        audioPlayer!.pause();
      } else {
        audioPlayer!.play();
      }
      this.playerService.setIsPlaying(!this.playerService.isPlaying());
    }
  }
  getValueSliderSong(value: number) {
    /* const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.currentTime = value; */
  }
  getValueSliderVolume(value: number) {
    /* const audioPlayer = this.audioPlayerRef!.nativeElement;
    if (value === 0) {
      this.isVolumeSilenced = true;
    } else {
      this.isVolumeSilenced = false;
      
    }
    audioPlayer.volume = value/100; */
  }
  setVolume(){
    /* const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.volume = this.isVolumeSilenced ? 0 : 1; */
  }
  /* convertSecondsToMinutes(time: number): string {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  } */
  ngAfterViewInit() {
    const audioPlayer = this.audioPlayerRef!.nativeElement;
    audioPlayer.addEventListener('timeupdate', () => {
      this.playerService.setAudioPlayerSlideValue(audioPlayer.currentTime.toString());
      this.playerService.setSongTimer(audioPlayer.currentTime, true);
    });
    audioPlayer.addEventListener('ended', () => {
      this.playerService.setAudioPlayerSlideValue('0');
      this.playerService.setSongTimer('0:00', false);
      this.playerService.setIsPlaying(false);
    });
  }

  // spotifyService getters
  get currentSong() {
    return this.spotifyService.currentSong;
  }
  get currentPlaying() {
    return this.spotifyService.currentPlaying;
  }
  // playerService getters
  get isPlaying() {
    return this.playerService.isPlaying;
  }
  get songTimer() {
    return this.playerService.songTimer;
  }
  get songDuration() {
    return this.playerService.songDuration;
  }
  get isVolumeSilenced() {
    return this.playerService.isVolumeSilenced;
  }
  get audioUrl() {
    return this.playerService.audioUrl;
  }
  get audioPlayerTimer() {
    return this.playerService.audioPlayerTimer;
  }
  get audioPlayerSlideValue() {
    return this.playerService.audioPlayerSlideValue;
  }
}
