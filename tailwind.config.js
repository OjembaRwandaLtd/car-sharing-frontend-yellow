/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['lora'],
        inter: ['inter'],
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
      },
    },
  },
  plugins: [],
}
