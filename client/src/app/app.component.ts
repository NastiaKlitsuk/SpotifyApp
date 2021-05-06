import { Component } from '@angular/core';
import { SpotifyService } from './core/services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicAlbums';

  constructor(private p: SpotifyService) {
    this.p.getAlbumsByArtist("brunomars").subscribe(res => console.log(JSON.stringify(res)));
  }
}
