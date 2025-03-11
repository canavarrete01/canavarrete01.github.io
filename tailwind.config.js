/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure TailwindCSS purges unused CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}