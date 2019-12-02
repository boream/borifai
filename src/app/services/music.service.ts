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
    id: 1,
    name: 'Dont stop me now',
    albumId: 1,
    artistId: 1,
    path: '/assets/music/queen/dont-stop-me-now.mp3',
  });

  public selectedAlbum$ = new BehaviorSubject<Album>({
    id: 1,
    name: 'Greatest Hits',
    image: '/assets/images/cover_Queen_01.jpg',
    artistId: 1,
    artist: 'Queen',
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
    const selected = Object.assign({}, album);
    if (!album.artist) {
      const artist = this.artists.find(a => a.id === album.artistId);
      selected.artist = artist.name;
    }
    this.selectedAlbum$.next(selected);
  }

}
