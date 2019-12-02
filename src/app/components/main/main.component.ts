import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // public background = `url('/assets/images/wallpaper_Warhola.jpg')`;

  constructor(public musicService: MusicService) { }

  ngOnInit() {
  }

}
