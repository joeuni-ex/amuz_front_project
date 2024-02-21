/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 컬러 추가
        purple: "#6250FF",
        lightPurple: "#F0F0FA",
        darkGray: "#242424",
        blackBg: "#0C0C10",
      },
    },
  },
  plugins: [],
};
