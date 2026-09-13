/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // deep navy
          700: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#0D9488', // teal
          500: '#0D9488',
        },
        status: {
          green: '#10B981', // resolved / safe
          yellow: '#F59E0B', // pending / in progress
          red: '#EF4444', // critical / escalated
          gray: '#6B7280', // neutral / inactive
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
