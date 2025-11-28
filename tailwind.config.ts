import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        yuktrix: {
          black: '#0a0a0a',       // Deep rich black background
          dark: '#121212',        // Slightly lighter black for cards
          yellow: '#FFD700',      // Primary accent yellow
          yellowHover: '#E5C100', // Darker yellow for hovers
          white: '#ffffff',
          gray: '#888888',
          lightGray: '#f3f4f6',
        }
      },
      fontFamily: {
        futura: ["Futura W01", "Arial", "Helvetica", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
