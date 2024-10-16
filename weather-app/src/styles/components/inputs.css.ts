import { vars } from '@/styles/common/createThemeContract.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const base = {
    padding: '0 15px',
    width: '100%',
    height: 40,
    background: 'white',
    borderRadius: 26,
    border: 'none',
    color: vars.color.primary
}
const variants = {
    color: {
        primary: { backgroundColor: vars.color.bgSecondary, color: vars.color.primary },
        accent: { backgroundColor: vars.color.accent, color: vars.color.primary },
        danger: { backgroundColor: 'red', color: 'white' },
    },
    size: {
        small: { fontSize: '12px', padding: '6px 12px' },
        medium: { fontSize: '16px', padding: '8px 16px' },
        large: { fontSize: '20px', padding: '10px 20px' },
    },
}
export const input = recipe({
    base: {
      ...base
    },
    variants: variants,
    defaultVariants: {
      color: 'primary',
      size: 'medium',
    },
  });
export type InputVariantProps = RecipeVariants<typeof input>;