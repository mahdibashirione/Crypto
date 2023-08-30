/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        primary: {
          5: "#D3DCFD",
          10: "#B5C5FC",
          20: "#90A7FA",
          30: "#6B8AF8",
          40: "#466DF7",
          50: "#2150F5",
          60: "#1C43CC",
          70: "#1635A3",
          80: "#11287B",
          90: "#0B1B52",
          100: "#071031",
        },
        secendry: {
          5: "#FDD8D3",
          10: "#FCBDB5",
          20: "#FA9C90",
          30: "#F87C6B",
          40: "#F75B46",
          50: "#F53A21",
          60: "#CC301C",
          70: "#A32716",
          80: "#7B1D11",
          90: "#52130B",
          100: "#310C07",
        },
        gray: {
          5: "#FAFDFF",
          10: "#F6FCFE",
          20: "#F2FAFE",
          30: "#EEF8FE",
          40: "#E9F7FD",
          50: "#E5F5FD",
          60: "#BFCCD3",
          70: "#99A3A9",
          80: "#737B7F",
          90: "#4C5254",
          100: "#2E3133",
        },
      },
    },
  },
  plugins: [],
};
