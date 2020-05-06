import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAlcoholic'
})
export class FilterByAlcoholicPipe implements PipeTransform {

  transform(data: any, alco: string): any {
    // console.log(radio)
    if (!alco) {
      return data
    }
    return data.filter(el => {
      if (el.strAlcoholic.toLowerCase().indexOf(alco.toLocaleLowerCase()) > -1) {
        return data;
      } else if (alco == "all") {
        return data;
      }
    });
  }

}
