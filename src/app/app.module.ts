import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgxAusDesignSystemModule } from "projects/ngx-aus-design-system/src/lib/ngx-aus-design-system.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgxAusDesignSystemModule],
})
export class AppModule {}
