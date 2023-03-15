import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "array2string",
})
export class Array2StringPipe implements PipeTransform {
  transform(value?: string[]): string {
    if (!value) return "";
    return value.join(" ");
  }
}
