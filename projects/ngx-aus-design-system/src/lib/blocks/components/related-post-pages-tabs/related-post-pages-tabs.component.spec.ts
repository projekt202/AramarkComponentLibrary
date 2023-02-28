import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedPostPagesTabsComponent } from './related-post-pages-tabs.component';

describe('RelatedPostPagesTabsComponent', () => {
  let component: RelatedPostPagesTabsComponent;
  let fixture: ComponentFixture<RelatedPostPagesTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedPostPagesTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedPostPagesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
