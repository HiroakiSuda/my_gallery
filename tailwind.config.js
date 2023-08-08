/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,tsx}"],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        nav_bg: '#1E1E1B',
        main_bg: '#EFE4D9',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        varyDarkBlue: 'hsl(233, 12%, 13%)',
        varyPaleRed: 'hsl(13, 100%, 96%)',
        varyLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
