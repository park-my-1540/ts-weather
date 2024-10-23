import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/common/createThemeContract.css'
import { sprinkles } from './common/sprinkles.css';
export const device = style({
    position:'relative',
    overflow:'hidden',
    margin:'auto',
    width: 375,
    height:725,
    top:0,
    right:0,
    background: '#444',
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
    color: vars.color.primary,
})

export const header = style({
    height: 52,
    padding: '0 20px',
    lineHeight: '52px',
    fontSize: 24,
    background: vars.color.bgSecondary,
})

export const container = style([
    sprinkles({ paddingX: 'large'}),
    {
      position: 'relative',
      width: '100%',
      height: 'calc(100% - 52px)',
      margin: '0 auto',
      paddingTop: 20
    }
  ]);

export const itemBox = style([
    sprinkles({ paddingX: 'medium', paddingY: 'medium' }),
    {
      position: 'relative',
      width: '100%',
      marginTop: 10,
      background: vars.color.bgSecondary,
      borderRadius: 20
    }
  ]);

export const none = style({
    display: 'none'
})

export const buttonWrap = style([
  {
    width: '100%',
    textAlign: 'center',
  }
]);

export const width100 = style({
  width: '100%',
})

export const weatherCont = style({
  width: '100%',
  background: 'hsla(0, 0%, 100%, .2)',
  color: vars.color.accent,
})

export const weatherIcon = style({
  textAlign: 'center',
  padding: '0 20px',
  height: 80,
})

// weatherCont 클래스가 부모에 있을 때만 border 추가
export const conditionalBorder = style({
  selectors: {
    [`${weatherCont} &`]: {
      boxShadow: '0 -1px 0 rgba(0, 0, 0, .05), inset 0 1px 0 hsla(0, 0%, 100%, .1)',
    },
  },
});