import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#f5d98b',
          dark: '#9a7a2c',
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#e8c96e',
          500: '#c9a84c',
          600: '#9a7a2c',
          700: '#7a5e1c',
          800: '#5a420c',
          900: '#3a2c08',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          2: '#1a1a1a',
          3: '#242424',
          4: '#2e2e2e',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
          400: '#333333',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow':    '0 0 20px rgba(201, 168, 76, 0.3)',
        'gold-glow-lg': '0 0 40px rgba(201, 168, 76, 0.4)',
        'card-dark':    '0 4px 24px rgba(0, 0, 0, 0.6)',
        'glass':        '0 8px 32px rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #c9a84c 0%, #f5d98b 50%, #c9a84c 100%)',
        'dark-gradient':  'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
        'hero-gradient':  'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
        'card-shine':     'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, transparent 50%)',
      },
      animation: {
        'pulse-gold':  'pulseGold 2s ease-in-out infinite',
        'float':       'float 3s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(201,168,76,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
