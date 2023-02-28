import { TestBed } from '@angular/core/testing';
import { CookieModule } from 'ngx-cookie';

import { FormsService } from './forms.service';

describe('FormsService', () => {
  let service: FormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CookieModule.withOptions()],
    });
    service = TestBed.inject(FormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
