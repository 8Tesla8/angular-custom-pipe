import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, price: number, cargo?: string): string {
    if(cargo === undefined || cargo === null){
      cargo = "";
    }

    if (value === undefined || value === null) {
      return "";
    }

    if (price === undefined || price === null) {
      return "";
    }

    if(value === 0){
      return "0 " + cargo;
    }


    var count = Math.trunc(value / price);

    return count + " " + cargo;
  }
}
