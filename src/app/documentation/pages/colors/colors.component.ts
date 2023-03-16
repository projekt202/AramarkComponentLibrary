import { Component, Input } from "@angular/core";

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent {
  items = [
    {
      name: "Primary",
      palette: [
        {
          val: "#EB002A",
          class: "bg-primary-brand",
          token: "$primary-brand",
          a11y: {
            light: [true, true],
            dark: [true, true],
          },
        },
        {
          val: "#BB0B2B",
          class: "bg-primary-medium",
          token: "$primary-medium",
          a11y: {
            light: [true, false],
            dark: [true, true],
          },
        },
        {
          val: "#9F0622",
          class: "bg-primary-dark",
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
          class: "bg-accent-01",
          token: "$accent-01",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#41B6E6",
          class: "bg-accent-02",
          token: "$accent-02",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#01426A",
          class: "bg-accent-03",
          token: "$accent-03",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
        {
          val: "#FFC72C",
          class: "bg-accent-04",
          token: "$accent-04",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#007D8A",
          class: "bg-accent-05",
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
          class: "bg-neutral-white",
          token: "$neutral-white",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#000000",
          class: "bg-neutral-black",
          token: "$neutral-black",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
        {
          val: "#FAFAFA",
          class: "bg-neutral-01",
          token: "$neutral-01",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#EBEBEB",
          class: "bg-neutral-02",
          token: "$neutral-02",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#BBBBBC",
          class: "bg-neutral-03",
          token: "$neutral-03",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#99999B",
          class: "bg-neutral-04",
          token: "$neutral-04",
          a11y: {
            light: [true, true],
            dark: [false, false],
          },
        },
        {
          val: "#868484",
          class: "bg-neutral-05",
          token: "$neutral-05",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "#5C5C5C",
          class: "bg-neutral-06",
          token: "$neutral-06",
          a11y: {
            light: [true, false],
            dark: [true, true],
          },
        },
        {
          val: "#464646",
          class: "bg-neutral-07",
          token: "$neutral-07",
          a11y: {
            light: [false, false],
            dark: [true, true],
          },
        },
        {
          val: "#222222",
          class: "bg-neutral-08",
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
          class: "bg-support-focus",
          token: "$support-focus",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "#EB002A",
          class: "bg-support-error",
          token: "$support-error",
          a11y: {
            light: [true, true],
            dark: [true, true],
          },
        },
        {
          val: "#128816",
          class: "bg-support-success",
          token: "$support-success",
          a11y: {
            light: [true, true],
            dark: [true, true],
          },
        },
        {
          val: "#13A3B1",
          class: "bg-support-info",
          token: "$support-info",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "#E86E10",
          class: "bg-support-warning",
          token: "$support-warning",
          a11y: {
            light: [true, true],
            dark: [true, false],
          },
        },
        {
          val: "rgba(0, 40, 65, 0.5)",
          class: "bg-support-overlay",
          token: "$support-overlay",
        },
      ],
    },
  ];
}
