/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        PTSans: ['PT Sans', 'sans-serif'],
        Balsamiq:[ 'Balsamiq Sans', 'sans-serif'],
        Title:['Space Grotesk', 'sans-serif'],
        menu_Title:['Alumni Sans Collegiate One', 'sans-serif']

      }
    },
  },
  plugins: [],
}
