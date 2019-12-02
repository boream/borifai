import { Component, OnInit, Inject } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Song } from 'src/app/types/song';
import { SONGS } from 'src/app/constants/songs';

@Component({
  selector: 'app-main-artist',
  templateUrl: './main-artist.component.html',
  styleUrls: ['./main-artist.component.scss']
})
export class MainArtistComponent implements OnInit {

  private artistPos = 0;

  constructor(
    @Inject(SONGS) private songs: Song[],
    private musicService: MusicService
    ) { }

  ngOnInit() {
  }

  changeArtist() {
    if (this.artistPos === 0) {
      this.musicService.selectSong(this.songs[6]);
      this.artistPos = 1;
    } else {
      this.musicService.selectSong(this.songs[0]);
      this.artistPos = 0;
    }
  }

}
