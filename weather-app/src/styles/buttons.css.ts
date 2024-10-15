import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/createThemeContract.css'

export const button = style({
    padding: '8px 25px',
    color: vars.color.primary,
    borderRadius: 15,
    border: 'none',
})
