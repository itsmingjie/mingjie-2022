import('tailwindcss').Config;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Archivo", system-ui, sans-serif'],
      'sans-black': ['"Archivo Black", system-ui, sans-serif'],
      'mono': ['"IBM Plex Mono", monospace'],
    },
    colors: {
      dark: 'hsl(255, 25%, 11%)',
      light: 'hsl(255, 25%, 90%)',
      hint: 'hsl(255, 25%, 55%)',
      yellow: '#E5B73E',
      pink: '#EB5673',
      purple: '#A280E8',
      primary: '$yellow',
      background: '$dark',
    },
    extend: {},
  },
  plugins: [],
};
