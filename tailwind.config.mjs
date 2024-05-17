/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      Solstice: ["Solstice"],
      velocity: ["Velocity"],
      ave: ["Sedgwick Ave Display"]
    },
    extend: {
      colors: {
        tulip: {
          50: "#fef9ec",
          100: "#fbefca",
          200: "#f8de8f",
          300: "#f4c855",
          400: "#f2b941",
          500: "#ea9216",
          600: "#cf6e10",
          700: "#ac4d11",
          800: "#8c3d14",
          900: "#733214",
          950: "#421806",
        },
        elephant: {
          50: "#eefbfd",
          100: "#d3f4fa",
          200: "#ade9f4",
          300: "#74d7ec",
          400: "#35bcdb",
          500: "#199fc1",
          600: "#187fa2",
          700: "#1a6784",
          800: "#1e556c",
          900: "#1d475c",
          950: "#0d2c3c",
        },
      },
    },
  },
  plugins: [animations],
};
