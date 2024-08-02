/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color' : '#2C3E50',
        'footer-color' : '#1A252F',
        'body-color' : '#1ABC9C',
        'body-whit' : '#F8F8F8'
      },
     },
  },
  plugins: [],
}
