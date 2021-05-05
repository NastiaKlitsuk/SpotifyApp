import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

@NgModule({
  declarations: [AlbumDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [AlbumDetailsComponent]
})
export class AlbumDetailsModule { }
