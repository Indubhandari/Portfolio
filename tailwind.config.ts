import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:    '#06060A',
        panel: '#0C0C16',
        card:  '#111122',
        accent:{ DEFAULT:'#8B7FFF', light:'#C8B8FF' },
        primary:'#F0EEE8',
        emerald:'#5AEDC8',
      },
      fontFamily: {
        syne: ['var(--font-syne)',  'system-ui','sans-serif'],
        inter:['var(--font-inter)', 'system-ui','sans-serif'],
      },
      keyframes: {
        orb:{
          '0%,100%':{ opacity:'0.5', transform:'translate(-50%,-50%) scale(1)' },
          '50%':    { opacity:'0.9', transform:'translate(-50%,-50%) scale(1.08)' },
        },
        blink:{
          '0%,100%':{ opacity:'1' },
          '50%':    { opacity:'0.35' },
        },
        scrollBar:{
          '0%':  { opacity:'0', transform:'scaleY(0) translateY(-100%)' },
          '50%': { opacity:'1' },
          '100%':{ opacity:'0', transform:'scaleY(1) translateY(100%)' },
        },
        float:{
          '0%,100%':{ transform:'translateY(0px)' },
          '50%':    { transform:'translateY(-8px)' },
        },
      },
      animation:{
        orb:         'orb 6s ease-in-out infinite',
        blink:       'blink 2s ease-in-out infinite',
        'scroll-bar':'scrollBar 2.2s ease-in-out infinite',
        float:       'float 4s ease-in-out infinite',
      },
    },
  },
  plugins:[],
}
export default config
