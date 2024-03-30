/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-slider": "infiniteSlider 60s linear infinite",
        "infinite-slider2": "infiniteSliderReverse 60s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" },
        },
        infiniteSliderReverse: {
          "0%": { transform: "translateX(calc(-200px * 5))" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
