/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dimgray: {
          "100": "#5a5a5a",
          "200": "#4e4d4d",
        },
        gray: {
          "100": "#868686",
          "200": "#252525",
          "300": "#1d1d1d",
          "400": "rgba(26, 26, 26, 0.65)",
        },
        mediumturquoise: "#73ced0",
        white: "#fff",
        limegreen: "#14e544",
        darkgray: "#a1a1a1",
      },
      fontFamily: {
        manrope: "Manrope",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lg: "18px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
}

