import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Song } from 'src/app/types/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @ViewChild('innerAudio', { static: true }) player: ElementRef;

  @Input() song: Song;

  time = 0;
  currentTime = 0;
  constructor() { }

  ngOnInit() {
    this.bindPlayerEvent();
  }

  bindPlayerEvent() {
    this.player.nativeElement.addEventListener('loadeddata', () => {
      this.time = this.player.nativeElement.duration;
    });
  }

  playBtnHandler(): void {
    if (this.time === 0) {
        return;
    }
    if (this.player.nativeElement.paused) {
        this.player.nativeElement.play(this.currentTime);
    } else {
        this.currentTime = this.player.nativeElement.currentTime;
        this.player.nativeElement.pause();
    }
}

}
