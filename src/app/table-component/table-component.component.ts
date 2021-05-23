import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {
  @Input()
  tableData: any;
  headings: any ;

  constructor() {

  }

  ngOnInit() {
    console.log(this.tableData);
    this.getHeadings();
  }

  getHeadings() {
    this.headings = Object.keys(this.tableData[0]);
  }

}
