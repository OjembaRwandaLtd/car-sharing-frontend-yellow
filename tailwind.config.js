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
        'primary-blue': '#111827',
      },
    },
  },
  plugins: [],
}
