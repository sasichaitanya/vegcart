import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterName'
})
// ProdName
export class FilterName implements PipeTransform {

  transform(tabledata: any, searchByName: any): any {
    if (searchByName === undefined) {
      return tabledata;
    } else {
      return tabledata.filter(
        (x) => {
          return x.name.toLowerCase()
            .includes(searchByName.toLowerCase());
        });
    }
  }
}
