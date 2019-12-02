export interface Song {
  id: number;
  name: string;
  albumId: number;
  album?: string;
  artistId: number;
  path: string;
}
