import { Pipe, PipeTransform } from '@angular/core';

import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(date: string): string {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  }
}
