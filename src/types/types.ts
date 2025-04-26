export interface ITrack {
  artwork: Artwork;
  genre: string;
  id: string;
  title: string;
  user: User;
  duration: number;

  release_date: string; //добавленным
  repost_count: number; //актуальности
  favorite_count: number; //популярности
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
