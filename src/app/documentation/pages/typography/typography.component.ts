import { Component } from "@angular/core";

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.scss"],
})
export class TypographyComponent {
  items = [
    {
      name: "Core Text Presets",
      presets: [
        {
          name: "text-preset-1",
          size: "52 / 3.25",
          lineHeight: "64 / 4",
          weight: "Book",
          letterSpacing: "-0.16",
          token: "$text-preset-1",
        },
      ],
    },
  ];
}
