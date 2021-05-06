import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownOption } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  areOptionsDisplayed = false;
  selectedOption = "";

  @Input() options: IDropdownOption[];
  @Output() onOptionSelected = new EventEmitter<string>();
  @Output() onScrollDown = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onScroll() {
    console.log('scrolled!!');
    this.onScrollDown.emit();
  }

  toggleOptions() {
    this.areOptionsDisplayed = !this.areOptionsDisplayed;
  }

  optionSelected(option: IDropdownOption) {
    this.toggleOptions();
    this.selectedOption = option.value;
    this.onOptionSelected.emit(option.id);
  }
}
