/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {

    colors :
    {
      'bg-one':'#7F27FF',
      'bg-two':'#9F70FD',
      'txt-white':'#FFFFFF',
    },
    container:
    {
      screens:
      {
        'sm':'540px',
        'md':'720px',
        'lg':'960px',
        'xl':'1140px',
        '2xl':'1320px',
      },
    },
    extend: {

      fontFamily:
      {
        'lato':["Lato","sans-serif"],
      }
    },
  },
  plugins: [],
}
/* npx tailwindcss -i ./src/input.css -o ./src/output.css --watch */
