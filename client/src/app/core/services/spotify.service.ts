import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  readonly baseUrl = "http://localhost:3000/api/spotify";
  private access_token = "";

  constructor(private httpClient: HttpClient) { }

  getAlbumsByArtist(artistName: string) {
    return this.httpClient.get(`${this.baseUrl}/albums`, {params: {artistName}});
  }
}
