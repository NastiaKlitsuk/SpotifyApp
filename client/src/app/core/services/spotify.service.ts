import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbum, IAlbumsMetadata } from '../models/album.model';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  readonly baseUrl = "http://localhost:3000/api/spotify";

  constructor(private httpClient: HttpClient) { }

  getAlbumsByArtist(artistName: string): Observable<{albums: IAlbum[], metadata: IAlbumsMetadata}> {
    return this.httpClient.get(`${this.baseUrl}/albums/${artistName}`).pipe(map((data: any) => this.parseAlbumsData(data)));
  }

  getNextAlbums(artistName: string, currentPage: number, limit: number): Observable<{albums: IAlbum[], metadata: IAlbumsMetadata}> {
    const offset = (currentPage * limit).toString();
    return this.httpClient.get(`${this.baseUrl}/albums/${artistName}`, {params: {offset, limit: limit.toString()}})
    .pipe(map((data: any) => this.parseAlbumsData(data)))
  }

  private parseAlbumsData(data: any) {
    const albums = data.albums;
    const mappedAlbums = albums.items ? albums.items.map(album => ({ name: album.name, releaseDate: album.release_date, images: album.images, id: album.id})) : [];
    const metadata = { limit: albums.limit, offset: albums.offset, total: albums.total};
    return ({albums: mappedAlbums, metadata});
  }
}
