import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#EAB308',
          light: '#FDE047',
          dark: '#CA8A04',
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          DEFAULT: '#000000',
          2: '#0f0f0f',
          3: '#1a1a1a',
          4: '#262626',
          900: '#000000',
          800: '#080808',
          700: '#0f0f0f',
          600: '#1a1a1a',
          500: '#222222',
          400: '#2d2d2d',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow':    '0 0 20px rgba(234, 179, 8, 0.35)',
        'gold-glow-lg': '0 0 50px rgba(234, 179, 8, 0.5)',
        'card-dark':    '0 4px 32px rgba(0, 0, 0, 0.8)',
        'glass':        '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #EAB308 0%, #FDE047 50%, #EAB308 100%)',
        'dark-gradient':  'linear-gradient(180deg, #000000 0%, #0f0f0f 100%)',
        'hero-gradient':  'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
        'card-shine':     'linear-gradient(135deg, rgba(234,179,8,0.08) 0%, transparent 50%)',
      },
      animation: {
        'pulse-gold':  'pulseGold 2s ease-in-out infinite',
        'float':       'float 3s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(234,179,8,0.3)' },
          '50%':      { boxShadow: '0 0 50px rgba(234,179,8,0.7)' },
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
