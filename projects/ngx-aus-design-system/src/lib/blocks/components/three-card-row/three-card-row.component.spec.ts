import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardRowComponent } from './three-card-row.component';

describe('ThreeCardRowComponent', () => {
  let component: ThreeCardRowComponent;
  let fixture: ComponentFixture<ThreeCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
