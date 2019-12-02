import { InjectionToken } from '@angular/core';
import { Album } from '../types/album';

export const Albums: Album[] = [
  {
    id: 1,
    name: 'Greatest Hits',
    image: '../assets/images/cover_Queen_01.jpg',
    artistId: 1,
    year: 1975
  },
  {
    id: 2,
    name: 'Queen 2',
    image: '../assets/images/cover_Queen_02.jpg',
    artistId: 1,
    year: 1978
  },
  {
    id: 3,
    name: 'Anthology album',
    image: '../assets/images/cover_Queen_03.jpg',
    artistId: 1,
    year: 1979
  },
  {
    id: 4,
    name: 'Queen Red',
    image: '../assets/images/cover_Queen_04.jpg',
    artistId: 1,
    year: 1980
  },
  {
    id: 5,
    name: 'Greatest Hits 2',
    image: '../assets/images/cover_Queen_05.jpg',
    artistId: 1,
    year: 1985
  },
  {
    id: 6,
    name: 'Queen in nuce',
    image: '../assets/images/cover_Queen_06.jpg',
    artistId: 1,
    year: 1988
  },
  {
    id: 7,
    name: 'Young Loving',
    image: '../assets/images/cover_Warhola_01.jpg',
    artistId: 2,
    year: 1975
  },
  {
    id: 8,
    name: 'Saliva',
    image: '../assets/images/cover_Warhola_02.jpg',
    artistId: 2,
    year: 1995
  },
  {
    id: 9,
    name: 'Artist Title',
    image: '../assets/images/cover_Warhola_03.jpg',
    artistId: 2,
    year: 1992
  },
  {
    id: 10,
    name: 'Encore',
    image: '../assets/images/cover_Warhola_04.jpg',
    artistId: 2,
    year: 2001
  },
  {
    id: 11,
    name: 'Supernatural',
    image: '../assets/images/cover_Warhola_05.jpg',
    artistId: 2,
    year: 2004
  }
];
export const ALBUMS = new InjectionToken<object[]>('app.albums');
