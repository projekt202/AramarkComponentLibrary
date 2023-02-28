import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardColumnsComponent } from './image-card-columns.component';

describe('ImageCardColumnsComponent', () => {
  let component: ImageCardColumnsComponent;
  let fixture: ComponentFixture<ImageCardColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCardColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCardColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
