/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-run': 'borderRun 3s infinite', // Running border color animation
        'border-explode': 'borderExplode 0.8s ease forwards', // Exploding border color effect on hover
      },
      keyframes: {
        borderRun: {
          '0%': { borderColor: '#0ea5e9' }, // Blue
          '25%': { borderColor: '#f472b6' }, // Pink
          '50%': { borderColor: '#8b5cf6' }, // Purple
          '75%': { borderColor: '#f59e0b' }, // Yellow
          '100%': { borderColor: '#0ea5e9' }, // Back to blue
        },
        borderExplode: {
          '0%': {
            borderColor: '#0ea5e9',
            boxShadow: '0 0 10px 5px rgba(14, 165, 233, 0.6)',
          },
          '100%': {
            borderColor: '#f472b6',
            boxShadow: '0 0 30px 15px rgba(244, 114, 182, 0.8)',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
