/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryBlue: '#F0F8FF',
        secondaryBlue: '#005AAD',
        terciaryBlue: '#068DF3',
        titleBlue: '#2E9AFF',
        primaryGrey: '#D9D9D980',
        lineGrey: '#C8D4DD',
        spreadsheetIconGreen: "#11BA93",
        spreadsheetIconBackground: "#C2F4EA",
        spreadsheetText: "#17B78E",
        documentIconBlue: "#0073EA",
        documentIconBackground: "#A1D9FF",
        documentText: "#008EF0",
        presentationIcon: "#BAA43B",
        presentationIconBackground: "#FFF1A0",
        presentationIconText: "#B39F59",
        filterBorder: "#556C7C",
        filterText: "#324D5E",
        filterTextHover: "#40AEFF",
        filterBorderHover: "#409EFF",
        filterHoverBackground: "#007EFF",
        hoverCardBlue: "#99D3FD",
        hoverCardTextBlue: "#0081FF"
      },
    },
  },
  plugins: [],
}
