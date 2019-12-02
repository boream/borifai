export interface Album {
  id: number;
  name: string;
  image: string;
  artistId: number;
  artist?: string;
  year: number;
}
