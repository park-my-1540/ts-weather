import { style } from '@vanilla-extract/css'

export const device = style({
    position:'relative',
    overflow:'hidden',
    margin:'auto',
    width: 375,
    height:725,
    top:0,
    right:0,
    background:'#444',
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
    background:' #f2f2f2',
    zIndex: 3,
    textShadow: '0 0 1px rgba(0, 0, 0, .01)',
    borderRadius: 20,
    color: '#444',
})

export const header = style({
    height: 52,
    padding: '0 20px',
    lineHeight: '52px',
    fontSize: 24,
    background: '#f9f9f9',
})

export const container = style({
    position: 'relative',
    width: '100%',
    height: 'calc(100% - 52px)',
    padding: 20,
    margin: '0 auto',
})
