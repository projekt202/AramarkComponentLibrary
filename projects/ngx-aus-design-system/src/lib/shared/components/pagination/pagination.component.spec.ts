import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goes to a particular page', () => {
    component.totalCount = 20;
    component.pageSize = 5;
    component.rulerLength = 5;
    component.disabled = false;
    const prevIdx = component.index;
    component.navigateToPage(5);
    expect(prevIdx).not.toBe(component.index);
    expect(component.index).toBe(5);
  });
});
