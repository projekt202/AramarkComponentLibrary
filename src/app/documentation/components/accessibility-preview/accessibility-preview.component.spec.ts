import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityPreviewComponent } from './accessibility-preview.component';

describe('AccessibilityPreviewComponent', () => {
  let component: AccessibilityPreviewComponent;
  let fixture: ComponentFixture<AccessibilityPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
