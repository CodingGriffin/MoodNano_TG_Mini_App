const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'saira': ['"Saira ExtraCondensed"', 'sans-serif'],
      },
      fontSize: {
        'xxs': ['0.5rem', {
          lineHeight: '0.1rem',
        }]
      },
      backgroundImage: {
      'app-background': 'var(--app-background)',
      },
      colors: {
        'app-bg-light': '#41ABB4',
        'app-bg-dark': '#0D4976',
          blue: {
          100: '#E6F0FF', // Light blue for light mode
          400: '#60A5FA', // Blue for dark mode text
          500: '#3B82F6', // Primary blue
          600: '#2563EB', // Darker blue for hover in light mode
          700: '#1D4ED8', // Darker blue for hover in dark mode
          900: '#1E3A8A', // Dark blue for dark mode background
        },
      },
      maxWidth: {
        'app': '420px',
      },
      maxHeight: {
        'app': '800px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        '4.5': '1.125rem',
      },
      spacing: {
        '18': '4.5rem',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'glow-breathe': {
          '0%, 100%': { 
            opacity: 0.7,
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1.2)'
          },
        },
        'point-wave': {
          '0%': { transform: 'translateY(0) translateX(-50%)', opacity: 1 },
          '100%': { transform: 'translateY(-20px) translateX(-50%)', opacity: 0 },
        },
      },
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
        'glow-breathe': 'glow-breathe 4s ease-in-out infinite',
        'point-wave': 'point-wave 1s ease-out forwards',
      },
    },
  },
  
  plugins: [],
  safelist: [
    'bg-app-bg-light',
    'bg-app-bg-dark',
  ],
});