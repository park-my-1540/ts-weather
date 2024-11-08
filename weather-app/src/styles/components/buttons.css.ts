import { vars } from '@/styles/common/createThemeContract.css'
import { theme } from '@/styles/common/theme.css'
import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const base = {
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s',
}
const variants = {
    color: {
        primary: { backgroundColor: vars.color.bgPrimary, color: vars.color.accent },
        accent: { backgroundColor: vars.color.accent, color: vars.color.primary },
        danger: { backgroundColor: 'red', color: 'white' },
    },
    size: {
        small: { fontSize: '12px', padding: '6px 12px' },
        medium: { fontSize: '16px', padding: '8px 25px' },
        large: { fontSize: '20px', padding: '10px 50px' },
    },
    rounded: {
        true: { borderRadius: '18px' },
        false: { borderRadius: '0px' },
    },
    theme: {
        lime: { background: theme.theme.lime },
        green: { background: theme.theme.green },
        blue: { background: theme.theme.blue },
        purple: { background: theme.theme.purple },
    },
}
export const button = recipe({
    base: { //공통적으로 적용시킬것
      ...base
    },
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      color: 'primary',
      size: 'medium',
      rounded: false,
      theme: 'blue'
    },
  });
export type ButtonVariantProps = RecipeVariants<typeof button>;


export const themeButton = recipe({
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      color: 'primary',
      rounded: true,
    },
  });
export type ThemeButtonVariantProps = RecipeVariants<typeof themeButton>;

export const activeStyle = style({
  display: 'inline-block',
  position: 'relative',
  width: 'calc(25% - 12px)',
  height: 60,
  transition: '.2s',
  selectors: {
    '&.on::before': {
      content: "",
      display: 'inline-block',
      position: 'absolute',
      width: 24,
      height: 15,
      top: 18,
      left: 21,
      border: '7px solid #fff',
      borderTop: 'none',
      borderRight: 'none',
      transform: 'rotate(-45deg)',
    }
  }
})