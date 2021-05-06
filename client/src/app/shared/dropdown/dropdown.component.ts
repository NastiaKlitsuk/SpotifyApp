import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  areOptionsDisplayed = false;
  selectedOption = "";

  @Input() options: string[];
  @Output() onOptionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onScroll() {
    console.log('scrolled!!');
  }

  toggleOptions() {
    this.areOptionsDisplayed = !this.areOptionsDisplayed;
  }

  optionSelected(option: string) {
    this.selectedOption = option;
    this.onOptionSelected.emit(option);
  }
}
