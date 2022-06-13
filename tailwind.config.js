module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'terminal': 'typing-terminal 0.25s steps(19, end)',
        'flicker': 'flicker-on 0.5s'
      }
    },
  },
  plugins: [],
}