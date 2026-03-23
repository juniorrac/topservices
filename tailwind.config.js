/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
          light: '#FDBA74',
        },
        teal: {
          DEFAULT: '#0D9488',
          dark: '#0F766E',
          light: '#14B8A6',
        },
        navy: {
          DEFAULT: '#0A1628',
          mid: '#0D1F3C',
        },
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#A07830',
          light: '#F0D080',
        },
        sand: {
          DEFAULT: '#FEF7ED',
          light: '#FFFBF5',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
