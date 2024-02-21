/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 컬러 추가
        purple: "#6250FF",
        lightPurple: "#F0F0FA",
        mainPurple: "#7079CB",
        darkGray: "#242424",
        lightGray: "#6F6F6F",
        mainGray: "#727B88",
        blackBg: "#0C0C10",
        footerBg: "#222222",
        mainBrown: "#431B06",
        mainThirdBrown: "#6C3111",
        lightBrown: "#696156",
        mainBlue: "#375984",
        mainLightBlue: "#698AB1",
      },
    },
  },
  plugins: [],
};
