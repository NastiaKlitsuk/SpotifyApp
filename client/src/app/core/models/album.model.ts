export interface IAlbum {
  id: string;
  name: string;
  releaseDate: string;
  images: IImage[];
  next: string;
}

export interface IImage {
  heigth: number;
  url: string;
  width: number;
}

export interface IAlbumsMetadata {
  total: number;
  offset: number;
  limit: number;
}
