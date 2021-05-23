import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-child',
  templateUrl: './details-child.component.html',
  styleUrls: ['./details-child.component.scss']
})
export class DetailsChildComponent implements OnInit {
  @Input()
  sashiInputProperty: any;

  @Output()
  sendEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onChangeInput() {
    this.sendEvent.emit(this.sashiInputProperty)
  }

}
