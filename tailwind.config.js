const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mon: ["var(--font-mon)", ...fontFamily.sans]
      },
      backgroundColor: {
        dark: {
          BGC: "#141b2d",
          BGSC: "#1F2A40"
        },
        light: {
          BGC: "#fcfcfc",
          BGSC: "#f2f0f0"
        }
      },
      colors: {
        dark: {
          TXC: {
            100: "#e0e0e0",
            400: "rgb(224, 224, 224)",
            600: "#a3a3a3"
          }
        },
        light: {
          TXC: {
            400: "#3d3d3d",
            600: "#141414",
            100: "rgba(0, 0, 0, 0.54)"
          }
        },
        greenAccent: {
          400: "#4cceac",
          100: "#70d8bd",

        },
        blueAccent: {
          400: "#6870fa",
          600: "#3e4396",
          100: "#a4a9fc"
        },
        red: {
          400: "rgb(227, 109, 89)",
          100: "rgb(232, 193, 160)"
        },
        yellowAccent: {
          400: "rgb(232, 168, 56)",
          100: "rgb(241, 225, 91)"
        }
      },
    },
    screens: {
      "3xl": { max: "1275px" },
      "2xl": { max: "1200px" },
      xl: { max: "1000px" },
      lg: { max: "940px" },
      md: { max: "703px" },
      sm: { max: "600px" },
      xs: { max: "450px" },
    }
  },
  plugins: [],
}
