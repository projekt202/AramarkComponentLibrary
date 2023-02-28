import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsCardsComponent } from './reviews-cards.component';

describe('ReviewsCardsComponent', () => {
  let component: ReviewsCardsComponent;
  let fixture: ComponentFixture<ReviewsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
