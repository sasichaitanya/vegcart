// three parts

// importing   dependency injection
import { Component } from '@angular/core';

// var arr = [{
//   name: 'chaitanya',
//   endDate: '2020-10-05',
//   priority: 'high',
//   type: 'Decision_Task'
// },
// {
//   name: 'sashi',
//   endDate: '2020-10-15',
//   priority: 'high',
//   type: 'Meeting_Task'
// },
// {
//   name: 'pavan',
//   endDate: '2020-10-20',
//   priority: 'high',
//   type: 'Meeting_Task'
// },
// {
//   name: 'kumar',
//   endDate: '2020-10-25',
//   priority: 'high',
//   type: 'Decision_Task'
// }]

// decorater
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// exporting
export class AppComponent {
  data : any ;

  constructor() {

    this.data = [{id : '1', name : 'asdf', age: 20}, {id : 2 , name : 'dfgh', age: 30}];
  }


  // title = 'vegcart';
  // retObj: any;
  // myObj: any;
  // constructor() {
  //   this.retObj = {}
  //   this.myObj= {
  //     a: 1,
  //     b:2
  //   }
  //   this.formArr()
  // }

  // formArr() {
  //   for (let i = 0; i < arr.length; i++) {
  //     let type = arr[i].type
  //     if (this.retObj[type]) {
  //       this.retObj[type].push({
  //         name: arr[i].name,
  //         endDate: arr[i].endDate,
  //         priority: arr[i].priority
  //       })
  //     } else {
  //       this.retObj[type] = []
  //       this.retObj[type].push({
  //         name: arr[i].name,
  //         endDate: arr[i].endDate,
  //         priority: arr[i].priority
  //       })
  //     }

  //   }
  // }
}
