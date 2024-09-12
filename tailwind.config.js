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
        'moni-indigo-800': '#265E78',
        'moni-indigo-400': '#3E7591',
        'moni-indigo-200': '#64A1C0',
        'moni-gray-800': '#111827',
        'moni-lachs-200': '#FFC28A',
        'moni-mustard-100': '#F8FCAD',
        'moni-gray-200': '#C9CDD3',
        'moni-mustard-200': '#EBF541',
        'moni-gray-100': '#F9FAFB',
        'moni-light-black': 'rgba(0, 0, 0, 0.072)',
      },
    },
  },
  plugins: [],
}
