export interface ITrack {
  artwork: Artwork;
  genre: string;
  id: string;
  track_cid: string;
  release_date: string;
  title: string;
  user: User;
  duration: number;
}

export interface Artwork {
  '150x150': string;
  '480x480': string;
  '1000x1000': string;
}

export interface User {
  id: string;
  name: string;
}
