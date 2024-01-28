const theme = {
  colors: {
    primary100: '#0F172A',
    secondary100: '#4F7DA4',
    secondary200: '#59DFD0',
    softWhite100: '#E2E8F0',
    softWhite200: '#5A697F',
    softWhite300: '#637084',
    pureWhite: '#fff'
  },
  breakingPoints: {
    mobileSm: '640 px',
    mobileMd: '770 px',
    desktopSm: '1024 px',
  },
  fixWidths: {
    rootContainer: '1280 px' // pading left&right 6rem
  },
  fontSize: {
    mainHeadingMobile: '36px',
    mainHeadingDesktop: '48px',
    subHeadingMobile: '18px',
    subHeadingDesktop: '20px',
    footerText: '14px',
    default: '16px',
    code: '12px'
  }
}

export default theme


/**
 * layout 
 * 
 * flexbox
 * desktop (>= 1024px) 2 columns 
 * mobile (< 1024px ) 1 column
 * 
 * */ 
