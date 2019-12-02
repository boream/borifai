import { InjectionToken } from '@angular/core';
import { Song } from '../types/song';

export const Songs: Song[] = [
  {
    id: 1,
    name: "Dont stop me now",
    albumId: 1,
    artistId: 1,
    path: "/assets/music/queen/dont-stop-me-now.mp3",
  },
  {
    id: 2,
    name: "I want to break free",
    albumId: 1,
    artistId: 1,
    path: "/assets/music/queen/IWantToBreakFree.mp3",
  },
  {
    id: 3,
    name: "Killer Queen",
    albumId: 1,
    artistId: 1,
    path: "/assets/music/queen/KillerQueen.mp3",
  },
  {
    id: 4,
    name: "Somebody to love",
    albumId: 1,
    artistId: 1,
    path: "/assets/music/queen/SomebodyToLove.mp3",
  },
  {
    id: 5,
    name: "Bohemian Rhapsody",
    albumId: 1,
    artistId: 1,
    path: "/assets/music/queen/BohemianRhapsody.mp3",
  },
  {
    id: 6,
    name: "Red",
    albumId: 3,
    artistId: 2,
    path: "/assets/music/warhola/Red.mp3",
  },
  {
    id: 7,
    name: "Aura",
    albumId: 3,
    artistId: 2,
    path: "/assets/music/warhola/Aura.mp3",
  },
  {
    id: 8,
    name: "Glow",
    albumId: 3,
    artistId: 2,
    path: "/assets/music/warhola/Jewels.mp3",
  },
  {
    id: 9,
    name: "Lookt at me",
    albumId: 3,
    artistId: 2,
    path: "/assets/music/warhola/LookAtMe.mp3",
  },
  {
    id: 10,
    name: "Promise",
    albumId: 3,
    artistId: 2,
    path: "/assets/music/warhola/Promise.mp3",
  },
  {
    id: 11,
    name: "Jewels",
    albumId: 3,
    artistId: 2,
    path: "/assets/music/warhola/Jewels.mp3",
  },
];
export const SONGS = new InjectionToken<Song[]>('app.songs');
