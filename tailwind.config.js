module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,json}'
  ],
  theme: {
    extend: {
      animation: {
        'terminal': 'typing-terminal 0.25s steps(19, end)',
        'flicker': 'flicker-on 0.5s',
        'powerful': 'color-change 1s infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}