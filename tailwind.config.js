/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 폰트 테마
      fontFamily: {
        PretendardMedium: ["Pretendard-Medium"],
        PretendardSemiBold: ["Pretendard-SemiBold"],
        PretendardBold: ["Pretendard-Bold"],
        PretendardExtraBold: ["Pretendard-ExtraBold"],
      },
      colors: {
        // 컬러 추가
        purple: "#6250FF",
        lightPurple: "#F0F0FA",
        mainPurple: "#7079CB",
        buttonPurple: "#4F44F0",
        buttonPurple2: "#5146F0",
        buttonPurple3: "#5E2BFF",
        darkPurple: "#2116BF",
        darkGray: "#242424",
        lightGray: "#6F6F6F",
        lightGray2: "#F4F5F6",
        borderGray: "#CECECE",
        mainGray: "#727B88",
        pageBgGray: "#F2F4F8",
        textGray: "#525252",
        blackBg: "#0C0C10",
        footerBg: "#222222",
        mainBrown: "#431B06",
        mainThirdBrown: "#6C3111",
        lightBrown: "#696156",
        mainBlue: "#375984",
        mainLightBlue: "#698AB1",
        lightBlue: "#E0EDFF",
        skyBlue: "#E1E7FD",
      },
    },
  },
  plugins: [],
};
