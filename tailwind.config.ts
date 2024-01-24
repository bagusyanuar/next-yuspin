import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#F36486',
        'primary-dark': '#242424',
        'primary-shades-80': '#fde0e7',
        'primary-shades-90': '#fef0f3',
        'slate-500': 'rgb(100, 116, 139)',
        'slate-600': 'rgb(71, 85, 105)',
        'slate-700': 'rgb(51, 65, 85)',
        'slate-800': 'rgb(30, 41, 59)'
      },
      fontSize: {
        'base': '16px',
        'large': '24px'
      },
      screens: {
        'laptop': '1024px'
      }
    },
  },
  plugins: [],
}
export default withMT(config)
