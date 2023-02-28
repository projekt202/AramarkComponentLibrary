import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { TabbedContentComponent } from './tabbed-content.component';

describe('TabbedContentComponent', () => {
  let component: TabbedContentComponent;
  let fixture: ComponentFixture<TabbedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabbedContentComponent],
      imports: [LazyLoadImageModule, NgxSmartModalModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TabbedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates active index', () => {
    expect(component.activeIdx).toBe(0);
    component.onSelectionHandler(1);
    expect(component.activeIdx).toBe(1);
  });
});
