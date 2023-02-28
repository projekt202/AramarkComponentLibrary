import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gtmId',
})
export class GtmIdPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(' ', '-');
  }
}
