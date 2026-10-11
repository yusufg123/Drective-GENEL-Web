import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-width: 1023px) and (max-height: 720px)' },
      },
      colors: {
        background: '#141414',
        foreground: '#F2F0EA',
        surface: '#1B1B1A',
        muted: '#AAA9A2',
        line: '#363633',
        brass: {
          DEFAULT: '#E3B64B',
          soft: '#F0CB73',
          deep: '#A67C0F',
        },
        primary: {
          50: '#FBF6E8',
          100: '#F5E9C4',
          200: '#EBD48A',
          300: '#E0BF50',
          400: '#E3B64B',
          500: '#E3B64B',
          600: '#A67C0F',
          700: '#7A5B0B',
          800: '#4F3A07',
          900: '#2A1F04',
        },
        secondary: {
          50: '#F3EFE6',
          100: '#E5DFD2',
          200: '#C9C0AE',
          300: '#9C9588',
          400: '#6F6A60',
          500: '#4A4640',
          600: '#2A2620',
          700: '#1C1915',
          800: '#171512',
          900: '#0E0D0B',
        },
        accent: {
          50: '#FBF6E8',
          100: '#F5E9C4',
          200: '#EBD48A',
          300: '#E0BF50',
          400: '#E3B64B',
          500: '#E3B64B',
          600: '#A67C0F',
          700: '#7A5B0B',
          800: '#4F3A07',
          900: '#2A1F04',
        },
      },
      fontFamily: {
        sans: ['var(--font-studio)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-studio)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
