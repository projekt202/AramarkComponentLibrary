import { Component, Input } from "@angular/core";

import {
  QuoteSliderComponentData,
  QuoteSliderComponentType,
} from "./quote-slider.component.model";

@Component({
  selector: "aus-quote-slider",
  templateUrl: "./quote-slider.component.html",
  styleUrls: ["./quote-slider.component.scss"],
})
export class QuoteSliderComponent {
  @Input() type: QuoteSliderComponentType = "light";
  @Input() quotes: Array<QuoteSliderComponentData> = [
    {
      author: {
        image: "https://api.lorem.space/image?w=1366&h=470",
        name: "Bob Miller 1",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
    {
      author: {
        image: "https://api.lorem.space/image?w=1366&h=470",
        name: "Bob Miller 2",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
  ];

  constructor() {}

  getClasses() {
    const classes = ["quote-slider"];
    if (this.type === "dark") {
      classes.push("type--dark");
    } else {
      classes.push("type--light");
    }
    return classes.join(" ");
  }
}
