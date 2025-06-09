/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      colors: {
        // Hooman brand colors adapted to Pawcare system
        'primary': {
          100: '#E95744', // Hooman orange
        },
        'secondary': {
          100: '#F5EDE2', // Hooman beige
          200: '#32BBAA', // Hooman teal
          300: '#26A69A', // Darker teal
          400: '#81C784', // Complementary green
        },
        'neutral': {
          100: '#FFFFFF',
          200: '#F8FAFF',
          300: '#F1F3F7',
          400: '#C6C6E0',
          500: '#B4B9C9',
          600: '#7B7BA0',
          700: '#565687',
          800: '#353564',
        },
        // Keep legacy hooman colors for compatibility
        'hooman': {
          'orange': '#E95744',
          'beige': '#F5EDE2',
          'teal': '#32BBAA',
          'black': '#000000',
          'white': '#ffffff',
        },
      },
      fontSize: {
        // Pawcare typography scale with Urbanist
        'display-10': ['80px', { lineHeight: '1.115', fontWeight: '400' }],
        'display-9': ['58px', { lineHeight: '1.115', fontWeight: '400' }],
        'display-8': ['48px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-7': ['38px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-6': ['30px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-5': ['22px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-4': ['20px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-3': ['18px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-2': ['16px', { lineHeight: '1.125', fontWeight: '400' }],
        'display-1': ['14px', { lineHeight: '1.125', fontWeight: '400' }],
        'paragraph-large': ['18px', { lineHeight: '1.150', fontWeight: '400' }],
        'paragraph-default': ['16px', { lineHeight: '1.150', fontWeight: '400' }],
        'paragraph-small': ['14px', { lineHeight: '1.150', fontWeight: '400' }],
      },
      boxShadow: {
        // Pawcare shadow system
        'small': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'regular': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'medium': '0 8px 16px rgba(0, 0, 0, 0.15)',
        'large': '0 16px 32px rgba(0, 0, 0, 0.2)',
        'primary-small': '0 2px 4px rgba(233, 87, 68, 0.2)',
        'primary-regular': '0 4px 8px rgba(233, 87, 68, 0.25)',
        'primary-medium': '0 8px 16px rgba(233, 87, 68, 0.3)',
        'primary-large': '0 16px 32px rgba(233, 87, 68, 0.35)',
        'secondary-small': '0 2px 4px rgba(245, 237, 226, 0.2)',
        'secondary-regular': '0 4px 8px rgba(245, 237, 226, 0.25)',
        'secondary-medium': '0 8px 16px rgba(245, 237, 226, 0.3)',
        'secondary-large': '0 16px 32px rgba(245, 237, 226, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
} 