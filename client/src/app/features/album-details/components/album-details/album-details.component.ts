import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/core/models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() album: IAlbum;

  constructor() { }

  ngOnInit() {
  }

}
