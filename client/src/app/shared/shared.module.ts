import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  exports:[DropdownComponent]
})
export class SharedModule { }
