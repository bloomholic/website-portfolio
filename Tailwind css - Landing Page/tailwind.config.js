/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      'hero-pattern': "url('img/bg-tablet-pattern.svg')",
    },
  },
  plugins: [],
}

