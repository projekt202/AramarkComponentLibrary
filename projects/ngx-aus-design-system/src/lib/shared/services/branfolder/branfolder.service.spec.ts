import { TestBed } from '@angular/core/testing';

import { BranfolderService } from './branfolder.service';

describe('BranfolderService', () => {
  let service: BranfolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranfolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
