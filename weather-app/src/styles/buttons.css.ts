import { vars } from '@/styles/createThemeContract.css'
import { theme } from '@/styles/theme.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const base = {
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    padding: '8px 16px',
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
        medium: { fontSize: '16px', padding: '8px 16px' },
        large: { fontSize: '20px', padding: '10px 20px' },
    },
    rounded: {
        true: { borderRadius: '15px' },
        false: { borderRadius: '0px' },
    },
    theme: {
        lime: { background: theme.theme.lime },
        green: { background: theme.theme.green },
        blue: { background: theme.theme.blue },
        purple: { background: theme.theme.purple },
    }
      
}
export const button = recipe({
    base: {
      ...base
    },
    variants: variants,
    defaultVariants: {
      color: 'primary',
      size: 'medium',
      rounded: false,
    },
  });
  export type ButtonVariantProps = RecipeVariants<typeof button>;