import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  isPlaying = signal(false);
  isVolumeSilenced = signal(false);
  songTimer = signal('0:00');
  audioPlayerTimer = signal(1);
  audioPlayerSlideValue = signal('0');
  songDuration = signal('0:00');
  audioUrl = signal('');
  constructor() { }
  
  convertSecondsToMinutes(time: number): string {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  setIsPlaying(value: boolean) {
    this.isPlaying.set(value);
  }
  setAudioPlayerSlideValue(value: string) {
    this.audioPlayerSlideValue.set(value);
  }
  setSongTimer(value: string | number, convert: boolean) {
    if (convert) {
      this.songTimer.set(this.convertSecondsToMinutes(typeof value == 'number' ? value : 0));
    } else {
      this.songTimer.set(typeof value == 'number' ? value.toString() : value);
    }
  }
  setAudioPlayerTimer(value: number) {
    this.audioPlayerTimer.set(value);
  }
  setSongDuration(value: number) {
    this.songDuration.set(this.convertSecondsToMinutes(value));
  }
  setAudioUrl(albumId: number, songId: number) {
    this.audioUrl.set(`/assets/music/${albumId}/0${songId}.mp3`);
  }
}
