import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/common/createThemeContract.css'
import { sprinkles, colors } from './common/sprinkles.css';
export const device = style({
    position:'relative',
    overflow:'hidden',
    margin:'auto',
    width: 375,
    height:725,
    top:0,
    right:0,
    background: vars.color.bgPrimary,
    borderRadius: 20,
    boxShadow:'0 0 2px #000',
    transition:'.6s',
    verticalAlign: 'middle',
})

export const setting = style({
    top: 0,
    right: 'auto',
    bottom: 0,
    // left: 394,
    position: 'absolute',
    margin: 'auto',
    width: '100%',
    height: '100%',
    background: vars.color.bgPrimary,
    zIndex: 3,
    textShadow: '0 0 1px rgba(0, 0, 0, .01)',
    borderRadius: 20,
    color: colors['gray-700'],
})

export const header = style({
    height: 52,
    padding: '0 20px',
    lineHeight: '52px',
    fontSize: 24,
    background: '#f9f9f9',
})

export const container = style([
    sprinkles({ paddingX: 'large' }),
    {
      position: 'relative',
      width: '100%',
      height: 'calc(100% - 52px)',
      margin: '0 auto',
    }
  ]);

export const itemBox = style([
    sprinkles({ paddingX: 'medium', paddingY: 'medium' }),
    {
      position: 'relative',
      width: '100%',
      marginTop: 15,
      background: vars.color.bgSecondary,
      borderRadius: 20
    }
  ]);


export const none = style({
    display: 'none'
})