module.exports = {
  content: ['**/*.{tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      height: {
        'tablet': '38rem',
        'laptop': '42rem',
      }
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
      xxbold: 900
    },
    screens: {
      'mobileS': {'min': '320px'},
      'mobileM': {'min': '375px'},
      'mobileL': {'min': '425px'},
      'mobile': {'min': '576px'},
      'tabletportrait': {'min': '768px'},
      'laptop': {'min': '1024px'},
      'laptopL': {'min': '1440px'},
      '4K': {'min': '2560'}
    },
    colors: {
      neutral: '#F8FAFC',
      gray: '#475569',
      lightGray: '#D3D3D3',
      pink: '#e7358b',
      lightPink: '#EEE3FF',
      lightxPink: '#F7F2FF',
      purple: '#492784',
      mediumPurple: '#613F9D',
      lightPurple: '#8262BA',
      lightxPurple:'#ded5ed',
      green: '#02866C',
      lightGreen: '#EAFAF7',
      yellow: '#f2c123',
      red: '#FF0000',
      white: '#ffffff',
      black: '#000000',
      dark: '#121729',
      lightRed: '#F6C4D3',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
