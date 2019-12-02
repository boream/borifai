import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { SidenavPlaylistComponent } from './components/sidenav-playlist/sidenav-playlist.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './components/main/main.component';
import { MainArtistComponent } from './components/main-artist/main-artist.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { MainTabsComponent } from './components/main-tabs/main-tabs.component';
import { MainAlbumListComponent } from './components/main-album-list/main-album-list.component';
import { MainAlbumComponent } from './components/main-album/main-album.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongComponent } from './components/song/song.component';
import { PlayerComponent } from './components/player/player.component';
import { ModalPlaylistComponent } from './components/modal-playlist/modal-playlist.component';
import { PopupPlaylistComponent } from './components/popup-playlist/popup-playlist.component';
import { PopupAddPlaylistComponent } from './components/popup-add-playlist/popup-add-playlist.component';
import { MusicService } from './services/music.service';
import { Artists, ARTISTS } from './constants/artists';
import { ALBUMS, Albums } from './constants/albums';
import { SONGS, Songs } from './constants/songs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavMenuComponent,
    SidenavPlaylistComponent,
    SidenavComponent,
    MainComponent,
    MainArtistComponent,
    MainInfoComponent,
    MainTabsComponent,
    MainAlbumListComponent,
    MainAlbumComponent,
    SongListComponent,
    SongComponent,
    PlayerComponent,
    ModalPlaylistComponent,
    PopupPlaylistComponent,
    PopupAddPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MusicService,
    { provide: ARTISTS, useValue: Artists},
    { provide: ALBUMS, useValue: Albums},
    { provide: SONGS, useValue: Songs}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
