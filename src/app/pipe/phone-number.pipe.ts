import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phoneNumber"
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (value !== undefined && value !== null && value !== "") {
      let result = "";

      for (let index = 0, count = 0; index < value.length; index++, count++) {
        result += value[index];

        if (value[index] === "+") {
          count = 0;
        }

        if (count == 3) {
          count = 0;
          result += " ";
        }
      }

      return result;
    }

    return "";
  }
  //+380 651 923 347
}
