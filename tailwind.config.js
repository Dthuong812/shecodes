module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#316BFF",
        P_green: "#FF543D",
        p_purple: "#878CFF",
        s_blue: "#A4CDE3",
        s_yellow: "#FFAF4E",
        text1: "#141416",
        text2: "#8E94A3",
        text3:"#3B3E44",
        text4:"#84878B",
        error : "#e9898e",
        g_white :"#FAFBFF",
        strock :"#5666a9",
        darkStroke:"#5796b2"

      },
      boxShadow: {
        sdprimary: "10px 10px 20px rgba(211, 211, 211, 0.25)",
      },
    },
  },
  plugins: [],
};