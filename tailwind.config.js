/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          light: '#10b981',
          dark: '#047857',
        },
        olo: '#00ffcc',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 