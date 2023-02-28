import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportFormComponent } from './customer-support-form.component';

describe('CustomerSupportFormComponent', () => {
  let component: CustomerSupportFormComponent;
  let fixture: ComponentFixture<CustomerSupportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSupportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
