import { Component, Input } from "@angular/core";

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent {
  @Input() title: string = "";
  @Input() description?: string;

  items = [
    {
      name: "Primary",
      palette: [
        {
          val: "#EB002A",
          token: "$primary-brand",
          a11y: {
            light: [true, true],
            dark: [true, true],
          },
        },
        {
          val: "#BB0B2B",
          token: "$primary-medium",
          a11y: {
            light: [true, false],
            dark: [true, true],
          },
        },
        {
          val: "#9F0622",
          token: "$primary-dark",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
      ],
    },
    {
      name: "Accent",
      palette: [
        {
          val: "#9BCBEB",
          token: "$accent-01",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#41B6E6",
          token: "$accent-02",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#01426A",
          token: "$accent-03",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
        {
          val: "#FFC72C",
          token: "$accent-04",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#007D8A",
          token: "$accent-05",
          a11y: {
            light: [true, false],
            dark: [true, true],
          },
        },
      ],
    },
    {
      name: "Neutral",
      palette: [
        {
          val: "#FFFFFF",
          token: "$neutral-white",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#000000",
          token: "$neutral-black",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
        {
          val: "#FAFAFA",
          token: "$neutral-01",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#EBEBEB",
          token: "$neutral-02",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#BBBBBC",
          token: "$neutral-03",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#99999B",
          token: "$neutral-04",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#868484",
          token: "$neutral-05",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "#5C5C5C",
          token: "$neutral-06",
          a11y: {
            light: [true, false],
            dark: [true, true],
          },
        },
        {
          val: "#464646",
          token: "$neutral-07",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
        {
          val: "#222222",
          token: "$neutral-08",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
      ],
    },
    {
      name: "Support",
      palette: [
        {
          val: "#13A3B1",
          token: "$support-focus",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "#EB002A",
          token: "$support-error",
          a11y: {
            light: [true, true],
            dark: [true, true],
          },
        },
        {
          val: "#128816",
          token: "$support-success",
          a11y: {
            light: [true, true],
            dark: [true, true],
          },
        },
        {
          val: "#13A3B1",
          token: "$support-info",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "#E86E10",
          token: "$support-warning",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "rgba(0, 40, 65, 0.5)",
          token: "$support-overlay",
        },
      ],
    },
  ];
}
