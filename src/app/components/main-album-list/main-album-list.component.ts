import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Album } from 'src/app/types/album';

@Component({
  selector: 'app-main-album-list',
  templateUrl: './main-album-list.component.html',
  styleUrls: ['./main-album-list.component.scss']
})
export class MainAlbumListComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  selectAlbum(album: Album) {
    this.musicService.selectAlbum(album);
  }

}
