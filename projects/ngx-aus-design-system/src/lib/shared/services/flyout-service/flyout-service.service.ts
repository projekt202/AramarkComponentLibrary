import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlyoutServiceService {
  private openSource = new Subject();

  openCalled$ = this.openSource.asObservable();

  open(zip: string) {
    this.openSource.next(zip);
  }
}
