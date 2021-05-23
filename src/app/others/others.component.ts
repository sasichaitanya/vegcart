import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  allUsers: any;
  searchVariable: any;

  constructor() {
    this.allUsers = JSON.parse(localStorage.getItem('userDetails'))
  }

  ngOnInit() {
    const options = {
      cellHeight: 80,
      verticalMargin: 10
    };
    $('.grid-stack').gridstack(options);
  }

}
