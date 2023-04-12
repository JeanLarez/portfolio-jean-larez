/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        background: 'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      lineClamp: ["hover"],
      backgroundImage: {
        'hero': "url('https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg')",
      },
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}
