import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class OneTimeService {
  private keys: { [key: string]: any } = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState
  ) { }

  makeKey(key: string) {
    if (!this.keys[key]) {
      let newKey = this.keys[key] ?? makeStateKey<any>('armkd-' + key);
      this.keys[key] = newKey;
      return newKey;
    }
    return this.keys[key];
  }

  oneTime(key: string): boolean {
    return !this.transferState.hasKey(this.makeKey(key));
  }
  
  get(key: string, defaultValue:any = null): any {
    return this.transferState.get<any>(this.makeKey(key), defaultValue);
  }
  
  set(key: string, value: any) {
    this.transferState.set(this.makeKey(key), value);
  }
}
