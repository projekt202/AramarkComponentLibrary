import { TestBed } from '@angular/core/testing';

import { FlyoutServiceService } from './flyout-service.service';

describe('FlyoutServiceService', () => {
  let service: FlyoutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyoutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
