import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
declare const Buffer;
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  getTokenAuthorization() {
    const client_id = '4caa4963a0b047cf8d58105015bf4e41';
    const client_secret = 'a14e5b7f899141c3952be01023bea6f3';
    const url = 'https://accounts.spotify.com/api/token';

    // your application requests authorization
    const authOptions = {
      headers: {
        'Authorization': `Basic ${client_id}:${client_secret}`
      },
      form: {
        grant_type: 'client_credentials'
      }
    };

    return this.httpClient.post(url, {}, authOptions);
  }
}
