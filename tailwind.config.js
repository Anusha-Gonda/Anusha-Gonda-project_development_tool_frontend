// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is the path where Tailwind should scan for classes
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc.
      colors: {
        primary: '#4CAF50', // Example: Custom primary color
        secondary: '#FF5733', // Example: Custom secondary color
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Example: Custom font family
      },
    },
  },
  plugins: [
    // You can add plugins here like forms, typography, etc.
  ],
  darkMode: 'class', // Optional: Enable dark mode using class strategy (class on <body>)
}

