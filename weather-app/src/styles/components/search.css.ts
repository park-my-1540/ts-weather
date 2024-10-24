import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css'

export const searchResultBox = style({
    width: 'calc(100% - 32px)',
    zIndex : 9,
    background: vars.color.bgSecondary,
    borderRadius: 10,
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
})
