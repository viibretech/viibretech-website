import { heroui } from "@heroui/react";

export default heroui({
  defaultTheme: "light",
  themes: {
    light: {
      layout: {
        radius: {
          small: "0.5rem",
          medium: "0.75rem",
          large: "1rem",
        },
      },
      colors: {
        divider: {
          DEFAULT: "#ACABAB",
          "300": "#E1E4EA",
          "500": "#99A0AE",
          "600": "#5C5C5C",
          "700": "#0E121B",
        },
        primary: {
          DEFAULT: "#75D8FC",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#ECFEAF",
        },
        // focus: "#BEF264",
      },
    },
  },
});
