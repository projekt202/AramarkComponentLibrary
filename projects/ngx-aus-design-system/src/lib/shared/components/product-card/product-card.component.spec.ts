import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [NgxSmartModalModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggles modal', () => {
    expect(component.isModalOpen).toBeFalse();
    component.toggleModal(true);
    expect(component.isModalOpen).toBeTrue();
    component.toggleModal(false);
    expect(component.isModalOpen).toBeFalse();
  });

  it('updates selected color option', () => {
    expect(component.selectedIdx).toBe(0);
    component.updateColor(1);
    expect(component.selectedIdx).toBe(1);
  });
});
