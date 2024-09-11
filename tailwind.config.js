/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['lora'],
        inter: ['inter'],
      },
      dropShadow: {
        blue: '0 35px 35px rgba(0,141,187,0.79)',
      },
      keyframes: {
        moveCar: {
          '0%': { transform: 'translateX(-89%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveCar: 'moveCar 5s ease-in-out',
      },
      colors: {
        'primary-indigo': '#265E78',
        'secondary-indigo': '#3E7591',
        'light-indigo': '#64A1C0',
        'primary-blue': '#111827',
        'primary-orange': '#FFC28A',
        'primary-mustard': '#F8FCAD',
        'primary-gray': '#C9CDD3',
        'secondary-mustard': '#EBF541',
        'primary-white': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
