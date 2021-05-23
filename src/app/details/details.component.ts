import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsElement: any;
  constructor() {
    this.detailsElement = 'Hi how are you';
  }

  ngOnInit() {
  }

  receievedEvent(e: any) {
    this.detailsElement = e;
  }

}
