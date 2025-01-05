/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        backgroundColor: '#010510', // Custom primary color
        borderColor: '#31353f', // Custom secondary color
        accent: '#F472B6', // Custom accent color
        dark: '#1E293B', // Custom dark color
        light: '#F9FAFB', // Custom light color
      },
    },
  },
  plugins: [],
}