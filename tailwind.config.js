/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,scss}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          50: "#F9FAFB",
          300: "#D0D5DD",
          700: "#344054",
        },
        primary: {
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#846358",
          900: "#43302b",
        },
      },
      boxShadow: {
        "xs-focused-primary-400":
          "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "xs-focused-gray-100":
          "0px 0px 0px 4px #F2F4F7, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);",
      },
    },
  },
};
