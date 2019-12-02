import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/types/album';

@Component({
  selector: 'app-main-album',
  templateUrl: './main-album.component.html',
  styleUrls: ['./main-album.component.scss']
})
export class MainAlbumComponent {

  @Input() album: Album;
  @Output() changeAlbum = new EventEmitter<Album>();

}
