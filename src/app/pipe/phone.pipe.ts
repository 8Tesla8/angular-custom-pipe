import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
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
}
