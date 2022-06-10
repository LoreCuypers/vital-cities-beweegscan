module.exports = {
  content: ['**/*.{tsx,html}'],
  safelist: [
    'bg-yellowDesat',
    ...[...Array(100).keys()].flatMap((i) => [`w-[${i + 1}%]`]),
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      height: {
        tablet: '34rem',
        laptop: '46rem',
      },
    },
    fontWeight: {
      xxlight: 100,
      xlight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 800,
      xxbold: 900,
    },
    screens: {
      mobileS: { min: '320px' },
      mobileM: { min: '375px' },
      mobileL: { min: '425px' },
      mobile: { min: '576px' },
      tabletportrait: { min: '768px' },
      gridbreak: { min: '872px' },
      laptop: { min: '1024px' },
      columnbreak: { min: '1136px' },
      navbreak: { min: '1304px' },
      indexbreak: { min: '1370px'},
      laptopL: { min: '1440px' },
      laptopXL: { min: '1680px' },
      '4K': { min: '2464px' },
    },
    colors: {
      neutral: '#F8FAFC',
      gray: '#475569',
      lightGray: '#D3D3D3',
      darkGray: '#2E2E2E',
      pink: '#e7358b',
      lightPink: '#EEE3FF',
      lightxPink: '#F7F2FF',
      purple: '#492784',
      mediumPurple: '#613F9D',
      lightPurple: '#8262BA',
      lightxPurple: '#ded5ed',
      green: '#02866C',
      lightGreen: '#EAFAF7',
      yellow: '#f2c123',
      red: '#FF0000',
      white: '#ffffff',
      black: '#000000',
      dark: '#121212',
      lightRed: '#F6C4D3',
      lightPurpleDesat: '#BB86FC',
      purpleDesat: '#3E226D',
      pinkDesat: '#BC2D73',
      yellowDesat: '#CAA325',
      grayGreen: '#455250',
      redDesat: '#CF6679',
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
