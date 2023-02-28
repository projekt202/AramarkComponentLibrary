import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserService } from "../../../shared/services/browser/browser.service";
import { CallToActionTextComponent } from "./call-to-action-text.component";
import {
  CallToActionTextAlignment,
  CallToActionTextComponentType,
  CallToActionTextComponentVariant,
} from "./call-to-action-text.component.model";

describe("CallToActionTextComponent", () => {
  let component: CallToActionTextComponent;
  let fixture: ComponentFixture<CallToActionTextComponent>;

  let mockBrowserService: any;
  let defaultMockVals = {
    addEventListener: jasmine.createSpy(),
  };

  beforeEach(async () => {
    mockBrowserService = jasmine.createSpyObj(["getWindow"]);
    mockBrowserService.getWindow.and.returnValue({
      ...defaultMockVals,
      innerWidth: 1200,
    });
    await TestBed.configureTestingModule({
      declarations: [CallToActionTextComponent],
      providers: [{ provide: BrowserService, useValue: mockBrowserService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CallToActionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct variant", () => {
    ["with-body-text", "without-body-text", "bg-img"].forEach((variant) => {
      component.variant = variant as CallToActionTextComponentVariant;
      fixture.detectChanges();
      const callToAction = fixture.debugElement.nativeElement.querySelector(
        ".call-to-action-text"
      );
      expect(callToAction.classList).toContain(`variant--${variant}`);
    });
  });

  it("should render the correct type", () => {
    ["dark", "light"].forEach((type) => {
      component.type = type as CallToActionTextComponentType;
      fixture.detectChanges();
      const callToAction = fixture.debugElement.nativeElement.querySelector(
        ".call-to-action-text"
      );
      expect(callToAction.classList).toContain(`type--${type}`);
    });
  });

  it("should render the correct alignment", () => {
    ["center", "left", "left-alt", "right-alt", "center-alt"].forEach(
      (alignment) => {
        component.alignment = alignment as CallToActionTextAlignment;
        fixture.detectChanges();
        const callToAction = fixture.debugElement.nativeElement.querySelector(
          ".call-to-action-text"
        );
        expect(callToAction.classList).toContain(`alignment--${alignment}`);
      }
    );
  });

  it("returns the correct background url for desktop breakpoint", () => {
    component.bgUrl = "desktop-test";
    mockBrowserService.getWindow.and.returnValue({
      ...defaultMockVals,
      innerWidth: 1200,
    });
    const url = component.getBgUrl();
    expect(url).toBe("desktop-test");
  });

  it("returns the correct background url for tablet breakpoint", () => {
    component.bgUrlTablet = "tablet-test";
    mockBrowserService.getWindow.and.returnValue({
      ...defaultMockVals,
      innerWidth: 992,
    });
    const url = component.getBgUrl();
    expect(url).toBe("tablet-test");
  });

  it("returns the correct background url for mobile breakpoint", () => {
    component.bgUrlMobile = "mobile-test";
    mockBrowserService.getWindow.and.returnValue({
      ...defaultMockVals,
      innerWidth: 600,
    });
    const url = component.getBgUrl();
    expect(url).toBe("mobile-test");
  });
});
