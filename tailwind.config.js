/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080b12',
          900: '#0d1320',
          800: '#152033',
        },
        electric: {
          300: '#8fc7ff',
          400: '#58a6ff',
          500: '#3486e8',
          600: '#2267bd',
        },
      },
      boxShadow: {
        float: '0 24px 70px -28px rgba(8, 17, 35, 0.45)',
        glow: '0 0 0 1px rgba(143, 199, 255, 0.12), 0 20px 60px -25px rgba(52, 134, 232, 0.4)',
      },
      animation: {
        aurora: 'aurora 16s ease-in-out infinite alternate',
        float: 'float 7s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        'fade-up': 'fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate3d(-4%, -2%, 0) scale(1)' },
          '100%': { transform: 'translate3d(6%, 4%, 0) scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: { to: { backgroundPosition: '200% center' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
