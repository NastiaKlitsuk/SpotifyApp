import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAlbum, IAlbumsMetadata } from './core/models/album.model';
import { SpotifyService } from './core/services/spotify.service';
import { IDropdownOption } from './shared/components/dropdown/dropdown.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentPage = 0;
  private artistName = "brunomars";

  private selectedAlbum = new BehaviorSubject<IAlbum>(null);
  selectedAlbum$ = this.selectedAlbum.asObservable();

  albums: IAlbum[] = [];
  metadata: IAlbumsMetadata;

  get albumOptions(): IDropdownOption[] {
    return this.albums.map((album: IAlbum) => ({ id: album.id, value: album.name }))
  }

  constructor(private readonly spotifyService: SpotifyService) {
    this.spotifyService.getAlbumsByArtist(this.artistName).subscribe(({albums, metadata}) => {this.albums = albums; this.metadata = metadata;});
  }

  onOptionSelected(id: string) {
    const selected = this.albums.find((album: IAlbum) => album.id === id);
    this.selectedAlbum.next(selected);
  }

  getNextAlbums() {
    this.currentPage++;
    this.spotifyService.getNextAlbums(this.artistName, this.currentPage, this.metadata.limit)
      .subscribe(({albums, metadata}) => {this.albums = this.albums.slice().concat(albums.slice()); this.metadata = metadata;});
  }
}
