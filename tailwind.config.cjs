module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81'
        },
        secondary: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63'
        }
      },
      boxShadow: {
        soft: '0 20px 45px -30px rgba(79, 70, 229, 0.6)',
        lift: '0 24px 45px -28px rgba(15, 23, 42, 0.35)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, rgba(79,70,229,0.85), rgba(6,182,212,0.55))',
        'page-gradient': 'radial-gradient(circle at top, #EEF2FF 0%, #FFFFFF 45%, #ECFEFF 100%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
