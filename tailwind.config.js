import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stbGray: "rgb(48, 48, 48)",
        stbGreen: "rgb(6, 118, 85)",
      },
      fontFamily: {
        mulish: ["Mulish"],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
};
