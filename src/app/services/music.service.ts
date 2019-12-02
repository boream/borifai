import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ARTISTS } from '../constants/artists';
import { ALBUMS } from '../constants/albums';
import { SONGS } from '../constants/songs';
import { Song } from '../types/song';
import { Album } from '../types/album';
import { Artist } from '../types/artist';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public selectedSong$ = new BehaviorSubject<Song>({
    id: 7,
    name: 'Aura',
    albumId: 3,
    artistId: 2,
    path: '../../../assets/music/warhola/Aura.mp3',
  });

  public selectedAlbum$ = new BehaviorSubject<Album>({
    id: 1,
    name: 'Greatest Hits',
    image: '/assets/images/cover_Queen_01.jpg',
    artistId: 1,
    year: 1975
  });

  public albumSongs$: Observable<Song[]>;

  public selectedArtist$: Observable<Artist>;

  public artistAlbums$: Observable<Album[]>;

  public background$: Observable<any>;

  constructor(
    @Inject(ARTISTS) private artists: Artist[],
    @Inject(ALBUMS) private albums: Album[],
    @Inject(SONGS) private songs: Song[]
  ) {
    this.selectedSong$.next(this.songs[1]);

    this.selectedAlbum$.next(this.albums[0]);

    this.selectedArtist$ = this.selectedSong$.pipe(
      map(song => this.artists.find(artist => artist.id === song.artistId))
    );

    this.artistAlbums$ = this.selectedArtist$.pipe(
      map(artist => this.albums.filter(album => album.artistId === artist.id))
    );

    this.albumSongs$ = this.selectedAlbum$.pipe(
      map(album => this.songs.filter(song => song.albumId === album.id).map(s => Object.assign({}, s, {album: album.name})))
    );

    // wallpaper background stream
    this.background$ = this.selectedArtist$.pipe(
      map(artist => {
        if (artist) {
          return `url('${artist.img}')`;
        }
        return '';
      })
    );
  }

  getAlbumsByArtist() { }

  getSongsListByAlbum() { }

  getAlbumInfoBySong() { }

  getPlaylists() { }

  addSongToPlaylist() { }

  addArtistToMyStars() { }

  selectSong(song: Song) {
    this.selectedSong$.next(song);
  }

  selectAlbum(album: Album) {
    this.selectedAlbum$.next(album);
  }

}
