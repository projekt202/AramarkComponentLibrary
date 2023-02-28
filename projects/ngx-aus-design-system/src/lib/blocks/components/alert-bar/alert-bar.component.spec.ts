import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CookieModule } from "ngx-cookie";

import { GraphQLModule } from "../../../graphql.module";

import { AlertBarComponent } from "./alert-bar.component";

describe("AlertBarComponent", () => {
  let component: AlertBarComponent;
  let fixture: ComponentFixture<AlertBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertBarComponent],
      imports: [GraphQLModule, HttpClientModule, CookieModule.withOptions()],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should close banner after clicking accept button", () => {
    component.accept();
    expect(component.didAccept).toBeTrue();
    expect(component.isActive).toBeFalse();
  });

  it("should close banner after clicking accept button", () => {
    component.isActive = true;
    component.close();
    expect(component.isActive).toBeFalse();
  });
});
