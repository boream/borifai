import { InjectionToken } from '@angular/core';

export const Artists = [
  {
    id: 1,
    name: 'Queen',
    info: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.',
    img: '/assets/images/wallpaper_Queen.jpeg',
  },
  {
    id: 2,
    name: 'Warhola',
    info: 'Blending dramatic indie electronica and woozy alt-R&B, Warhola is the solo project of Belgian musician Oliver Symons (Bazart, Noble Tea). A native of Sint-Job-in-t-Goor in the province of Antwerp, Symons first found the national spotlight at the age of 15 as a competitor for the Belgian entry in the 2008 Junior Eurovision Song Contest. He won and presented his song \'Shut Up\' to an international audience that November. Less than two years after his 11th-place finish, he founded the indie rock band Noble Tea with guitarist Emiel Van Den Abbeele, guitarist/keyboard player Daan Schepers, bass player Moreno Claes, and drummer Antony Foscez. They released the Solitary Motions EP in 2012.',
    img: '/assets/images/wallpaper_Warhola.jpg',
  },
  {
    id: 3,
    name: 'AC/DC',
    info: 'ACDC',
    img: '/assets/images/wallpaper_ACDC.jpg',
  },
  {
    id: 4,
    name: 'Acid Arab',
    info: 'AcidArab',
    img: '/assets/images/wallpaper_AcidArab.jpg',
  },
  {
    id: 5,
    name: 'Alex Serra',
    info: 'Alex Serra',
    img: '/assets/images/wallpaper_AlexSerra.jpg',
  }
];

export const ARTISTS = new InjectionToken<object[]>('app.artists');
