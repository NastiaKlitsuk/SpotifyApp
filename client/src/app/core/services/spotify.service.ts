import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
declare const Buffer;
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  readonly baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getTokenAuthorization() {
    return this.httpClient.get(`${this.baseUrl}/api/spotify/token`);
  }
}
