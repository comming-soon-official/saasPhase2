/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  daisyui: {
    themes: [
      {
        light: {
          primary: "#a03c64",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#ff0033",
        },
      },

      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  theme: {
    extend: {
      colors: {
        purple: "#C026D3",
        darkPink: "#a03c64",
        lightPink: "#ecd8e0",
      },
    },
    fontFamily: {
      sans: ["Source Sans Pro", "Inter", "sans-serif"],
      ibm: ["IBM Plex Mono"],
      inter: ["Inter"],
    },
  },
  plugins: [require("daisyui")],
};
