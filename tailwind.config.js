/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF7',
          100: '#FAF8F2',
          200: '#F5EFE2',
          300: '#EAE1CE',
          400: '#DACDB6',
        },
        forest: {
          700: '#23533E',
          800: '#183C2C',
          900: '#0F2F22',
          950: '#091D15',
        },
        cashew: {
          100: '#F5ECE3',
          200: '#EAD7C4',
          400: '#A77247',
          500: '#8A5A35',
          600: '#754B2B',
          700: '#5F3C21',
          800: '#4A2E19',
        },
        amberGold: {
          50: '#FFFDF5',
          100: '#FEF8E7',
          200: '#FCEEC7',
          300: '#F9DD96',
          400: '#F5C65D',
          500: '#C58A3A',
          600: '#B0772C',
          700: '#946120',
          800: '#784D19',
        },
        stoneDark: '#1C1917',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'elevated': '0 12px 35px -8px rgba(0, 0, 0, 0.06)',
        'premium': '0 20px 45px -12px rgba(24, 60, 44, 0.1)',
      }
    },
  },
  plugins: [],
}
